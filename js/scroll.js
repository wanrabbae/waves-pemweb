let scrollSpeed = 1;
let lastTime = 0;
let isScrolling = false;
let scrolling = null;

function autoScroll(timestamp) {
    if (!lastTime) lastTime = timestamp;
    let deltaTime = timestamp - lastTime;

    if (deltaTime >= (100 / scrollSpeed)) { 
        window.scrollBy(0, 1);
        lastTime = timestamp;
    }

    if (isScrolling) {
        scrolling = requestAnimationFrame(autoScroll);
    }
}

document.getElementById("scroll-speed").addEventListener("change", function() {
    scrollSpeed = parseFloat(this.value);
});

document.getElementById("auto-scroll").addEventListener("click", function() {
    if (isScrolling) {
        cancelAnimationFrame(scrolling);
        this.textContent = "Mulai Auto Scroll";
    } else {
        lastTime = 0;
        scrolling = requestAnimationFrame(autoScroll);
        this.textContent = "Stop Auto Scroll";
    }
    isScrolling = !isScrolling;
});
