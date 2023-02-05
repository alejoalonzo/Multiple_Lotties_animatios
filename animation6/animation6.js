let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let sectionClass6 = ".lottie-trigger6";
let target6 = gsap.utils.toArray(".lottie-trigger6")[0];
let animation6 = lottie.loadAnimation({
  container: target6,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/d5e3d7f2-8e16-45d7-b2ed-760c8be7edd7/ACgQivKjqP.json",
});

animation6.addEventListener("DOMLoaded", function () {
  let tl6 = gsap
    .timeline({
      scrollTrigger: {
        trigger: target6,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=1550%",
        onEnter: () => buttonAnimation6.classList.add("buttonSelected"),
        onLeave: () => buttonAnimation6.classList.remove("buttonSelected"),
        onEnterBack: () => buttonAnimation6.classList.add("buttonSelected"),
        onLeaveBack: () => buttonAnimation6.classList.remove("buttonSelected"),
        onUpdate: self => {
          animation6.goToAndStop(
            self.progress * (animation6.totalFrames - 1),
            true
          );
        },
      },
    })
    .to(".titleHeroAnimation61", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation61", 0.01, { opacity: 0 }, 0.04)
    .to(".titleHeroAnimation62", 0.01, { opacity: 1 }, 0.005)
    .to(".titleHeroAnimation62", 0.01, { opacity: 0 }, 0.04)
    .to(".animation6textInfoLeft1", 0.01, { opacity: 1 }, 0.05)
    .to(".animation6textInfoLeft1", 0.01, { opacity: 0 }, 0.35)
    .to(".animation6textInfoLeft2", 0.01, { opacity: 1 }, 0.1)
    .to(".animation6textInfoLeft2", 0.01, { opacity: 0 }, 0.35)
    .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 1 }, 0.37)
    .to(".titleHeroAnimationYellowBoxAnimation6", 0.01, { opacity: 0 }, 0.4);
});
