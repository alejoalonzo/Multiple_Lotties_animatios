/*var buttonAnimation1 = document.querySelector("#buttonAnimation1");
var buttonAnimation2 = document.querySelector("#buttonAnimation2");
let animation1Container = document.querySelector("#section1");
let animation2Container = document.querySelector("#section2");

const targetY = 19690;

buttonAnimation2.addEventListener("click", function () {
  const currentY = window.scrollY;
  const distance = Math.abs(targetY - currentY);

  if (currentY > targetY) {
    window.scrollTo(0, currentY - distance);
  } else {
    window.scrollTo(0, currentY + distance);
  }
  window.scrollTo(0, targetY);
});*/
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
        // onEnter: () => buttonAnimation1.classList.add("buttonSelected"),
        // onLeave: () => buttonAnimation1.classList.remove("buttonSelected"),
        // onEnterBack: () => buttonAnimation1.classList.add("buttonSelected"),
        // onLeaveBack: () =>
        //   buttonAnimation1.classList.remove("buttonSelected"),
        onUpdate: self => {
          animation.goToAndStop(
            self.progress * (animation.totalFrames - 1),
            true
          );
        },
        onLeave: () => animationTwo(),
      },
    })
    .to(".titleHeroAnimation1", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation1", 0.02, { opacity: 0 }, 0.06)
    .to(".titleHeroAnimation2", 0.02, { opacity: 1 }, 0.08)
    .to(".titleHeroAnimation2", 0.02, { opacity: 0 }, 0.3)
    .to(".titleHeroAnimation3", 0.04, { opacity: 1 }, 0.33)
    .to(".titleHeroAnimation3", 0.04, { opacity: 0 }, 0.4)
    .to(".animation1textInfoLeft1", 0.04, { opacity: 1 }, 0.48)
    .to(".animation1textInfoLeft1", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 1 }, 0.74)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 1.3)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
    .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
    .to(".animation1textInfoLeft4", 0.01, { opacity: 0 }, 2);
});
function animationTwo() {
  //------------------------------------------------Animation 2
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);
  let element = document.querySelector("#Yposition");
  let elementYPosition = element.offsetTop;
  console.log(elementYPosition);

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
          // onEnter: () => buttonAnimation2.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation2.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation2.classList.add("buttonSelected"),
          // onLeaveBack: () => buttonAnimation2.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation2.goToAndStop(
              self.progress * (animation2.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationThee(),
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
      .to(".animation2textInfoLeft6", 0.02, { opacity: 0 }, 0.5);
  });
}

function animationThee() {
  //------------------------------------------------Animation 3

  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);

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
    let tl3 = gsap
      .timeline({
        scrollTrigger: {
          // markers: true,
          trigger: target3,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=1550%",
          // onEnter: () => buttonAnimation3.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation3.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation3.classList.add("buttonSelected"),
          // onLeaveBack: () =>
          //   buttonAnimation3.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation3.goToAndStop(
              self.progress * (animation3.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationFour(),
        },
      })
      .to(".titleHeroAnimation31", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation31", 0.01, { opacity: 0 }, 0.02)
      .to(".animation3textInfoRight1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation3textInfoRight1", 0.01, { opacity: 0 }, 0.12)
      .to(".animation3textInfoRight2", 0.01, { opacity: 1 }, 0.14)
      .to(".animation3textInfoRight2", 0.01, { opacity: 0 }, 0.2)
      .to(".animation3textInfoRight3", 0.04, { opacity: 1 }, 0.24)
      .to(".animation3textInfoRight3", 0.01, { opacity: 0 }, 0.5);
  });
  buttonAnimation3.addEventListener("click", function () {
    animation3.goToAndStop(0, true);
  });
}

function animationFour() {
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);
  //------------------------------------------------animation4
  let buttonAnimation4 = document.querySelector("#buttonAnimation4");
  let target4 = gsap.utils.toArray(".lottie-trigger4")[0];
  let animation4 = lottie.loadAnimation({
    container: target4,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/76174e05-749e-4fc4-a0d7-488b51dd5e15/Lo3BTd9PsT.json",
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
          // onEnter: () => buttonAnimation4.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation4.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation4.classList.add("buttonSelected"),
          // onLeaveBack: () =>
          //   buttonAnimation4.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation4.goToAndStop(
              self.progress * (animation4.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationFive(),
        },
      })
      .to(".titleHeroAnimation41", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation41", 0.01, { opacity: 0 }, 0.06)
      .to(".titleHeroAnimation42", 0.01, { opacity: 1 }, 0.002)
      .to(".titleHeroAnimation42", 0.01, { opacity: 0 }, 0.06)
      .to(".animation4textInfoCenter1", 0.01, { opacity: 1 }, 0.07)
      .to(".animation4textInfoCenter1", 0.01, { opacity: 0 }, 0.12)
      .to(".animation4textInfoCenter2", 0.01, { opacity: 1 }, 0.14)
      .to(".animation4textInfoCenter2", 0.01, { opacity: 0 }, 0.17)
      .to(".animation4textInfoCenter3", 0.01, { opacity: 1 }, 0.2)
      .to(".animation4textInfoCenter3", 0.01, { opacity: 0 }, 0.26)
      .to(".animation4textInfoCenter4", 0.01, { opacity: 1 }, 0.3)
      .to(".animation4textInfoCenter4", 0.01, { opacity: 0 }, 0.4);
  });
}

function animationFive() {
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);

  //------------------------------------------------animation5
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
          // onEnter: () => buttonAnimation5.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation5.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation5.classList.add("buttonSelected"),
          // onLeaveBack: () =>
          //   buttonAnimation5.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation5.goToAndStop(
              self.progress * (animation5.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationSix(),
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
}
//------------------------------------------------animation6
function animationSix() {
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);

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
          // onEnter: () => buttonAnimation6.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation6.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation6.classList.add("buttonSelected"),
          // onLeaveBack: () =>
          //   buttonAnimation6.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation6.goToAndStop(
              self.progress * (animation6.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationSeven(),
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
}

function animationSeven() {
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);

  //------------------------------------------------animation7
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
          // onEnter: () => buttonAnimation7.classList.add("buttonSelected"),
          // onLeave: () => buttonAnimation7.classList.remove("buttonSelected"),
          // onEnterBack: () => buttonAnimation7.classList.add("buttonSelected"),
          // onLeaveBack: () =>
          //   buttonAnimation7.classList.remove("buttonSelected"),
          onUpdate: self => {
            animation7.goToAndStop(
              self.progress * (animation7.totalFrames - 1),
              true
            );
          },
          onLeave: () => animationFinal(),
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
}

function animationFinal() {
  // get the scroll position
  let scrollPosition = window.scrollY;

  // or
  // let scrollPosition = window.pageYOffset;

  console.log(scrollPosition);

  //------------------------------------------------final
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
}
