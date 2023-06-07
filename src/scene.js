const blkSize = 10;
const row = 2;
const col = 2;

const planGeo = new THREE.PlaneGeometry( blkSize * row , blkSize * col );
const planMat = new THREE.MeshLambertMaterial();
const plan = new THREE.Mesh( planGeo , planMat );
plan.rotation.set( -Math.PI / 2 , 0 , 0 );
plan.position.set( ( blkSize / 2 ) - 0.5 , -0.8 , ( blkSize / 2 ) - 0.5 );
plan.receiveShadow = true;
scene.add( plan );

const controls = new THREE.OrbitControls( camera , renderer.domElement );
controls.update();

const axesHelper = new THREE.AxesHelper( 5 );
axesHelper.position.set( -0.5 , -0.5 , -0.5 );
scene.add( axesHelper );

const plan2 = new THREE.Mesh( planGeo , planMat );
plan2.position.set( ( blkSize / 2 ) - 0.5 , blkSize -0.8 , - ( blkSize / 2 ) - 0.5 );
const plan3 = new THREE.Mesh( planGeo , planMat );
plan3.rotation.set( 0 , Math.PI / 2 , 0 );
plan3.position.set( - ( blkSize / 2 ) - 0.5 , blkSize -0.8 , ( blkSize / 2 ) - 0.5 );

scene.add( plan2 );
scene.add( plan3 );