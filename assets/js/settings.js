$(document).ready(function () {
    //Subject-wise Attendance ICON Multiple check JS
    $("#checkboxSubjectwise").change(function () {
        var status = this.checked;
        $('.checkbox-subject').each(function () {
            this.checked = status;
        });
    });
    $('.checkbox-subject').change(function () {
        if (this.checked == false) {
            $("#checkboxSubjectwise")[0].checked = false;
        }
        if ($('.checkbox-subject:checked').length == $('.checkbox-subject').length) {
            $("#checkboxSubjectwise")[0].checked = true;
        }
    });
    
    
    //Parent Chat Room ICON Multiple check JS
    $("#checkboxParentChatRoom").change(function () {
        var status = this.checked;
        $('.checkbox-parent').each(function () {
            this.checked = status;
        });
    });
    $('.checkbox-parent').change(function () {
        if (this.checked == false) {
            $("#checkboxParentChatRoom")[0].checked = false;
        }
        if ($('.checkbox-parent:checked').length == $('.checkbox-parent').length) {
            $("#checkboxParentChatRoom")[0].checked = true;
        }
    });
});

