const buttonOff = document.getElementById('buttonOff');
const buttonOn = document.getElementById('buttonOn');
const light = document.getElementById('light')

buttonOn.addEventListener('click', () => {
    if(light.className === 'off'){
        light.classList.remove('off');
        light.classList.add('on')
    }
});

buttonOff.addEventListener('click', () => {
    if(light.className === 'on'){
        light.classList.remove('on');
        light.classList.add('off')
    }
});