let buttonAnimation7 = document.querySelector("#buttonAnimation7");
let sectionClass7 = ".lottie-trigger7";
let target7 = gsap.utils.toArray(".lottie-trigger7")[0];
let animation7 = lottie.loadAnimation({
  container: target7,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/3b4d3d33-fc31-4b16-9774-304142cf04a9/11uuAFfeeW.json",
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
        onLeaveBack: () => buttonAnimation7.classList.remove("buttonSelected"),
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
