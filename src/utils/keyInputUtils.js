// Handle keyboard input for movement
// This is a simple object that maps keyboard keys to directions
export const KeyToDirection = {
    'ArrowUp': 'UP',
    'Up': 'UP',
    'w': 'UP',
    'W': 'UP',
    '8': 'UP',
    'ArrowDown': 'DOWN',
    'Down': 'DOWN',
    '2': 'DOWN',
    's': 'DOWN',
    'S': 'DOWN',
    'ArrowLeft': 'LEFT',
    'Left': 'LEFT',
    '4': 'LEFT',
    'a': 'LEFT',
    'A': 'LEFT',
    'ArrowRight': 'RIGHT',
    'Right': 'RIGHT',
    '6': 'RIGHT',
    'd': 'RIGHT',
    'D': 'RIGHT',
};

// Handle keyboard input, returning a direction for the game to move in
// when a valid key is pressed.
export function handleKeyInput(event) {
    return KeyToDirection[event.key];
}

