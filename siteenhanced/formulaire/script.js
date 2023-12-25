'use strict'

const identifiant = document.getElementById('pseudo');
const mail = document.getElementById('mail');
const mdp = document.getElementById('Mdp');
const main = document.querySelector('main');
let idError = document.getElementById('idError');
let mailError = document.getElementById('mailError');

const clr = document.getElementById('color');
clr.oninput = () => {
    document.body.style.backgroundColor = clr.value;
};
const clrtxt = document.getElementById('colortxt');
clrtxt.oninput = () => {
    document.body.style.color = clrtxt.value;
};
let passwordInput = document.getElementById('Mdp');
function validatePassword(){
    let passwordError = document.getElementById('mdpError');
    //Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule et un caractère spécial
    let passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    
    if(controlPassword(passwordInput.value) && passwordInput.value.length >= 8) {
        passwordError.textContent = ''; //Le mot de passe est validé
    } else {
        passwordError.textContent ='Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    }   
}
passwordInput.addEventListener('input', validatePassword)

function controlPassword(mdp) {
    var passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(mdp);
}


function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    if (identifiant.value.length > 0){
        if (validateEmail(mail.value)){
            if (controlPassword(mdp.value)){
                e.preventDefault();
                confirmation();
                console.log(identifiant.value);
            }else{
                e.preventDefault();
                
            }
        }else{
            e.preventDefault();
            mailError.textContent = "Veuillez saisir un format d'adresse mail valide. (XXX@XXX.XXX)"; 
        }
    }else{
        e.preventDefault();
        idError.textContent = "La saisie d'un identifiant est obligatoire pour se créer un compte.";
    };
});

function confirmation(){
    main.remove();
    document.write("Merci, nous vous avons bien enregistré sous " + identifiant.value)
}
