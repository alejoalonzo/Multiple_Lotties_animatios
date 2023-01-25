//------------------------------------------------Buttons

let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");

window.onload = function () {
  buttonAnimation4.classList.add("buttonSelected");
};

//------------------------------------------------Animation4
let sectionClass4 = ".lottie-trigger4";
let target4 = gsap.utils.toArray(".lottie-trigger4")[0];
let animation4 = lottie.loadAnimation({
  container: target4,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/81a843bf-f67a-4f67-bed6-7fd28b6c2bea/kY6r7TfZR7.json",
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
    .to(".animation4textInfoCenter4", 0.01, { opacity: 0 }, 0.4);
});
