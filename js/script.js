//componentes
const payValue = document.querySelector("#payValue")
const tipValue = document.querySelectorAll("#selectTip p")
const numberPeople = document.querySelector("#numberPeople")
const totTip = document.querySelector("#totTip")
const totValue = document.querySelector("#totValue")



//function

function calcPay(payValue,tipValue,numberPeople){
    const result = payValue.value 
}

//Event

tipValue.forEach((tipValue, index) =>{
    tipValue.addEventListener("click", () =>{
        console.log(payValue.value)
    });
});
