//------------------------------------------------Buttons

let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");

window.onload = function () {
  buttonAnimation3.classList.add("buttonSelected");
};

//------------------------------------------------Helpers Function
function leaveOnLeft(section) {
  var leaveToLeft = document.querySelector(section);
  leaveToLeft.classList.add("leaveToLeftStyles");
}
function addClassButtonSelected() {}

//------------------------------------------------Animation 3

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
        onLeaveBack: () => buttonAnimation3.classList.remove("buttonSelected"),
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
