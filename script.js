const red = document.querySelector(".red1");
const green = document.querySelector(".green1");
const pink = document.querySelector(".pink1");
const yellow = document.querySelector(".yellow1");
const blue = document.querySelector(".blue1");
const orange = document.querySelector(".orange1");
const cbox = document.querySelector(".roww0");
const cbox1 = document.querySelector(".roww1");
const cbox2 = document.querySelector(".roww2");
const cbox3 = document.querySelector(".roww5");
const cbox4 = document.querySelector(".roww3");
let x="green";
let y="op";
green.classList.add("active");
red.addEventListener("click", function(){
     cbox.classList.remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
  x = "red";
  y="rr";
  red.classList.add("active");
  green.classList.remove("active");
  yellow.classList.remove("active");
  orange.classList.remove("active");
  pink.classList.remove("active");
  blue.classList.remove("active");
  
    cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});
green.addEventListener("click", function () {
     cbox.classList.remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
  x = "green";  y = "gg";
  green.classList.add("active");
  orange.classList.remove("active");
  yellow.classList.remove("active");
  red.classList.remove("active");
  pink.classList.remove("active");
  blue.classList.remove("active");
  cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});
pink.addEventListener("click", function () {
     cbox.classList.remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
  x = "pink"; y = "pp";
   pink.classList.add("active");
   green.classList.remove("active");
   yellow.classList.remove("active");
   red.classList.remove("active");
   orange.classList.remove("active");
   blue.classList.remove("active");
  cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});
yellow.addEventListener("click", function () {
     cbox.classList.remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
  x = "yellow"; y = "yy";
   yellow.classList.add("active");
   green.classList.remove("active");
   orange.classList.remove("active");
   red.classList.remove("active");
   pink.classList.remove("active");
   blue.classList.remove("active");
  cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});
blue.addEventListener("click", function () {
     cbox.classList.remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
  x = "blue"; y = "bb";
   blue.classList.add("active");
   green.classList.remove("active");
   yellow.classList.remove("active");
   red.classList.remove("active");
   pink.classList.remove("active");
   orange.classList.remove("active");
  cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});
orange.addEventListener("click", function () {
     cbox.classList. remove(x);
     cbox1.classList.remove(x);
     cbox2.classList.remove(x);
     cbox3.classList.remove(x);
     cbox4.classList.remove(y);
    x = "orange"; y = "oo";
  
   orange.classList.add("active");
   green.classList.remove("active");
   yellow.classList.remove("active");
   red.classList.remove("active");
   pink.classList.remove("active");
   blue.classList.remove("active");
  cbox.classList.add(x);
  cbox1.classList.add(x);
  cbox2.classList.add(x);
  cbox3.classList.add(x);
  cbox4.classList.add(y);
});




 