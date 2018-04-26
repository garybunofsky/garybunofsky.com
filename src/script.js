document.addEventListener("DOMContentLoaded", function () {
  console.log('👋 Thanks for checkout out what\'s under the hood.');
  console.log('This site is static HTML and CSS, served via Node Express.');
  var i = 0
  var menu = document.getElementById('menu')
  menu.addEventListener("click", function () {
    toggleMenu();
  });

  menu.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      toggleMenu();
    }
  });

  function toggleMenu () {
    document.getElementById('nav').classList.toggle("hide");
    if (i % 2 !== 0) {
      menu.innerHTML = "Menu";
    } else {
      menu.innerHTML = "❌";
    }
    i++
  }
});
