const menu = document.querySelector('#mobile-menu');
// menu.innerHTML('background-color: white')
const menuLinks = document.querySelector('.navbar__menu');

const logo = document.querySelector('#navbar__logo')
// logo.addEventListener('Click', ()=> {console.log("Hello")})
//Display mobile menu

const navLogo = document.querySelector('#navbar__logo');
const skillsMenu = document.querySelector('#skillpage');
// skillsMenu.addEventListener('click', ()=> {console.log("skill clicked")});


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');   
}

menu.addEventListener('click', mobileMenu);

// menu.addEventListener('click', ()=> {console.log('hey')})


//show active when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skillpage');
    const hobbiesMenu = document.querySelector('#hobbies');
    const contactMenu = document.querySelector('#Contact');
// 
    // homeMenu.addEventListener('click', ()=> {console.log("home clicked");});
    // skillsMenu.addEventListener('click', ()=> {console.log("skill clicked");});

    let scrollPos = window.scrollY;

    if(window.innerWidth> 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        // console.log("hiiii");
        return ;
    }
    else if(window.innerWidth> 960 && scrollPos < 1200){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        hobbiesMenu.classList.remove('highlight')
        // console.log("hiiii");

        return ;
    }
    else if(window.innerWidth> 960 && scrollPos < 1800){
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        hobbiesMenu.classList.remove('highlight')

        // console.log("hiiii");

        return ;
    }
    else if(window.innerWidth> 960 && scrollPos < 3145){
        hobbiesMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        // console.log("hiiii");

        return ;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }


   


}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



//CLOSE MOBILE MENU 

const hideMobMenu = () => {
    const menubar = document.querySelector('.is-active');
    if(window.innerWidth<=960 && menubar){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobMenu);
navLogo.addEventListener('click', hideMobMenu);
