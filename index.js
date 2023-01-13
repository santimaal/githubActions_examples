const path = require('path');
const fs = require("fs");

const readme = path.resolve('./README.md')
const test = "jose/paco"
const f_pos = process.env.frase_positiva.split("/");
const f_neg = process.env.frase_negativa.split("/");
const f_test = process.env.resultado_tests;
let URL = "https://api.memegen.link/images/img/text.png"

let image = f_test == "success" ? f_pos : f_neg;
URL = URL.replace("img", image[0])
URL = URL.replace("text", image[1]);
URL = "![MEME](" + URL + ")"

fs.writeFile(readme, URL, function (err) {
    if (err) throw err;
    console.log('Archivo actualizado');
})
