import * as THREE from 'three';

export function createEnvironment() {
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    const environment = new THREE.Mesh(geometry, material);
    environment.rotation.x = -Math.PI / 2;
    return environment;
}
