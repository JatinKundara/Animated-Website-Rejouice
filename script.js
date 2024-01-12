function cursorEffect(){
    var page1Content = document.querySelector(".page1-content")

    var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    // console.log(dets/)
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

var page5 = document.querySelector(".page5");

var tl = gsap.timeline();

tl.from("#loader h3",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.to("#loader h3",{
    opacity:0,
    x:-20,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:1,
    daley:-0.05
})
tl.to("#loader",{
    display:"none"
})

// // Swiper
// const swiper = new Swiper(".swiper", {
// })


tl.from(".page5 h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    daley:-0.05
})

$('#owlsec').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplayTimeout:2000,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})