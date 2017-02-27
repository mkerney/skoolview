$(document).ready(function () {

    /*--  Announcement Multiple check  --*/
    $(".students-wrapper #schedulingAnnouncement").slideUp();
    $(".students-wrapper #announcementCheckbox").change(function () {
        $('.students-wrapper #schedulingAnnouncement').slideDown();
        var status = this.checked;
        if (this.checked === false) {
            $('.students-wrapper #schedulingAnnouncement').slideUp();
        }
        $('.students-wrapper .announcementCheck').each(function () {
            this.checked = status;
        });
    });

    /*--  Change Function  --*/
    $('.students-wrapper .table-body .announcementCheck').change(function () {
        if (this.checked === false) {
            $(".students-wrapper #announcementCheckbox")[0].checked = false;
        }
        console.log($('.table-body .hidden-xs .announcementCheck').length);
        if ($('.students-wrapper .table-body .first-table-column .announcementCheck:checked').length === $('.table-body .hidden-xs .announcementCheck').length) {
            $(".students-wrapper #announcementCheckbox")[0].checked = true;
        }
        $('.students-wrapper #schedulingAnnouncement').slideDown();
        console.log($('.table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length);
        if ($('.students-wrapper .table-body .first-table-column .custom-check .checkbox-inline .announcementCheck:checked').length === 0) {
            $('.students-wrapper #schedulingAnnouncement').slideUp();
        }
    });

    /*--  Send Status  --*/
    $('.students-wrapper #selectStatus').hide();
    $('.students-wrapper .table-header .table-column .status-checked').on('click', function (e) {
        e.stopPropagation();
        selectStatusWrapper();
    });
    function selectStatusWrapper() {
        $('.students-wrapper #selectStatus').slideToggle();
        $('.students-wrapper .select-status-wrapper .select-status-action .select-close').on('click', function () {
            $('.students-wrapper #selectStatus').slideUp();
        });
    }

    /*--  On Click Row Redirecting to New Teacher Page  --*/
    $('.students-wrapper .table-body .row .table-column').on('click', function () {
        window.location.href = 'new-student.html';
    });

});

