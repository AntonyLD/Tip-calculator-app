//componentes
const payValue = document.querySelector("#payValue")
const tipValue = document.querySelectorAll("#selectTip p")
const tipCustom = document.querySelector("#tipCustom")
const numberPeople = document.querySelector("#numberPeople")
const totTip = document.querySelector("#totTip")
const totValue = document.querySelector("#totValue")



//function
function validarEntrada(payValue) {
    payValue.value = payValue.value.replace(/\D/g, '');
}


let valuePerson = 0
let valuePersonTip = 0
let indiceValue = 0

//calcula com as % fixas
function formatTip(payValue, index, numberPeople) {
    const indice = Number.parseInt(tipValue[index].innerHTML.replace("%", ""))

    indiceValue = indice
}

function calcTip() {

    if (isNaN(indiceValue)) {

        const inputValue = Number.parseInt(payValue.value)
        const valueOfTip = inputValue * (Number.parseInt(tipCustom.value) / 100)

        const result = valueOfTip + Number.parseInt(payValue.value)

        valuePerson = result / Number.parseInt(numberPeople.value)

        valuePersonTip = valueOfTip / Number.parseInt(numberPeople.value)

    } else {
        const inputValue = Number.parseInt(payValue.value)
        const valueOfTip = (inputValue * indiceValue / 100)

        valuePersonTip = valueOfTip / Number.parseInt(numberPeople.value)

        const result = valueOfTip + Number.parseInt(payValue.value)

        valuePerson = result / Number.parseInt(numberPeople.value)
        showResult()
    }
}

// Calcula com as porcentagem customizada

function showResult() {
    totTip.innerHTML = `$${valuePersonTip.toFixed(2)}`
    totValue.innerHTML = `$${valuePerson.toFixed(2)}`

}

//Eventos calculo fixo
const tipValues = tipValue
tipValue.forEach((tipValue, index) => {
    tipValue.addEventListener("click", () => {

        tipValues.forEach((tip) => {
            tip.classList.remove('selected');
        });

        tipValue.classList.add("selected")

        formatTip(payValue, index, numberPeople)
        calcTip()
    });
});

//Eventos calculo customizado

tipCustom.addEventListener("keyup", () => {
    calcTip()
    showResult()
});

numberPeople.addEventListener("keyup", () => {
    calcTip()
    showResult()

});

payValue.addEventListener("keyup", () => {
    calcTip()
    showResult()
});