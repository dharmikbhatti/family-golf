Shery.mouseFollower()

Shery.makeMagnet("#nav h4, #nav img, #nav>button", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  

// var h4all = document.querySelectorAll("#nav h4,#nav img, #nav button")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3.5
//         crsr.style.backgroundColor = "transparent"
//         crsr.style.border = "1px solid #fff"
//     })
//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.backgroundColor = "#9ecf16"
//         crsr.style.border = "0px solid #9ecf16"
//     })
// })

gsap.to("#nav", {
    backgroundColor: "black",
    height: "14vh",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -8%",
        end: "top -8%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 61%",
        scrub: 2.5
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from(".colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from(".colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
}) 

gsap.from("#page-4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        scrub: 2
    }
})