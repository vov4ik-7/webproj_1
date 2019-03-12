$(document).ready(function () {
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

    $( window ).resize(function() {
        setHeight();
    });

});