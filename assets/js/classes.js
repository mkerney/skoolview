$(document).ready(function () {

    /*--  Announcement Multiple check  --*/
    $(".parents-wrapper #schedulingAnnouncement").slideUp();
    $(".parents-wrapper #announcementCheckbox").change(function () {
        $('.parents-wrapper #schedulingAnnouncement').slideDown();
        var status = this.checked;
        if (this.checked === false) {
            $('.parents-wrapper #schedulingAnnouncement').slideUp();
        }
        $('.parents-wrapper .announcementCheck').each(function () {
            this.checked = status;
        });
    });

    /*--  Change Function  --*/
    $('.parents-wrapper .table-body .announcementCheck').change(function () {
        if (this.checked === false) {
            $(".parents-wrapper #announcementCheckbox")[0].checked = false;
        }
        console.log($('.table-body .hidden-xs .announcementCheck').length);
        if ($('.parents-wrapper .table-body .first-table-column .announcementCheck:checked').length === $('.table-body .hidden-xs .announcementCheck').length) {
            $(".parents-wrapper #announcementCheckbox")[0].checked = true;
        }
        $('.parents-wrapper #schedulingAnnouncement').slideDown();
        console.log($('.table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length);
        if ($('.parents-wrapper .table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length === 0) {
            $('.parents-wrapper #schedulingAnnouncement').slideUp();
        }
    });

    /*--  Send Status  --*/
    $('.parents-wrapper #selectStatus').hide();
    $('.parents-wrapper .table-header .table-column .status-checked').on('click', function (e) {
        e.stopPropagation();
        selectStatusWrapper();
    });
    function selectStatusWrapper() {
        $('.parents-wrapper #selectStatus').slideToggle();
        $('.parents-wrapper .select-status-wrapper .select-status-action .select-close').on('click', function () {
            $('.parents-wrapper #selectStatus').slideUp();
        });
    }

});

