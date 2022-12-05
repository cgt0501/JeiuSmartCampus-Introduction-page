let mainText = document.querySelector(".main")
let display = document.querySelector("#emo")

window.addEventListener('scroll', function(){
    let value = window.scrollY
    // console.log("scrollY", value);

    if(value>250) {
        mainText.style.animation = "top-back-1 1.5s ease-in-out forwards";
        display.style.animation = "opacity-back 1.5s ease-in-out forwards";
    } else {
        mainText.style.animation = "top-slide-1 1.5s ease-in-out";
        display.style.animation = "opacity 1.5s ease-in-out";
    }
})

let observer = new IntersectionObserver((e)=>{
    e.forEach((contents)=>{
        if(contents.isIntersecting) {
            contents.target.style.opacity = 1;
            contents.target.style.bottom = '0px';
        } else {
            contents.target.style.opacity = 0;
            contents.target.style.bottom = '-150px';
        }
    })
})

let section = document.querySelectorAll('section')
observer.observe(section[0])
observer.observe(section[1])
observer.observe(section[2])
observer.observe(section[3])
observer.observe(section[4])
observer.observe(section[5])
observer.observe(section[6])
observer.observe(section[7])
observer.observe(section[8])