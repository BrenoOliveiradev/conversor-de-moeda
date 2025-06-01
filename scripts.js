const convertButton = document.querySelector(".convert-button")
const currencySelectTo = document.querySelector(".currency-select-convert-to")
const currencySelectFrom = document.querySelector(".currency-select-convert-from")
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras Moedas

    
    const dolarToday = 5.2
    const realToday = 1
    const euroToday = 6.2
    const libraToday = 7.6
    const bitcoinToday = 614.9


    if(currencySelectTo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
             style: "currency",
             currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelectTo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday )
    }
    if(currencySelectTo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday )
    }
    if(currencySelectTo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday )
    }

    if(currencySelectTo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    




    if(currencySelectFrom.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday )   
    }

     if(currencySelectFrom.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)   
    }

     if(currencySelectFrom.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)   
    }

     if(currencySelectFrom.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)   
    }

     if(currencySelectFrom.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)   
    }
}

function changeCurrencyFrom(){

 const currencyNameFrom = document.getElementById("currency-name-from")
 const currencyImageFrom = document.querySelector(".currency-img-from")

 if (currencySelectFrom.value == "real"){
    currencyNameFrom.innerHTML = "Real"
    currencyImageFrom.src = "./assets/Real.png"
 }

 if (currencySelectFrom.value == "dolar"){
    currencyNameFrom.innerHTML = "Dólar americano"
    currencyImageFrom.src = "./assets/Dolar.png"
 }

 if (currencySelectFrom.value == "euro"){
    currencyNameFrom.innerHTML = "Euro"
    currencyImageFrom.src = "./assets/euro.png"
 }

 if (currencySelectFrom.value == "libra"){
    currencyNameFrom.innerHTML = "Libra"
    currencyImageFrom.src = "./assets/libra.png"
 }

 if (currencySelectFrom.value == "bitcoin"){
    currencyNameFrom.innerHTML = "Bitcoin"
    currencyImageFrom.src = "./assets/bitcoin.png"
 }

 convertValues()

}

function changeCurrencyTo (){
 const currencyNameTo = document.getElementById("currency-name-to")
 const currencyImageTo = document.querySelector(".currency-img-to")

 if (currencySelectTo.value == "dolar"){
    currencyNameTo.innerHTML = "Dólar americano"
    currencyImageTo.src = "./assets/Dolar.png"
 }

 if (currencySelectTo.value == "euro"){
    currencyNameTo.innerHTML = "Euro"
    currencyImageTo.src = "./assets/euro.png"
 }

 if (currencySelectTo.value == "libra"){
    currencyNameTo.innerHTML = "Libra"
    currencyImageTo.src = "./assets/libra.png"
 }

 if (currencySelectTo.value == "bitcoin"){
    currencyNameTo.innerHTML = "Bitcoin"
    currencyImageTo.src = "./assets/bitcoin.png"
 }

 if (currencySelectTo.value == "real"){
    currencyNameTo.innerHTML = "Real"
    currencyImageTo.src = "./assets/Real.png"
 }

 convertValues()

}


currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelectTo.addEventListener("change", changeCurrencyTo)
convertButton.addEventListener("click", convertValues)