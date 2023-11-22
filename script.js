
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        const textToCopy = row.querySelector('td:nth-child(3)').textContent;

        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        button.textContent = 'Copied!';
    });
});



