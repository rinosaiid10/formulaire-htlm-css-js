// on va chercher les différents éléments de notre page

const pages = document.querySelectorAll('.page');
const header = document.querySelector("header");

const nbPages = pages.length // Nombre de pages du formulaire
let pageActive = 1
    //on attend le chargement de la page

window.onload = () => {

    //on affiche la 1àre page du formulaire

    document.querySelector(".page").style.display = "initial"

    // on affiche les numéros des pages dans l'entête
    // on parcourt la liste des pages

    pages.forEach((page, index) => {

        // on crée l'élément " numéro de page" (page-num) a partir d'un div
        //on fiare une condition pour dit si item est active  met lui active
        // puis on ajoute les items dans header  


        let item = document.createElement("div")
        item.classList.add("page-num")
        item.id = "num" + (index + 1)

        if (pageActive === index + 1) {
            item.classList.add("active")
        }
        item.innerHTML = index + 1
        header.appendChild(item)
    })

    // on gère les bouttons "suivant"
    let boutons = document.querySelectorAll(".next")

    for (let bouton of boutons) {
        bouton.addEventListener('click', pageSuivante)
    }

    // on gère les bouttons "precedente"
    boutons = document.querySelectorAll(".prev")

    for (let bouton of boutons) {
        bouton.addEventListener('click', pagePrecedente)
    }
}


/**
 * Cette fonction fait avancer le formulaire d'une page
 */

function pageSuivante() {

    //on masque toutes les pages

    for (let page of pages) {
        page.style.display = "none"
    }
    // on affiche la page suivante
    // on click sur le bouton suivant qui est "this"
    // puis on remontre a son parent (parentElement) qui est div  (id =page1) et on affiche (style.display) la page suivante
    //qui est en faite la balise div  qui contient la page suivante (nextElementSibling)

    this.parentElement.nextElementSibling.style.display = "initial"

    // on "désactive" la page active

    document.querySelector(".active").classList.remove("active")
    pageActive++

    // on "active" le nouveau numero 

    document.querySelector("#num" + pageActive).classList.add("active")




}


function pagePrecedente() {

    //on masque toutes les pages

    for (let page of pages) {
        page.style.display = "none"
    }
    // on affiche les pages precedentes
    // on click sur le bouton suivant qui est "this"
    // puis on remontre a son parent (parentElement) qui est div  (id =page1) et on affiche (style.display) la page suivante
    //qui est en faite la balise div  qui contient la page suivante (nextElementSibling)

    this.parentElement.previousElementSibling.style.display = "initial"

    // on "désactive" la page active

    document.querySelector(".active").classList.remove("active")
    pageActive--

    // on "active" le nouveau numero 

    document.querySelector("#num" + pageActive).classList.add("active")




}