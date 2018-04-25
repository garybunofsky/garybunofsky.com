document.addEventListener("DOMContentLoaded", function () {
var i = 0
  document.getElementById('menu').addEventListener("click", function () {
    document.getElementById('nav').classList.toggle("hide");
    if (i % 2 !== 0) {
      i++
      this.innerHTML = "Menu";
    } else {
      i++
      this.innerHTML = "Close Menu";
    }
  });
});
