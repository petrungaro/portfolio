const floaters = {};

floaters.iconArray = document.querySelectorAll('.icon');
floaters.prevX = 0;
floaters.prevY = 0;
floaters.moveXAmount = 0;
floaters.moveYAmount = 0;


floaters.init = () => {
    floaters.attachListener();
}

floaters.attachListener = () => {
    const toolsSection = document.querySelector('section.stack');
    
    toolsSection.addEventListener("mousemove", function(e) {
        floaters.getMousePosition(e);
    })    
}

floaters.getMousePosition = (e) => {
    let moveXAmount = e.screenX - floaters.prevX;
    let moveYAmount = e.screenY - floaters.prevY;

    floaters.moveIcon(moveXAmount, moveYAmount);

    floaters.prevX = e.screenX;
    floaters.prevY = e.screenY;
}

floaters.moveIcon = (xAmount, yAmount) => {
    
    floaters.iconArray.forEach( (icon) => {
        let movementStrength = 10 + (Math.random() * 15);

        icon.style.left = (icon.offsetLeft) - (xAmount / movementStrength) + "px";
        icon.style.top = (icon.offsetTop) - (yAmount / movementStrength) + "px";
    });
}


floaters.init();

console.log("%c Oh, hello there 👋", "color:green; font-size:24px;")