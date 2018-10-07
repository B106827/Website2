$(document).ready(function(){
    $('a[href^=#]').click(function(){
        // スクロール速度
        var speed = 400;
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先
        var target = $(href === "#" || href === "" ? "html" : href);
        // ナビゲーションの高さ取得
        var height = $('.mainnavwrap').height();
        // 移動先を数値で取得
        var position = target.offset().top-height;
        // スクロール
        $("body,html").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});