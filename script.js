// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const randNumCont = document.getElementById("number-container");
const textCont = document.getElementById("text-container");

const randNumArr = [];
let correctNum = [];

let numeroInserito;
// GENERO CASUALMENTE 5 NUMERI
for( let i= 1; i <= 5; i++) {
    let randNum = randNumGenerator(1, 99);
    randNumArr.push(randNum);
    console.log(randNumArr);
    textCont.innerHTML="MEMORIZZA QUESTI NUMERI, HAI 30 SECONDI";
    randNumCont.innerHTML +=` ${randNum},  `;
}
// setTimeout(insertNumber, 30000); 

// funzioni
function randNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}

function insertNumber () {
    randNumCont.classList.add("hidden");

    for (let i = 1; i <= 5; i++) {
        let numeroInserito =parseInt(prompt("inserisci un numero visto"));
        console.log("numero inserito",numeroInserito);
        
        if (randNumArr.includes(numeroInserito)) {
            correctNum.push(numeroInserito);

            textCont.innerHTML="I NUMERI INDOVINATI SONO:";
            randNumCont.innerHTML = ` ${correctNum}, `;
            randNumCont.classList.remove("hidden");

        } else {
            console.log("oh no")
            console.log(correctNum);

        }
        
    }
    
    if (correctNum.length == 5) {
        textCont.innerHTML = "BRAVO HAI INDOVINATO TUTTI I NUMERI";
        console.log("combaciano");
    
    } else if (correctNum.length == 0) {
        textCont.innerHTML = "OH NO NON NE HAI INDOVINATO NESSUNO" ;
        
        console.log("e vuoto");
    
    } 
}
