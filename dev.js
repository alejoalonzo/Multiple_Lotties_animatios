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
  .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 1.55)
  .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
  .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
  .to(".animation1textInfoLeft4", 0.01, { opacity: 0 }, 2);

let tl2 = gsap
  .timeline()
  .to(".titleHeroAnimation21", 0, { opacity: 1, top: "200px" }, 0)
  .to(".titleHeroAnimation21", 0.02, { top: "200px" }, 0.02)
  .to(".titleHeroAnimation21", 0.02, { opacity: 0 }, 0.12)
  .to(".butonUnderTitleAnimation2", 0, { opacity: 1 }, 0.0)
  .to(".butonUnderTitleAnimation2", 0.02, { opacity: 0 }, 0.12)
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
  .to(".butonUnderTitleAnimation3", 0, { opacity: 1 }, 0)
  .to(".butonUnderTitleAnimation3", 0.01, { opacity: 0 }, 0.02)
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
  .to(".butonUnderTitleAnimation5", 0, { opacity: 1 }, 0)
  .to(".butonUnderTitleAnimation5", 0.01, { opacity: 0 }, 0.04)
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
  .to(".butonUnderTitleAnimation6", 0, { opacity: 1 }, 0)
  .to(".butonUnderTitleAnimation6", 0.01, { opacity: 0 }, 0.04)
  .to(".titleHeroAnimation62", 0.01, { opacity: 1 }, 0.005)
  .to(".titleHeroAnimation62", 0.01, { opacity: 0 }, 0.04)
  .to(".animation6textInfoLeft1", 0.01, { opacity: 1 }, 0.05)
  .to(".animation6textInfoLeft1", 0.01, { opacity: 0 }, 0.09)
  .to(".animation6textInfoLeft1_2", 0.01, { opacity: 1 }, 0.13)
  .to(".animation6textInfoLeft1_2", 0.01, { opacity: 0 }, 0.17)
  .to(".animation6textInfoLeft1_3", 0.01, { opacity: 1 }, 0.17)
  .to(".animation6textInfoLeft1_3", 0.01, { opacity: 0 }, 0.21)
  .to(".animation6textInfoLeft1_4", 0.01, { opacity: 1 }, 0.21)
  .to(".animation6textInfoLeft1_4", 0.01, { opacity: 0 }, 0.25)
  .to(".animation6textInfoLeft1_5", 0.01, { opacity: 1 }, 0.25)
  .to(".animation6textInfoLeft1_5", 0.01, { opacity: 0 }, 0.29)
  .to(".animation6textInfoLeft1_6", 0.01, { opacity: 1 }, 0.29)
  .to(".animation6textInfoLeft1_6", 0.01, { opacity: 0 }, 0.33)
  .to(".animation6textInfoLeft1_7", 0.01, { opacity: 1 }, 0.33)
  .to(".animation6textInfoLeft1_7", 0.01, { opacity: 0 }, 0.36)
  // .to(".animation6textInfoLeft2", 0.01, { opacity: 1 }, 0.09)
  // .to(".animation6textInfoLeft2", 0.01, { opacity: 0 }, 0.13)

  .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 1 }, 0.37)
  .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 0 }, 0.4);

let tl7 = gsap
  .timeline()
  .to(".titleHeroAnimation71", 0, { opacity: 1 }, 0)
  .to(".titleHeroAnimation71", 0.01, { opacity: 0 }, 0.03)
  .to(".butonUnderTitleAnimation7", 0, { opacity: 1 }, 0)
  .to(".butonUnderTitleAnimation7", 0.01, { opacity: 0 }, 0.03)
  .to(".animation7textInfoCenter1", 0, { opacity: 1 }, 0.06)
  .to(".animation7textInfoCenter1", 0.01, { opacity: 0 }, 0.12)
  .to(".animation7textInfoCenter2", 0, { opacity: 1 }, 0.14)
  .to(".animation7textInfoCenter2", 0.01, { opacity: 0 }, 0.2)
  .to(".animation7textInfoCenter3", 0, { opacity: 1 }, 0.22)
  .to(".animation7textInfoCenter3", 0.01, { opacity: 0 }, 0.28)
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
let anchors = document.querySelectorAll(".buttonsAnimations, .buttonBackToTop");

let lottiePaths = [
  "https://lottie.host/bf18689a-d055-408a-8d8a-cdf340495b9c/sEAkTVD34j.json",
  "https://lottie.host/b0403543-3a59-4d34-8aae-c49fd0a1ad54/VPlZovhDc1.json",
  "https://lottie.host/d4781568-f5f5-4c1f-aa78-946bef25bbdc/wpgg7IMIjY.json",
  "https://lottie.host/76174e05-749e-4fc4-a0d7-488b51dd5e15/Lo3BTd9PsT.json",
  "https://lottie.host/7a152602-0b22-4c5b-a84e-ae396466f8c5/20RjlQYbpW.json",
  "https://lottie.host/d5e3d7f2-8e16-45d7-b2ed-760c8be7edd7/ACgQivKjqP.json",
  "https://lottie.host/6e69c236-2b5b-4b24-9a32-5700b297ad1c/GW2xRw4z2h.json",
];
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
      console.log(goTo);
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
