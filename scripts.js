var slideIndex = 1;
document.addEventListener('DOMContentLoaded', function() {

  showDivs(slideIndex);
});

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("proyecto");
    console.log('slideIndex:', n); // add this line
    console.log('number of divs:', x.length); // add this line
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}