// ***************************************************************************** //
// ********************************PHOTO CHANGER******************************** //

const bio = {};

bio.init = () => {
    bio.setVariables();
}

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

    bio.img.classList.add('fade-out');
    setTimeout(()=>{
        bio.img.src = object.src;
        bio.img.alt = object.alt;
            
        bio.img.classList.remove('fade-out');
    }, 500)
    setTimeout(()=> {
        bio.img.classList.remove('fade-in');
    }, 1000)
    
    // bio.caption.innerText = object.caption;

}



// ***************************************************************** //
// ************************** FLOATERS ***************************** //
//  https://www.youtube.com/watch?v=ysF0rFjIk7o


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



// *********************************************************** //
// *********************** SOUP CAN ************************** //

const soupcan = {};

soupcan.responses = {
    res1: `You're hired! (This constitues a written contract and is binding) Hurray! 🥳`,
    res2: `How did I get here? 🧐`,
    res3: `☀️ How about that weather? ⛈`,
    res4: 'Wanna be friends? 👯‍♂️',
    res5: `I've got a great joke for you...👉<insert great joke please>👈`,
    res6: `Seriously how did I get here? Why can't I leave?? 😱`
}

soupcan.setVariables = () => {
    soupcan.can = document.querySelector('.soupcan-container');
    soupcan.textBox = document.querySelector('#message');
    soupcan.responseUl = document.querySelector('ul.responses');
    soupcan.responseButtons = [...document.querySelectorAll('.response-button')];

    soupcan.addListeners();
}


soupcan.addListeners = () => {
    // add listener to soup can container
    soupcan.can.addEventListener('click', soupcan.handleCanClick)
    // add listener to each response button, and then call the showText with the event, so you can target the id
    soupcan.responseButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            soupcan.showText(e);
        })
    })
}

soupcan.handleCanClick = () => {
    // toggle flip class and show the response options
    soupcan.can.classList.toggle('flip-it');
    soupcan.responseUl.classList.toggle('show-responses');
}

soupcan.showText = (event) => {
    let resId = event.target.id;

    soupcan.textBox.innerHTML = '';
    soupcan.textBox.innerHTML = soupcan.responses[resId];
}



// ! INIT CALLS

document.addEventListener("DOMContentLoaded", function() {
    floaters.init();
    bio.init();
    soupcan.setVariables();
    console.log("%c Oh, hello there 👋", "color:blue; font-size:20px;")
});

