
const tl = gsap.timeline();

tl.from("body", {
    duration: 1,
    opacity:0,
  }).from(".hero__group > *", {
    duration: 1.3,
    y:-20,
    opacity:0,
    stagger: .2,})
    .from(".cards .cs-card", {
        duration: 1.3,
        y:-20,
        opacity:0,
        stagger: .2,});
  