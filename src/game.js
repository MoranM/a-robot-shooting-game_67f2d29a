import * as THREE from 'three';
import { createCamera } from './components/camera.js';
import { createRenderer } from './components/renderer.js';
import { createLights } from './components/lights.js';
import { createControls } from './components/controls.js';
import { createPlayer } from './entities/player.js';
import { createEnemy } from './entities/enemy.js';
import { createEnvironment } from './entities/environment.js';
import { updatePhysics } from './systems/physics.js';
import { checkCollisions } from './systems/collision.js';

class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = createCamera();
        this.renderer = createRenderer();
        this.controls = createControls(this.camera, this.renderer);

        createLights(this.scene);

        this.player = createPlayer();
        this.scene.add(this.player);

        this.enemies = [createEnemy()];
        this.enemies.forEach(enemy => this.scene.add(enemy));

        this.environment = createEnvironment();
        this.scene.add(this.environment);

        this.clock = new THREE.Clock();
    }

    update() {
        const deltaTime = this.clock.getDelta();
        updatePhysics(this.player, deltaTime);
        checkCollisions(this.player, this.enemies);
        this.controls.update(deltaTime);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        const animate = () => {
            requestAnimationFrame(animate);
            this.update();
            this.render();
        };
        animate();
    }
}

export { Game };
