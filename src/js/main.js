/* nav fixo */
window.onscroll = () => {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY > 1) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var elementBody = document.querySelector('body');
var btnAumentar = document.querySelector("#btnaumentar");
var btnDiminuir = document.querySelector("#btndiminuir");

var fontSize = 100;

var increaseDecrease = 10;

btnDiminuir.addEventListener('click', function(event) {
  fontSize = fontSize - increaseDecrease;
  elementBody.style.fontSize = fontSize + '%';
});
btnAumentar.addEventListener('click', function(event) {
  fontSize = fontSize + increaseDecrease;
  elementBody.style.fontSize = fontSize + '%';
});

