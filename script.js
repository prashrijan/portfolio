let tl = gsap.timeline()


document.body.classList.add('no-scroll');


tl.from(".text", {
    y: 30,
    opacity: 0,
    ease: "power2.inOut",
    delay: 1,
    duration: 1
})

tl.from(".loader", {
    width: 0,
    ease: "power4.inOut",
    duration: 1
})

tl.to('.pre-loader', {
    top: "-100%",
    ease: "power4.inOut",
    duration: 1,
    onComplete: () => {
        document.body.classList.remove('no-scroll');
    }
})


tl.from('.logo span', {
    y: -60,
    duration: 1,
    ease: "power2.inOut",
    stagger: .3
})

tl.from('.links a', {
    y: -60,
    duration: .7,
    ease: "power2.inOut",
    stagger: .2
})

tl.from('.text-container h2', {
    x: -30,
    opacity: 0,
    ease: "power1.inOut",
    duration: .3
}, "first")

tl.from('.text-container p', {
    x: 30,
    opacity: 0,
    ease: "power1.inOut",
    duration: .3
}, "first")


tl.from('.hero-right img', {
    opacity: 0,
    x: 30,
    duration: .5
}, "first")

gsap.to('.part', {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
})