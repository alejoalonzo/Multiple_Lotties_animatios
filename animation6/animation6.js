let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let sectionClass6 = ".lottie-trigger6";
let target6 = gsap.utils.toArray(".lottie-trigger6")[0];
let animation6 = lottie.loadAnimation({
  container: target6,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/8ddb2526-857e-4b19-be08-ca9521082719/ZlsB8aH0JE.json",
});

animation6.addEventListener("DOMLoaded", function () {
  let tl6 = gsap.timeline({
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
  });
});
