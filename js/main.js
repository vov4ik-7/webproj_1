$(document).ready(function () {

    $("nav:first").height(20);

    function setHeight(){
        let body = $(window).height();
        let nav = $("nav:first");
        let jumbotron =  $( ".jumbotron" ).first();

        if(isCompressed){
            nav.height(body * 0.1);
            jumbotron.height((body * 0.9) - 20);

            console.log(body * 0.1);
            console.log((body * 0.9) - 20);
            console.log('-------------------');
        }else {
            nav.height(body * 0.1);
            jumbotron.height((body * 0.9) - 4);

            console.log(body * 0.1);
            console.log((body * 0.9) - 4);
            console.log('-------------------');
        }
    }

    let isCompressed = false;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 20) {
            $('.navbar').addClass('compressed');
            isCompressed = true;
        } else {
            $('.navbar').removeClass('compressed');
            isCompressed = false;
        }
    });

    $( window ).resize(function() {
        console.log($(window).height());
        //setHeight();
    });

});