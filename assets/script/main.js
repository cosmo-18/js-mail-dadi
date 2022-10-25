
//BOZZA
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//RICERCA DI UNA MAIL
function Ricerca(){
const addresses = ["ciao@gmail.com", "cosimo.simonesolfrizzi@gmail.com"];
let trovato=0;

//Recupero dati dal form
let mail_elem = document.getElementById('email');//.value; 
let email=mail_elem.value;

for (let i=0; i<addresses.length; i++){
    if(addresses[i]==email){
        trovato=1;
    }
    else{}
}

if(trovato==1){
    console.log("trovato");
}
else{
    console.log("non trovato");
}
}

//RICERCA OTTIMIZZATA (la scansione degli elementi si ferma quando hai trovato l'elemento, risparmio di tempo nell'esecuzione)

function ricercaOttimizzata(){
    const addresses = ["ciao@gmail.com", "cosimo.simonesolfrizzi@gmail.com"];
    
    
    //Recupero dati dal form
    let mail_elem = document.getElementById('email');//.value; 
    let email=mail_elem.value;
    
    for (let i=0; i<addresses.length; i++){
        if(addresses[i]==email){
            console.log('trovato');
            return 0;
        }
        else{console.log('non trovato');}
    }
    
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer
