//------------------------------------------------Buttons
let buttonAnimation4 = document.querySelector("#buttonAnimation4");

// window.onload = function () {
//   buttonAnimation4.classList.add("buttonSelected");
// };  let sectionClass4 = ".lottie-trigger4";
let target4 = gsap.utils.toArray(".lottie-trigger4")[0];
let animation4 = lottie.loadAnimation({
  container: target4,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/394b75d6-bc64-4149-a365-15a528c43c99/uhbguTVrrj.json",
});

animation4.addEventListener("DOMLoaded", function () {
  let tl4 = gsap
    .timeline({
      scrollTrigger: {
        trigger: target4,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=1550%",
        onEnter: () => buttonAnimation4.classList.add("buttonSelected"),
        onLeave: () => buttonAnimation4.classList.remove("buttonSelected"),
        onEnterBack: () => buttonAnimation4.classList.add("buttonSelected"),
        onLeaveBack: () => buttonAnimation4.classList.remove("buttonSelected"),
        onUpdate: self => {
          animation4.goToAndStop(
            self.progress * (animation4.totalFrames - 1),
            true
          );
        },
      },
    })
    .to(".titleHeroAnimation41", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation41", 0.01, { opacity: 0 }, 0.04)
    .to(".titleHeroAnimation42", 0.01, { opacity: 1 }, 0.002)
    .to(".titleHeroAnimation42", 0.01, { opacity: 0 }, 0.04)
    .to(".animation4textInfoCenter1", 0.01, { opacity: 1 }, 0.05)
    .to(".animation4textInfoCenter1", 0.01, { opacity: 0 }, 0.1)
    .to(".animation4textInfoCenter2", 0.01, { opacity: 1 }, 0.12)
    .to(".animation4textInfoCenter2", 0.01, { opacity: 0 }, 0.16)
    .to(".animation4textInfoCenter3", 0.01, { opacity: 1 }, 0.2)
    .to(".animation4textInfoCenter3", 0.01, { opacity: 0 }, 0.26)
    .to(".animation4textInfoCenter4", 0.01, { opacity: 1 }, 0.3)
    .to(".animation4textInfoCenter4", 0.01, { opacity: 0 }, 0.4)
    .to(
      "#buttonAnimation4",
      0.01,
      { backgroundColor: "#000000", color: "#ffffff" },
      0
    )
    .to(
      "#buttonAnimation4",
      0.01,
      { backgroundColor: "#ffffff", color: "#000000" },
      0.4
    );
});
