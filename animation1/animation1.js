var buttonAnimation1 = document.querySelector("#buttonAnimation1");
//------------------------------------------------Animation 1
let sectionClass = ".lottie-trigger";
let target = gsap.utils.toArray(".lottie-trigger")[0];
let animation = lottie.loadAnimation({
  container: target,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/bf18689a-d055-408a-8d8a-cdf340495b9c/sEAkTVD34j.json",
});

animation.addEventListener("DOMLoaded", function () {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: 1,
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
    .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 1.3)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
    .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
    .to(".animation1textInfoLeft4", 0.01, { opacity: 0 }, 2);
});
