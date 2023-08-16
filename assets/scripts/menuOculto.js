function menuMobile() {
  var x = document.getElementById("nav-oculto");
  var iconeMenu = document.getElementById("icone-menu");

  if (x.style.display === "block") {
    x.style.display = "none";
    iconeMenu.src = "./assets/images/icons/menu-open.svg";
  } else {
    x.style.display = "block";
    iconeMenu.src = "./assets/images/icons/menu-close.svg";
  }
}

document.addEventListener("click", function(event) {
  var navOculto = document.getElementById("nav-oculto");
  var iconeMenu = document.getElementById("icone-menu");

  if (!navOculto.contains(event.target) && event.target !== iconeMenu) {
    navOculto.style.display = "none";
    iconeMenu.src = "./assets/images/icons/menu-open.svg";
  }
});