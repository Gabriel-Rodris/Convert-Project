const USD = 5.98
const EUR = 5.32
const GBP = 6.08

let form = document.querySelector("form")
let amount = document.getElementById("amount")
let currency = document.getElementById("currency")
let footer = document.querySelector("main footer")
let description = document.getElementById("description")
let result = document.getElementById("result")


amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}


function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamnte para converter.")
    }

    result.textContent = `${formatCurrencyBRL(total)}`

    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}