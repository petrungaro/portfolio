let iconArray = document.querySelectorAll('.icon');
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

let toolsSection = document.querySelector('section.stack');

toolsSection.addEventListener("mousemove", function(e) {
    mousePos(e);
})

const mousePos = function(e) {
    moveXAmount = e.screenX - prevX;
    moveYAmount = e.screenY - prevY;

    moveIcon(moveXAmount, moveYAmount);

    prevX = e.screenX;
    prevY = e.screenY;
}

const moveIcon = function(xAmount,yAmount) {

    iconArray.forEach( (icon) => {
        let movementStrength = 10 + (Math.random() * 15);

        icon.style.left = (icon.offsetLeft) - (xAmount / movementStrength) + "px";
        icon.style.top = (icon.offsetTop) - (yAmount / movementStrength) + "px";
    });
}

console.log("%c Oh, hello there 👋", "color:green; font-size:24px;")