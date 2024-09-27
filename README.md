# Geração de PDFs
Esta é uma prova de conceito para validar a geração de PDFs usando uma API **Node.js** com **Puppeteer** e o consumo desta API por clientes variados. A seguir, cada pasta da POC e sua descrição.

## Reports

Esta é uma aplicação Angular que simula alguns relatórios. Seu único objetivo é servir tais relatórios. A aplicação foi gerada com **CLI v18** e possui duas rotas configuradas: **report1** e **report2**. A UI utiliza a biblioteca **PrimeNG**.

## PDF

Aqui, há um servidor em Node.js que expõe uma API que navega até a aplicação Reports e gera um PDF usando Puppeteer do relatório solicitado.

## Client 1

Este é um exemplo em Angular de cliente consumindo a API em Node.js. O usuário pode escolher qual relatório quer e baixar o PDF.

## Client 2

Este é um exemplo em **.NET** de cliente consumindo a API no Node.js. É, também, uma API que dispara um e-mail com o relatório desejado em anexo. O servidor de SMTP foi configurado via https://mailtrap.io então os e-mail são interceptados e não são entregues realmente, é apenas para teste.

