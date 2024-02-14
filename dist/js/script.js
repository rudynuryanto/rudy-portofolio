//navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}
// garis
 
const garis = document.querySelector('#garis');
const navMenu = document.querySelector('#nav-menu');
garis.addEventListener('click', function (){
garis.classList.toggle('garis-active');
navMenu.classList.toggle('hidden');
});


// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
if (darkToggle.checked){
    html.classList.add('dark');

}else {
    html.classList.remove('dark');
}
});

