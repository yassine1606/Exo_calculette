let egal1 = document.getElementsByClassName('btn')[0]
let input1 = document.getElementsByTagName('input')[0]
let input2 = document.getElementsByTagName('input')[1]
let rep1 = document.getElementById('response1');
egal1.addEventListener('click', () => {
    rep1.innerHTML = parseInt(input1.value) + parseInt(input2.value)
    
})



// exo 2  -----------------------------------------------------------
function choix() {
    let input3 = document.getElementsByTagName("input")[2];
    let input4 = document.getElementsByTagName("input")[3];
    let operator = document.querySelector("select").value;
    let input3Value = input3.value;
    let input4Value = input4.value;


    input3Value = parseInt(input3Value);
    input4Value = parseInt(input4Value);
    let result;
    switch (operator) {
        case "+":
            result = input3Value + input4Value;
            break;
        case "-":
            result = input3Value - input4Value;
            break;
        case "*":
            result = input3Value * input4Value;
            break;
        case "/":
            result = input3Value / input4Value;
            break;
    }

    document.querySelector("#response2").innerHTML = result;
}



let btn1 = document.querySelector("#exo-2 button");
btn1.addEventListener("click", () => {
    choix();
});


// exo 3 ----------------------------------------------------------


let input5 = document.querySelector('#operatorsExo3 input');
let input6 = document.querySelectorAll('#operatorsExo3 input')[1]
let valeur = document.getElementById('response3')
let btnEgal = document.querySelector('#operatorsExo3 button')
let premier = document.querySelectorAll('i')[3];

let plus = document.querySelectorAll("button")[3];
let moins = document.querySelectorAll("button")[4];
let fois = document.querySelectorAll("button")[5];
let divise = document.querySelectorAll("button")[6]

plus.addEventListener('click', () => {
    premier.setAttribute('class', 'fas fa-plus');
})
moins.addEventListener('click', () => {
    premier.setAttribute('class', 'fas fa-minus')
})
fois.addEventListener('click', () => {
    premier.setAttribute('class', 'fas fa-times')
})
divise.addEventListener('click', () => {
    premier.setAttribute('class', 'fas fa-divide')
})
btnEgal.addEventListener('click', () => {
    switch (premier.className) {
        case "fas fa-plus":
            valeur.innerHTML = parseInt(input5.value) + parseInt(input6.value)

            break;
        case "fas fa-minus":
            valeur.innerHTML = parseInt(input5.value) - parseInt(input6.value)

            break;
        case "fas fa-times":
            valeur.innerHTML = parseInt(input5.value) * parseInt(input6.value)

            break;
        case "fas fa-divide":
            valeur.innerHTML = parseInt(input5.value) / parseInt(input6.value)

            break;

        default:
            break;
    }
})

// exo 4 ------------------------------------------

let input7 = document.querySelectorAll('#exo-4 input')[0]
let input8 = document.querySelectorAll('#exo-4 input')[1]
let buttEquals = document.querySelector('#exo-4 button')
let valeurFinale = document.getElementById('response4')
let premierBase = document.querySelectorAll('i')[9];

let plus2 = document.querySelectorAll('#operatorsExo4 button')[0];

let moins2 = document.querySelectorAll('#operatorsExo4 button')[1];

let fois2 = document.querySelectorAll('#operatorsExo4 button')[2];

let divis2 = document.querySelectorAll('#operatorsExo4 button')[3];

plus2.addEventListener('click', () => {
    premierBase.setAttribute('class', 'fas fa-plus');
})
moins2.addEventListener('click', () => {
    premierBase.setAttribute('class', 'fas fa-minus');
})
fois2.addEventListener('click', () => {
    premierBase.setAttribute('class', 'fas fa-times');
})
divis2.addEventListener('click', () => {
    premierBase.setAttribute('class', 'fas fa-divide');
})

let total = document.querySelectorAll('#numbersExo4 button')

let focus;

input7.addEventListener('focus',()=>{
    focus = input7;
})



total.forEach(button => {
    button.addEventListener('click',()=>{
        if (focus) {
            focus.value += button.innerHTML.trim();
        }

    })
    input8.addEventListener('focus',()=>{
        focus = input8;
    })

});

buttEquals.addEventListener('click',()=>{
    switch (premierBase.className) {
        case 'fas fa-plus':
            valeurFinale.innerHTML = parseInt(input7.value) + parseInt(input8.value); 
            break;
            case 'fas fa-minus':
                valeurFinale.innerHTML = parseInt(input7.value) - parseInt(input8.value); 
                break;

                case 'fas fa-times':
            valeurFinale.innerHTML = parseInt(input7.value) * parseInt(input8.value); 
            break;

            case 'fas fa-divide':
            valeurFinale.innerHTML = parseInt(input7.value) / parseInt(input8.value); 
            break;
        default:
            break;
    }
})
