const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  opacity: 0,
  ease: Power2,
});

Shery.textAnimate(".headings h1" , {
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2",{
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: Expo,
    duration: 1,
})

Shery.imageEffect(".imagentext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 9.92, range: [0, 100] },
    uFrequencyZ: { value: 23.97, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 16.1 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.6, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.22, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.666684744281203 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.6, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 14.54 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 9.92, range: [0, 100] },
    uFrequencyZ: { value: 22.31, range: [0, 100] },
  },
});

gsap.from(".imagentext img",{
    y:"100",
    opacity: 0,
    duration: 1.5,
    ease: Expo,
});

Shery.imageEffect(".bimg", {
  style: 4,
  gooey: true,
//   debug: true,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 4.64 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.8923700255113416 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.58, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 32 } },
    discard_threshold: { value: 0.67, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uFrequencyX: { value: 6.61, range: [0, 100] },
    uFrequencyY: { value: 5.79, range: [0, 100] },
    uFrequencyZ: { value: 5.79, range: [0, 100] },
  },
});

document.querySelector(".ftext button").addEventListener("mouseover",()=>{
    gsap.to(".future video",{
        opacity: 1,
        duration: 1,
        ease: Power4,
    
    })
})

document.querySelector(".ftext button").addEventListener("mouseleave", () => {
    gsap.to(".future video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
    });
});