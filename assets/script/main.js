
//BOZZA
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//RICERCA DI UNA MAIL
function Ricerca() {
    const addresses = ["ciao@gmail.com", "cosimo.simonesolfrizzi@gmail.com"];
    let trovato=0;
    
    //Recupero dati dal form
    let mail_elem = document.getElementById('email');//.value; 
    let email=mail_elem.value;
    
    for (let i=0; i<addresses.length; i++) {
        if(addresses[i]==email){
            trovato=1;
        }
        else{}
    }
    
    if(trovato==1) {
        console.log("trovato");
    }
    else{
        console.log("non trovato");
    }
    }
    
    //RICERCA OTTIMIZZATA (la scansione degli elementi si ferma quando hai trovato l'elemento, risparmio di tempo nell'esecuzione)
    
    function ricercaOttimizzata() {
        const addresses = ["ciao@gmail.com", "cosimo.simonesolfrizzi@gmail.com"];
        
        
        //Recupero dati dal form
        let mail_elem = document.getElementById('email');//.value; 
        let email=mail_elem.value;
        
        for (let i=0; i<addresses.length; i++) {
            if(addresses[i]==email) {
                console.log('trovato');
                alert ("Operazione completata con successo !")
                return 0;
                
            }
            else if (addresses[i]!=email) {   
                 console.log('non trovato')
                 alert ("Assicurati che la email sia coretta !")
        }
        
    }
}
    
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer


function genera () {
     let gpu; 
     gpu = Math.round(Math.random()*5)+1;
     document.getElementById('random').innerHTML = gpu;

     let player; 
     player = Math.round(Math.random()*5)-1;
     document.getElementById('player').innerHTML = player;

      if( gpu > player){
         console.log("giocatore vince");
         alert("HAI VINTO");
         }
        
         else{
         console.log("giocatore perde");
         alert("HAI PERSO");
    }
}



