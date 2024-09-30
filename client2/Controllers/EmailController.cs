using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace EmailApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public EmailController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpPost("send-test-email")]
        public async Task<IActionResult> SendTestEmail([FromQuery] string email, [FromQuery] string report)
        {
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("Email address is required.");
            }

            if (string.IsNullOrEmpty(report))
            {
                return BadRequest("Report name is required.");
            }

            // Baixar o PDF da API Node/Express
            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync("http://localhost:3000/pdf?rep=" + report);

            if (!response.IsSuccessStatusCode)
            {
                return StatusCode(500, "Failed to download PDF.");
            }

            var pdfBytes = await response.Content.ReadAsByteArrayAsync();

            // Criar o e-mail
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Vanessa Ortega", "vanessaort@gmail.com"));
            message.To.Add(new MailboxAddress("", email));
            message.Subject = "Report";

            var bodyBuilder = new BodyBuilder
            {
                TextBody = "Your report is attached to this email."
            };

            // Anexar o PDF
            bodyBuilder.Attachments.Add("report.pdf", pdfBytes, new ContentType("application", "pdf"));
            message.Body = bodyBuilder.ToMessageBody();

            // Configurar o envio de e-mail
            using var smtpClient = new SmtpClient();
            smtpClient.Connect("sandbox.smtp.mailtrap.io", 587, MailKit.Security.SecureSocketOptions.StartTls);
            smtpClient.Authenticate("", "");

            await smtpClient.SendAsync(message);
            smtpClient.Disconnect(true);

            return Ok("Test email sent successfully.");
        }
    }
}
