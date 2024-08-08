// -------------------------- SELECT ELEMENTS -----------------------------------------
// Select the h1 element inside the .hero-content div and log it to the console
const heading = document.querySelector('.hero-content h1');
// console.log(heading);

// Select all a elements inside the .nav-list and log them to the console
const navLinks = document.querySelectorAll('.nav-list a');
// console.log(navLinks);

// Select the .btn element and log it to the console
const button = document.querySelector('.btn');
// console.log(button);

// --------------------------MODIFY STYLES-------------------------------------------
// Select the .header element and change its background color to #b5651d
const header1 = document.querySelector('.header');
header1.style.backgroundColor = '#b5651d';

// Select the h1 element inside the .hero-content div and change its font size to 3rem
// const heroContent = document.querySelector('.hero-content h1');
// heroContent.style.fontSize = '3rem';

// Select all a elements inside the .nav-list and change their text color to #faf0e6
const heroHeading = document.querySelectorAll('.nav-list a');
heroHeading.forEach((link) => (link.style.color = '#faf0e6'));

// -------------------------- ADD CONENT -------------------------------------------
// Select the .hero-content div and add a new p element with the text "Open daily from 7 AM to 9 PM." inside it.
const heroContent = document.querySelector('.hero-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Open daily from 7 AM to 9 PM.';
newParagraph.style.backgroundColor = 'red';
newParagraph.style.padding = '0 .5rem';
newParagraph.style.borderRadius = '1rem';
heroContent.appendChild(newParagraph);
