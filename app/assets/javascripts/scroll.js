$(document).on('page:change', function() {
  initPage();
});

function initPage() {
  $(function() {
      var nav = $("nav");
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll > 0) {
              nav.addClass("shadow");
          } else {
              nav.removeClass("shadow");
          }
      });
  });
}

