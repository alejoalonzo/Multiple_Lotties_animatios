let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let sectionClass2 = ".lottie-trigger2";
let target2 = gsap.utils.toArray(".lottie-trigger2")[0];
let animation2 = lottie.loadAnimation({
  container: target2,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/9ddf6772-1387-4591-8c79-008c7a285850/91juubEoFs.json",
});

animation2.addEventListener("DOMLoaded", function () {
  let tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: target2,
        pin: true,
        scrub: 1,
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
    .to(".titleHeroAnimation21", 0.02, { opacity: 0 }, 0.12)
    .to(".animation2textInfoLeft1", 0.01, { opacity: 1 }, 0.13)
    .to(".animation2textInfoLeft1", 0.01, { opacity: 0 }, 0.16)
    .to(".animation2textInfoLeft2", 0.01, { opacity: 1 }, 0.13)
    .to(".animation2textInfoLeft2", 0.01, { opacity: 0 }, 0.16)
    .to(".animation2textInfoLeft3", 0.04, { opacity: 1 }, 0.18)
    .to(".animation2textInfoLeft3", 0.04, { opacity: 0 }, 0.24)
    .to(".animation2textInfoLeft4", 0.04, { opacity: 1 }, 0.28)
    .to(".animation2textInfoLeft4", 0.04, { opacity: 0 }, 0.5)
    // .to(".animation2textInfoLeft5", 0.04, { opacity: 1 }, 0.35)
    // .to(".animation2textInfoLeft5", 0.04, { opacity: 0 }, 0.5)
    .to(".animation2textInfoLeft6", 0.04, { opacity: 1 }, 0.43)
    .to(".animation2textInfoLeft6", 0.02, { opacity: 0 }, 0.5)
    .to(
      "#buttonAnimation2",
      0.01,
      { backgroundColor: "#000000", color: "#ffffff" },
      0
    )
    .to(
      "#buttonAnimation2",
      0.01,
      { backgroundColor: "#ffffff", color: "#000000" },
      0.5
    );
});
