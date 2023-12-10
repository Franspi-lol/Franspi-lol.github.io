var slideIndex = 1;
let imagen

document.addEventListener('DOMContentLoaded', async function() {
  let pokeimg = document.getElementById('pokeimagen');

  showDivs(slideIndex);
  
  pokeimg.src = await returnPokeImg(1, 151);
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

async function returnPokeImg()
{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum(1, 151));
  let respuestaimagen = await response.json();
  imagen = respuestaimagen.sprites.front_default;
  return imagen;
}