document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.querySelector(".burger-icon");
  var closeIcon = document.querySelector(".close-icon");
  var menuContent = document.querySelector(".menu-content");

  burgerIcon.addEventListener("click", function () {
    menuContent.classList.add("open");
  });

  closeIcon.addEventListener("click", function () {
    menuContent.classList.remove("open");
  });
});
