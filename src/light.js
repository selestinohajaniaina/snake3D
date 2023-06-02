const light1 = new THREE.SpotLight()
light1.position.set(15, 5, 7)
light1.angle = Math.PI / 3
light1.penumbra = 0.5
light1.castShadow = true
light1.shadow.mapSize.width = 1024
light1.shadow.mapSize.height = 1024
light1.shadow.camera.near = 0.5
light1.shadow.camera.far = 20
scene.add(light1)

const light2 = new THREE.SpotLight( 0x2a2a2a );
light2.position.set(-2.5, -5, 5)
light2.angle = Math.PI / 3
light2.penumbra = 0.5
// light2.castShadow = true
light2.shadow.mapSize.width = 1024
light2.shadow.mapSize.height = 1024
light2.shadow.camera.near = 0.5
light2.shadow.camera.far = 20
scene.add(light2)

const light3 = new THREE.SpotLight( 0x2a2a2a );
light3.position.set(30, 5, 5)
light3.angle = Math.PI / 3
light3.penumbra = 0.5
// light3.castShadow = true
light3.shadow.mapSize.width = 1024
light3.shadow.mapSize.height = 1024
light3.shadow.camera.near = 0.5
light3.shadow.camera.far = 20
scene.add(light3)