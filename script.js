$(document).ready(function () {

    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./images/car.png', './images/car_headlight.png'];

    //move car

    $(document).on('keypress', function (e) {
        if (e.which == 32) {
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })

    //lights

    $(document).on('keypress', function (e) {
        if (e.which == 108) {
            if (flag) {
                flag = false;
                $('img').attr('src', cars[0]);
            }
            else {
                flag = true;
                $('img').attr('src', cars[1]);
            }
        }
    })
});