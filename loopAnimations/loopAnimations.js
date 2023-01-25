console.clear();

document.addEventListener("DOMContentLoaded", function (event) {
  let lottieFrame1 = { frame: 0 },
    lottieAnim1 = lottie.loadAnimation({
      container: document.querySelector("#lottieDiv1"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://lottie.host/102ce5ef-2bb0-4e06-a222-569f07c4fbb8/A5JYYo8S1Y.json",
    });

  let lottieAnim2 = lottie.loadAnimation({
    container: document.querySelector("#lottieDiv2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/950c77d6-7061-447e-908f-46803639f7ed/u9CUA4PebH.json",
    frame: 0,
  });

  let lotties = [lottieAnim1, lottieAnim2],
    loadednum = 0;

  lotties.forEach(function (element) {
    element.addEventListener("DOMLoaded", function () {
      loadednum++;
      isComplete();
    });
  });

  function isComplete() {
    if (loadednum >= lotties.length) {
      console.log("ready");
      tlFunc();
    }
  }

  function tlFunc() {
    var tenoutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ten-out-of-ten",
        start: "center center",
        end: "800% center",
        markers: false,
        scrub: 1,
        pin: true,
      },
    });

    var tl1 = gsap.timeline();
    var tl2 = gsap.timeline();

    gsap.set("#two", { opacity: 0 });
    gsap.set("#three", { opacity: 0 });

    tl1
      .to(lottieFrame1, {
        frame: lottieAnim1.totalFrames - 1,
        duration: 1000,
        ease: "none",
        onUpdate: () => lottieAnim1.goToAndStop(lottieFrame1.frame, true),
      })
      .add("fade")
      .totalDuration(15);

    tl2
      .to("#two", { opacity: 1, duration: 2 }, "fade")
      .to(lottieAnim2, {
        frame: lottieAnim2.totalFrames - 1,
        duration: 10,
        ease: "none",
        onUpdate: () => lottieAnim2.goToAndStop(lottieAnim2.frame, true),
      })
      .add("fade")
      .to("#three", { opacity: 1, duration: 2 }, "fade")
      .totalDuration(15);

    tenoutTl.add(tl1).add(tl2);

    // Testing total duration output
    var total1 = tl1.totalDuration();
    var total2 = tl2.totalDuration();
    var total = tenoutTl.totalDuration();

    console.log(
      "Duration A:" +
        total1 +
        " | Duration B:" +
        total2 +
        " | Duration C:" +
        total
    );
  }
});

// $(document).ready(function () {

// });

//https://greensock.com/forums/topic/29446-multiple-timelines-scrolltrigger-and-lottie/#comment-147417
