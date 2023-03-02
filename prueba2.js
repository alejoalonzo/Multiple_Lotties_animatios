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
        onLeave: () => aniamtionTwo(),
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
    .to(".titleHeroAnimation2", 0.02, { opacity: 0 }, 0.3);
});
//------------------------------------------------Animation 2

function animationTwo() {
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
          onLeave: () => animationThree(),
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
      .to(".animation2textInfoLeft1", 0.01, { opacity: 0 }, 0.16);
  });
}

//------------------------------------------------Animation 3
function animationThree() {}
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let sectionClass3 = ".lottie-trigger3";
let target3 = gsap.utils.toArray(".lottie-trigger3")[0];
let animation3 = lottie.loadAnimation({
  container: target3,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/d4781568-f5f5-4c1f-aa78-946bef25bbdc/wpgg7IMIjY.json",
});

animation3.addEventListener("DOMLoaded", function () {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: target3,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=1550%",
      onUpdate: self => {
        animation3.goToAndStop(
          self.progress * (animation3.totalFrames - 1),
          true
        );
      },
    },
  });
});
