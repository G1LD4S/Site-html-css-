'use script'
document.addEventListener('DOMContentLoaded', function() {
    //On obtient les références de l'Icône du Menu Burger et du menu de Navigation
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');
    // Ajoute un écouteur d'élément au clic que l'icône burger
    burgerIcon.addEventListener('click', function() {
        //Bascule la classe 'active' pour afficher/masquer le menu de Navigation
        menu.classList.toggle('active');
    });
});
function darkmodeToggle(){
    const element = document.body;
    element.classList.toggle('dark-mode');
}
const drkmodeButton = document.getElementById('darkMode');
drkmodeButton.addEventListener('click', darkmodeToggle)