
const colors = ["rgb(255,255,0)","rgb(128,0,0)","rgb(139,0,0)","rgb(255,255,0)","rgb(255,255,0)","rgb(255,255,0)","rgb(184,134,11)","rgb(34,139,34)","rgb(102,205,170)","rgb(0,139,139)","rgb(176,224,230)","rgb(100,149,237)","rgb(72,61,139)","rgb(148,0,211)"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const randomNumber = getRandomNumbers() ;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumbers(){

    return Math.floor(Math.random() * colors.length);
}