function initMenu() {

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.style.overflow =
      mobileMenu.classList.contains("active")
        ? "hidden"
        : "auto";
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";

    });

  });

}