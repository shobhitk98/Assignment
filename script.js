const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loadinganimation() {
    gsap.from(".left h1", {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from(".left h2", {
        x: 100,
        opacity: 0,
        delay: 1,
        duration: 0.9,
        stagger: 0.3,
      });
      gsap.from(".right1 h1", {
        x: 100,
        opacity: 0,
        delay: 1.5,
        duration: 0.9,
        stagger: 0.3,
      });
      gsap.from(".right1 li", {
        x: 100,
        opacity: 0,
        delay: 2,
        duration: 0.9,
        stagger: 0.3,
      });
}
loadinganimation();