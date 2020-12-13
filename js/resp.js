burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
}) 

var setTheme = localStorage.getItem('theme')
console.log('theme: ', setTheme)
if (setTheme == null) {
    swapStyle('css/style.css')
}
else {
    swapStyle(setTheme)
}
 function swapStyle(sheet) {
     document.getElementById('mystylesheet').href = sheet
     localStorage.setItem('theme', sheet)
}

const c_slide = document.querySelector('.slide');
const c_imgs = document.querySelectorAll('.slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const c_slide1 = document.querySelector('.slide1');
const c_imgs1 = document.querySelectorAll('.slide1 img');
const prevBtn1 = document.querySelector('#prevBtn1');
const nextBtn1 = document.querySelector('#nextBtn1');

const c_slide2 = document.querySelector('.slide2');
const c_imgs2= document.querySelectorAll('.slide2 img');
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

const c_slide3 = document.querySelector('.slide3');
const c_imgs3 = document.querySelectorAll('.slide3 img');
const prevBtn3 = document.querySelector('#prevBtn3');
const nextBtn3 = document.querySelector('#nextBtn3');

 counter =1,counter1 =1,counter2 =1, counter3 =1;
const size = c_imgs[0].clientWidth;
const size1 = c_imgs1[0].clientWidth;
const size2 = c_imgs2[0].clientWidth;
const size3 = c_imgs3[0].clientWidth;
c_slide.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide1.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide2.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide3.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';

c_slide.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide1.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide2.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';
c_slide3.style.webkitTransform = 'translateX(' + (- size * counter ) + 'px)';




c_slide.addEventListener('transitionend' ,() =>{
    if(c_imgs[counter].id == 'lastClone'){
        c_slide.style.transition="none";
        counter=c_imgs.length-2;
        c_slide.style.webkitTransform = 'translateX(' + (-size*counter) + 'px)';
    }

    if(c_imgs[counter].id == 'firstClone'){
        c_slide.style.transition="none";
        counter=c_imgs.length-counter;
        c_slide.style.webkitTransform = 'translateX(' + (-size*counter) + 'px)';
    }
});

c_slide1.addEventListener('transitionend' ,() =>{
    if(c_imgs1[counter].id == 'lastClone1'){
        c_slide1.style.transition="none";
        counter1=c_imgs1.length-2;
        c_slide1.style.webkitTransform = 'translateX(' + (-size*counter1) + 'px)';
    }

    if(c_imgs1[counter].id == 'firstClone1'){
        c_slide1.style.transition="none";
        counter1=c_imgs1.length-counter1;
        c_slide1.style.webkitTransform = 'translateX(' + (-size*counter1) + 'px)';
    }
});

c_slide2.addEventListener('transitionend' ,() =>{
    if(c_imgs2[counter].id == 'lastClone2'){
        c_slide2.style.transition="none";
        counter2=c_imgs2.length-2;
        c_slide2.style.webkitTransform = 'translateX(' + (-size*counter2) + 'px)';
    }

    if(c_imgs2[counter].id == 'firstClone2'){
        c_slide2.style.transition="none";
        counter2=c_imgs2.length-counter2;
        c_slide2.style.webkitTransform = 'translateX(' + (-size*counter2) + 'px)';
    }
});

c_slide3.addEventListener('transitionend' ,() =>{
    if(c_imgs3[counter].id == 'lastClone3'){
        c_slide3.style.transition="none";
        counter3=c_imgs3.length-2;
        c_slide3.style.webkitTransform = 'translateX(' + (-size*counter3) + 'px)';
    }

    if(c_imgs3[counter].id == 'firstClone3'){
        c_slide3.style.transition="none";
        counter3=c_imgs3.length-counter3;
        c_slide3.style.webkitTransform = 'translateX(' + (-size*counter3) + 'px)';
    }
});

nextBtn.addEventListener('click', () => {
    if(counter>=c_imgs.length-1) return;
    c_slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    c_slide.style.webkitTransform = 'translateX(' + (-size*counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
    if(counter <=0) return;
    c_slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    c_slide.style.webkitTransform = 'translateX(' + (-size*counter) + 'px)';
});

nextBtn1.addEventListener('click', ()=>{
    if(counter1>=c_imgs1.length-1) return;
    c_slide1.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    c_slide1.style.webkitTransform = 'translateX(' + (-size*counter1) + 'px)';
});


prevBtn1.addEventListener('click', () => {
    if(counter1 <=0) return;
    c_slide1.style.transition = "transform 0.4s ease-in-out";
    counter1--;
    c_slide1.style.webkitTransform = 'translateX(' + (-size*counter1) + 'px)';
});


nextBtn2.addEventListener('click', ()=>{
    if(counter2>=c_imgs2.length-1) return;
    c_slide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    c_slide2.style.webkitTransform = 'translateX(' + (-size*counter2) + 'px)';
});


prevBtn2.addEventListener('click', () => {
    if(counter2 <=0) return;
    c_slide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    c_slide2.style.webkitTransform = 'translateX(' + (-size*counter2) + 'px)';
});




nextBtn3.addEventListener('click', ()=>{
    if(counter3>=c_imgs3.length-1) return;
    c_slide3.style.transition = "transform 0.4s ease-in-out";
    counter3++;
    c_slide3.style.webkitTransform = 'translateX(' + (-size*counter3) + 'px)';
});


prevBtn3.addEventListener('click', () => {
    if(counter3 <=0) return;
    c_slide3.style.transition = "transform 0.4s ease-in-out";
    counter3--;
    c_slide3.style.webkitTransform = 'translateX(' + (-size*counter3) + 'px)';
});

