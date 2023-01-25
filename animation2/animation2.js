//------------------------------------------------Buttons

let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");

window.onload = function () {
  buttonAnimation2.classList.add("buttonSelected");
};

//------------------------------------------------Helpers Function
function leaveOnLeft(section) {
  var leaveToLeft = document.querySelector(section);
  leaveToLeft.classList.add("leaveToLeftStyles");
}
function addClassButtonSelected() {}

//------------------------------------------------Animation 2
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
        onLeave: () => buttonAnimation2.classList.remove("buttonSelected"),
        onEnterBack: () => buttonAnimation2.classList.add("buttonSelected"),
        onLeaveBack: () => buttonAnimation2.classList.remove("buttonSelected"),
        onUpdate: self => {
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
