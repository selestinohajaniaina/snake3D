const snakeGeo = new THREE.BoxGeometry(1, 1, 1);
const snakeMat = new THREE.MeshLambertMaterial( { color: 0x54e8c1 });
const snake = new THREE.Mesh( snakeGeo, snakeMat );
snake.castShadow = true;
scene.add( snake );

var snakeW = [];
var snakePosition = [];
var veloX = 0;
var veloZ = 0;

function snakeP(){
    snake.position.x += veloX * blkSize / 10;
    snake.position.z += veloZ * blkSize / 10;

    if( snake.position.x == food.position.x && snake.position.z == food.position.z ) {
        let n_snakeGeo = new THREE.BoxGeometry(1, 1, 1);
        let n_snakeMat = new THREE.MeshLambertMaterial( { color: 0x54e8c1 });
        let n_snake = new THREE.Mesh( n_snakeGeo, n_snakeMat );
        n_snake.castShadow = true;
        snakeW.push( n_snake );

        snakePosition.unshift( [ food.position.x , food.position.z ] );
        foodP();

        for(let i = 0; i < snakeW.length ; i++) {
            scene.add( snakeW[i] );
        }
    }
    snakePosition.push( [ snake.position.x , snake.position.z ] );

for(let i = 0; i < snakeW.length ; i++) {
    snakeW[i].position.x = snakePosition[i][0];
    snakeW[i].position.z = snakePosition[i][1];
}
    
    
    snakePosition.shift();
        console.log( snakeW );
}

// snakeP();

function foodP(){
    let acceptPosition;
    let newX = getRandom();
    let newZ = getRandom();

    snakePosition.map( (e) => {
        if( e[0] == newX && e[1] == newZ) {
            acceptPosition = true;
        }
    });

    if( acceptPosition ){
        food.position.x = newX;
        food.position.z = newZ;
    } else {
        food.position.x = getRandom();
        food.position.z = getRandom();
    }
    acceptPosition = true;
}

foodP();