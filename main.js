let btn = document.querySelector('button');
let input = document.querySelector('input');
let img = document.querySelector('img');

btn.addEventListener('click', () => {
    if (input.value.length > 0) {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + input.value;
        img.classList.add('animate');
    } else {
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
    }
});