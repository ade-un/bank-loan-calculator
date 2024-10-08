document.getElementById('calculate-btn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTenure = parseFloat(document.getElementById('loan-tenure').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate total repayment
    const totalRepayment = loanAmount + (loanAmount * interestRate / 100 * loanTenure);

    // Monthly repayment
    const monthlyRepayment = totalRepayment / (loanTenure * 12);
    
    // Store the results in local storage for repayment details
    localStorage.setItem('monthlyRepayment', monthlyRepayment.toFixed(2));
    localStorage.setItem('totalRepayment', totalRepayment.toFixed(2));
    localStorage.setItem('loanTenure', loanTenure); // Store tenure

    // Redirect to repayment page
    window.location.href = 'repayment.html';
});
