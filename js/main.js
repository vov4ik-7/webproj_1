$(document).ready(function () {

    let contArr = ['welcome','cont1', 'cont2'];
    let currIndx = 0;

    setHeight();

    function setHeight(){
        let body = $(window).height();
        let nav = $("nav:first");
        let jumbotron =  $( ".jumbotron" ).first();

        jumbotron.height(body - nav.height() - 16);

        console.log(body);
        console.log(nav.height());
        console.log(jumbotron.height());
        console.log('-----------------------');
    }

    function scrollToAnchor(aid){
        var aTag = $("#"+ aid);
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }


    $( window ).resize(function() {
        setHeight();
    });

    $('.carousel').carousel({interval: 3000});

    $('#downbtn').click(function () {
        scrollToAnchor('cont1');
    });

    let prevScroll = 0;
    let currScroll;
    $(window).on('scroll', function () {
        var hasBeenTrigged = false;
        currScroll = window.pageYOffset || document.documentElement.scrollTop;
        if(currScroll == 0){
            currIndx = 0;
        }
        console.log(currScroll);
        if(currScroll > prevScroll){
            if(currScroll - prevScroll >= 30 && !hasBeenTrigged){
                hasBeenTrigged = true;
                currIndx++;
                scrollToAnchor(contArr[currIndx]);
                prevScroll = $("#"+ contArr[currIndx]).offset().top;
                console.log('kek');
                console.log(prevScroll);
                //$(this).off('scroll');
            }
        }
        /*else if(prevScroll > currScroll){
            if(prevScroll - currScroll == 50 && !hasBeenTrigged){
                hasBeenTrigged = true;
                currIndx--;
                scrollToAnchor(contArr[currIndx]);
                prevScroll = $("#"+ contArr[currIndx]).offset().top;
                console.log('lol');
                console.log(prevScroll);
                //$(this).off('scroll');
            }
        }*/
    });
});