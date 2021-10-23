/* Carousel */


window.addEventListener("DOMContentLoaded", function(loadcar) {

  console.log(loadcar);

   var carousel = document.getElementById("carousel");
   var fadeComplete = function() { carousel.appendChild(arr[0]); };
   var arr = carousel.getElementsByTagName("a");
   for(var i=0; i < arr.length; i++) {
     arr[i].addEventListener("animationend", fadeComplete, false);
   }

 }, false);

console.log("carousel");
