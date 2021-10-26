var counter = 0;
var flashOn = 0;

let colors = ["black", "white", "blue", "red", "yellow", "green", "pink", "lime", "cyan", "brown"];

function onClick(){
    if(flashOn == 0){flashOn = 1;}
    else{flashOn = 0; returnColor();}
    flash();
}

function flash(){
    if(flashOn == 1){
        counter++;
    
        if(counter < 1000){
            if((counter % 2) == 1){
                document.body.style.backgroundColor = colors[getRandomInt(colors.length)];
            }else{
                document.body.style.backgroundColor = colors[getRandomInt(colors.length)];
            }
            setTimeout(flash, 30);  
        }
        else{counter = 0; returnColor();}
    }
}

function returnColor(){document.body.style.backgroundColor = "white";}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}