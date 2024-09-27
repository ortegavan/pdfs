const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/pdf', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const report = req.query.rep;

        await page.goto(`http://localhost:4200/${report}`, {
            waitUntil: ['networkidle0'],
        });

        const pdfBuffer = await page.pdf({
            printBackground: true,
            format: 'A4',
            margin: {
                top: '10mm',
                bottom: '16mm',
                left: '10mm',
                right: '10mm',
            },
            displayHeaderFooter: true,
            headerTemplate: '<div></div>',
            footerTemplate: `
<div id="footer-template" style="font-size:10px; font-family: Arial, Helvetica, sans-serif !important; color:#5f5e7d; width:100%; text-align:center;">
    Page <span class="pageNumber"></span> of <span class="totalPages"></span>
</div>`,
            preferCSSPageSize: true,
        });

        await browser.close();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': pdfBuffer.length,
        });
        res.end(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
