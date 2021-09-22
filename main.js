const languages = document.querySelector('.languages');
const menuIcon = document.querySelector('.icon-img');
const navContainer = document.querySelector('.nav-links-container')
var x = window.matchMedia("(min-width: 768px)")
var elem = document.querySelector(".grid-container");
const emailImg = document.querySelector('.email-img')
const emailText = document.querySelector('.email-text')

setInterval(() => {
    if(emailText.classList.contains('showEmail')){

    }
    emailImg.classList.add('animate__shakeY')
    setTimeout(() => {
        emailImg.classList.remove('animate__shakeY')
    }, 1000);
}, 3000);


menuIcon.addEventListener('click', showMenu)

navContainer.addEventListener('click', hideNavBar)

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-home');
    header.classList.toggle('down', window.scrollY > 20)
} )

emailImg.addEventListener('click', () => {
    console.log('click en email')
    if(emailText.classList.contains('showEmail')) {
        emailText.classList.remove('showEmail')
    } else {
        emailText.classList.add('showEmail')
        emailImg.classList.remove('animate__animated')
    }
});


function hideNavBar(e) {
    if(e.target.classList.contains('hideNav')) {
        navContainer.classList.remove('show-menu')
            }
}

window.addEventListener('DOMContentLoaded', () => {
    if(!x.matches) {
        
        languages.remove()
    }   
    
})
//   x.addEventListener('DOMContentLoaded',myFunction(x)) // Attach listener function on state changes
window.onload = changeColumnWidth(x)

function showMenu(e) {
    if(navContainer.classList.contains('show-menu')) {
        navContainer.classList.remove('show-menu')
    } else {

        navContainer.classList.add('show-menu')
    }   
}
// Mansory for Mobile

function changeColumnWidth(x) {
    if (x.matches) { // If media query matches
        imagesLoaded( elem, () => {
            
            var msnry = new Masonry(elem, {
              // options
              itemSelector: ".grid-item",
              columnWidth: 255,
              gutter: 10,
              fitWidth: true
            });
        } )
 
    } else {
        imagesLoaded( elem, () => {

            var msnry = new Masonry(elem, {
              // options
              itemSelector: ".grid-item",
              columnWidth: 150,
              gutter: 10,
              fitWidth: true
            });
    
            
        } )
    }
  }
  


