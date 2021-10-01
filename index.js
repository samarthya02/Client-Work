// loading page
$(window).on("load", function () {
  $("#onloadingPage").hide();
});
var loop = true;
var onload = function () {
  if (loop == true) {
    $(".onloadingHeader").animate({ fontSize: "6rem" }, 500);
    loop = false;
  } else {
    $(".onloadingHeader").animate({ fontSize: "5rem" }, 500);
    loop = true;
  }
};
setInterval(function () {
  if (loop == true) {
    $(".onloadingHeader").animate({ fontSize: "6rem" }, 500);
    loop = false;
  } else {
    $(".onloadingHeader").animate({ fontSize: "5rem" }, 500);
    loop = true;
  }
}, 500);
$(window).on("load", function () {
  $("body").removeClass("stop-scrolling");
});

//navigation bar
const sections = document.querySelectorAll(".test");
const navLi = document.querySelectorAll(".menu li");
window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset > sectionTop - 500 && pageYOffset < sectionTop + 500) {
      current = section.getAttribute("id");
      $(".menu li").removeClass("current");
      $("." + current).addClass("current");
    }
  });
});
// photo quote
setTimeout(function () {
  $(".navbar").animate({ opacity: "1" }, 1000);
  $(".heading").animate({ opacity: "1" }, 1000);
  $(".titlecontent").animate({ opacity: "1" }, 1000);
  $(".fab1").animate({ opacity: "1" }, 1000);
  $(".line").animate({ opacity: "1" }, 1000);
}, 2000);
//mentors
$(".mentor_card").hover(
  function () {
    $("." + this.className.slice(17, 25) + " .temporaryEdit").animate(
      { backgroundPositionY: "-10px" },
      100
    );
    $("." + this.className.slice(17, 25) + " .card-body").css(
      "background-color",
      "#45a29e"
    );
    $("." + this.className.slice(17, 25) + " .card-body .men_text").css(
      "color",
      "#0b0c10"
    );
    $("." + this.className.slice(17, 25) + " .card-body .INFO").css(
      "color",
      "#1f2833"
    );
  },
  function () {
    $("." + this.className.slice(17, 25) + " .temporaryEdit").animate(
      { backgroundPositionY: "0" },
      100
    );
    $("." + this.className.slice(17, 25) + " .card-body").css(
      "background-color",
      "#1f2833"
    );
    $("." + this.className.slice(17, 25) + " .card-body .men_text").css(
      "color",
      "#45a29e"
    );
    $("." + this.className.slice(17, 25) + " .card-body .INFO").css(
      "color",
      "#c5c6c7"
    );
  }
);
// reels
var introVideoWidth = $(".introVideo").width();
var introVideoHeight = introVideoWidth * 0.5;
console.log(introVideoHeight);
$(".introVideo").attr("height", introVideoHeight);

$(window).resize(function () {
  var introVideoWidth1 = $(".introVideo").width();
  var introVideoHeight1 = introVideoWidth1 * 0.5;
  console.log(introVideoHeight1);
  $(".introVideo").height(introVideoHeight1);
});

var introVideoWidthProject = $(".projectVideo").width();
var introVideoHeightProject = introVideoWidthProject * 0.5;
console.log(introVideoHeightProject);
$(".projectVideo").height(introVideoHeightProject);

$(window).resize(function () {
  var introVideoWidth1Project = $(".projectVideo").width();
  var introVideoHeight1Project = introVideoWidth1Project * 0.5;
  console.log(introVideoHeight1Project);
  $(".projectVideo").height(introVideoHeight1Project);
});

$(".projectVideo1").on("click", function () {
  $(".introVideo").attr(
    "src",
    "https://www.youtube.com/embed/e9paBhV4a8Q?rel=0"
  );
});
$(".projectVideo2").on("click", function () {
  $(".introVideo").attr(
    "src",
    "https://www.youtube.com/embed/OzSmDsKvcIs?rel=0"
  );
});
$(".projectVideo3").on("click", function () {
  $(".introVideo").attr(
    "src",
    "https://www.youtube.com/embed/5cFu6-bVOWg?rel=0"
  );
});
