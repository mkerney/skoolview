$(document).ready(function () {

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

});

