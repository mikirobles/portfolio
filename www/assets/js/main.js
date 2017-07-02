var aboutItem = ".a.right:first-child";
var aboutWindow = ".about-inner";
var portfolioItem = ".a.right:nth-child(2)";
var portfolioWindow = ".portfolio-inner";
var animLength = 1200;

$(".a.right").hover(
  function() {
    $(this).addClass("selected");
    $(".container").css("transform", "scale(0.8)");
    $("span:not(.selected)").css("filter", "blur(3px)");
  },
  function() {
    $(this).removeClass("selected");
    $("span:not(.selected)").css("filter", "blur(0)");
    $(".container").css("transform", "scale(1)");
  }
);

function leftWindowAnimation(animLength, bgColor) {
  anime({
    targets: ".dottie",
    height: [
      { value: "20px", duration: 900 },
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

function showInner(item, window, bodyColor, animLength) {
  setTimeout(function() {
    if ($(item).hasClass("selected")) {
      $(window).css("visibility", "visible");
      $(window).css("opacity", "1");
      $("body").css("background-color", bodyColor);
      $(item).css("color", "white");
    }
  }, animLength);
}

function hideInner(item, window) {
  $(window).css("visibility", "hidden");
  $("body").css("background-color", "white");
  $(item).css("color", "black");
}

function leftWindow(item, window, windowColor, bodyColor) {
  $(item).hover(
    // On mouse in
    function() {
      leftWindowAnimation(animLength, windowColor);
      showInner(item, window, bodyColor, animLength);
    },
    // On mouse out
    function() {
      leftWindowOutAnimation();
      clearTimeout(showInner);
      hideInner(item, window);
    }
  );
}

leftWindow(aboutItem, aboutWindow, "#000", "#000990");
leftWindow(portfolioItem, portfolioWindow, "#FFF", "#ff7b00");

