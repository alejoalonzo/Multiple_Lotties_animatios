// //Windows
// if (navigator.appVersion.indexOf("Win") != -1){
//   document.getElementsByTagName("body")[0].classList.add("win");
// }
// //Mac
// else if (navigator.appVersion.indexOf("Mac") != -1){
//   document.getElementsByTagName("body")[0].classList.add("mac");
// }

//------------------------------------------------Buttons
let buttonAnimation1 = document.querySelector("#buttonAnimation1");
let buttonAnimation2 = document.querySelector("#buttonAnimation2");
let buttonAnimation3 = document.querySelector("#buttonAnimation3");
let buttonAnimation4 = document.querySelector("#buttonAnimation4");
let buttonAnimation5 = document.querySelector("#buttonAnimation5");
let buttonAnimation6 = document.querySelector("#buttonAnimation6");
let buttonAnimation7 = document.querySelector("#buttonAnimation7");

let sectionLottie1 = document.querySelector(".lottie-trigger1");
let sectionLottie2 = document.querySelector(".lottie-trigger2");
let sectionLottie3 = document.querySelector(".lottie-trigger3");
let sectionLottie4 = document.querySelector(".lottie-trigger4");
let sectionLottie5 = document.querySelector(".lottie-trigger5");
let sectionLottie6 = document.querySelector(".lottie-trigger6");
let sectionLottie7 = document.querySelector(".lottie-trigger7");

buttonAnimation7.addEventListener("click", () => {
  aniamtionTwo();
});

//------------------------------------------------Animation 1
let sectionClass = ".lottie-trigger";
let target = gsap.utils.toArray(".lottie-trigger")[0];
let animation = lottie.loadAnimation({
  container: target,
  renderer: "svg",
  loop: false,
  autoplay: false,
  //path: "https://lottie.host/e53b759c-3262-46b9-8d7f-86e5e58a457f/fsMUngiOPD.json",
  path: "https://lottie.host/102ce5ef-2bb0-4e06-a222-569f07c4fbb8/A5JYYo8S1Y.json",
});

animation.addEventListener("DOMLoaded", function () {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: 10,
        start: "top top",
        end: "+=2750%",
        onEnter: () => buttonAnimation1.classList.add("buttonSelected"),
        onLeave: () => buttonAnimation1.classList.remove("buttonSelected"),
        onEnterBack: () => buttonAnimation1.classList.add("buttonSelected"),
        onLeaveBack: () => buttonAnimation1.classList.remove("buttonSelected"),

        onLeave: () => aniamtionTwo(),
        onUpdate: self => {
          animation.goToAndStop(
            self.progress * (animation.totalFrames - 1),
            true
          );
        },
      },
    })

    //tl.fromTo(target, { x: 0 }, { x: -1500, duration: 0.1 }, 3)
    .to(".titleHeroAnimation1", 0, { opacity: 1 }, 0)
    .to(".titleHeroAnimation1", 0.02, { opacity: 0 }, 0.04)
    .to(".titleHeroAnimation2", 0.02, { opacity: 1 }, 0.05)
    .to(".titleHeroAnimation2", 0.04, { opacity: 0 }, 0.1)
    .to(".titleHeroAnimation3", 0.04, { opacity: 1 }, 0.24)
    .to(".titleHeroAnimation3", 0.04, { opacity: 0 }, 0.35)
    .to(
      "#buttonAnimation1",
      0.01,
      { backgroundColor: "#000000", color: "#ffffff" },
      0.24
    )
    .to(
      "#buttonAnimation1",
      0.01,
      { backgroundColor: "#ffffff", color: "#000000" },
      2
    )
    .to(".animation1textInfoLeft1", 0.04, { opacity: 1 }, 0.48)
    .to(".animation1textInfoLeft1", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 1 }, 0.74)
    .to(".animation1textInfoLeft2", 0.04, { opacity: 0 }, 1.5)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 1 }, 1.3)
    .to(".animation1textInfoLeft3", 0.04, { opacity: 0 }, 2) //1.5
    .to(".animation1textInfoLeft4", 0.04, { opacity: 1 }, 1.55)
    .to(".animation1textInfoLeft4", 0.01, { opacity: 0 }, 2);
  // TweenMax.to("#buttonAnimation1", 0.04, {
  //   className: "+= buttonsAnimations buttonSelected",
  // });
  // TweenMax.to(
  //   "#buttonAnimation1",
  //   0.04,
  //   {
  //     backgroundColor: "#000000",
  //     color: "#ffffff",
  //   },
  //   2
  // );
  // tl.fromTo(".text2", { y: 200 }, { y: -300, duration: 1 }, 2);
});

//------------------------------------------------Animation 2

function aniamtionTwo() {
  let sectionClass2 = ".lottie-trigger2";
  let target2 = gsap.utils.toArray(".lottie-trigger2")[0];
  let animation2 = lottie.loadAnimation({
    container: target2,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/b0403543-3a59-4d34-8aae-c49fd0a1ad54/VPlZovhDc1.json",
    //path: "https://assets6.lottiefiles.com/private_files/lf30_oOGQFY.json",
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
          onLeaveBack: () =>
            buttonAnimation2.classList.remove("buttonSelected"),
          onLeave: () => animationThreePre(),
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
}

//------------------------------------------------PREAnimation 3
function animationThreePre() {
  let sectionClass3Pre = ".lottie-trigger3Pre";
  let target3Pre = gsap.utils.toArray(".lottie-trigger3Pre")[0];
  let preAnimation3 = lottie.loadAnimation({
    container: target3Pre,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://assets8.lottiefiles.com/private_files/lf30_p9aibugk.json",
  });

  preAnimation3.addEventListener("DOMLoaded", function () {
    let tl3Pre = gsap
      .timeline({
        scrollTrigger: {
          trigger: target3Pre,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=140%",
          onLeave: () => animationThree(),
          onUpdate: self => {
            preAnimation3.goToAndStop(
              self.progress * (preAnimation3.totalFrames - 1),
              true
            );
          },
        },
      })
      .to(".titleHeroAnimation31", 0, { opacity: 1 }, 0)
      .to(".titleHeroAnimation31", 0.2, { opacity: 0 }, 1)
      .to(
        "#buttonAnimation3",
        0.01,
        { backgroundColor: "#000000", color: "#ffffff" },
        0
      );
  });
}
//------------------------------------------------Animation 3
function animationThree() {
  let sectionClass3 = ".lottie-trigger3";
  let target3 = gsap.utils.toArray(".lottie-trigger3")[0];
  let animation3 = lottie.loadAnimation({
    container: target3,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/06e8b85b-59e9-42f7-885b-0a7a8778b74e/nFAWK54IXM.json",
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

          onLeave: () => animationFour(),
          onUpdate: self => {
            animation3.goToAndStop(
              self.progress * (animation3.totalFrames - 1),
              true
            );
          },
        },
      })
      // .to(".titleHeroAnimation31", 0, { opacity: 1 }, 0)
      // .to(".titleHeroAnimation31", 0.01, { opacity: 0 }, 0.02)
      .to(".animation3textInfoRight1", 0.01, { opacity: 1 }, 0.05)
      .to(".animation3textInfoRight1", 0.01, { opacity: 0 }, 0.12)
      .to(".animation3textInfoRight2", 0.01, { opacity: 1 }, 0.14)
      .to(".animation3textInfoRight2", 0.01, { opacity: 0 }, 0.2)
      .to(".animation3textInfoRight3", 0.04, { opacity: 1 }, 0.24)
      .to(".animation3textInfoRight3", 0.01, { opacity: 0 }, 0.5)

      .to(
        "#buttonAnimation3",
        0.01,
        { backgroundColor: "#ffffff", color: "#000000" },
        0.5
      );
  });
}
//------------------------------------------------Animation4

function animationFour() {
  let sectionClass4 = ".lottie-trigger4";
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

          onLeave: () => animationFive(),
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
}

//------------------------------------------------Animation5
function animationFive() {
  let sectionClass5 = ".lottie-trigger5";
  let target5 = gsap.utils.toArray(".lottie-trigger5")[0];
  let animation5 = lottie.loadAnimation({
    container: target5,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/214d54aa-560b-47d9-bd5b-56f0028a6117/GElQeHBaA1.json",
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

          onLeave: () => animationSix(),
          onUpdate: self => {
            animation5.goToAndStop(
              self.progress * (animation5.totalFrames - 1),
              true
            );
          },
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
      .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 1 }, 0.35)
      .to(".titleHeroAnimationYellowBox", 0.01, { opacity: 0 }, 0.4)
      .to(
        "#buttonAnimation5",
        0.01,
        { backgroundColor: "#000000", color: "#ffffff" },
        0
      )
      .to(
        "#buttonAnimation5",
        0.01,
        { backgroundColor: "#ffffff", color: "#000000" },
        0.4
      );
  });
}

//------------------------------------------------Animation6
function animationSix() {
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
        onLeave: () => animationSeven(),
        onUpdate: self => {
          animation6.goToAndStop(
            self.progress * (animation6.totalFrames - 1),
            true
          );
        },
      },
    });
  });
}
//------------------------------------------------Animation7
function animationSeven() {
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
      .to(".titleHeroAnimation76", 0.01, { opacity: 0 }, 0.94)
      .to(
        "#buttonAnimation7",
        0.01,
        { backgroundColor: "#000000", color: "#ffffff" },
        0
      )
      .to(
        "#buttonAnimation7",
        0.01,
        { backgroundColor: "#ffffff", color: "#000000" },
        0.94
      );
    // .to(".buttonBackToTopAnimation", 0, { opacity: 1 }, 0.82)
    // .to(".buttonBackToTopAnimation", 0.01, { opacity: 0 }, 0.85);
  });
}
