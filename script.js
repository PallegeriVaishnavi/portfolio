console.log("Portfolio Website Loaded");

/* Smooth Scroll */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior:'smooth'
        });

    });

});

/* Typing Animation */

const textArray = [
    "CSE Student",
    "Web Developer",
    "AI Enthusiast",
    "Future Software Engineer"
];

let typingText = document.querySelector(".typing");

let arrayIndex = 0;
let charIndex = 0;

function typeText(){

    if(charIndex < textArray[arrayIndex].length){

        typingText.textContent += textArray[arrayIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(charIndex > 0){

        typingText.textContent = textArray[arrayIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        arrayIndex++;

        if(arrayIndex >= textArray.length){

            arrayIndex = 0;

        }

        setTimeout(typeText,500);

    }

}

window.onload = function(){

    typeText();

};