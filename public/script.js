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
      menu.innerHTML = "×";
    }
    i++
  }
})

document.head = document.head || document.getElementsByTagName('head')[0]
window.onblur = function () {
  changeFavicon('http://localhost:3000/images/favicon-left.png')
}

window.onfocus = function () {
  changeFavicon('http://localhost:3000/images/favicon.png')
}

function changeFavicon(src) {
  var favicon = document.createElement('link')
  var oldFavicon = document.getElementById('favicon')
  link.id = 'favicon'
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = src
  if (oldFavicon) {
    document.head.removeChild(oldFavicon)
  }
  document.head.appendChild(favicon)
}
