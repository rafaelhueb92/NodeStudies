const http = require('http');

const servidor = http.createServer((req,resp) => {
    let html = '';
    if (req.url == '/') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `;
    }
    else if (req.url == '/livros')
    html = `
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Listagem de livros </h1>
        </body> 
    </html>
`;
    resp.end(html);
});

console.log('Servidor rodando em localhost:3000')

servidor.listen(3000); // Definindo o número da porta