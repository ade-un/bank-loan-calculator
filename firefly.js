const canvas = document.getElementById('firefly-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size when window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const fireflies = [];
const numFireflies = 50;

// Firefly constructor
class Firefly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
        this.alpha = Math.random();
        this.alphaDirection = Math.random() < 0.5 ? -0.01 : 0.01;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;

        // Firefly flickering effect
        this.alpha += this.alphaDirection;
        if (this.alpha <= 0) this.alphaDirection = 0.01;
        if (this.alpha >= 1) this.alphaDirection = -0.01;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 0, ${this.alpha})`; // Soft yellow color
        ctx.fill();
        ctx.closePath();
    }
}

// Initialize fireflies
for (let i = 0; i < numFireflies; i++) {
    fireflies.push(new Firefly());
}

// Animate the fireflies
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireflies.forEach(firefly => {
        firefly.update();
        firefly.draw();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();
