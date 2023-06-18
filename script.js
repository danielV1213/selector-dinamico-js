const botones = document.querySelectorAll(".btn");
let isActive = false;
let activeBtn;

function changeBorder() {
  if (isActive) {
    activeBtn.style.border = "solid 3px #4CAF50";
  }

  this.style.border = "solid 4px rgb(14, 202, 14)";
  isActive = true;
  activeBtn = this;
}

botones.forEach((boton) => {
  boton.addEventListener("click", changeBorder);
});