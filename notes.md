To make your game work on mobile devices, you will need to handle touch and motion events. 

For swipe events, we can use the `touchstart`, `touchend`, and `touchmove` events. Here's a basic strategy:

1. Attach event listeners for `touchstart` and `touchend` to the game container.
2. On `touchstart`, record the position where the touch started (initial X and Y coordinates).
3. On `touchend`, compare the final position with the initial position to determine the direction of the swipe.
4. If the final X position is greater than the initial X position by a certain threshold, the swipe was to the right. If it's less, the swipe was to the left.
5. Do the same for the Y positions to determine if the swipe was up or down.
6. Once you've determined the direction of the swipe, you can call the same function that you'd call for the corresponding arrow key press.

For tilt events, you can use the DeviceOrientation event. Here's a strategy:

1. Add an event listener for `deviceorientation` to the window.
2. The event handler will receive an event object with `alpha`, `beta`, and `gamma` properties. These represent the degree of rotation around the Z, X, and Y axes, respectively. We'll focus on `beta` (X - front to back) and `gamma` (Y - left to right).
3. If `beta` is greater than a certain threshold, the device is tilted forwards (up). If it's less (negative), the device is tilted backwards (down).
4. If `gamma` is greater than a certain threshold, the device is tilted to the right. If it's less (negative), the device is tilted to the left.
5. Like with the swipe events, once you've determined the tilt direction, call the function that handles the corresponding arrow key press.

Please note, the `deviceorientation` event is deprecated and might not be supported on all devices and browsers. The new standard is the `Orientation Sensor` API, but as of my knowledge cutoff in September 2021, it is not widely supported. It's recommended to check the current state of these APIs.

In addition to the code changes, you should also make sure that your game layout is responsive, i.e., it adapts to different screen sizes and orientations. This can be achieved through responsive web design techniques like flexible layouts, media queries, flexible images and media.

Lastly, testing on a variety of devices is important to ensure a consistent experience. This includes different mobile phones and tablets, different screen sizes and resolutions, and different operating systems and browsers.
