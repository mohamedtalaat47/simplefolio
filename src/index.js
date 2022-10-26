import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = setInterval(() => {
    if (!myPreloader.style.opacity) {
        myPreloader.style.opacity = 1;
    }
    if (myPreloader.style.opacity > 0) {
        myPreloader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
    }
}, 300);

window.addEventListener('load', fadeOutEffect);
