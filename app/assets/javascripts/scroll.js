$(document).on('page:change', function() {
  console.log("page change");
  initPage();
});

function initPage() {
  console.log("initialize page");
  $(function() {
      var nav = $("nav");
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll > 0) {
              console.log("addClass shadow");
              nav.addClass("shadow");
          } else {
              console.log("removeClass shadow");
              nav.removeClass("shadow");
          }
      });
  });
}

