

const dadoUtente = Math.floor(Math.random() * 6 + 1);
const dadoBot = Math.floor(Math.random() * 6 + 1);

console.log(dadoUtente);
console.log(dadoBot);

if (dadoUtente > dadoBot){

    console.log("Ha vinto l'utente con il numero" + ' ' + dadoUtente);

}

else if (dadoUtente < dadoBot){

    console.log("Ha vinto il Bot con il numero" + ' ' + dadoBot);

}

else{

    console.log("I numeri sono pari" + ' ' + dadoUtente + ' ' + dadoBot);

}