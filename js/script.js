
/*function scroll(id){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1000);
    }
}*/

var border = "4px solid #C90034"


document.addEventListener("DOMContentLoaded", function (event) {

    var numact = false;


     $("#whatsapp").click(function() {
        if (numact === false){
            $('#number').css("opacity", "1");
            numact = true
        } else {
            $('#number').css("opacity", "0");
            numact = false
        }
    });

       $("#whatsapp").hover(function() {
            $('#number').css("opacity", "1");
    }, function(){
            if (!numact){ $('#number').css("opacity", "0")};
    });


     $("#whoami, #menuabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#me").offset().top
        }, 700, "swing");
    });

    $("#menumain").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700, "swing");
    });


    $("#menustuff").click(function() {
        $('html, body').animate({
            scrollTop: $("#stuff").offset().top
        }, 700, "swing");
    });




            /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /*$(window).bind('mousewheel', function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                $('html, body').animate({
            scrollTop: 0
        }, 700, "swing");
            }
            else {
                $('html, body').animate({
            scrollTop: $("#me").offset().top
        }, 700, "swing");
            }
        });*/

    
        $('.mecard, .me2card').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        });

        $('.stuffcard').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object + 100 ){
                $(this).animate({'opacity':'1'},1000);
            }
        });


        if ($(window).scrollTop() == 0){
            $("#header").css("opacity", '0')
        } else if ($(window).scrollTop() > 0 && ($(window).scrollTop() < ($("#intro").offset().top + $("#intro").outerHeight()))) {
            $("#header").css("opacity", '1')
            $("#menumain").css("border-bottom", border)
            $("#menuabout").css("border-bottom", '0px solid white')
            $("#menustuff").css("border-bottom", '0px solid white')

        } else if ($(window).scrollTop() >= ($("#intro").offset().top + $("#intro").outerHeight()) && ($(window).scrollTop() < ($("#me").offset().top + $("#me").outerHeight()))){
            $("#header").css("opacity", '1')
            $("#menumain").css("border-bottom", '0px solid white')
            $("#menuabout").css("border-bottom", border)
            $("#menustuff").css("border-bottom", '0px solid white')
        } else if ($(window).scrollTop() >= ($("#me").offset().top + $("#me").outerHeight()) && ($(window).scrollTop() < ($("#stuff").offset().top + $("#stuff").outerHeight()))){
            $("#header").css("opacity", '1')
            $("#menumain").css("border-bottom", '0px solid white')
            $("#menuabout").css("border-bottom", '0px solid white')
            $("#menustuff").css("border-bottom", border)
        }


    
    });

    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

})