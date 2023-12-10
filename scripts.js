var slideIndex = 1;
let imagen
let minimo = 1;
let maximo = 151;

document.addEventListener('DOMContentLoaded', async function() {
  let pokeimg = document.getElementById('pokeimagen');

  showDivs(slideIndex);
  
  pokeimg.src = await returnPokeImg(minimo, maximo);
});

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("proyecto");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function randomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
  
}

async function returnPokeImg(min, max)
{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum(min, max));
  let respuestaimagen = await response.json();
  imagen = respuestaimagen.sprites.front_default;
  return imagen;
}