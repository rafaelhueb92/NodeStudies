const app = require("express")();
const qr = require("qr-image");

app.get("/qrcode", (req, res) => {
  const code = qr.image(JSON.stringify({ id: 1, name: "Rafael Hueb" }), {
    type:"svg"
  });
  console.log(code);
  res.type("svg");
  code.pipe(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em localhost:${port}`);
});
