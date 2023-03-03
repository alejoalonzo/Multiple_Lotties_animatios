let lottieObjects = [];
gsap.registerPlugin(ScrollToPlugin);

let sections = document.querySelectorAll(".lottieSection");

//------------------------------------------------Animation 1
//        window.addEventListener("load", function () {
let tl1 = gsap
  .timeline()
  .to(".titleHeroAnimation1", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation1", 0.02, { opacity: 0 }, 0.06)
  .to(".titleHeroAnimation2", 0.02, { opacity: 1 }, 0.08)
  .to(".titleHeroAnimation2", 0.02, { opacity: 0 }, 0.3)
  .to(".titleHeroAnimation3", 0.04, { opacity: 1 }, 0.33)
  .to(".titleHeroAnimation3", 0.04, { opacity: 0 }, 0.4)
  .to(".animation1textInfoLeft1", 0.04, { opacity: 1 }, 0.48)
  .to(".animation1textInfoLeft1", 0.04, { opacity: 0 }, 1.5)
  .to(".animation1textInfoLeft2", 0.04, { opacity: 1 }, 0.74)
  .to(".animation1textInfoLeft2", 0.04, { opacity: 0 }, 1.5)
  .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 0.48)
  .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
  .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
  .to(".animation1textInfoLeft4", 0.01, { opacity: 0 }, 2);

let tl2 = gsap
  .timeline()
  .to(".titleHeroAnimation21", 0, { opacity: 1, top: "200px" }, 0)
  .to(".titleHeroAnimation21", 0.02, { top: "200px" }, 0.02)
  .to(".titleHeroAnimation21", 0.02, { opacity: 0 }, 0.12)
  .to(".animation2textInfoLeft1", 0.01, { opacity: 1 }, 0.13)
  .to(".animation2textInfoLeft1", 0.01, { opacity: 0 }, 0.16)
  .to(".animation2textInfoLeft2", 0.01, { opacity: 1 }, 0.13)
  .to(".animation2textInfoLeft2", 0.01, { opacity: 0 }, 0.16)
  .to(".animation2textInfoLeft3", 0.04, { opacity: 1 }, 0.18)
  .to(".animation2textInfoLeft3", 0.04, { opacity: 0 }, 0.24)
  .to(".animation2textInfoLeft4", 0.04, { opacity: 1 }, 0.28)
  .to(".animation2textInfoLeft4", 0.04, { opacity: 0 }, 0.5)
  // .to(".animation2textInfoLeft5", 0.04, {opacity: 1 }, 0.35)
  // .to(".animation2textInfoLeft5", 0.04, {opacity: 0 }, 0.5)
  .to(".animation2textInfoLeft6", 0.04, { opacity: 1 }, 0.28)
  .to(".animation2textInfoLeft6", 0.02, { opacity: 0 }, 0.5);
let tl3 = gsap
  .timeline()
  .to(".titleHeroAnimation31", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation31", 0.01, { opacity: 0 }, 0.02)
  .to(".animation3textInfoRight1", 0.01, { opacity: 1 }, 0.05)
  .to(".animation3textInfoRight1", 0.01, { opacity: 0 }, 0.12)
  .to(".animation3textInfoRight2", 0.01, { opacity: 1 }, 0.14)
  .to(".animation3textInfoRight2", 0.01, { opacity: 0 }, 0.2)
  .to(".animation3textInfoRight3", 0.04, { opacity: 1 }, 0.24)
  .to(".animation3textInfoRight3", 0.01, { opacity: 0 }, 0.5);

let tl4 = gsap
  .timeline()
  .to(".titleHeroAnimation41", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation41", 0.01, { opacity: 0 }, 0.06)
  .to(".titleHeroAnimation42", 0.01, { opacity: 1 }, 0.002)
  .to(".titleHeroAnimation42", 0.01, { opacity: 0 }, 0.06)
  .to(".animation4textInfoCenter1", 0.01, { opacity: 1 }, 0.07)
  .to(".animation4textInfoCenter1", 0.01, { opacity: 0 }, 0.12)
  .to(".animation4textInfoCenter2", 0.01, { opacity: 1 }, 0.14)
  .to(".animation4textInfoCenter2", 0.01, { opacity: 0 }, 0.17)
  .to(".animation4textInfoCenter3", 0.01, { opacity: 1 }, 0.2)
  .to(".animation4textInfoCenter3", 0.01, { opacity: 0 }, 0.26)
  .to(".animation4textInfoCenter4", 0.01, { opacity: 1 }, 0.3)
  .to(".animation4textInfoCenter4", 0.01, { opacity: 0 }, 0.4);

let tl5 = gsap
  .timeline()
  .to(".titleHeroAnimation51", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation51", 0.01, { opacity: 0 }, 0.04)
  .to(".titleHeroAnimation52", 0.01, { opacity: 1 }, 0.005)
  .to(".titleHeroAnimation52", 0.01, { opacity: 0 }, 0.04)
  .to(".animation5textInfoRight1", 0.01, { opacity: 1 }, 0.05)
  .to(".animation5textInfoRight1", 0.01, { opacity: 0 }, 0.15)
  .to(".animation5textInfoRight2", 0.01, { opacity: 1 }, 0.05)
  .to(".animation5textInfoRight2", 0.01, { opacity: 0 }, 0.15)
  .to(".animation5textInfoRight3", 0.01, { opacity: 1 }, 0.2)
  .to(".animation5textInfoRight3", 0.01, { opacity: 0 }, 0.3)
  .to(".animation5textInfoRight4", 0.01, { opacity: 1 }, 0.2)
  .to(".animation5textInfoRight4", 0.01, { opacity: 0 }, 0.3)
  .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 1 }, 0.36)
  .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 0 }, 0.4);

let tl6 = gsap
  .timeline()
  .to(".titleHeroAnimation61", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation61", 0.01, { opacity: 0 }, 0.04)
  .to(".titleHeroAnimation62", 0.01, { opacity: 1 }, 0.005)
  .to(".titleHeroAnimation62", 0.01, { opacity: 0 }, 0.04)
  .to(".animation6textInfoLeft1", 0.01, { opacity: 1 }, 0.05)
  .to(".animation6textInfoLeft1", 0.01, { opacity: 0 }, 0.35)
  .to(".animation6textInfoLeft2", 0.01, { opacity: 1 }, 0.05)
  .to(".animation6textInfoLeft2", 0.01, { opacity: 0 }, 0.35)
  .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 1 }, 0.37)
  .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 0 }, 0.4);

let tl7 = gsap
  .timeline()
  .to(".titleHeroAnimation71", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation71", 0.01, { opacity: 0 }, 0.03)
  .to(".animation7textInfoCenter1", 0, { opacity: 1 }, 0.06)
  .to(".animation7textInfoCenter1", 0.01, { opacity: 0 }, 0.25)
  .to(".animation7textInfoCenter2", 0, { opacity: 1 }, 0.06)
  .to(".animation7textInfoCenter2", 0.01, { opacity: 0 }, 0.25)
  .to(".animation7textInfoRight1", 0, { opacity: 1 }, 0.31)
  .to(".animation7textInfoRight1", 0.01, { opacity: 0 }, 0.4)
  .to(".animation7textInfoRight2", 0, { opacity: 1 }, 0.42)
  .to(".animation7textInfoRight2", 0.01, { opacity: 0 }, 0.75)
  .to(".animation7textInfoRight3", 0, { opacity: 1 }, 0.42)
  .to(".animation7textInfoRight3", 0.01, { opacity: 0 }, 0.75)
  .to(".animation7textInfoRight4", 0, { opacity: 1 }, 0.42)
  .to(".animation7textInfoRight4", 0.01, { opacity: 0 }, 0.75);

let tlFinal = gsap
  .timeline()
  .to(".titleHeroAnimation72", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation72", 0.02, { opacity: 0 }, 2)
  .to(".titleHeroAnimation73", 0, { opacity: 1 }, 0.4)
  .to(".titleHeroAnimation73", 0.02, { opacity: 0 }, 2)
  .to(".titleHeroAnimation74", 0, { opacity: 1 }, 0.8)
  .to(".titleHeroAnimation74", 0.02, { opacity: 0 }, 2)
  .to(".titleHeroAnimation75", 0, { opacity: 1 }, 1.2)
  .to(".titleHeroAnimation75", 0.02, { opacity: 0 }, 2)
  .to(".titleHeroAnimation76", 0, { opacity: 1 }, 1.6)
  .to(".titleHeroAnimation76", 0.02, { opacity: 0 }, 2)
  .to(".titleHeroAnimation77", 0, { opacity: 1 }, 1.6)
  .to(".titleHeroAnimation77", 0.02, { opacity: 0 }, 2)
  .to(".buttonBackToTopAnimation", 0, { opacity: 1 }, 1.6)
  .to(".buttonBackToTopAnimation", 0.02, { opacity: 0 }, 2);

//      });

let tweenSet = [tl1, tl2, tl3, tl4, tl5, tl6, tl7, tlFinal];
//----------Anchor click Scroll animation
let anchorLists = document.querySelectorAll("li");
//let anchors = document.querySelectorAll(".buttonsAnimations, .buttonBackToTop");
let anchors = document.querySelectorAll(".buttonsAnimations");
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem);
  });
}
let lottiePaths = [];
if (detectMob()) {
  console.log("mobile");
  lottiePaths = [
    "https://lottie.host/e10f0bc2-7aa3-4b05-84c5-e43eff625571/5VZ63hVGRa.json",
    "https://lottie.host/e289a33a-7240-47f2-9951-c30aa64ec114/ufa8uBg1nK.json",
    "https://lottie.host/097c79e6-6995-449d-9877-975cfbe502e7/NeL2JteyPH.json",
    "https://lottie.host/d754a3c3-f49d-4ffa-80d9-e99f542ab221/BtJzMpy7GK.json",
    "https://lottie.host/2353bda2-5e74-46ce-af22-c58ed07c0dfb/JSyv4TjeHD.json",
    "https://lottie.host/b26c7d29-a55f-4c5f-9dee-c1efe35f29f4/Ik9ZKOgfg5.json",
    "https://lottie.host/11a675bf-fa89-478d-8d17-98835588d418/neX97teAlq.json",
  ];
} else {
  console.log(window.navigator.userAgent.mobile);
  lottiePaths = [
    "https://lottie.host/918e9083-2d00-4c50-ac7a-71eda615c249/ewOZdNoDrv.json",
    "https://lottie.host/a6dda0ba-d900-4c38-9176-401d76bcda47/YtLROg5PCL.json",
    "https://lottie.host/e863eee9-345c-499d-b7c9-f2674d2db40c/7jPjEf3V8P.json",
    "https://lottie.host/de8eb69b-3ca5-446a-9671-c5314b363f37/CyqIqOdgHu.json",
    "https://lottie.host/fa46a08c-b01b-41c9-a1e8-453b1960860d/Fs3yxKRQaN.json",
    "https://lottie.host/f1842c44-601c-4816-89e3-5e9cb88f4478/7sFU2DPgG2.json",
    "https://lottie.host/c3c0c3f5-78ac-4e62-b8bf-d8a0df3bbd87/Y79bjwdjbO.json",
  ];
}

//Success tick mark lottie animation "https://assets8.lottiefiles.com/private_files/lf30_p9aibugk.json"
let scrollController = new ScrollMagic.Controller();
//  window.addEventListener("load", function () {
sections.forEach((section, index) => {
  let animation = lottie.loadAnimation({
    container: section,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: lottiePaths[index],
  });

  new ScrollMagic.Scene({
    triggerElement: section,
    duration: 5000,
    //offset: 100,
    triggerHook: 0,
    reverse: true,
  })
    .setPin(section)
    .setTween(tweenSet[index])
    .addTo(scrollController)
    .on("progress", function (e) {
      const currentFrame = Math.round(e.progress * (animation.totalFrames - 1));
      animation.goToAndStop(currentFrame, true);
    });
});
//});

//Get total number of frames.
function checkOn(animation) {
  animation.addEventListener("DOMLoaded", function (event) {
    return animation.getDuration(true);
  });
}

function scrollingOff() {
  scrolling = 0;
}

// On Click indicatiing Anchor
window.addEventListener("load", function () {
  anchors.forEach((anchor, index) => {
    anchor.addEventListener("click", function (event) {
      scrolling = 1;
      event.preventDefault();
      let windowHeight = window.innerHeight;
      let currentLocation = Math.round(window.scrollY);
      let clickedAnchorLocation = sections[index].getBoundingClientRect().top;
      let goTo = this.getAttribute("href");

      if (goTo == "#lottie-trigger") {
        scrollController.scrollTo(function (newpos) {
          gsap.to(window, 2, {
            scrollTo: { y: newpos + 950 },
            onComplete: scrollingOff,
          });
          console.log("800 ofset added");
        });
      } else {
        scrollController.scrollTo(function (newpos) {
          gsap.to(window, 2, {
            scrollTo: { y: newpos },
            onComplete: scrollingOff,
          });
        });
      }
      scrollController.scrollTo(this.getAttribute("href"));

      //gsap.to(window, { duration: 2, scrollTo: goTo });

      if (currentLocation > clickedAnchorLocation) {
        //gsap.to(window, { duration: 2, scrollTo: goTo });
      } else {
        //document.querySelector(this.getAttribute("href")).scrollIntoView({
        // behavior: "smooth",
        //});
      }
      changeStyle(index);
    });
  });
});

//On Scroll indicating Anchor
window.addEventListener("scroll", function (event) {
  var timeOut;
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(() => {
    sections.forEach((section, index) => {
      var topPosition = section.getBoundingClientRect().top;

      topPosition > window.innerHeight ? section.id : changeStyle(index);
    });
  }, 300);
});

//Changing style after selected Anchor
function changeStyle(position) {
  console.log(position);
  anchors.forEach((item, index) => {
    if (position === index) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
}

let headerText = document.querySelector(".nectar-header-text-content div");
headerText.textContent = "";

document
  .getElementById("buttonMORE")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // your code here
  });
