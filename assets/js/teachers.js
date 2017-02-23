$(document).ready(function () {

    /*--  Announcement Multiple check  --*/
    $(".teachers-wrapper #schedulingAnnouncement").slideUp();
    $(".teachers-wrapper #announcementCheckbox").change(function () {
        $('.teachers-wrapper #schedulingAnnouncement').slideDown();
        var status = this.checked;
        if (this.checked === false) {
            $('.teachers-wrapper #schedulingAnnouncement').slideUp();
        }
        $('.teachers-wrapper .announcementCheck').each(function () {
            this.checked = status;
        });
    });

    /*--  Change Function  --*/
    $('.teachers-wrapper .table-body .announcementCheck').change(function () {
        if (this.checked === false) {
            $(".teachers-wrapper #announcementCheckbox")[0].checked = false;
        }
        console.log($('.table-body .hidden-xs .announcementCheck').length);
        if ($('.teachers-wrapper .table-body .first-table-column .announcementCheck:checked').length === $('.table-body .hidden-xs .announcementCheck').length) {
            $(".teachers-wrapper #announcementCheckbox")[0].checked = true;
        }
        $('.teachers-wrapper #schedulingAnnouncement').slideDown();
        console.log($('.table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length);
        if ($('.teachers-wrapper .table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length === 0) {
            $('.teachers-wrapper #schedulingAnnouncement').slideUp();
        }
    });

    /*--  Send Status  --*/
    $('.teachers-wrapper #selectStatus').hide();
    $('.teachers-wrapper .table-header .table-column .status-checked').on('click', function (e) {
        e.stopPropagation();
        selectStatusWrapper();
    });
    function selectStatusWrapper() {
        $('.teachers-wrapper #selectStatus').slideToggle();
        $('.teachers-wrapper .select-status-wrapper .select-status-action .select-close').on('click', function () {
            $('.teachers-wrapper #selectStatus').slideUp();
        });
    }

    /*--  On Click Row Redirecting to New Teacher Page  --*/
    $('.teachers-wrapper .table-body .row .table-column').on('click', function () {
        window.location.href = 'new-teacher.html';
    });

});

