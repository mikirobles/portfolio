var aboutItem = ".a.right:first-child";
var aboutWindow = ".about-inner";
var portfolioItem = ".a.right:nth-child(2)";
var portfolioWindow = ".portfolio-inner";
var backBtn = $(".backbtn");
var animLength = 1200;
var inFocus = false;
var lock = false;
var showInnerTO;

backBtn.on("click", function () {
  lock = false;

  $(portfolioItem).removeClass("selected");
  $("span:not(.selected)").css("filter", "blur(0)");
  $(".container").css("transform", "scale(1)");

  backBtn.css("display", "none")
  backBtn.css("opacity", "0")

  inFocus = false;
  leftWindowOutAnimation();
  clearTimeout(showInnerTO);
  hideInner(portfolioItem, portfolioWindow);
})



function showInner(item, window, bodyColor, animLength) {
  showInnerTO = setTimeout(function () {
    if ($(item).hasClass("selected")) {
      $(window).css("visibility", "visible");
      $(window).css("opacity", "1");
      $("body").css("background-color", bodyColor);
      //backBtn.css("transform", "scale(1.2)");
      $(item).css("color", "white");
      inFocus = true;

      if (item == portfolioItem) {
        lock = true;
        backBtn.css("display", "block")

        anime({
          targets: ".backbtn",
          opacity: 1,
          duration: 2000,
          delay: 500,
          loop: false
        })

      }
    }
  }, animLength);
}

function hideInner(item, window) {
  $(window).css("visibility", "hidden");
  $("body").css("background-color", "white");
  $(item).css("color", "black");
}



function leftWindow(item, window, windowColor, bodyColor) {

  if (!lock) {
    $(item).hover(
      // On mouse in
      function () {
        if (!inFocus) {
          $(this).addClass("selected");
          $(".container").css("transform", "scale(0.8)");
          $("span:not(.selected)").css("filter", "blur(3px)");

          leftWindowAnimation(animLength, windowColor);
          showInner(item, window, bodyColor, animLength, lock);
        }
      },
      // On mouse out
      function () {
        if (!lock) {
          $(this).removeClass("selected");
          $("span:not(.selected)").css("filter", "blur(0)");
          $(".container").css("transform", "scale(1)");
          backBtn.css("display", "none");
          backBtn.css("opacity", "0");

          inFocus = false;
          leftWindowOutAnimation();
          clearTimeout(showInnerTO);
          hideInner(item, window);
        }
      }
    );
  }

}

leftWindow(aboutItem, aboutWindow, "#000", "#000990");
leftWindow(portfolioItem, portfolioWindow, "#FFF", "#ff7b00");


// Portfolio data

var portfolioInner = document.querySelector(".portfolio-inner ul");
var portfolio = [
  {
    name: "freeCodeCamp",
    description: "<p>All kinds of simple web apps. Some are games, others are utilities.</p><p>Made with JS, React and <i>love.</i></p>",
    links: [{
      github: "https://github.com/erosilk/fcc-projects",
    }]
  },
  {
    name: "Gritour Website + Logo",
    description: "<p>I made the website for Gritour: a Freelancer Tour Guide from Buenos Aires, Argentina. <p>I also designed her logo</p>",
    links: [{

    }]
  },
  {
    name: "BOTW Check",
    description: "<p>The latest Zelda game is going to be available for PC (via emulation)!</p><p>This website will notify you when emulation reaches an stable status.</p>SUCCESS! More than 2.000 people suscribed in less than two weeks."
  },
]

portfolio.forEach(el => {
  portfolioInner.innerHTML += '<li><div class="portfolio-project"><div class="project-main">' + el.name + '<div class="project-links"><i class="icon-facebook"></i></div></div><div class="description">' + el.description + '</div></div></li>';
})

// Animations

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