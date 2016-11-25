$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $("nav").removeClass("transparent");
        $("nav").addClass("blue-grey");
    }
    var scroll = $(window).scrollTop();
    if (scroll <= 500) {
        $("nav").addClass("transparent");
        $("nav").removeClass("blue-grey");
    }
    var scroll = $(window).scrollTop();
}); //missing );
