/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer4 = document.querySelector(".website-counter4");

var resetButton = document.querySelector("#reset4");
var visitCount4 = localStorage.getItem("page_view4");

// Check if page_view entry is present
if (visitCount4) {
  visitCount4 = Number(visitCount4) + 1;
  localStorage.setItem("page_view4", visitCount4);
} else {
  visitCount4 = 0;
  localStorage.setItem("page_view4", 0);
}
counterContainer4.innerHTML = visitCount4;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount4 = 0;
  localStorage.setItem("page_view4", 0);
  counterContainer4.innerHTML = visitCount4;
});



