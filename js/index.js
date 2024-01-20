var quotes = [{
  character: "Rhett Butler",
  actor: "Clark Gable",
  movie: "Gone with the Wind",
  quote: "Frankly, my dear, I don't give a damn.",
  scene: "GQ5ICXMC4xY",
  year: "1939"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "",
  year: "2024"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "",
  year: "2024"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "",
  year: "2024"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "",
  year: "2024"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "",
  year: "2024"
  }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "Huling Tagay Ng Taon (OfficialMusicVideo) - Smugglaz",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "3aGEjTX21v4",
  year: "2024"
    }, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "Bakit Ako - K-Ram feat. Honcho (Official Music Video)",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "AAoSSRFvj10",
  year: "2024"
}, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "You have to Try This Secret Buff on YuZhong | Yu Zhong Gameplay | MLBB",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "Vw4eFeZJrD9IRWks",
  year: "1972"
}, {
  character: "Vito Corleone",
  actor: "Marlon Brando",
  movie: "The Godfather",
  quote: "I'm gonna make him an offer he can't refuse.",
  scene: "fmX2VzsB25s",
  year: "1972"
}, {
  character: "Terry Malloy",
  actor: "Marlon Brando",
  movie: "On the Waterfront",
  quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  scene: "efHzGxEzDQA",
  year: "1954"
}, {
  character: "Dorothy Gale",
  actor: "Judy Garland",
  movie: "The Wizard of Oz",
  quote: "Toto, I've got a feeling we're not in Kansas anymore.",
  scene: "vQLNS3HWfCM",
  year: "1939"
}, {
  character: "Rick Blaine",
  actor: "Humphrey Bogart",
  movie: "Casablanca",
  quote: "Here's looking at you, kid.",
  scene: "rEWaqUVac3M",
  year: "1942"
}, {
  character: "Harry Callahan",
  actor: "Clint Eastwood",
  movie: "Sudden Impact",
  quote: "Go ahead, make my day.",
  scene: "3ishbTwXf1g",
  year: "1983"
}, {
  character: "Norma Desmond",
  actor: "Gloria Swanson",
  movie: "Sunset Boulevard",
  quote: "All right, Mr. DeMille, I'm ready for my close-up.",
  scene: "eOLypkY8LMc",
  year: "1950"
}, {
  character: "Han Solo",
  actor: "Harrison Ford",
  movie: "Imagine Dragons - Whatever It Takes (Lyrics / Lyric Video)",
  quote: "May the Force be with you.",
  scene: "M66U_DuMCS8",
  year: "1977"
}, {
  character: "Margo Channing",
  actor: "Bette Davis",
  movie: "All About Eve",
  quote: "Fasten your seatbelts. It's going to be a bumpy night.",
  scene: "LPPJdOGshUM",
  year: "1950"
}, {
  character: "Travis Bickle",
  actor: "Robert De Niro",
  movie: "Taxi Driver",
  quote: "You talkin' to me?",
  scene: "-QWL-FwX4t4",
  year: "1976"
}];

var palette = [{
  darkPrimary: "#D32F2F",
  primary: "#F44336",
  accent: "#448AFF"
}, {
  darkPrimary: "#7B1FA2",
  primary: "#9C27B0",
  accent: "#CDDC39"
}, {
  darkPrimary: "#303F9F",
  primary: "#3F51B5",
  accent: "#FFC107"
}, {
  darkPrimary: "#689F38",
  primary: "#8BC34A",
  accent: "#FF4081"
}, {
  darkPrimary: "#E64A19",
  primary: "#FF5722",
  accent: "#7C4DFF"
}];

function updateQuote() {
  var quoteId = Math.floor(Math.random() * quotes.length);
  while ($(".quote-actual").html() == quotes[quoteId].quote) {
    var quoteId = Math.floor(Math.random() * quotes.length);
  }
  $(".quote-actual").html(quotes[quoteId].quote);
  $(".actor-name").html(quotes[quoteId].actor);
  $(".character-name").html(quotes[quoteId].character);
  $(".movie-year").html("(" + quotes[quoteId].year + ")");
  $(".movie-title").html(quotes[quoteId].movie);
  var youTubeUrl = "https://www.youtube.com/embed/" + quotes[quoteId].scene;
  $(".youtube-iframe").html("<iframe width=100% height='175px' src='" + youTubeUrl + "?showinfo=0' frameborder='0' allowfullscreen>");
  var colorId = Math.floor(Math.random() * palette.length);
  $(".dark-primary").css("background-color", palette[colorId].darkPrimary);
  $(".title-bar").css("background-color", palette[colorId].primary);
  $("button").css("color", palette[colorId].accent);
};

function truncate(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    str = str.slice(0, num);
    if (str.length > 3) {
      return str.slice(0, -3) + "...";
    } else {
      return str + "...";
    }
  }
};

$("document").ready(function() {
  $(".new-quote").on("click", function() {
    $(".card").fadeOut("slow", function() {
      updateQuote();
    });
    $(".card").delay(1000).fadeIn("slow");
  });
  $(".tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes,movies&text=" + truncate("\"" + $(".quote-actual").html() + "\" - " + $(".movie-title").html(), 124), "_blank", "height=300, width=400, location=no, menubar=no, resizable=no, scrollbars=no, status=no");
  });

  updateQuote();
});
