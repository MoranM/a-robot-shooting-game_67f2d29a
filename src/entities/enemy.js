import * as THREE from 'three';

export function createEnemy() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const enemy = new THREE.Mesh(geometry, material);
    enemy.position.set(5, 0.5, 5);
    return enemy;
}
