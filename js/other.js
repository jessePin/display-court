$(document).ready(function() {
    var s_saver;
    $('body').bind('touchstart', function(){
        clearTimeout(s_saver);
    }).bind('touchend', function(){
        s_saver = setTimeout(function () {
            window.location.href = "index.html";
        }, 60000);
    });
})

