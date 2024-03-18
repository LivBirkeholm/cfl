document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.querySelector(".burger-icon");
  var closeIcon = document.querySelector(".close-icon");
  var menuContent = document.querySelector(".menu-content");

  burgerIcon.addEventListener("click", function () {
    menuContent.classList.add("open");
    burgerIcon.style.display = "none"; // Skjuler burger-ikonet
    closeIcon.style.display = "block"; // Viser luk-ikonet
    console.log("a");
  });

  closeIcon.addEventListener("click", function () {
    menuContent.classList.remove("open");
    burgerIcon.style.display = "flex"; // Viser burger-ikonet igen
    closeIcon.style.display = "none"; // Skjuler luk-ikonet
    console.log("b");
  });
});
