var aboutItem = ".a.right:first-child";
var aboutWindow = ".about-inner";
var portfolioItem = ".a.right:nth-child(2)";
var portfolioWindow = ".portfolio-inner";
var selectedItem = "";
var selectedWindow = "";
var backBtn = $(".backbtn");
var animLength = 1000;
var inFocus = false;
var lock = false;
var showInnerTO;

// Animations

function leftWindowAnimation(animLength, bgColor) {
  anime({
    targets: ".dottie",
    height: [
      { value: "20px", duration: ((2*animLength)/3) },
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

  inFocus = false;
  leftWindowOutAnimation();
  clearTimeout(showInnerTO);
  hideInner(selectedItem, selectedWindow);
})

function toggleBackBtn() {
  if (backBtn.css("display") == "none"){
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
    backBtn.css("display", "none")
  }
  
}

function showInner(item, $window, bodyColor, animLength) {
  showInnerTO = setTimeout(function () {
    if ($(item).hasClass("selected")) {
      $($window).css("display", "block");
      $($window).css("opacity", "1");
      $("body").css("background-color", bodyColor);
      $(item).css("color", "white");
      inFocus = true;


      lock = true;
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

  if (!lock) {
    $(item).click(
      // On mouse in
      function () {
        if (!inFocus) {
          $(this).addClass("selected");
          $(".container").css("transform", "scale(0.8)");
          $("span:not(.selected)").css("filter", "blur(3px)");

          selectedItem = item;
          selectedWindow = $window;
          leftWindowAnimation(animLength, windowColor);
          showInner(item, $window, bodyColor, animLength, lock);
        }
      }
    );
  }

}

leftWindow(aboutItem, aboutWindow, "#000", "#000990");
leftWindow(portfolioItem, portfolioWindow, "#ff7b00", "#ff7b00");


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

