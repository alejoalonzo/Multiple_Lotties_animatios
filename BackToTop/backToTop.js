let buttonBackToTop = document.querySelector("#buttonBackToTop");
let targetFinal = gsap.utils.toArray(".lottie-triggerFinal")[0];
let animationFinal = lottie.loadAnimation({
  container: targetFinal,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets8.lottiefiles.com/private_files/lf30_p9aibugk.json",
});

animationFinal.addEventListener("DOMLoaded", function () {
  let tlFinal = gsap
    .timeline({
      scrollTrigger: {
        trigger: targetFinal,
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=450%",
        onUpdate: self => {
          animationFinal.goToAndStop(
            self.progress * (animationFinal.totalFrames - 1),
            true
          );
        },
      },
    })
    .to(".titleHeroAnimation72", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation72", 0.02, { opacity: 0 }, 2)
    .to(".titleHeroAnimation73", 0, { opacity: 1 }, 0.4)
    .to(".titleHeroAnimation73", 0.02, { opacity: 0 }, 2)
    .to(".titleHeroAnimation74", 0, { opacity: 1 }, 0.8)
    .to(".titleHeroAnimation74", 0.02, { opacity: 0 }, 2)
    .to(".titleHeroAnimation75", 0, { opacity: 1 }, 1.2)
    .to(".titleHeroAnimation75", 0.02, { opacity: 0 }, 2)
    .to(".titleHeroAnimation76", 0, { opacity: 1 }, 1.6)
    .to(".titleHeroAnimation76", 0.02, { opacity: 0 }, 2)
    .to(".buttonBackToTopAnimation", 0, { opacity: 1 }, 1.6)
    .to(".buttonBackToTopAnimation", 0.02, { opacity: 0 }, 2);
});
