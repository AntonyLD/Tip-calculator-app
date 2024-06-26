//componentes
const payValue = document.querySelector("#payValue")
const tipValue = document.querySelectorAll("#selectTip p")
const tipCustom = document.querySelector("#tipCustom")
const numberPeople = document.querySelector("#numberPeople")
const totTip = document.querySelector("#totTip")
const totValue = document.querySelector("#totValue")
const buttonReset = document.querySelector("#buttonReset")

//Formatação dos inputs
function validarBill(payValue) {
    editAmount = payValue.value.replace(/\D/g, '');
    editAmount = (parseInt(editAmount) / 100).toFixed(2);
    payValue.value = editAmount

}

function validarEntrada(payValue){
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

    const inputValue = Number.parseFloat(payValue.value);
    const numPeople = Number.parseFloat(numberPeople.value);

    if (isNaN(inputValue) || isNaN(numPeople) || numPeople === 0) {
        return; // Se inputValue ou numberPeople não forem números ou se numPeople for 0, não fazer nada
    }

    // Determina a taxa de gorjeta
    const tipRate = !isNaN(indiceValue) 
        ? indiceValue 
        : Number.parseFloat(tipCustom.value);

    if (isNaN(tipRate)) {
        return; // Se a taxa de gorjeta não for válida, não fazer nada
    }

    // Calcula a gorjeta e o valor total
    const valueOfTip = inputValue * (tipRate / 100);
    valuePersonTip = valueOfTip / numPeople;
    const result = valueOfTip + inputValue;
    valuePerson = result / numPeople;

    showResult();
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
});
numberPeople.addEventListener("keyup", () => {
    calcTip()
});
payValue.addEventListener("keyup", () => {
    calcTip()
});

//Limpa todos os inputos e os calculos selecionados
buttonReset.addEventListener("click",() =>{
    tipValues.forEach((tip) => {
        tip.classList.remove('selected');
    });

    tipCustom.value = ""
    numberPeople.value = ""
    payValue.value = ""

    totTip.innerHTML = `$0.00`
    totValue.innerHTML = `$0.00`
})