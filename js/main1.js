let img = document.querySelector('.limg');
let span = document.querySelectorAll('.route');
let index = 0;
let timer;
function show() {
    span[index].style.backgroundColor = "#65cef7"
    img.src = `../img/pageTwo/${index}.jpg`;
}

function autoPlay() {
    timer = setInterval(function () {
        if (index != 0) {
            span[index - 1].style.backgroundColor = "#FFFFFF"
        }
        if (index == span.length) {
            index = 0;
        }
        show();
        index++;
    }, 3000);
}
autoPlay();


