let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline

  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
