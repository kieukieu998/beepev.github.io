function call_modal() {
    $('.modal-show').css('display', 'block');

    $('.modal-show').css('opacity', 1);
    $('.modal-show').css('transform', 'scale(1)');
    $('.modal-show').css('visibility', 'visible');
    $('.modal-show').css('transition', 'all 0.75s cubic-bezier(0.19, 1, 0.22, 1)');

}

function hide_modal() {
    //$('.modal-show').css('display','none');
    $(".modal-show").slideToggle("hide");

}