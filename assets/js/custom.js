$(function () {
    $('.datepicker').datepicker();

    $('#timepicker1').timepicker();
    
    function setHeight() {
        var wHeight = $(window).height();
        var headerHeight = $(".navbar-wrapper").height();
        var actualHeight = wHeight - headerHeight - 5;
        $(".media-height").css('min-height',actualHeight);
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    });
    
    
//    function setMobileHeight() {
//        var wHeight = $(window).height();
//        var headerHeight = $(".navbar-wrapper-mobile").height();
//        var footerHeight = $(".footer-wrapper-mobile").height();
//        var actualHeight = wHeight - headerHeight - footerHeight-21;
//        $(".content-wrapper-mobile").css('min-height',actualHeight);
//    }
//    setMobileHeight();
//    $(window).resize(function () {
//        setMobileHeight();
//    });

});
