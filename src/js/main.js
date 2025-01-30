var changeColor = document.querySelector(".button");
var changeIcon = document.querySelector(".icon");
var changeText = document.querySelector(".text");
var changeCount = document.querySelector(".count");

function changeRed() {
  changeIcon.classList.toggle("is-active");
  changeColor.classList.toggle("is-active");
  changeText.classList.toggle("is-active");
  changeCount.classList.toggle("is-active");
}

changeColor.addEventListener("click", changeRed);
