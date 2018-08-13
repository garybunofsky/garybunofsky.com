document.addEventListener("DOMContentLoaded", function () {
  console.log('👋 Yo yo, thanks for checkout out what\'s under the hood.');
  console.log('This site is built with ejs and served.');
  var i = 0
  var menu = document.getElementById('menu')
  menu.addEventListener('click', function () {
    toggleMenu();
  });

  menu.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      toggleMenu();
    }
  });

  function toggleMenu () {
    document.getElementById('nav').classList.toggle('hide');
    if (i % 2 !== 0) {
      menu.innerHTML = 'Menu';
    } else {
      menu.innerHTML = '×';
    }
    i++
  }
})

document.head = document.head || document.getElementsByTagName('head')[0];
window.onblur = function () {
  changeFavicon('https://garybunofsky.com/images/favicon-left.png');
}
window.onfocus = function () {
  changeFavicon('https://garybunofsky.com/images/favicon.png');
}

function changeFavicon(src) {
  var link = document.createElement('link');
  var oldLink = document.getElementById('favicon');
  link.id = 'favicon';
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
