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
