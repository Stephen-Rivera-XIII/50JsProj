const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const hycybh = document.querySelector('.hycybh');

let load = 0;

let int = setInterval(blurring, 30);
function blurring(){
    load++
    if(load > 99){
        clearInterval(int);
}
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    hycybh.style.opacity = scale(load, 99,100, 0 ,1)
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}