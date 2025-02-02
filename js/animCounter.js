// How long you want the animation to take, in ms
const animationDuration = 3000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => (--t)*t*t+1;
// more timing animation https://gist.github.com/gre/1650294

const animateCountUp = elem => {
    let frame = 0;

    const countTo = parseInt(elem.innerHTML, 10);

    // Start the animation running 60 times per second
    const counter = setInterval(() => {
        frame++;
        // Calculate progress as a value between 0 and 1
        // Pass that value to easing function to get our
        // progress on a curve
        const progress = easeOutQuad(frame / totalFrames);
        // Use the progress value to calculate the current count
        const currentCount = Math.round(countTo * progress);

        // If the current count has changed, update the element
        if (parseInt(elem.innerHTML, 10) !== currentCount) {
            elem.innerHTML = currentCount;
        }
        // If we’ve reached our last frame, stop the animation
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
}

const scoreDisplayElem = document.querySelector('[data-score]');
const delayDisplayElem = document.querySelector('[data-delay-display]');

setTimeout(() => {
    scoreDisplayElem.style.opacity = '1';
    animateCountUp(scoreDisplayElem);

    setTimeout(() => {
        delayDisplayElem.style.opacity = '1';
    }, animationDuration);
}, 1500);
