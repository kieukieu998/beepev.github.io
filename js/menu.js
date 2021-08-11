
$(document).ready(function(){
    $('.header .menu-list ul.main-menu li a.main-link').click(function(){
        $('li a.main-link').removeClass("active");
        $(this).addClass("active");
    });
});