const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slide01 = document.querySelector('.slide01');


let sliderNumber = 1;
const images = document.querySelectorAll('.slider');
const length = images.length;


const nextSlide = () =>{
    slide01.style.transform =  `translateX(-${sliderNumber*1500}px)`;
    sliderNumber++; 
};

const prevSlide = () => {
    slide01.style.transform =`translateX(-${(sliderNumber - 2)*1500}px)`;
    sliderNumber--;
};

const getFirstslide = () => {
    slide01.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

const getlastSlide = () => {
    slide01.style.transform = `translateX(-${(length-1)*1500}px)`;
    sliderNumber = length ;
}







right.addEventListener('click',() => {
    sliderNumber < length ? nextSlide() : getFirstslide(); 
});

left.addEventListener('click',() => {
   
    sliderNumber > 1 ? prevSlide() : getlastSlide();
});   


const place = document.querySelector(".place");

const openplace = () => {

  
    place.classList.add("activeplace");
   
} ;





