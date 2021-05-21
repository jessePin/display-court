// (() => {
//     document.querySelector('#video').play();
// })();

$(document).ready(function () {
    var s_saver;
    $('.container-fluid').addClass('d-none');
    // $('video').click(function () {
    //     console.log('000')
    //     $('#video').fadeOut(100);
    //     $('.container').removeClass('d-none');
    // });
    $('body').bind('touchstart', function(){
        clearTimeout(s_saver);
        $('#video').fadeOut(100);
        $('#video').trigger('pause');
        $('.container-fluid').removeClass('d-none');
        // console.log('111')
    }).bind('touchend', function(){
        s_saver = setTimeout(function () {
            // console.log('222')
            // if($('#video').prop('muted', true)){
            //     $('#video').prop('muted', false);
            //     $('#video').fadeIn(100);
            //     $('#video').trigger('play');
            // }
            $('#video').fadeIn(100);
            $('#video').trigger('play');
            $('.container-fluid').addClass('d-none');
        }, 60000);
    });
});