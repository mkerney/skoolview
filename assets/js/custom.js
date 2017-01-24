$(function () {
    $('.datepicker').datepicker();

    $('#timepicker1').timepicker();

    function setHeight() {
        var wHeight = $(window).height();
        var headerHeight = $(".navbar-wrapper").height();
        var actualHeight = wHeight - headerHeight - 5;
        $(".media-height").css('min-height', actualHeight);
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    });

    /*-- On Click Toggle Aside Wrapper --*/
    function setToggleAside() {
        if ($(window).width() < 767) {
            $(".toggle-aside").show();
            $(".aside-wrapper").addClass("aside-open-wrapper");
            $(".dashboard-wrapper").addClass("dashboard-wrapper-open-wrapper");
            $(document).on("click", ".toggle-aside", function () {
                $(".aside-wrapper").toggleClass("aside-open-wrapper");
                $(".dashboard-wrapper").toggleClass("dashboard-wrapper-open-wrapper");
            });
        } else {
            $(".toggle-aside").hide();
            $(".aside-wrapper").removeClass("aside-open-wrapper");
            $(".dashboard-wrapper").removeClass("dashboard-wrapper-open-wrapper");
        }
    }
    setToggleAside();
    $(window).resize(function () {
        setToggleAside();
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
