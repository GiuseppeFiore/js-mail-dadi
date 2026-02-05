// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.


// Inizio con la creazione delle lista email di invitati alla festa
const listaEmail = [
    "mario@gmail.com",
    "luigi@gmail.com",
    "giuseppe@gmail.com",
    "andrea@gmail.com",
    "giada@gmail.com"
]

// Uso il prompt per chiedere l'email all'utente
let emailUtente = prompt("Inserisci la tua email");
// Creo una condizione if dove l'utente se soddisfa avra "true" come risposta ed entra nell'if e prosegue
// di conseguenza questa se l'email non è stata trovata ed esce dall'if con "false"
if (emailUtente !== null) {
    let emailTrovata = false;

// Creo un ciclo for con Array finchè i è minore della lunghezza dell'array 
    for (let i = 0; i <= listaEmail.length; i++) {
// Con questo ciclo prendo l'email dell'utente in posizione i nella lista e se sono uguali vuol dire che 
// l'utente appartiene alla lista degli invitati
        if (emailUtente === listaEmail[i]) {
        emailTrovata = true;
        }
    }
// Se corrisponde e si sono verificato tutto l'accesso viene consentito altrimenti stampa l'accesso negato
    if (emailTrovata) {
        console.log("Accesso consentito: Ciao!! Sei invitato alla festa 🥳 🎊 🎉 🎁");
    } else {
        console.log("Accesso negato: email non presente ❌, Non sei invitato alla festa 😢");
    }
}