creo l'array chiamato dado con all'interno numeri dall'1 al 6

creo una const dadoUtente = Math.floor(Math.random() * dado.length), queste funzioni che danno il valore di dadoUtente servono per generare un numero casuale da 1 a 6 e salvarlo nella variabile

creo una seconda const dadoBot = Math.floor(Math.random() * dado.length) per fare la stessa cosa e generare un numero casuale sempre da 1 a 6

creo due console.log per stampare in console i due risultati ottenuti

poi creo un if(dado[dadoUtente] > dado[dadoBot]) con all'interno delle graffe un console.log per scrivere che il dado dell'utente è più grande di quello del bot

creo un else if con la condizione contraria: if(dado[dadoUtente] < dado[dadoBot]) per scrivere un altro console.log che stampi il messaggio di vittoria del bot

e infine creo un else con all'interno un ultimo console.log che scriva un messaggio in caso di parità dei tiri