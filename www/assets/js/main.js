var aboutItem = ".a.right:first-child";
var aboutWindow = ".about-inner";
var portfolioItem = ".a.right:nth-child(2)";
var portfolioWindow = ".portfolio-inner";
var selectedItem = "";
var selectedWindow = "";
var backBtn = $(".backbtn");
var animLength = 1000;
var lock = false;
var showInnerTO;

// Animations

function leftWindowAnimation(animLength, bgColor) {
  anime({
    targets: ".dottie",
    height: [
      { value: "20px", duration: ((2 * animLength) / 3) },
      { value: "600px", duration: animLength }
    ],
    width: [{ value: "600px", duration: animLength }],
    translateX: [{ value: "-32%", duration: 200 }],
    backgroundColor: bgColor,
    duration: animLength,
    loop: false
  });
}

function leftWindowOutAnimation() {
  anime.remove(".dottie");
  anime({
    targets: ".dottie",
    width: [{ value: "0px", duration: 2 }],
    height: [{ value: "20px", duration: 2 }],
    backgroundColor: "#000",
    duration: 100,
    loop: false
  });
}

backBtn.on("click", function () {
  lock = false;

  $(selectedItem).removeClass("selected");
  $("span:not(.selected)").css("filter", "blur(0)");
  $(".container").css("transform", "scale(1)");

  toggleBackBtn();

  leftWindowOutAnimation();
  clearTimeout(showInnerTO);
  hideInner(selectedItem, selectedWindow);
})

function toggleBackBtn() {
  if (backBtn.css("display") == "none") {
    backBtn.css("display", "block")
    backBtn.css("opacity", "0")
    anime({
      targets: ".backbtn",
      opacity: 1,
      duration: 2000,
      delay: 500,
      loop: false
    })
  } else {
    if (!lock) {
      backBtn.css("display", "none")
    }

  }

}

function showInner(item, $window, bodyColor, animLength) {
  showInnerTO = setTimeout(function () {
    if ($(item).hasClass("selected")) {
      $($window).css("display", "block");
      $($window).css("opacity", "1");
      $("body").css("background-color", bodyColor);
      $(item).css("color", "white");

      toggleBackBtn();
    }
  }, animLength);
}

function hideInner(item, $window) {
  $($window).css("display", "none");
  $("body").css("background-color", "white");
  $(item).css("color", "black");
}



function leftWindow(item, $window, windowColor, bodyColor) {

  $(item).click(
    // On mouse in
    function () {
      if (!lock) {
        lock = true;
        $(this).addClass("selected");
        $(".container").css("transform", "scale(0.8)");
        $("span:not(.selected)").css("filter", "blur(3px)");

        selectedItem = item;
        selectedWindow = $window;
        leftWindowAnimation(animLength, windowColor);
        showInner(item, $window, bodyColor, animLength, lock);

      }
    }
  )
}

leftWindow(aboutItem, aboutWindow, "#000", "#2c3e50");
leftWindow(portfolioItem, portfolioWindow, "#e67e22", "#e67e22");


// Portfolio data

var portfolioInner = document.querySelector(".portfolio-inner ul");
var portfolio = [
  {
    name: "freeCodeCamp",
    description: "<p>All kinds of simple web apps. Some are games, others are utilities.</p><p>Made with CSS, JS and <i>love.</i></p><i>Cool presentation coming soon.</i>",
    links: [{
      github: "https://github.com/erosilk/fcc-projects"
    }]
  },
  {
    name: "Gritour",
    description: "<p>I made the website for Gritour: a Freelancer Tour Guide from Buenos Aires, Argentina. <p>I also designed her logo</p>",
    links: [{
      link: "http://www.gritour.com.ar"
    }]
  },
  {
    name: "BOTW Check",
    description: "<p>The latest Zelda game is going to be available for PC (via emulation)!</p><p>This website will notify you when emulation reaches an stable status.</p>SUCCESS! More than 2.000 people suscribed in less than two weeks.",
    links: [{
      link: "http://botwcheck.cf/"
    },
    {
      github: "https://github.com/erosilk/BOTWCheck"
    }]
  },
]

portfolio.forEach(el => {
  var links = "";

  el.links.forEach(obj => {
    let key = Object.keys(obj)[0];
    links += '<a target="_blank" href="' + obj[key] + '"><i class="icon-' + key + '"></i></a>'
  })

  portfolioInner.innerHTML += '<li><div class="portfolio-project"><div class="project-main">' + el.name + '<div class="project-links">' + links + '</div></div><div class="description">' + el.description + '</div></div></li>';
})

// Party Mode

var ogBody = $("body").css("background-color");
var ogGiantText = $(".gianttext").css("color");
var ogGiantTextOpacity = $(".gianttext > span").css("opacity");
var ogGiantTextFont = $(".gianttext").css("font-family");
var isPlaying = false;
var discoTimeOut;
var initialDisclaimer = $(".disclaimer").html();

var song = new Howl({
  src: ['https://crossorig.in/http://alicemp3.su/mp3/bodca370dmc96c3u8452fbbn47dy3v8b4c44b7dy6b7va84u14en692vb4cm4599.mp3'],
  volume: 0.5,
  loop: true,
  preload: false
});

$("#partyBtn").on('click', function () {

  song.load();
  if (!isPlaying) {
    let isLoading = true;
    $("#partyBtn").html("Loading...");

    if (!isPlaying || (!isPlaying && isLoading)) {
      song.play();
    }

    song.on('play', function () {
      isPlaying = true;
      isLoading = false;


      clearTimeout(discoTimeOut);
      discoMode();
      $(".a:not(#partyBtn)").css("display", "none");
    })

    return
  }
  discoReset();

})

function discoReset() {
  $(".a:not(#partyBtn)").css("display", "block");

  isPlaying = false;
  isLoading = false;

  $("body").css("background-color", ogBody);
  $("body").css("transition", "1s ease all");

  $(".gianttext").css("color", ogGiantText);
  $(".gianttext > span").css("opacity", ogGiantTextOpacity);
  $(".gianttext").css("font-family", ogGiantTextFont);

  $("#partyBtn").css("position", "initial")
  $("#partyBtn").css("color", "initial")
  $("#partyBtn").css("font-size", "19px")
  $("#partyBtn").html("Disco mode")

  $(".disclaimer").html(initialDisclaimer);
  $(".disclaimer").css("color", "rgba(0, 0, 0, 0.28)")

  song.stop();
  clearTimeout(discoTimeOut);

}

function discoMode() {

  $("#partyBtn").html("STOP!");
  $("#partyBtn").css("color", "#ecf0f1")
  $("#partyBtn").css("position", "absolute")
  $("#partyBtn").css("top", "-290px")
  $("#partyBtn").css("left", "-180px")
  $("#partyBtn").css("font-size", "40px")

  $(".disclaimer").html("song made by Siriusmo!")

  if (isPlaying) {
    let altBody = "#e74c3c";
    let altText = "#ecf0f1";
    let textFont = "Permanent Marker";

    toggleColors();

    function toggleColors() {

      $("body").css("transition", "none");

      if ($("body").css("background-color") === ogBody) {
        $("body").css("background-color", altBody);
        $(".gianttext").css("color", altText);
        $(".gianttext > span").css("opacity", "1");
        $(".gianttext").css("font-family", textFont);
        $("#partyBtn").css("color", altText);
        $(".disclaimer").css("color", altText)

      } else {
        $("body").css("background-color", ogBody);
        $(".gianttext").css("color", ogGiantText);
        $(".gianttext > span").css("opacity", ogGiantTextOpacity);
        $(".gianttext").css("font-family", ogGiantTextFont);
        $("#partyBtn").css("color", "#e74c3c");
        $(".disclaimer").css("color", "#e74c3c");
      }

      discoTimeOut = setTimeout(toggleColors, 500)
    }

    function bounceText() {

    }

  }

}