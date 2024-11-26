/*------------------------------
#For the header
/-----------------------------*/
jQuery(function ($) {
    const $header = $('.header');
    $(window).scroll(function (event) {
        const $current = $(this).scrollTop();
        if ($current > 160) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});

/*------------------------------
#Header
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () =>{
    const list = document.querySelector('.head-list ul');
    const menuIcon = document.querySelector('.menu-icon');
    const exitIcon = document.querySelector('.exit-icon');
    const overlay = document.querySelector('.overlay');
    const theBody = document.querySelector('body');
    const menuItems = document.querySelectorAll('.header-list ul li a');

    if(menuIcon){
        menuIcon.addEventListener('click', () =>{
            list.classList.add('active');
            overlay.classList.add('active');
            exitIcon.style.display = 'flex';
            menuIcon.style.display = 'none';
            document.body.classList.add('no-scroll');
        })
    }

    if(exitIcon){
        exitIcon.addEventListener('click', ( )=>{
            list.classList.remove('active');
            overlay.classList.remove('active');
            exitIcon.style.display = 'none';
            menuIcon.style.display = 'flex';
            document.body.classList.remove('no-scroll');
        })
    }
});


/*------------------------------
#Faq
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const answers = document.querySelectorAll('.faq-answer');
    const rightIcons = document.querySelectorAll('.right');
    const downIcons = document.querySelectorAll('.down');

    answers.forEach((answer, i) => {
        const state = localStorage.getItem(`faq-answer-${i}`);
        if (state === 'open') {
            answer.style.display = 'block';
            rightIcons[i].style.display = 'none';
            downIcons[i].style.display = 'inline';
        } else {
            answer.style.display = 'none';
            rightIcons[i].style.display = 'inline';
            downIcons[i].style.display = 'none';
        }
    });
});

document.querySelectorAll('.faq-question').forEach((question, index) => {
    question.addEventListener('click', () => {
        const answers = document.querySelectorAll('.faq-answer');
        const rightIcons = document.querySelectorAll('.right');
        const downIcons = document.querySelectorAll('.down');

        answers.forEach((answer, i) => {
            if (i === index) {

                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    rightIcons[i].style.display = 'none';
                    downIcons[i].style.display = 'inline';
                    localStorage.setItem(`faq-answer-${i}`, 'open');
                } else {
                    answer.style.display = 'none';
                    rightIcons[i].style.display = 'inline';
                    downIcons[i].style.display = 'none';
                    localStorage.setItem(`faq-answer-${i}`, 'closed');
                }
            } else {
                answer.style.display = 'none';
                rightIcons[i].style.display = 'inline';
                downIcons[i].style.display = 'none';
                localStorage.setItem(`faq-answer-${i}`, 'closed');
            }
        });
    });
});

document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
});

document.querySelectorAll('.down').forEach(downIcon => {
    downIcon.style.display = 'none';
});

document.querySelectorAll('.right').forEach(rightIcon => {
    rightIcon.style.display = 'inline';
});

// -----------------------------
function showDropdown() {
    document.getElementById("dropdown-content").style.display = "block";
}

function selectOption(value) {
    document.getElementById("dropdown-input").value = value;
    document.getElementById("dropdown-content").style.display = "none";
}

// Fermer la liste déroulante si l'utilisateur clique en dehors
document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        document.getElementById("dropdown-content").style.display = "none";
    }
});  


/*------------------------------
# Réalisations - Carousel
/-----------------------------*/

// Sélection des éléments nécessaires
const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');
const allItems = document.querySelectorAll('.realisation-all-item .all-item');

let currentIndex = 0; // Index de départ
let visibleCount = calculateVisibleCount(); // Calcul du nombre d'éléments visibles

// Fonction pour calculer le nombre d'éléments visibles selon la largeur de l'écran
function calculateVisibleCount() {
    if (window.innerWidth >= 1230) {
        return 4; // Grand écran
    } else if (window.innerWidth >= 970) {
        return 3; // Écran moyen
    } else if (window.innerWidth >= 560) {
        return 2; // Tablette
    } else {
        return 1; // Mobile
    }
}

// Fonction pour mettre à jour l'affichage des éléments
function updateVisibility() {
    const totalItems = allItems.length;

    // Empêcher de dépasser les limites
    if (currentIndex + visibleCount > totalItems) {
        currentIndex = totalItems - visibleCount; // Ajuster pour montrer les derniers éléments visibles
    }
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    // Masquer tous les éléments
    allItems.forEach((item, index) => {
        item.style.display = 'none';
    });

    // Afficher uniquement les éléments visibles selon currentIndex
    for (let i = currentIndex; i < currentIndex + visibleCount; i++) {
        if (allItems[i]) {
            allItems[i].style.display = 'block';
        }
    }

    // Gérer l'affichage des icônes de navigation
    leftIcon.style.display = currentIndex > 0 ? 'flex' : 'none';
    rightIcon.style.display = currentIndex + visibleCount < totalItems ? 'flex' : 'none';
}

// Gestion du clic sur l'icône de droite
rightIcon.addEventListener('click', () => {
    if (currentIndex + visibleCount < allItems.length) {
        currentIndex++;
        updateVisibility();
    }
});

// Gestion du clic sur l'icône de gauche
leftIcon.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
    }
});

// Mise à jour lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    visibleCount = calculateVisibleCount();
    updateVisibility();
});

// Initialiser l'affichage
updateVisibility();


/* ------------------------------- /
#Technologies
--------------------------------- */ 

document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.my-items ul li'); // Cibler les éléments de la liste
    const shoeCategories = document.querySelectorAll('.us'); // Cibler les sections à masquer/afficher

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Supprimer la classe 'active' de tous les éléments et ajouter à l'élément cliqué
            categoryItems.forEach(catItem => catItem.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter'); // Récupérer le filtre à partir de l'attribut data-filter

            shoeCategories.forEach(category => {
                // Si l'élément a la classe correspondant au filtre, on l'affiche, sinon on le masque
                if (category.classList.contains(filter)) {
                    category.style.display = 'flex'; // Afficher l'élément correspondant
                } else {
                    category.style.display = 'none'; // Masquer les autres éléments
                }
            });
        });
    });
});
