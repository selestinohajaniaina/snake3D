const foodGeo = new THREE.BoxGeometry(1, 1, 1);
const foodMat = new THREE.MeshLambertMaterial( { color: 0xfd3f92 });
const food = new THREE.Mesh( foodGeo, foodMat );
food.castShadow = true;
scene.add( food );

function getRandom() {
    return Math.floor(Math.random() * blkSize);
}

