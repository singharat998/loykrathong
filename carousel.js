
const slider = document.querySelector(".slider");
const slideritems = document.querySelectorAll(".slide-item");
const prevButton = document.querySelector(".PrevButton");
const nextButton = document.querySelector(".NextButton");
const PointNavigation = document.querySelectorAll(".circle-navigation");

var numbeofSlide = slideritems.length;

var slideNumber = 0;


nextButton.addEventListener("click",()=>{

    slideritems.forEach((index)=>{
        index.classList.remove("active");
    })

    PointNavigation.forEach((index)=>{
        index.classList.remove("active");
    })
    
    slideNumber++

    if(slideNumber > (slideritems.length - 1)){
        slideNumber = 0;
    }

    slideritems[slideNumber].classList.add("active");
    PointNavigation[slideNumber].classList.add("active");

})


prevButton.addEventListener("click",()=>{

    slideritems.forEach((index)=>{
        index.classList.remove("active");
    })

    PointNavigation.forEach((index)=>{
        index.classList.remove("active");
    })
    
    slideNumber--

    if(slideNumber < 0){
        slideNumber = slideritems.length - 1
    }

    slideritems[slideNumber].classList.add("active");
    PointNavigation[slideNumber].classList.add("active");

})



var PlayLoadSlide;

const PlaySlide = () =>{
        PlayLoadSlide = setInterval(()=>{
        slideritems.forEach((index)=>{
            index.classList.remove("active");
        })
    
        PointNavigation.forEach((index)=>{
            index.classList.remove("active");
        })
        
        slideNumber++
    
        if(slideNumber > (slideritems.length - 1)){
            slideNumber = 0;
        }
    
        slideritems[slideNumber].classList.add("active");
        PointNavigation[slideNumber].classList.add("active");
    },3000);
}

PlaySlide();


    slider.addEventListener("mouseover",()=>{
        clearInterval(PlayLoadSlide);
    })

    
    slider.addEventListener("mouseout",()=>{
        PlaySlide();
    })
