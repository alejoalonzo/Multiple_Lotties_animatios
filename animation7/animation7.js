let buttonAnimation7 = document.querySelector("#buttonAnimation7");
let sectionClass7 = ".lottie-trigger7";
let target7 = gsap.utils.toArray(".lottie-trigger7")[0];
let animation7 = lottie.loadAnimation({
  container: target7,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/6e69c236-2b5b-4b24-9a32-5700b297ad1c/GW2xRw4z2h.json",
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
    .to(".animation7textInfoCenter1", 0, { opacity: 1 }, 0.06)
    .to(".animation7textInfoCenter1", 0.01, { opacity: 0 }, 0.25)
    .to(".animation7textInfoCenter2", 0, { opacity: 1 }, 0.1)
    .to(".animation7textInfoCenter2", 0.01, { opacity: 0 }, 0.25)
    .to(".animation7textInfoRight1", 0, { opacity: 1 }, 0.31)
    .to(".animation7textInfoRight1", 0.01, { opacity: 0 }, 0.4)
    .to(".animation7textInfoRight2", 0, { opacity: 1 }, 0.42)
    .to(".animation7textInfoRight2", 0.01, { opacity: 0 }, 0.75)
    .to(".animation7textInfoRight3", 0, { opacity: 1 }, 0.47)
    .to(".animation7textInfoRight3", 0.01, { opacity: 0 }, 0.75)
    .to(".animation7textInfoRight4", 0, { opacity: 1 }, 0.52)
    .to(".animation7textInfoRight4", 0.01, { opacity: 0 }, 0.75);
});
