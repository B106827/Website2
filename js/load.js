$(function(){
    setTimeout(function(){
        $('#load').fadeOut();
    },10000);
});

$(function(){
    setTimeout(function(){
        $('#mainwrap').css({opacity:'0'});
        $('#mainwrap').css('display','block');
        $('#mainwrap').animate({opacity:'1'},2000);
    },10000);
});