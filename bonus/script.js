// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const randNumCont = document.getElementById("number-container");
const textCont = document.getElementById("text-container");
const formInput = document.getElementById("form-input")
const submit = document.getElementById("submit");
const tryAgain = document.getElementById("try-again");


const randNumArr = [];
let correctNum = [];

let numeroInserito;
// GENERO CASUALMENTE 5 NUMERI
while (randNumArr.length < 5) {
    let randNum = randNumGenerator(0, 99);
    if (!randNumArr.includes(randNum)) {
        randNumArr.push(randNum);
    } 
    textCont.innerHTML="MEMORIZZA QUESTI NUMERI, HAI 30 SECONDI";
    randNumCont.innerHTML =` ${randNumArr}  `;
}
setTimeout(insertNumber, 20000); 


// funzioni
function randNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}

function insertNumber () {
    formInput.classList.remove("hidden");
    randNumCont.classList.add("hidden");
    textCont.innerHTML="INSERISCI I NUMERI VISTI";

    submit.addEventListener("click", () => {
        let correctNum = [];
        let inputNum = document.getElementsByClassName('input-text');

        for (let i = 0; i < inputNum.length; i++) {
            let a = parseInt(inputNum[i].value);
           
            correctNum.push(a);
            
            if (randNumArr.includes(correctNum[i])) {
        
                textCont.innerHTML="I NUMERI INDOVINATI SONO:";
                randNumCont.innerHTML = ` ${correctNum} `;
                randNumCont.classList.remove("hidden");
        
            } else {
                correctNum.pop(correctNum[i])
        
            }
        }

        if (correctNum.length == 5) {
            textCont.innerHTML = "BRAVO HAI INDOVINATO TUTTI I NUMERI";
        
        } else if (correctNum.length == 0) {
            textCont.innerHTML = "OH NO NON NE HAI INDOVINATO NESSUNO" ;

        }

    }
    
    );
    tryAgain.addEventListener( "click",() => {
        window.location.reload();
    }
    );
    

}



