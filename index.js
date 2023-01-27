//*Targets
const nav = document.getElementById("nav-onclick");
const demoOne = document.getElementById("demoOne");
const demoTwo = document.getElementById("demoTwo");
const demoThree = document.getElementById("demoThree");
const redCross = document.getElementById("red-cross");
const alertBox = document.getElementById("alert-box");
// console.log(redCross);
// console.log(demoThree);
// console.log(demoTwo);
// console.log(demoOne);
// console.log(nav);

//* Accordion
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

//* Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
//*Listener
nav.addEventListener("click", openNav);
demoOne.addEventListener("click", myFunction.bind(this, "Demo1"));
demoTwo.addEventListener("click", myFunction.bind(this, "Demo2"));
demoThree.addEventListener("click", myFunction.bind(this, "Demo3"));
redCross.addEventListener("click", () => {
  alertBox.style.display = "none";
});
