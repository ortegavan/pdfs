const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rota para gerar o PDF
app.post('/generate-pdf', async (req, res) => {
    const { url } = req.body; // URL da página Angular que você quer capturar

    if (!url) {
        return res.status(400).send('URL is required');
    }

    try {
        // Inicializa o Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Acessa a URL fornecida
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Gera o PDF
        const pdfBuffer = await page.pdf({ format: 'A4' });

        await browser.close();

        // Define o conteúdo como PDF e envia o arquivo
        res.contentType('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
