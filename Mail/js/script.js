
//array con pool di e-mail
let email_pool = ["emanuelebrusa@hotmail.it", "bruzzack@gmail.com", "jhonspartan117@hotmail.it", "mariorossi72@libero.it", "bignalivalentina@virgilio.it"];

//prompt accesso e-mail
let email_utente = prompt("Inserire l'email di accesso");
let flag = false;

//for per ricerca email
for (let i=0; i<email_pool.length; i++) {
    if (email_pool[i].toLowerCase() === email_utente.toLowerCase()){
        flag = true
    }
}

//alert conferma
if (flag === true) {

    alert ("Accesso consentito");

}else{
    alert ("Accesso negato")
}