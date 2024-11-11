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
    const menuItems = document.querySelectorAll('.header-list ul li a');

    if(menuIcon){
        menuIcon.addEventListener('click', () =>{
            list.classList.add('active');
            overlay.classList.add('active');
            exitIcon.style.display = 'flex';
            menuIcon.style.display = 'none';
        })
    }

    if(exitIcon){
        exitIcon.addEventListener('click', ( )=>{
            list.classList.remove('active');
            overlay.classList.remove('active');
            exitIcon.style.display = 'none';
            menuIcon.style.display = 'flex';
        })
    }
});