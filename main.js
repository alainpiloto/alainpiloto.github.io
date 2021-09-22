const languages = document.querySelector('.languages');
const menuIcon = document.querySelector('.icon-img');
const navContainer = document.querySelector('.nav-links-container')

menuIcon.addEventListener('click', showMenu)


function showMenu(e) {
    if(navContainer.classList.contains('show-menu')) {
        navContainer.classList.remove('show-menu')
    } else {

        navContainer.classList.add('show-menu')
    }
    
    console.log(navContainer)
}
// Mansory for Mobile

    var elem = document.querySelector(".grid-container");
function myFunction(x) {
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
    
            languages.remove()
        } )
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
//   x.addEventListener('DOMContentLoaded',myFunction(x)) // Attach listener function on state changes
window.onload = myFunction(x)


