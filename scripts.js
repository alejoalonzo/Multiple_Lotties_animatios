//------------------------------------------------Buttons
let startAnimationBuuton1 = document.querySelector(".lottie-trigger7");
let coordinateScreenStartAnimation1 =
  startAnimationBuuton1.getBoundingClientRect();
console.log(coordinateScreenStartAnimation1);

let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");
/*
buttonAnimation1.addEventListener("click", () => {
  // animation.goToAndStop(230, true);
  // gsap.to(".titleHeroAnimation3", 0.4, { opacity: 1 }, 0);
  // gsap.to(".titleHeroAnimation1", 0, { opacity: 0 }, 0);
  // gsap.to(".titleHeroAnimation2", 0, { opacity: 0 }, 0);
  // gsap.to(".animation1textInfoLeft1", 0, { opacity: 0 }, 0);
  // gsap.to(".animation1textInfoLeft2", 0, { opacity: 0 }, 0);
  // gsap.to(".animation1textInfoLeft3", 0, { opacity: 0 }, 0);
  // gsap.to(".animation1textInfoLeft4", 0, { opacity: 0 }, 0);

  // var animationInitOutSide = animationTwo();
  // animationInitOutSide;

  buttonAnimation1.classList.add("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation2.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.add("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation3.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.add("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation4.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.add("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation5.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.add("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation6.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.add("buttonSelected");
  buttonAnimation7.classList.remove("buttonSelected");
});

buttonAnimation7.addEventListener("click", () => {
  buttonAnimation1.classList.remove("buttonSelected");
  buttonAnimation2.classList.remove("buttonSelected");
  buttonAnimation3.classList.remove("buttonSelected");
  buttonAnimation4.classList.remove("buttonSelected");
  buttonAnimation5.classList.remove("buttonSelected");
  buttonAnimation6.classList.remove("buttonSelected");
  buttonAnimation7.classList.add("buttonSelected");
});*/

//------------------------------------------------Helpers Function
function leaveOnLeft(section) {
  var leaveToLeft = document.querySelector(section);
  leaveToLeft.classList.add("leaveToLeftStyles");
}
function addClassButtonSelected() {}
//------------------------------------------------Animation 1
let sectionClass = ".lottie-trigger";
let target = gsap.utils.toArray(".lottie-trigger")[0];
let animation = lottie.loadAnimation({
  container: target,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/e53b759c-3262-46b9-8d7f-86e5e58a457f/fsMUngiOPD.json",
});

animation.addEventListener("DOMLoaded", function () {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=2750%",
        onEnter: () => buttonAnimation1.classList.add("buttonSelected"),
        onLeave: () => buttonAnimation1.classList.remove("buttonSelected"),
        onEnterBack: () => buttonAnimation1.classList.add("buttonSelected"),
        onLeaveBack: () => buttonAnimation1.classList.remove("buttonSelected"),
        onLeave: () => leaveOnLeft(sectionClass),
        onLeave: () => animationTwo(),
        onUpdate: self => {
          animation.goToAndStop(
            self.progress * (animation.totalFrames - 1),
            true
          );
        },
      },
    })

    //tl.fromTo(target, { x: 0 }, { x: -1500, duration: 0.1 }, 3)
    .to(".titleHeroAnimation1", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation1", 0.02, { opacity: 0 }, 0.04)
    .to(".titleHeroAnimation2", 0.02, { opacity: 1 }, 0.05)
    .to(".titleHeroAnimation2", 0.04, { opacity: 0 }, 0.1)
    .to(".titleHeroAnimation3", 0.04, { opacity: 1 }, 0.24)
    .to(".titleHeroAnimation3", 0.04, { opacity: 0 }, 0.35)
    .to(".animation1textInfoLeft1", 0.04, { opacity: 1 }, 0.48)
    .to(".animation1textInfoLeft1", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 1 }, 0.74)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 1.3)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
    .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
    .to(".animation1textInfoLeft4", 0.04, { opacity: 0 }, 2);

  // tl.fromTo(".text2", { y: 200 }, { y: -300, duration: 1 }, 2);
});

//------------------------------------------------Animation 2
function animationTwo() {
  let sectionClass2 = ".lottie-trigger2";
  let target2 = gsap.utils.toArray(".lottie-trigger2")[0];
  let animation2 = lottie.loadAnimation({
    container: target2,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/950c77d6-7061-447e-908f-46803639f7ed/u9CUA4PebH.json",
  });

  animation2.addEventListener("DOMLoaded", function () {
    let tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: target2,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          onEnter: () => buttonAnimation2.classList.add("buttonSelected"),
          // onLeave: () => leaveOnLeft(sectionClass2),
          onLeave: () => buttonAnimation2.classList.remove("buttonSelected"),
          onEnterBack: () => buttonAnimation2.classList.add("buttonSelected"),
          onLeaveBack: () =>
            buttonAnimation2.classList.remove("buttonSelected"),
          onLeave: () => animationThree(),
          onUpdate: self => {
            // console.log((self.progress * (animation.totalFrames - 1)).toFixed(0));
            animation2.goToAndStop(
              self.progress * (animation2.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation21", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation21", 0.01, { opacity: 0 }, 0.04)
      .to(".animation2textInfoLeft1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation2textInfoLeft1", 0.01, { opacity: 0 }, 0.12)
      .to(".animation2textInfoLeft2", 0.01, { opacity: 1 }, 0.05)
      .to(".animation2textInfoLeft2", 0.01, { opacity: 0 }, 0.12)
      .to(".animation2textInfoLeft3", 0.04, { opacity: 1 }, 0.14)
      .to(".animation2textInfoLeft3", 0.04, { opacity: 0 }, 0.2)
      .to(".animation2textInfoLeft4", 0.04, { opacity: 1 }, 0.24)
      .to(".animation2textInfoLeft4", 0.04, { opacity: 0 }, 0.5)
      .to(".animation2textInfoLeft5", 0.04, { opacity: 1 }, 0.35)
      .to(".animation2textInfoLeft5", 0.04, { opacity: 0 }, 0.5)
      .to(".animation2textInfoLeft6", 0.04, { opacity: 1 }, 0.43)
      .to(".animation2textInfoLeft6", 0.04, { opacity: 0 }, 0.5);
  });
  // var frameInitAnimation = animation2.goToAndStop(5, true);
  // return frameInitAnimation;
}

//------------------------------------------------Animation 3
function animationThree() {
  let sectionClass3 = ".lottie-trigger3";
  let target3 = gsap.utils.toArray(".lottie-trigger3")[0];
  let animation3 = lottie.loadAnimation({
    container: target3,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/38091453-78b2-4fe6-a5ff-0d6bf6aa10d2/DrIodU2YEl.json",
  });

  animation3.addEventListener("DOMLoaded", function () {
    let tl3 = gsap
      .timeline({
        scrollTrigger: {
          // markers: true,
          trigger: target3,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          onEnter: () => buttonAnimation3.classList.add("buttonSelected"),
          onLeave: () => buttonAnimation3.classList.remove("buttonSelected"),
          onEnterBack: () => buttonAnimation3.classList.add("buttonSelected"),
          onLeaveBack: () =>
            buttonAnimation3.classList.remove("buttonSelected"),
          onLeave: () => animationFour(),
          onUpdate: self => {
            // console.log((self.progress * (animation.totalFrames - 1)).toFixed(0));
            animation3.goToAndStop(
              self.progress * (animation3.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation31", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation31", 0.01, { opacity: 0 }, 0.02)
      .to(".animation3textInfoRight1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation3textInfoRight1", 0.01, { opacity: 0 }, 0.12)
      .to(".animation3textInfoRight2", 0.01, { opacity: 1 }, 0.14)
      .to(".animation3textInfoRight2", 0.01, { opacity: 0 }, 0.2)
      .to(".animation3textInfoRight3", 0.04, { opacity: 1 }, 0.24)
      .to(".animation3textInfoRight3", 0.01, { opacity: 0 }, 0.5);
  });
}

//------------------------------------------------Animation 4
function animationFour() {
  let sectionClass4 = ".lottie-trigger4";
  let target4 = gsap.utils.toArray(".lottie-trigger4")[0];
  let animation4 = lottie.loadAnimation({
    container: target4,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/81a843bf-f67a-4f67-bed6-7fd28b6c2bea/kY6r7TfZR7.json",
  });

  animation4.addEventListener("DOMLoaded", function () {
    let tl4 = gsap
      .timeline({
        scrollTrigger: {
          trigger: target4,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          onEnter: () => buttonAnimation4.classList.add("buttonSelected"),
          onLeave: () => buttonAnimation4.classList.remove("buttonSelected"),
          onEnterBack: () => buttonAnimation4.classList.add("buttonSelected"),
          onLeaveBack: () =>
            buttonAnimation4.classList.remove("buttonSelected"),
          onLeave: () => animationFive(),
          onUpdate: self => {
            animation4.goToAndStop(
              self.progress * (animation4.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation41", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation41", 0.01, { opacity: 0 }, 0.04)
      .to(".titleHeroAnimation42", 0.01, { opacity: 1 }, 0.005)
      .to(".titleHeroAnimation42", 0.01, { opacity: 0 }, 0.04)
      .to(".animation4textInfoCenter1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation4textInfoCenter1", 0.01, { opacity: 0 }, 0.1)
      .to(".animation4textInfoCenter2", 0.01, { opacity: 1 }, 0.12)
      .to(".animation4textInfoCenter2", 0.01, { opacity: 0 }, 0.16)
      .to(".animation4textInfoCenter3", 0.01, { opacity: 1 }, 0.2)
      .to(".animation4textInfoCenter3", 0.01, { opacity: 0 }, 0.26)
      .to(".animation4textInfoCenter4", 0.01, { opacity: 1 }, 0.3)
      .to(".animation4textInfoCenter4", 0.01, { opacity: 0 }, 0.4);
  });
}
//------------------------------------------------Animation 5
function animationFive() {
  let sectionClass5 = ".lottie-trigger5";
  let target5 = gsap.utils.toArray(".lottie-trigger5")[0];
  let animation5 = lottie.loadAnimation({
    container: target5,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/3670397c-ca90-4244-8fc9-4e460f341a22/p033NgjldR.json",
  });

  animation5.addEventListener("DOMLoaded", function () {
    let tl5 = gsap
      .timeline({
        scrollTrigger: {
          trigger: target5,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          onEnter: () => buttonAnimation5.classList.add("buttonSelected"),
          onLeave: () => buttonAnimation5.classList.remove("buttonSelected"),
          onEnterBack: () => buttonAnimation5.classList.add("buttonSelected"),
          onLeaveBack: () =>
            buttonAnimation5.classList.remove("buttonSelected"),
          onLeave: () => animationSeven(),
          onUpdate: self => {
            animation5.goToAndStop(
              self.progress * (animation5.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation51", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation51", 0.01, { opacity: 0 }, 0.04)
      .to(".titleHeroAnimation52", 0.01, { opacity: 1 }, 0.005)
      .to(".titleHeroAnimation52", 0.01, { opacity: 0 }, 0.04)
      .to(".animation5textInfoRight1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation5textInfoRight1", 0.01, { opacity: 0 }, 0.15)
      .to(".animation5textInfoRight2", 0.01, { opacity: 1 }, 0.1)
      .to(".animation5textInfoRight2", 0.01, { opacity: 0 }, 0.15)
      .to(".animation5textInfoRight3", 0.01, { opacity: 1 }, 0.2)
      .to(".animation5textInfoRight3", 0.01, { opacity: 0 }, 0.3)
      .to(".animation5textInfoRight4", 0.01, { opacity: 1 }, 0.25)
      .to(".animation5textInfoRight4", 0.01, { opacity: 0 }, 0.3)
      .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 1 }, 0.35)
      .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 0 }, 0.4);
  });
}
//------------------------------------------------Animation 7
function animationSeven() {
  let sectionClass7 = ".lottie-trigger7";
  let target7 = gsap.utils.toArray(".lottie-trigger7")[0];
  let animation7 = lottie.loadAnimation({
    container: target7,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/ac27ef06-951b-4a87-b9fc-44ddbdcf197a/GgEZ4UwyUk.json",
  });

  animation7.addEventListener("DOMLoaded", function () {
    let tl7 = gsap
      .timeline({
        scrollTrigger: {
          trigger: target7,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          onEnter: () => buttonAnimation7.classList.add("buttonSelected"),
          onLeave: () => buttonAnimation7.classList.remove("buttonSelected"),
          onEnterBack: () => buttonAnimation7.classList.add("buttonSelected"),
          onLeaveBack: () =>
            buttonAnimation7.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation7.goToAndStop(
              self.progress * (animation7.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation71", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation71", 0.01, { opacity: 0 }, 0.03)
      .to(".animation7textInfoCenter1", 0, { opacity: 1 }, 0.04)
      .to(".animation7textInfoCenter1", 0.01, { opacity: 0 }, 0.19)
      .to(".animation7textInfoCenter2", 0, { opacity: 1 }, 0.1)
      .to(".animation7textInfoCenter2", 0.01, { opacity: 0 }, 0.19)
      .to(".animation7textInfoRight1", 0, { opacity: 1 }, 0.31)
      .to(".animation7textInfoRight1", 0.01, { opacity: 0 }, 0.4)
      .to(".animation7textInfoRight2", 0, { opacity: 1 }, 0.42)
      .to(".animation7textInfoRight2", 0.01, { opacity: 0 }, 0.75)
      .to(".animation7textInfoRight3", 0, { opacity: 1 }, 0.47)
      .to(".animation7textInfoRight3", 0.01, { opacity: 0 }, 0.75)
      .to(".animation7textInfoRight4", 0, { opacity: 1 }, 0.52)
      .to(".animation7textInfoRight4", 0.01, { opacity: 0 }, 0.75)
      .to(".titleHeroAnimation72", 0, { opacity: 1 }, 0.84)
      .to(".titleHeroAnimation72", 0.01, { opacity: 0 }, 0.94)
      .to(".titleHeroAnimation73", 0, { opacity: 1 }, 0.86)
      .to(".titleHeroAnimation73", 0.01, { opacity: 0 }, 0.94)
      .to(".titleHeroAnimation74", 0, { opacity: 1 }, 0.88)
      .to(".titleHeroAnimation74", 0.01, { opacity: 0 }, 0.94)
      .to(".titleHeroAnimation75", 0, { opacity: 1 }, 0.9)
      .to(".titleHeroAnimation75", 0.01, { opacity: 0 }, 0.94)
      .to(".titleHeroAnimation76", 0, { opacity: 1 }, 0.92)
      .to(".titleHeroAnimation76", 0.01, { opacity: 0 }, 0.94);
    // .to(".buttonBackToTopAnimation", 0, { opacity: 1 }, 0.82)
    // .to(".buttonBackToTopAnimation", 0.01, { opacity: 0 }, 0.85);
  });
}
/*let sections = gsap.utils.toArray(".panel");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  },
});*/

/**********************************VERSION WITH FUNCTIOS**/
//https:/
//http://alejandroalonzo.com/
//https://panoramacomunidad.es/

//CHANGE NAME--------------------------------------------------------------------
// Get the current URL of the page
/*
var currentUrl = window.location.href;
 console.log(currentUrl);

// Use a switch statement to set the page name based on the URL
var pageName = "";
switch (currentUrl) {
  case "https:/about-us/":
   console.log("Setting page name to About Us");
 pageName = "About Us";

    break;
  case "https:/contact-us/":
    pageName = "Contact Us";
    break;
  // Add more cases for each page on your site
  default:
console.log("Setting page name to Home");
    pageName = "Home";
}

// Set the text of the div element with class "nectar-header-text-content"
var element = document.querySelector(".nectar-header-text-content > div");
if (element) {
  element.innerText = pageName;
}
console.log("JavaScript code is being executed!");*/

/*Change label MENU>CLOSE--*/
jQuery(document).ready(function ($) {
  $(".buttons.sf-menu .slide-out-widget-area-toggle a").click(function () {
    var label = $(this).find(".label");
    var header = $("#header-outer");
    let headerText = document.querySelector(
      '#header-outer[data-format="default"] .nectar-header-text-content'
    );
    let NavBarWhiteToDark = document.querySelector("#header-outer");

    if ($(this).hasClass("open")) {
      label.text("MENU");
      header.addClass("shadowInMegaMenu");
      // Show the scrollbar
      $("body").css({ "overflow-y": "hidden" });
      NavBarWhiteToDark.style.backgroundColor = "white";
      NavBarWhiteToDark.style.boxShadow = "0 45px 45px rgb(255 255 255)";
    } else {
      label.text("CLOSE");
      header.removeClass("shadowInMegaMenu");
      headerText.style.display = "none";
      NavBarWhiteToDark.style.backgroundColor = "black";
      NavBarWhiteToDark.style.boxShadow = "0 0px 0px transparent";
      NavBarWhiteToDark.style.setProperty(
        "box-shadow",
        "0 0px 0px transparent",
        "important"
      );

      // Reload the page when the user clicks the "CLOSE" button
      $(this).one("click", function (event) {
        event.preventDefault();
        location.reload();
      });
    }
  });
});
