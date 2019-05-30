function black(){


    let background=document.querySelector(".front");
        background.classList.remove('front');
        background.classList.add('black-front');

    let profBack=document.querySelector(".line");
        profBack.classList.remove('line');
        profBack.classList.add('black-line');

    let menu= document.querySelector(".about a");
        menu.style.color="#855BFF";
        menu.style.transition="color 0.5s 0.3s ease-in";

    let logo=document.querySelector(".logo");
        logo.style.filter="invert(0)";
        logo.style.transition="filter 0.5s 0.3s ease-in";



}
function white() {
    let background=document.querySelector(".black-front");
        background.classList.remove('black-front');
        background.classList.add('front');

    let profBack=document.querySelector(".black-line");
        profBack.classList.remove('black-line');
        profBack.classList.add('line');

    let menu= document.querySelector(".about a");
        menu.style.color="black";
        menu.style.transition="color 0.5s 0.3s ease-in";

    let logo=document.querySelector(".logo");
        logo.style.filter="invert(1)";
        logo.style.transition="filter 0.5s 0.3s ease-in";

}



var scrollPos = 100;
window.addEventListener('scroll',()=>{
    if (scrollPos < pageYOffset) {
        black();
    }
    else {
        white();
    }
});