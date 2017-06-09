$(document).ready(function () {
    $(".mark-present").click(function () {
        $('.students-wrapper #schedulingAnnouncement').slideDown();
        $('#announcementCheckbox').prop('checked');
    });
    $(".mark-absent").click(function () {
        $('.students-wrapper #schedulingAnnouncement').slideUp();
        $('#announcementCheckbox').prop('checked');
    });
});


