// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const randNumCont = document.getElementById("number-container");
const randNumArr = [];
let numeroInserito;
// GENERO CASUALMENTE 5 NUMERI
for( let i= 1; i <= 5; i++) {
    let randNum = randNumGenerator(1, 99);
    randNumArr.push(randNum);
    console.log(randNumArr);

    randNumCont.innerHTML +=`${randNum},  `;
}
setTimeout(insertNumber, 30000); 












// funzioni
function randNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}

function insertNumber () {
    randNumCont.classList.add("hidden");

    for (let i = 1; i <= 5; i++) {
        let numeroInserito =prompt("inserisci un numero visto");
        console.log("numero inserito",numeroInserito);

    }
    return numeroInserito;
}