/*------------------------------
#For the header
/-----------------------------*/
jQuery(function ($) {
    const $header = $('.header');
    $(window).scroll(function (event) {
        const $current = $(this).scrollTop();
        if ($current > 60) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});

/*------------------------------
#Header
/-----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.head-list ul');
    const menuIcon = document.querySelector('.menu-icon');
    const exitIcon = document.querySelector('.exit-icon');
    const overlay = document.querySelector('.overlay');
    const theBody = document.querySelector('body');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            list.classList.add('active');
            overlay.classList.add('active');
            exitIcon.classList.add('active'); // Ajouter la classe active pour l'icône
            menuIcon.style.display = 'none';
            document.body.classList.add('no-scroll');
        });
    }

    if (exitIcon) {
        exitIcon.addEventListener('click', () => {
            list.classList.remove('active');
            overlay.classList.remove('active');
            exitIcon.classList.remove('active'); // Supprimer la classe active pour cacher l'icône
            menuIcon.style.display = 'flex';
            document.body.classList.remove('no-scroll');
        });
    }
});

/* --------------------
#Scroller
-------------------- */
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

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
const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');
const allItems = document.querySelectorAll('.realisation-all-item .all-item');

let currentIndex = 0;
let visibleCount = calculateVisibleCount();

function calculateVisibleCount() {
    if (window.innerWidth >= 1230) {
        return 4;
    } else if (window.innerWidth >= 970) {
        return 3;
    } else if (window.innerWidth >= 560) {
        return 2;
    } else {
        return 1;
    }
}

function updateVisibility() {
    const totalItems = allItems.length;

    if (currentIndex + visibleCount > totalItems) {
        currentIndex = totalItems - visibleCount;
    }
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    allItems.forEach((item, index) => {
        item.style.display = 'none';
    });

    for (let i = currentIndex; i < currentIndex + visibleCount; i++) {
        if (allItems[i]) {
            allItems[i].style.display = 'block';
        }
    }

    leftIcon.style.display = currentIndex > 0 ? 'flex' : 'none';
    rightIcon.style.display = currentIndex + visibleCount < totalItems ? 'flex' : 'none';
}

rightIcon.addEventListener('click', () => {
    if (currentIndex + visibleCount < allItems.length) {
        currentIndex++;
        updateVisibility();
    }
});

leftIcon.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
    }
});

window.addEventListener('resize', () => {
    visibleCount = calculateVisibleCount();
    updateVisibility();
});
updateVisibility();