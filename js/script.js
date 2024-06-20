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
let valueOfTip = 0

function calcPay(payValue, index, numberPeople) {

    const indice = tipValue[index].id

    console.log(indice)
    
    
}

function calcCustomPay() {
    const inputValue = Number.parseInt(payValue.value)
    const valueOfTip = inputValue * (Number.parseInt(tipCustom.value) / 100)

    const result = valueOfTip + Number.parseInt(payValue.value)

    valuePerson = result / Number.parseInt(numberPeople.value)

    valuePersonTip = valueOfTip / Number.parseInt(numberPeople.value)
}

function showResult() {
    totTip.innerHTML = `$${valuePersonTip.toFixed(2)}`
    totValue.innerHTML = `$${valuePerson.toFixed(2)}`
}

//Event
tipValue.forEach((tipValue, index) => {
    tipValue.addEventListener("click", () => {
        calcPay(payValue, index, numberPeople)
        showResult()
    });
});



tipCustom.addEventListener("keyup", () => {
    calcCustomPay()
    showResult()
});

numberPeople.addEventListener("keyup", () => {
    calcCustomPay()
    showResult()
});

payValue.addEventListener("keyup", () => {
    calcCustomPay()
    showResult()
});