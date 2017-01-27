$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 0) {
        $("#navigation").addClass('shadow')
    } else {
         $("#navigation").removeClass('shadow')
    }
});