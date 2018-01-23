function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function() {
      callback();
    };
  }
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
  function() {
    var projectsUl = $(".fcc-projects")[0];

    var fccProjects = [
      {
        name: "Camper Leaderboard",
        description: "My first project using <strong>Next.js</strong>!",
        links: [
          {
            link: "https://leaderboard-bneujobbvj.now.sh"
          },
          {
            github: "https://github.com/mikirobles/camper-leaderboard"
          }
        ]
      },
      {
        name: "Recipe Box",
        description:
          "Keep your recipes in this user friendly app. They will be saved in your localStorage!. <br> <br>Made with <strong>React.</strong>",
        links: [
          {
            link: "https://mikirobles.github.io/recipe-box/"
          },
          {
            github: "https://github.com/mikirobles/recipe-box"
          }
        ]
      },
      {
        name: "Markdown Previewer",
        description:
          "Write your README's in this fast-loading <i>(and featureless)</i> Markdown Previewer!. <br> <br> Made with <b>React.</b>",
        links: [
          {
            link: "https://mikirobles.github.io/markdown-previewer-build/"
          },
          {
            github: "https://github.com/mikirobles/markdown-previewer"
          }
        ]
      },
      {
        name: "Wikipedia<br>Viewer",
        description:
          "Blazingly fast Wikipedia searching, with a cool intro animation!",
        links: [
          {
            link: "https://mikirobles.github.io/wikipedia-viewer/"
          },
          {
            github: "https://github.com/mikirobles/wikipedia-viewer"
          }
        ]
      },
      {
        name: "Tic Tac Toe",
        description:
          "Play against a friend or my <strike>ultra-superior</strike> self-made AI. It looks good! and it's <i>Guaranteed fun.</i>",
        links: [
          {
            link: "https://mikirobles.github.io/tic-tac-toe/"
          },
          {
            github: "https://github.com/mikirobles/tic-tac-toe"
          }
        ]
      },
      {
        name: "Twitch JSON API",
        description:
          "Check on <strike>your</strike> MY favourite Twitch.tv streamers. <br> There is some <strong>API fetching</strong> involved.",
        links: [
          {
            link: "https://mikirobles.github.io/twitch-json-api/"
          },
          {
            github: "https://github.com/mikirobles/twitch-json-api"
          }
        ]
      },
      {
        name: "Simon game",
        description:
          "I love Simon and I also <i>love</i> this game! <br>One of my first big JS challenges for sure.",
        links: [
          {
            link: "https://mikirobles.github.io/simon-game/"
          },
          {
            github: "https://github.com/mikirobles/simon-game"
          }
        ]
      },
      {
        name: "Random Quote Machine",
        description:
          "One of my first web-app challenges, and unfortunaly probably the best looking of them all. Get some motivation.",
        links: [
          {
            link: "https://mikirobles.github.io/random-quote-machine/"
          },
          {
            github: "https://github.com/mikirobles/random-quote-machine"
          }
        ]
      },
      {
        name: "Local Weather",
        description:
          "Looks good and it's even got some bouncy animations! What more could you expect?",
        links: [
          {
            link: "https://mikirobles.github.io/local-weather/"
          },
          {
            github: "https://github.com/mikirobles/local-weather"
          }
        ]
      }
    ];

    if (fccProjects) {
      fccProjects.forEach(el => {
        var links = "";

        el.links.forEach(obj => {
          let key = Object.keys(obj)[0];
          links +=
            '<a rel="noopener" target="_blank" href="' +
            obj[key] +
            '"><i class="icon-' +
            key +
            '"></i></a>';
        });

        projectsUl.innerHTML +=
          '<li class="fcc-item"><div class="fcc-itemhead"><p class="fcc-title">' +
          el.name +
          '<div class="project-links">' +
          links +
          '</div></div><p class="fcc-description">' +
          el.description +
          "</div></div></li>";
      });
    }
  }
);

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
  function() {
    var projectsUl = $(".fcc-projects")[0];

    var fccProjects = [
      {
        name: "Camper Leaderboard",
        description: "My first project using <strong>Next.js</strong>!",
        links: [
          {
            link: "https://leaderboard-bneujobbvj.now.sh"
          },
          {
            github: "https://github.com/erosilk/camper-leaderboard"
          }
        ]
      },
      {
        name: "Recipe Box",
        description:
          "Keep your recipes in this user friendly app. They will be saved in your localStorage!. <br> <br>Made with <strong>React.</strong>",
        links: [
          {
            link: "https://erosilk.github.io/recipe-box/"
          },
          {
            github: "https://github.com/erosilk/recipe-box"
          }
        ]
      },
      {
        name: "Markdown Previewer",
        description:
          "Write your README's in this fast-loading <i>(and featureless)</i> Markdown Previewer!. <br> <br> Made with <b>React.</b>",
        links: [
          {
            link: "https://erosilk.github.io/markdown-previewer-build/"
          },
          {
            github: "https://github.com/erosilk/markdown-previewer"
          }
        ]
      },
      {
        name: "Wikipedia<br>Viewer",
        description:
          "Blazingly fast Wikipedia searching, with a cool intro animation!",
        links: [
          {
            link: "https://erosilk.github.io/wikipedia-viewer/"
          },
          {
            github: "https://github.com/erosilk/wikipedia-viewer"
          }
        ]
      },
      {
        name: "Tic Tac Toe",
        description:
          "Play against a friend or my <strike>ultra-superior</strike> self-made AI. It looks good! and it's <i>Guaranteed fun.</i>",
        links: [
          {
            link: "https://erosilk.github.io/tic-tac-toe/"
          },
          {
            github: "https://github.com/erosilk/tic-tac-toe"
          }
        ]
      },
      {
        name: "Twitch JSON API",
        description:
          "Check on <strike>your</strike> MY favourite Twitch.tv streamers. <br> There is some <strong>API fetching</strong> involved.",
        links: [
          {
            link: "https://erosilk.github.io/twitch-json-api/"
          },
          {
            github: "https://github.com/erosilk/twitch-json-api"
          }
        ]
      },
      {
        name: "Simon game",
        description:
          "I love Simon and I also <i>love</i> this game! <br>One of my first big JS challenges for sure.",
        links: [
          {
            link: "https://erosilk.github.io/simon-game/"
          },
          {
            github: "https://github.com/erosilk/simon-game"
          }
        ]
      },
      {
        name: "Random Quote Machine",
        description:
          "One of my first web-app challenges, and unfortunaly probably the best looking of them all. Get some motivation.",
        links: [
          {
            link: "https://erosilk.github.io/random-quote-machine/"
          },
          {
            github: "https://github.com/erosilk/random-quote-machine"
          }
        ]
      },
      {
        name: "Local Weather",
        description:
          "Looks good and it's even got some bouncy animations! What more could you expect?",
        links: [
          {
            link: "https://erosilk.github.io/local-weather/"
          },
          {
            github: "https://github.com/erosilk/local-weather"
          }
        ]
      }
    ];

    if (fccProjects) {
      fccProjects.forEach(el => {
        var links = "";

        el.links.forEach(obj => {
          let key = Object.keys(obj)[0];
          links +=
            '<a rel="noopener" target="_blank" href="' +
            obj[key] +
            '"><i class="icon-' +
            key +
            '"></i></a>';
        });

        projectsUl.innerHTML +=
          '<li class="fcc-item"><div class="fcc-itemhead"><p class="fcc-title">' +
          el.name +
          '<div class="project-links">' +
          links +
          '</div></div><p class="fcc-description">' +
          el.description +
          "</div></div></li>";
      });
    }
  }
);
