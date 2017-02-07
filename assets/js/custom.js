$(document).ready(function () {
//    Window Height
    function setHeight() {
        var wHeight = $(window).height();
        var headerHeight = $(".navbar-wrapper").height();
        var actualHeight = wHeight - headerHeight - 5;
        var asideHeight = $(".aside-wrapper").height();
        $(".media-height").css('min-height', actualHeight);
        $(".dashboard-wrapper .content-wrapper").css('min-height', asideHeight);
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

//fa-ellipsis
    $('.panel-heading > .panel-title > i.fa.fa-ellipsis-v').on("click", function () {
        $(".panel-heading").removeClass("panel-heading-open");
        $(this).closest(".panel-heading").addClass("panel-heading-open");
    });

    $('.panel-sidebar > ul > li > a.back-pin').on("click", function () {
        $(this).closest(".panel-heading").removeClass("panel-heading-open");
    });

    $(document).on('click', '.collapse-click', function () {
        $(".panel-heading").find('.event-controls').css("opacity", "1").css("pointer-events", "visible");
        if ($(this).hasClass('collapsed')) {
            $(this).parent().find('.event-controls').css("opacity", "1").css("pointer-events", "visible");
        } else {
            $(this).parent().find('.event-controls').css("opacity", "0").css("pointer-events", "none");
        }
    });

//Class Multiple check
    $("#checkbox-student").change(function () {
        var status = this.checked;
        $('.checkbox-classes').each(function () {
            this.checked = status;
        });
    });

    $('.checkbox-classes').change(function () {
        if (this.checked == false) {
            $("#checkbox-student")[0].checked = false;
        }
        if ($('.checkbox-classes:checked').length == $('.checkbox-classes').length) {
            $("#checkbox-student")[0].checked = true;
        }
    });

//Section Multiple check
    $(".class-section .checbox-class").change(function () {
        var status = this.checked;
        $(this).parents('.class-section').find(".checkbox-section")[0].checked = status;
        $(this).parents('.class-section').find(".checkbox-section")[1].checked = status;
        $(this).parents('.class-section').find(".checkbox-section")[2].checked = status;
    });

    $('.checkbox-section').change(function () {
        if (this.checked == false) {
            $(this).parents("li").siblings("li").find(".checbox-class")[0].checked = false;
        }
        if ($('.checkbox-section:checked').length == 3) {
            $(this).parents("li").siblings("li").find(".checbox-class")[0].checked = true;
        }
    });

//Staff Multiple check
    $("#checkbox-staff").change(function () {
        var status = this.checked;
        $('.staff-member').each(function () {
            this.checked = status;
        });
    });

    $('.staff-member').change(function () {

        if (this.checked == false) {
            $("#checkbox-staff")[0].checked = false;
        }


        if ($('.checkbox-classes:checked').length == $('.staff-member').length) {
            $("#checkbox-staff")[0].checked = true;
        }
    });

//Announcement Multiple check
    $('#schedulingAnnouncement').slideUp();
    $("#announcementCheckbox").change(function (e) {
//        e.stopPropagation();
        $('#schedulingAnnouncement').slideDown();
        var status = this.checked;
        if (this.checked == false) {
            $('#schedulingAnnouncement').slideUp();
        }
        $('.announcementCheck').each(function () {
            this.checked = status;
        });
    });

    $('.table-body .announcementCheck').change(function () {
        if (this.checked == false) {
            $("#announcementCheckbox")[0].checked = false;
        }
        console.log($('.table-body .hidden-xs .announcementCheck').length);
        if ($('.table-body .col-xs-1 .announcementCheck:checked').length == $('.table-body .hidden-xs .announcementCheck').length) {
            $("#announcementCheckbox")[0].checked = true;
        }
        $('#schedulingAnnouncement').slideDown();
        console.log($('.table-body .col-xs-1 .custom-check .checkbox-inline .announcementCheck:checked').length);
        if ($('.table-body .col-xs-1 .custom-check .checkbox-inline .announcementCheck:checked').length === 0) {
            $('#schedulingAnnouncement').slideUp();
        }
    });
    $('.glyphicon-trigger span').on('click', function () {
        $(this).siblings('.form-control').focus();
    });

//Send Status

    $('#selectStatus').hide();
    $('.table-header .table-column.status-checking .status-checked').on('click', selectStatusWrapper);

    function selectStatusWrapper() {
        $('#selectStatus').slideToggle();
        $('.select-status-wrapper .select-status-action .select-close').on('click', function () {
            $('#selectStatus').slideUp();
        });
    }
});