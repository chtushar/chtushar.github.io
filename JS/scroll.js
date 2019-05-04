function black(){
    let background=document.querySelector("#front");
    background.style.backgroundColor= "black";
    background.style.transition="background-color 0.5s 0.3s ease-in";


    let profBack=document.querySelector("#prof");
    profBack.style.backgroundColor="white";
    profBack.style.color="black";
    profBack.style.transition="color 0.5s 0.3s ease-in,background-color 0.5s 0.3s ease-in"

    let menu= document.querySelector(".about a");
    menu.style.color="#F2BB15";
    menu.style.transition="color 0.5s 0.3s ease-in";

}