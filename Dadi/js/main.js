const dado = [1, 2, 3, 4, 5, 6];

const dadoUtente = Math.floor(Math.random() * dado.length + 1);
const dadoBot = Math.floor(Math.random() * dado.length + 1);

console.log(dadoUtente);
console.log(dadoBot);

if (dado[dadoUtente] > dado[dadoBot]){

    console.log("Ha vinto l'utente con il numero" + ' ' + dadoUtente);

}

else if (dado[dadoUtente] < dado[dadoBot]){

    console.log("Ha vinto il Bot con il numero" + ' ' + dadoBot);

}

else{

    console.log("I numeri sono pari" + ' ' + dadoUtente + ' ' + dadoBot);

}