import * as THREE from 'three';

export class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.createPlayer();
    this.animate();
  }

  createPlayer() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.player = new THREE.Mesh(geometry, material);
    this.scene.add(this.player);
    this.camera.position.z = 5;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.player.rotation.x += 0.01;
    this.player.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    // Additional start logic if needed
  }
}
