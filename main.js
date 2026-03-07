document.getElementById('generate').addEventListener('click', () => {
    const numberElements = document.querySelectorAll('.number');

    numberElements.forEach(el => {
        const randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');
        el.textContent = randomNumber;
    });
});