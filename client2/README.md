# Client2

Esta é uma API convencional (não _minimal_) em .NET 8 que consome um servidor Node.js para geração de PDFs. Esta API foi desenvolvida seguindo-se os passos abaixo.

API criada com o comando:

```bash
dotnet new webapi -n client2
```

Como a API envia e-mails, os pacotes abaixo foram instalados:

```bash
dotnet add package MailKit
dotnet add package MimeKit
dotnet add package Swashbuckle.AspNetCore
```

O Swagger foi configurado no `Program.cs`:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Adicionar serviços à aplicação
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configurar o Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

Foi criado o `Controllers/EmailController.cs`;

Os dados do SMTP foram configurados após a criação de uma conta em https://mailtrap.io;

O `HttpClient` foi configurado no `Program.cs`:

```csharp
builder.Services.AddHttpClient();
```

Por fim, a aplicação foi executada com:

```bash
dotnet run
```

E acessada em:

```bash
https://localhost:5081/swagger/index.html
```

PS: um `.gitignore` foi adicionado com:

```bash
dotnet new gitignore
```
