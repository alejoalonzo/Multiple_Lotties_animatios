//------------------------------------------------Buttons
let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");

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
