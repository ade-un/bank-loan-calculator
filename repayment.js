// JavaScript to dynamically fill the table values from local storage
const monthlyPayment = localStorage.getItem('monthlyRepayment');
const totalPayment = localStorage.getItem('totalRepayment');
const loanTenure = localStorage.getItem('loanTenure');

// Fill in the values or show an error message if no data
document.getElementById("monthly-payment").textContent = monthlyPayment ? `₦${monthlyPayment}` : "Error: Missing Data";
document.getElementById("total-payment").textContent = totalPayment ? `₦${totalPayment}` : "Error: Missing Data";
document.getElementById("loan-tenure").textContent = loanTenure ? `${loanTenure} years` : "Error: Missing Data";

// Firefly Animation Logic
const canvas = document.getElementById('fireflyCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireflies = [];

class Firefly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
        ctx.fill();
    }
}

function createFireflies() {
    fireflies = [];
    for (let i = 0; i < 100; i++) {
        fireflies.push(new Firefly());
    }
}

function animateFireflies() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireflies.forEach(firefly => {
        firefly.update();
        firefly.draw();
    });

    requestAnimationFrame(animateFireflies);
}

createFireflies();
animateFireflies();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createFireflies();
});

function goBack() {
    window.history.back(); // Go back to the previous page
}
