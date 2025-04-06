export function checkCollisions(player, enemies) {
    enemies.forEach(enemy => {
        const distance = player.position.distanceTo(enemy.position);
        if (distance < 1) {
            console.log('Player hit by enemy!');
        }
    });
}
