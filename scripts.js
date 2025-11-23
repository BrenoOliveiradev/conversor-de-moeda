const convertButton = document.querySelector(".convert-button")
const currencySelectTo = document.querySelector(".currency-select-convert-to")
const currencySelectFrom = document.querySelector(".currency-select-convert-from")
async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras Moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
        .then(response => response.json())


    const rates = {
        real: 1,
        dolar: data.USDBRL.high,
        euro: data.EURBRL.high,
        libra: data.GBPBRL.high,
        bitcoin: data.BTCBRL.high
    }

    const locales = {
        real: { locale: "pt-BR", currency: "BRL" },
        dolar: { locale: "en-US", currency: "USD" },
        euro: { locale: "de-DE", currency: "EUR" },
        libra: { locale: "en-GB", currency: "GBP" },
        bitcoin: { locale: "en-US", currency: "BTC" }
    }

    const from = currencySelectFrom.value
    const to = currencySelectTo.value

    const valorEmReais = inputCurrencyValue * rates[from]

    const valorConvertido = valorEmReais / rates[to]


    currencyValueToConvert.innerHTML = new Intl.NumberFormat(locales[from].locale, {
        style: "currency",
        currency: locales[from].currency
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat(locales[to].locale, {
        style: "currency",
        currency: locales[to].currency
    }).format(valorConvertido)
}

function changeCurrencyFrom() {

    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-img-from")

    if (currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImageFrom.src = "./assets/Real.png"
    }

    if (currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano"
        currencyImageFrom.src = "./assets/Dolar.png"
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (currencySelectFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImageFrom.src = "./assets/bitcoin.png"
    }

    convertValues()

}

function changeCurrencyTo() {
    const currencyNameTo = document.getElementById("currency-name-to")
    const currencyImageTo = document.querySelector(".currency-img-to")

    if (currencySelectTo.value == "dolar") {
        currencyNameTo.innerHTML = "Dólar americano"
        currencyImageTo.src = "./assets/Dolar.png"
    }

    if (currencySelectTo.value == "euro") {
        currencyNameTo.innerHTML = "Euro"
        currencyImageTo.src = "./assets/euro.png"
    }

    if (currencySelectTo.value == "libra") {
        currencyNameTo.innerHTML = "Libra"
        currencyImageTo.src = "./assets/libra.png"
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin"
        currencyImageTo.src = "./assets/bitcoin.png"
    }

    if (currencySelectTo.value == "real") {
        currencyNameTo.innerHTML = "Real"
        currencyImageTo.src = "./assets/Real.png"
    }

    convertValues()

}


currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelectTo.addEventListener("change", changeCurrencyTo)
convertButton.addEventListener("click", convertValues)