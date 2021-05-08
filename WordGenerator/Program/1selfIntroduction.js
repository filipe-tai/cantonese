const aWord = require("./0words")
const fGenerate = require("./0generate")

const palavras = aWord.selfIntroduction

console.log(fGenerate(palavras, palavras.length))