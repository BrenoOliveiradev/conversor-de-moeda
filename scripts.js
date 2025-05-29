const convertButton = document.querySelector(".convert-button")
const currencySelectTo = document.querySelector(".currency-select-convert-to")
const currencySelectFrom = document.querySelector(".currency-select-convert-from")
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras Moedas

    console.log(currencySelectTo.value)
    const dolarToday = 5.2
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






    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
   

    
}

convertButton.addEventListener("click", convertValues)