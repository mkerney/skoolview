$(document).ready(function () {

    /*--  Checkbox Class Change Function  --*/
    $(".class-section .checbox-class").change(function () {
        var status = this.checked;
        if (status === true) {
            $(this).parents('.class-section').find(".checkbox-section").prop("checked", status);
        } else {
            $(this).parents('.class-section').find(".checkbox-section").prop("checked", status);
        }
    });

    /*--  Checkbox Section Change Function  --*/
    $('.checkbox-section').change(function () {
        if (this.checked === false) {
            $(this).parents("li").siblings("li").find(".checbox-class")[0].checked = false;
        }
        console.log($(this).parents("li").siblings("li").find('.checkbox-section:checked').length);
        if (($(this).parents("ul").children("li").find('.checkbox-section:checked').length) === ($(this).parents("ul").children("li").length - 1)) {
            $(this).parents("li").siblings("li").find(".checbox-class")[0].checked = true;
        }
    });
});


