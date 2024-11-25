
const hamButton = document.querySelector('#ham-button');
const navigation = document.querySelector('.nav-bar');
const homeButton = document.querySelector('a[href*="home"]');
const dirButton = document.querySelector('a[href*="directory"]');
const joinButton = document.querySelector('a[href*="join"]');
const discButton = document.querySelector('a[href*="discover"]');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
    pageTitle = document.querySelector('title').innerText;
    changeActiveNav(pageTitle);
}, false);

function changeActiveNav(activePhrase) {
    homeButton.classList.remove('active');
    dirButton.classList.remove('active');
    joinButton.classList.remove('active');
    discButton.classList.remove('active');

    switch (activePhrase) {
        case "Port Harcourt City Chamber of Commerce":
            homeButton.classList.add('active');
            break;
        case "Port Harcourt City Chamber of Commerce":   
            dirButton.classList.add('active');
            break;
        case "Port Harcourt City Chamber of Commerce":
            joinButton.classList.add('active');
            break;
        case "Port Harcourt City Chamber of Commerce":
            discButton.classList.add('active');
            break;
        default:
    }
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
    }
const $btnBurguer = document.querySelector("#btnBurguer");
const $navBar = document.querySelector("#navBar");

$btnBurguer.addEventListener("click", () => {
  $navBar.classList.toggle("display");
  if ($navBar.classList.contains("display")) {
    $btnBurguer.textContent = "⛌";
  } else {
    $btnBurguer.textContent = "☰";
  }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
