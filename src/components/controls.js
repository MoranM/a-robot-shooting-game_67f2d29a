import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export function createControls(camera, renderer) {
    const controls = new PointerLockControls(camera, renderer.domElement);

    document.addEventListener('click', () => {
        controls.lock();
    });

    return controls;
}
