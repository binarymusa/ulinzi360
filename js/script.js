const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

/* TOGGLE MENU */

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  /* LOCK BODY SCROLL */

  if(mobileMenu.classList.contains("active")){
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "auto";
  }

});

/* CLOSE MENU WHEN LINK CLICKED */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    document.body.style.overflow = "auto";

  });

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;

    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 80){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* HEADER EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.style.background = "rgba(5,12,26,0.96)";
    header.style.borderBottom = "1px solid rgba(200,149,42,0.18)";

  }else{

    header.style.background = "rgba(5,12,26,0.88)";
    header.style.borderBottom = "1px solid rgba(200,149,42,0.12)";

  }

});