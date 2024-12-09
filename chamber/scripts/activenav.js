
const hamButton = document.querySelector('#ham-button');
const navigation = document.querySelector('#navBar');

const homeButton = document.querySelector('a[href*="index"]');
const dirButton = document.querySelector('a[href*="directory"]');
const joinButton = document.querySelector('a[href*="join"]');
const discButton = document.querySelector('a[href*="discover"]');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
    pageTitle = document.querySelector('title').innerText;
    changeActiveNav(pageTitle);
}, false);

function changeActiveNav(activePhrase) {
    homeButton.classList.remove('active');
    dirButton.classList.remove('active');
    joinButton.classList.remove('active');
    discButton.classList.remove('active');

    switch (activePhrase) {
        case "Port Harcourt Chamber of Commerce Home":
            homeButton.classList.add('active');
            break;
        case "Port Harcourt Chamber of Commerce Directory":
            dirButton.classList.add('active');
            break;
        case "Port Harcourt Chamber of Commerce Join":
            joinButton.classList.add('active');
            break;
        case "Port Harcourt Chamber of Commerce Discover":
            discButton.classList.add('active');
            break;
        default:
    }
}