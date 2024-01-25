const btn = document.querySelector(".btn");
const back = document.querySelector(".back");
const wrp = document.querySelector(".wrapper");
const star = document.querySelector(".star");

btn.addEventListener("click", ()=>{
    wrp.style.display = "block";
    star.style.display = "none";

    back.addEventListener("click", ()=>{
        star.style.display = "block";
        wrp.style.display = "none";
    })
})
