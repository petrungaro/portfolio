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


// ***************************************************************************** //
// ********************************PHOTO CHANGER******************************** //

const bio = {};

bio.content = {
    rob: {
        src: './assets/bw-portrait.jpg',
        alt: 'A black and white photo of me, Rob',
        caption: ''
    },

    juno: {
        src: './assets/juno.png',
        alt: 'An image showing the logo for Juno College',
        caption: 'Juno College'
    },
    toronto: {
        src: './assets/toronto-skyline-island.jpg',
        alt: 'A photo of the Toronto skyline and its reflection on the water',
        caption: 'Toronto skyline, photo taken from the island'
    },
    woodworking: {
        src: './assets/bench-chairs.jpg',
    }
}




// INITS
floaters.init();

console.log("%c Oh, hello there 👋", "color:green; font-size:24px;")