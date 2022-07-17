//header
const btnHamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelector('.has-fade');
const header = document.querySelector('.header');
//footer
/* const logoHover = document.querySelector('#footer-social'); */


btnHamburger.addEventListener('click', function(){
    
    
    if(header.classList.contains('open')){ //close hamburger menu

        header.classList.remove('open');
        fadeElems.classList.remove('fade-in');
        fadeElems.classList.add('fade-out');

    }else {          //open hamburger menu

        header.classList.add('open');
        fadeElems.classList.remove('fade-out');
        fadeElems.classList.add('fade-in');
       
    }


    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }

    
});

/* logoHover.addEventListener('mouseover', function(){
    console.log('hover');

    
}) */



