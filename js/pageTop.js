$(function () {
    var btn = $("#top");
    btn.hide();

    $(window).scroll(function () {
        if($(this).scrollTop() > 80){
            btn.fadeIn();
        }else {
            btn.fadeOut();
        }
    });

    btn.click(function () {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
    });
});