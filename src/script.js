const bord = document.querySelector('.app');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );
camera.position.set( 2 , 10 , 20 );
scene.add( camera );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 1100 , 600 );
renderer.shadowMap.enabled = true;
bord.appendChild( renderer.domElement );

let animate = () => {
    requestAnimationFrame( animate );
    renderer.render( scene , camera );
}
animate();