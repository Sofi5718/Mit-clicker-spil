"use strict";
window.addEventListener("load", start);





function decrementLives() {
  console.log("decrementLives");
  displayDecrementedLives();
  lives -=1; 
  console.log(lives);
}
function displayDecrementedLives() {
    document.querySelector("#heart" + lives).classList.remove("active_heart");
    document.querySelector("#heart" + lives).classList.add("broken_heart");
}
function incrementLives() {
  lives += 1;
  displayincrementLives();
  
}
function displayincrementLives() {
    document.querySelector("#heart" + lives).classList.remove("broken_heart");
    document.querySelector("#heart" + lives).classList.add("active_heart");
}