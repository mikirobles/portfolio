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


$(".a.right:first-child").hover(
    function () {
        anime({
            targets: '.about',
            borderRadius: [
                { value: 0, duration: 1 }
            ],
            scaleY: [
                { value: 1, duration: 900 },
                { value: 60, duration: 1200 }
            ],
            scaleX: [
                { value: 60, duration: 1200 }
            ],
            translateX: [
                { value: -3.2, duration: 200 }
            ],
            backgroundColor: '#000',
            duration: 1200,
            loop: false
        });
    },
    function () {
        anime.remove(".about");
        anime({
            targets: '.about',
            scaleY: [
                { value: 1, duration: 1000 }
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