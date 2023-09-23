
const hex = [1,1,2,3,4,5,6,7,8,9,"A","B","C","C","D","D","E","E","F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    let hexColor = "#";
    for( let i=0; i<6; i++){
        hexColor += hex[getRandomNumbers()];
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumbers(){

    return Math.floor(Math.random() * hex.length);
}

