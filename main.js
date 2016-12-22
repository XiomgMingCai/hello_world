var minSize = 5;
var maxSize = 50;
var newOn = 200;
var flaceColor = 'red';

var flake = $('<div></div>').css({
    'position': 'absolute',
    'top': '-50px'
}).html('❄');

;$(function () {
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();

    setInterval(function () {
        var startPostionLeft = Math.random() * documentWidth;
        var startOpacity = 0.7 + Math.random() * 0.3;
        var endPositionTop = documentHeight;
        var endPositionLeft = Math.random() * documentWidth;
        var durationFall = 2000 + Math.random() * 3000;
        var sizeFlake = maxSize + Math.random() * maxSize;

        flake.clone().appendTo('body').css({
            "left": startPostionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": flaceColor
        }).animate({
            "top": endPositionTop,
            "left": endPositionLeft,
            "opacity": 0.5

        }, durationFall)
    }, newOn)
})