export function updatePhysics(player, deltaTime) {
    // Basic physics updates (e.g. gravity)
    player.position.y = Math.max(0.5, player.position.y - deltaTime * 0.05);
}
