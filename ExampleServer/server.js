
const app = require('./src/config/custom-express')

app.listen(3000, () => { console.log('Servidor Rodando na Porta 3000') });

app.get('/',(req,resp) => { 
   resp.send("<h1>Método GET</h1>");
})