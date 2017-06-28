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



let showInner;

$(".a.right:first-child").hover(
    // On mouse in
    function () {
        let animLength = 1200;
        anime({
            targets: '.dottie',
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
            if ($(".a.right:first-child").hasClass("selected")) {
                $(".aboutinner").css("visibility", "visible");
                $(".aboutinner").css("opacity", "1");
                $("body").css("background-color", "#000990");
                $("#about").css("color", "white");
            }
        }, animLength)
    },

    // On mouse out
    function () {
        clearTimeout(showInner);
        $(".aboutinner").css("visibility", "hidden");
        $("body").css("background-color", "white");
        $("#about").css("color", "black");

        anime.remove(".dottie");
        anime({
            targets: '.dottie',
            width: [
                { value: "0px", duration: 2 }
            ],
            height: [
                { value: "20px", duration: 2 }
            ],
            backgroundColor: '#000',
            duration: 100,
            loop: false
        })

    }
)