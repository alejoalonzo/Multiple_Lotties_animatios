let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let sectionClass5 = ".lottie-trigger5";
let target5 = gsap.utils.toArray(".lottie-trigger5")[0];
let animation5 = lottie.loadAnimation({
  container: target5,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/7a152602-0b22-4c5b-a84e-ae396466f8c5/20RjlQYbpW.json",
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
        onLeaveBack: () => buttonAnimation5.classList.remove("buttonSelected"),
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
    .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 1 }, 0.36)
    .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 0 }, 0.4);
});
