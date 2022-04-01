    function autoclock(){

    var today = new Date()
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()

    // 아침(morning) 6 ~ 11:59
    // 오후(afternoon) 12 ~ 17:59
    // 저녁(evening) 18 ~ 23:59
    // 밤(night) 00 ~ 5:59
    if (hour>=6 && hour<12 && !$('#wrap').hasClass('morning')) {
        $('#wrap').removeClass().addClass('morning')
        $('nav li').eq(0).addClass('on').siblings().removeClass('on')
    } else if (hour>=12 && hour<18 && !$('#wrap').hasClass('afternoon')){
        $('#wrap').removeClass().addClass('afternoon')
        $('nav li').eq(1).addClass('on').siblings().removeClass('on')
    } else if (hour>=18 && hour<24&& !$('#wrap').hasClass('evening')){
        $('#wrap').removeClass().addClass('evning')
        $('nav li').eq(2).addClass('on').siblings().removeClass('on')
    } else if (hour>=0 && hour<6 && !$('#wrap').hasClass('night')) {
        $('#wrap').removeClass().addClass('night')
        $('nav li').eq(3).addClass('on').siblings().removeClass('on')
    }

    // 시간 숫자 바뀌게 하기
    if (hour>=0 && hour<=9) {hour = '0'+hour}
    if (min>=0 && min<=9) {min = '0'+min}
    if (sec>=0 && sec<=9) {sec = '0'+sec}
    $('figure span').eq(0).text(hour)
    $('figure span').eq(1).text(min) 
    $('figure span').eq(2).text(sec)

}

autoclock()
var timer = setInterval(autoclock, 1000)

$('nav li').on('click', function(){
    clearInterval(timer)
    var text = $(this).find('a').text()
    $('#wrap').removeClass().addClass(text)
    $(this).addClass('on').siblings().removeClass('on')
    if (!$(this).parent().hasClass('on')) {
        $(this).parent().addClass('on')
        $('figure p').append('<div class="play">play</div>')
        $('.play').css({position: 'absolute', bottom: '-100px', 
                        right: '0', zIndex: '99999'})
    }
})

$('figure p').on('click', '.play', function() {
    $('nav ul').removeClass('on')
    timer =  setInterval(autoclock, 1000)
    $(this).remove()
})