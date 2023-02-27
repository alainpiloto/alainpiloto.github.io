const frontEndText = document.querySelector(".front-end-text");
const menuIcon = document.querySelector(".icon-img");
const navContainer = document.querySelector(".nav-links-container");
var x = window.matchMedia("(min-width: 768px)");
var elem = document.querySelector(".grid-container");
const emailImg = document.querySelector(".email-img");
const emailText = document.querySelector(".email-text");
const mailFooter = document.querySelector(".mail-icon-footer");
const jsDriver = document.querySelector(".jsDriver");
const closeIcon = document.querySelector(".closeIcon");

const workerUrl = "https://delicate-lab-9d2d.alainpiloto.workers.dev/";

// Define las opciones de la solicitud HTTP
const options = {
  method: "GET",
  mode: "no-cors",
};

// Envía la solicitud HTTP al worker
fetch(workerUrl, options)
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
    // El worker ha sido llamado exitosamente
    // Aquí puedes continuar con el procesamiento de la página
  })
  .catch((error) => {
    console.error(error);
    // Ha ocurrido un error al llamar al worker
    // Aquí puedes manejar el error de acuerdo a tus necesidades
  });

mailFooter.addEventListener("click", showPopUpMail);

function showPopUpMail(e) {
  const mailMobileContainer = document.querySelector(".mailMobileContainer");
  if (jsDriver.classList.contains("hide-email")) {
    jsDriver.classList.remove("hide-email");
    mailMobileContainer.classList.add("animate__jackInTheBox");
    console.log("opening mail");
  }
}

closeIcon.addEventListener("click", () => {
  jsDriver.classList.add("hide-email");
});
/*******Email Animation ********/

setInterval(() => {
  if (emailText.classList.contains("showEmail")) {
  }
  emailImg.classList.add("animate__shakeY");
  setTimeout(() => {
    emailImg.classList.remove("animate__shakeY");
  }, 1000);
}, 3000);

/************ TOP NAV Responsive*************/
menuIcon.addEventListener("click", showMenu);

navContainer.addEventListener("click", hideNavBar);

emailImg.addEventListener("click", () => {
  console.log("click en email");
  if (emailText.classList.contains("showEmail")) {
    emailText.classList.remove("showEmail");
  } else {
    emailText.classList.add("showEmail");
    emailImg.classList.remove("animate__animated");
  }
});

function hideNavBar(e) {
  if (e.target.classList.contains("hideNav")) {
    navContainer.classList.remove("show-menu");
  }
}
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-home");
  header.classList.toggle("down", window.scrollY > 20);
});

function showMenu(e) {
  if (navContainer.classList.contains("show-menu")) {
    navContainer.classList.remove("show-menu");
  } else {
    navContainer.classList.add("show-menu");
  }
}
// Mansory for Mobile
window.onload = changeColumnWidth(x);

function changeColumnWidth(x) {
  if (x.matches) {
    // If media query matches
    imagesLoaded(elem, () => {
      var msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 255,
        gutter: 10,
        fitWidth: true,
      });
    });
  } else {
    imagesLoaded(elem, () => {
      var msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 150,
        gutter: 10,
        fitWidth: true,
      });
    });
  }
}
