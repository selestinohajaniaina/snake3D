
setInterval( () => {
    snakeP()
} , 200 );

function changeDrx(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37 && veloX != 1){
        //left
        veloX = -1;
        veloY = 0;
        veloZ = 0;
    }else if (e.keyCode == 38 && veloZ != 1){
        //before
        veloX = 0;
        veloY = 0;
        veloZ = -1;
    }else if (e.keyCode == 39 && veloX != -1){
        //right
        veloX = 1;
        veloY = 0;
        veloZ = 0;
    }else if (e.keyCode == 40 && veloZ != -1){
        //back
        veloX = 0;
        veloY = 0;
        veloZ = 1;
    }else if (e.keyCode == 65 && veloY != -1){
        //up
        veloX = 0;
        veloY = 1;
        veloZ = 0;
    }else if (e.keyCode == 90 && veloY != 1){
        //down
        veloX = 0;
        veloY = -1;
        veloZ = 0;
    }else if (e.keyCode == 32){
        //down
        veloX = 0;
        veloY = 0;
        veloZ = 0;
    }
}

window.onkeyup = (e) => {
    changeDrx(e);
}