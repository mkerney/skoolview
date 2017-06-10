$(document).ready(function () {
    $(".mark-present").click(function () {
        $('.students-wrapper #schedulingAnnouncement').slideDown();
//        $(".students-wrapper #announcementCheckbox").trigger('change');
        $(".students-wrapper #announcementCheckbox").prop('checked',true);
        $(".students-wrapper .announcementCheck").prop('checked',true);
        $(".students-wrapper .switch .cmn-toggle").prop('checked',true);
    });
    $(".mark-absent").click(function () {
        $('.students-wrapper #schedulingAnnouncement').slideUp();
//        $(".students-wrapper #announcementCheckbox").trigger('change');
        $(".students-wrapper #announcementCheckbox").prop('checked',false);
        $(".students-wrapper .announcementCheck").prop('checked',false);
        $(".students-wrapper .switch .cmn-toggle").prop('checked',false);
    });

    /*--  On Click Row Redirecting to New Teacher Page  --*/
    $('.students-wrapper .table-body .row .table-column').on('click', function () {
        window.location.href = 'student-info.html';
    });
});


