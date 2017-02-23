$(document).ready(function () {
//    Window Height
    function setHeight() {
        var wHeight = $(window).height();
        var headerHeight = $(".navbar-wrapper").height();
        var actualHeight = wHeight - headerHeight - 5;
//        var asideHeight = $(".aside-wrapper").height();
        $(".media-height").css('min-height', actualHeight);
        $(".dashboard-wrapper .content-wrapper").css('min-height', actualHeight);
    }


//    Window Height on resize
    setHeight();
    $(window).resize(function () {
        setHeight();
    });
    /*-- On Click Toggle Aside Wrapper --*/
    function setToggleAside() {
        if ($(window).width() < 1025) {
            $(document).on("click", ".toggle-aside", function (e) {
                e.stopImmediatePropagation();
                $(".aside-wrapper").addClass("aside-open-wrapper");
            });
            $(document).on("click", ".back", function (e) {
                e.stopImmediatePropagation();
                $(".aside-wrapper").removeClass("aside-open-wrapper");
            });
        }
    }
    setToggleAside();
    $(window).resize(function () {
        setToggleAside();
    });

    /*--  Table hover and action  --*/
    $('.table-body .row .table-column').on('mouseenter', function () {
        $(this).closest('.table-body .row').addClass('background');
    });
    $('.table-body .row .table-column').on('mouseleave', function () {
        $(this).closest('.table-body .row').removeClass('background');
    });
});