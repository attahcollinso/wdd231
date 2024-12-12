
// const hamButton = document.querySelector('#ham-button');
// const navigation = document.querySelector('#navBar');

// const homeButton = document.querySelector('a[href*="index"]');
// const dirButton = document.querySelector('a[href*="directory"]');
// const joinButton = document.querySelector('a[href*="join"]');
// const discButton = document.querySelector('a[href*="discover"]');

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// });

// document.addEventListener('DOMContentLoaded', function () {
//     pageTitle = document.querySelector('title').innerText;
//     changeActiveNav(pageTitle);
// }, false);

// function changeActiveNav(activePhrase) {
//     homeButton.classList.remove('active');
//     dirButton.classList.remove('active');
//     joinButton.classList.remove('active');
//     discButton.classList.remove('active');

//     switch (activePhrase) {
//         case "Port Harcourt Chamber of Commerce Home":
//             homeButton.classList.add('active');
//             break;
//         case "Port Harcourt Chamber of Commerce Directory":
//             dirButton.classList.add('active');
//             break;
//         case "Port Harcourt Chamber of Commerce Join":
//             joinButton.classList.add('active');
//             break;
//         case "Port Harcourt Chamber of Commerce Discover":
//             discButton.classList.add('active');
//             break;
//         default:
//     }
// }


// Get all nav links
const navigation = document.querySelectorAll('.nav-link');

// Function to handle nav link click
function handleNavigationClick(event) {
  // Remove active class from all nav links
  navigation.forEach((link) => link.classList.remove('active'));

  // Add active class to the clicked nav link
  event.target.classList.add('active');
}

// Add event listener to each nav link
navigation.forEach((link) => link.addEventListener('click', handleNavigationClick));


// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the offset top of each section
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    const offsetTop = section.offsetTop;

    // Check if the scroll position is within the section
    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + section.offsetHeight) {
      // Remove active class from all nav links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add active class to the corresponding nav link
      navLinks[index].classList.add('active');
    }
  });
}

// Add event listener to the window scroll event
window.addEventListener('scroll', handleScroll);
