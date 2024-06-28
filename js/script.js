//componentes
const payValue = document.querySelector("#payValue")
const tipValue = document.querySelectorAll("#selectTip p")
const tipCustom = document.querySelector("#tipCustom")
const numberPeople = document.querySelector("#numberPeople")
const totTip = document.querySelector("#totTip")
const totValue = document.querySelector("#totValue")
const buttonReset = document.querySelector("#buttonReset")
const inputFocusStyles = document.querySelectorAll(".styleFocus")

//Formatação dos inputs
function validarBill(payValue) {
    editAmount = payValue.value.replace(/\D/g, '');
    editAmount = (parseInt(editAmount) / 100).toFixed(2);
    payValue.value = editAmount
}

function validarEntrada(payValue){
    payValue.value = payValue.value.replace(/\D/g, '');
}

let valuePerson = 0;
let valuePersonTip = 0;
let indiceValue = 0
let tipSelectVerifi = 0


//Transforma as opções de gorgeta em numeros e tira a % do lado delas
function formatTip(payValue, index, numberPeople) {
    const indice = Number.parseInt(tipValue[index].innerHTML.replace("%", ""))
    indiceValue = indice
    tipSelectVerifi = indice
}

function calcTip() {
    //Caso o input esteja vazio ou for um NaN ele é limpo
    if(payValue.value <= 0 || isNaN(payValue.value)){
        payValue.value = ""
    }
    
    //transforma os inputs de string para numeros
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

//Evento calculo fixo
const tipValues = tipValue
tipValue.forEach((tipValue, index) => {
    tipValue.addEventListener("click", () => {

        tipValues.forEach((tip) => {
            tip.classList.remove('selected');
        });

        tipValue.classList.add("selected")

        formatTip(payValue, index, numberPeople)
        calcTip()
        resetState()
        CantBeZero()
        
    });
});


// Faz a verificação dos inputs e dos botões para poder ativar o reset
function resetState(){
    if (tipSelectVerifi != 0 || payValue.value != 0 || tipCustom.value != 0 || numberPeople.value != 0){
        buttonReset.classList.add("resetOn")
        tipSelectVerifi = 0
    } else {
        buttonReset.classList.remove("resetOn")
    }
   
}

let redBorder
let CantZero

//Verifica se o input de numero de pessoas estvazio e notifica
function CantBeZero(){
    if (indiceValue != 0 & payValue.value != 0 & isNaN(Number.parseFloat(numberPeople.value))){
        
        redBorder = document.querySelector("#numberInputPeople")
        redBorder.style.border = "2px solid red"
        CantZero = document.querySelector("#hider")
        CantZero.classList.add("cantBeZero")

    } else {
        redBorder = document.querySelector("#numberInputPeople")
        redBorder.style.border = "none"
        CantZero = document.querySelector("#hider")
        CantZero.classList.remove("cantBeZero")
    }
}

//Eventos calculo customizado
tipCustom.addEventListener("keyup", () => {
    calcTip()
    resetState()
});
numberPeople.addEventListener("keyup", () => {
    calcTip()
    resetState()
    CantBeZero()
});
payValue.addEventListener("keyup", () => {
    calcTip()
    resetState()
    CantBeZero()
});


//Limpa o style dos inputs clicados
const inputFocusStyle = inputFocusStyles
inputFocusStyles.forEach((focado,index) =>{
    focado.addEventListener("click", () => {

        inputFocusStyle.forEach((focus) => {
            focus.classList.remove('focusInputStyle');
        });

        focado.classList.add("focusInputStyle")
    });
})

//Limpa todos os inputos e os calculos selecionados
buttonReset.addEventListener("click",() =>{
    tipValues.forEach((tip) => {
        tip.classList.remove('selected');
    });

    inputFocusStyle.forEach((focus) => {
        focus.classList.remove('focusInputStyle');
    });

    tipCustom.value = ""
    numberPeople.value = ""
    payValue.value = ""

    totTip.innerHTML = `$0.00`
    totValue.innerHTML = `$0.00`
    resetState()
    CantBeZero()
})