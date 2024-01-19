
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
   
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

