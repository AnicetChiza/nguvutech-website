/*----------------------------------
#Menu
----------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const listDash = document.querySelector('.first-bloc nav');
    const exit = document.querySelector('.exit-dash');
    const menu = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay-dash');

    if (menu) {
        menu.addEventListener('click', () => {
            listDash.classList.add('active');
            overlay.classList.add('active');
            menu.style.display = 'none';
            exit.style.display = 'flex';
        });
    }

    if (exit) {
        exit.addEventListener('click', () => {
            listDash.classList.remove('active');
            overlay.classList.remove('active');
            exit.style.display = 'none';
            menu.style.display = 'flex';
        });
    }
});