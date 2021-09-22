const languages = document.querySelector('.languages');
const menuIcon = document.querySelector('.icon-img');
const navContainer = document.querySelector('.nav-links-container')

menuIcon.addEventListener('click', showMenu)


function showMenu(e) {
    e.stopPropagation()
    if(navContainer.classList.contains('show-menu')) {
        navContainer.classList.remove('show-menu')
    } else {

        navContainer.classList.add('show-menu')
    }
    
}
// Mansory for Mobile

var elem = document.querySelector(".grid-container");

imagesLoaded( elem, () => {

    function myFunction(x) {
        if (x.matches) { // If media query matches
            var msnry = new Masonry(elem, {
              // options
              itemSelector: ".grid-item",
              columnWidth: 255,
              gutter: 10,
              fitWidth: true
            });
            
    
        } else {
            var msnry = new Masonry(elem, {
              // options
              itemSelector: ".grid-item",
              columnWidth: 150,
              gutter: 10,
              fitWidth: true
            });
    
            languages.remove()
        }
      }
} )

  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener('DOMContentLoaded',myFunction) // Attach listener function on state changes


