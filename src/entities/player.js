import * as THREE from 'three';

export function createPlayer() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const player = new THREE.Mesh(geometry, material);
    player.position.y = 0.5;
    return player;
}
