document.getElementById('generate-btn').addEventListener('click', () => {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');

    // Add animation class
    num1Element.classList.add('animate');
    num2Element.classList.add('animate');

    // Remove animation class after it finishes
    setTimeout(() => {
        num1Element.classList.remove('animate');
        num2Element.classList.remove('animate');
    }, 500);

    // Generate random numbers (00-99)
    const randomNum1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const randomNum2 = Math.floor(Math.random() * 100).toString().padStart(2, '0');

    // Display numbers
    num1Element.textContent = randomNum1;
    num2Element.textContent = randomNum2;
});