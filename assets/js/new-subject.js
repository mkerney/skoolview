$(document).ready(function () {
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
});