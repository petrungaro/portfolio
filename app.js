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
        alt: 'A photo of some wood benches and lounge chairs',
        caption: 'Some woodworking projects I made'
    },
    game: {
        src: './assets/elden-ring.jpg',
        alt: 'Cover photo of the Elden Ring video game showing a character hunched over a sword in the ground, with fiery rings in the sky',
        caption: 'oooOoOoOooohhhhHHHh Elden Ring!'
    }
}

bio.setVariables = () => {
    bio.spanElements = [...document.querySelectorAll('.bio-hover')];
    bio.img = document.querySelector('.dynamic-image-box img');
    bio.caption = document.querySelector('.dynamic-image-box figcaption');

    // add event listener to each of the span elements
    bio.attachListener(bio.spanElements);
}


bio.attachListener = (array) => {
    array.forEach((element) => {
        element.addEventListener('mouseover', function(e) {
            bio.handleHover(e);
        })
    })
}

bio.handleHover = (event) => {
    let currentElement = event.target.id;

    bio.swapPhoto(bio.content[currentElement]);
}

bio.swapPhoto = (object) => {

    bio.img.src = object.src;
    bio.img.alt = object.alt;
    
    // bio.caption.innerText = object.caption;

}

// query the dom for all the span.bio-hover in the bio section
// query the dom for the .dynamic-image-box img element
// query the dom for the .dynamic-image-box figcaption element

// Add an event listener to each span in the bio section
    // on hover, replace the image src, alt, and figcaption using the properties found in the bio.content objects, using the id from the span element to match
// 



// INITS
floaters.init();
// ! TESTING
bio.setVariables();
console.log("%c Oh, hello there 👋", "color:green; font-size:24px;")