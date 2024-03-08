let burger  = document.querySelectorAll('.js-burger');
let menu    = document.querySelector('.burger-panel');
let burgerButton  = document.querySelector('.burger');
let body  = document.querySelector('body');

let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("burger--open");
    body.classList.toggle("body-lock");
  }
};

window.onscroll = function() {myFunction()};
let headerGo = document.querySelector('.header');
let main = document.querySelector('main');
let sticky = headerGo.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    headerGo.classList.add("header--sticky");
    main.classList.add("main");
  } else {
    headerGo.classList.remove("header--sticky");
    main.classList.remove("main");
  }
}

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

const swiper = new Swiper('.review__swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 56,
    },
  },
});

let animItems = document.querySelectorAll('.animation-items');
if (animItems.length > 0) {
  window.addEventListener ('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animstart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animstart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window. innerHeight - window.innerHeight / animstart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
      else {
        if(!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollleft = window-pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollleft }
  }
  animOnScroll();
}
