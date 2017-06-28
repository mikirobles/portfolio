$(".a.right").hover(
    function () {
        $(this).addClass("selected");
        $(".container").css("transform", "scale(0.8)");
        $('span:not(.selected)').css("filter", "blur(3px)");
    },
    function () {
        $(this).removeClass("selected");
        $('span:not(.selected)').css("filter", "blur(0)");
        $(".container").css("transform", "scale(1)");
    }
)

$("#about").hover(
    function () {
        $(this).css("color", "white");
        $("body").css("background-color", "#000990");
    },
    function () {
        $(this).css("color", "black");
        $("body").css("background-color", "#FFF");
    }
)



let showInner;

$(".a.right:first-child").hover(
    function () {
        let animLength = 1200;
        anime({
            targets: '.dottie',
            borderRadius: [
                { value: 0, duration: 1 }
            ],
            height: [
                { value: '20px', duration: 900 },
                { value: '600px', duration: animLength }
            ],
            width: [
                { value: '600px', duration: animLength }
            ],
            translateX: [
                { value: "-32%", duration: 200 }
            ],
            backgroundColor: '#000',
            duration: animLength,
            loop: false
        });

        showInner = setTimeout(function () {
            if ($(".a.right:first-child").hasClass("selected")){
                $(".aboutinner").css("visibility", "visible");
                $(".aboutinner").css("opacity", "1");
            }
        }, animLength)
    },
    function () {

        clearTimeout(showInner);
        $(".aboutinner").css("visibility", "hidden");       

        anime.remove(".dottie");
        anime({
            targets: '.dottie',
            width: [
                { value: "0px", duration: 100 }
            ],
            height: [
                { value: "20px", duration: 100 }
            ],
            borderRadius: [
                { value: 0, duration: 700 },
                { value: 10, duration: 100 },
            ],
            backgroundColor: '#000',
            duration: 1000,
            loop: false
        })

    }
)