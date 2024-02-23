let menu    = document.querySelector('.burger');
let burger  = document.querySelectorAll('.js-burger');
let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("burger--open");
  }
};

let acc = document.getElementsByClassName("tab__button");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("tab__button--open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}