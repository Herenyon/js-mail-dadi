const emailUtente = prompt("Inserisci la tua Email:");

const archivioEmail = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com", "email6@gmail.com", "email7@gmail.com", "email8@gmail.com", "email9@gmail.com"];

let statoAccesso = true;

for(let i = 0; i <= archivioEmail.length; i++){

    if(emailUtente === archivioEmail[i]){
        
        console.log(emailUtente + ' ' + 'è autorizzata ad accedere');
        statoAccesso = false;
    
    }

}

if(statoAccesso ===true){

    console.log(emailUtente + ' ' + 'non è autorizzata ad accedere');

}