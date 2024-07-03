function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if (a<100){
            document.querySelector("h1").innerHTML=a+"%"
        }
        else{
            a = 100
            document.querySelector("h1").innerHTML=a+"%"
        }
    },100)
}
time()

var tl = gsap.timeline()

tl.to("#loader h1",{
    scale:1.3,
    delay:2,
    duration:2
})

tl.to("#loader",{
    top:"-100vh",
    delay:.3,
    duration:2,
    scrub:3
})
tl.to("#loader img",{
    rotate:180,
    scale:1.5
})
tl.from("#nav h2 ,#nav h4",{
    y:-100,
    duration:0.9,
    delay:0.6,
    opacity:0,
    stagger:0.3
})
tl.to("#page1 h1",{
    transform:"translateX(-77%)",
    fontWeight:"300",
    delay:2,
    color:"red",
    duration:1.5,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        pin:true,
        scrub:2,
        
    }

})
tl.to("#page2 img",{
    scale:1.2,
    x:700,
    delay:3,
    duration:2,
    scrollTrigger:{
        trigger:"#page-2 img",
        scroller:"body",
        scrub:2,
    }
})

tl.to("#page3 img",{
    scale:1.2,
    x:-700,
    delay:3,
    duration:2,
    scrollTrigger:{
        trigger:"#page-2 img",
        scroller:"body",
        scrub:2,
    }
})
tl.from("#para h1",{
    opacity:0,
    y:50,
    duration:3,
    delay:1,
    stagger:2,
    scrollTrigger:{
        trigger:"#para h1",
        scroller:"body",
        scrub:2,
    }
})
tl.from("#para2 h1",{
    opacity:0,
    y:-50,
    duration:3,
    delay:1,
    stagger:2,
    scrollTrigger:{
        trigger:"#para2 h1",
        scroller:"body",
        scrub:2,
    }
})