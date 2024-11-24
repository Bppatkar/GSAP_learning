function locoScoll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
// _________________________________________________
function textSplitting() {
  const allH1 = document.querySelectorAll(".page2 h1");

  allH1.forEach(function (e) {
    let clutter = "";
    let splitedText = e.textContent.split("");
    splitedText.forEach(function (char) {
      clutter += `<span>${char}</span>`;
    });
    e.innerHTML = clutter;
  });
}

function gsapAnimation() {
  gsap.to(".page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".page2 h1 span",
      markers: true,
      start: "top 80%",
      end: "top -20%",
      scrub: 2,
    },
  });
}

locoScoll();
textSplitting();
gsapAnimation();
