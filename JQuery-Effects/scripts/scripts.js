var step = 5;
var div = document.getElementById('movableDiv');

function move(direction) {
    var topPos = parseInt(div.style.top) || 0;
    var leftPos = parseInt(div.style.left) || 0;

    switch (direction) {
        case 'up':
            div.style.top = (topPos - step) + 'px';
            break;
        case 'down':
            div.style.top = (topPos + step) + 'px';
            break;
        case 'left':
            div.style.left = (leftPos - step) + 'px';
            break;
        case 'right':
            div.style.left = (leftPos + step) + 'px';
            break;
    }
}

function stop() {
}
