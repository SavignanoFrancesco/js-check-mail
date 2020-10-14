//Esercitazione 1: Check lista email
//Creare un array con un insieme di indirizzi email.
//Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
//Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

//Inizializzazione array con email permesse
var email_list = ["giorgio@gmail.com", "arianna@gmail.com", "marco@gmail.com", "valerio@gmail.com", "anna@gmail.com", "giovanna@gmail.com"];

//Inizializzazione contatori
var i = 0;

//Variabili di Controllo
var valida = false;

//Scrive in console la lista delle email
console.log("LISTA EMAILS VALIDE:")
for (i = 0; i < email_list.length; i++){

    console.log(email_list[i]);

}

//Richiesta all'utente della propria email
var email = prompt("Inserisci la tua mail: ");
console.log("email inserita: ", email);

//Controllo validita
for (i = 0; i < email_list.length; i++){

    console.log(email_list[i]);

    if (email == email_list[i]){
        i = email_list.length;
        valida = true;
    }
}

//stampa risultato
if(valida == true){
    console.log("EMAIL VALIDA!");
}else{
    console.log("EMAIL NON VALIDA!");
}
