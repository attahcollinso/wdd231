const cards = document.querySelector('#photo-cards');

let photos = []

async function getPhotoData() {
    try {
        console.log(photos);
        const response = await fetch('./data/newarrival.json');
        if (!response.ok) {
            throw new Error('Could not fetch photo data');
        }
        photos = await response.json();
        console.log(photos);

        displayPhotoCards()
    } catch (error) {
        console.error("Encountered error during fetch:", error);
    }
}

getPhotoData();

function displayPhotoCards() {
    cards.innerHTML = '';

    // randomly shuffle the list of photos
    const shuffledPhotos = photos.sort(() => 0.5 - Math.random());

    shuffledPhotos.forEach((photo, index) => {
        // create html elements
        const card = document.createElement('section');
        const image = document.createElement('img');
        const caption = document.createElement('p');

        // set content / attributes
        card.setAttribute('class', 'card');
        image.setAttribute('class', 'hover');
        image.setAttribute('src', `images/${photo.imagefile}`);
        // Only add lazy loading for images after the first one
        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '500');
        image.setAttribute('height', '500');
        image.setAttribute('alt', `Photo of ${photo.name}`);
        caption.textContent = photo.caption;
        caption.setAttribute('class', 'caption');

        // add image and caption to card
        card.appendChild(image);
        card.appendChild(caption);

        // add card to cards element in html
        cards.appendChild(card);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisitKey = "lastVisit";
    const now = new Date();

    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem(lastVisitKey);

    let message = "";

    if (!lastVisit) {
        // First-time visit
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 24 * 60 * 60 * 1000) {
            // Less than a day
            message = "Back so soon! Awesome!";
        } else {
            // More than a day
            message = `You last visited ${daysDifference} day${daysDifference === 1 ? "" : "s"} ago.`;
        }
    }

    // Display the message
    visitMessage.textContent = message;

    // Update the last visit date in localStorage
    localStorage.setItem(lastVisitKey, now.toISOString());
});


const logoReel = document.querySelector('.logo-reel');
const logoWrapper = document.createElement('div');
const spotlightCards = document.querySelector('#spotlight-cards');

async function getMemberData() {
    try {
        const response = await fetch('./data/products.json');
        if (!response.ok) {
            throw new Error('Could not fetch member data');
        }
        const data = await response.json();
        generateLogoReel(data);
        displayMemberSpotlight(data);
    } catch (error) {
        console.error("Encountered error during fetch:", error);
    }
}

getMemberData();

function displayMemberSpotlight(members) {
    // filter members with membership 2 or 3
    const filteredMembers = members.filter(member => member.membership === 2 || member.membership === 3);

    // randomly shuffle the list of members
    const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());

    // select the first 3 members
    const selectedMembers = shuffledMembers.slice(0, 3);

    // display spotlight cards from filtered random list of members
    selectedMembers.forEach((member, index) => {
        // Create HTML elements
        const card = document.createElement('section');
        const companyName = document.createElement('h2');
        const offer = document.createElement('p');
        const image = document.createElement('img');
        const detailsDiv = document.createElement('div');
        const ownerName = document.createElement('p');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const urlP = document.createElement('p');
        const url = document.createElement('a');
        const membership = document.createElement('p');

        // Set content and attributes
        companyName.textContent = member.companyname;
        offer.textContent = member.offer.toUpperCase();
        offer.style.color = `#${member.color}`;
        offer.classList.add('offer');
        offer.classList.add('bold');
        card.setAttribute('class', 'card');
        image.setAttribute('src', `images/${member.img}`);
        image.setAttribute('alt', `${member.companyname} Business Logo`);
        // address.textContent = `${member.address.number} ${member.address.street}, ${member.address.area}, ${member.address.city}`;
        // phone.textContent = member.phone;
        // url.href = `http://${member.url}`;
        url.textContent = member.url;
        url.target = '_blank';
        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '500');
        image.setAttribute('height', '500');
        detailsDiv.setAttribute('class', 'details-div');
        membershipType = getMembership(member.membership);
        membership.innerHTML = `${membershipType} Member`;

        // Build the card
        card.appendChild(companyName);
        card.appendChild(offer);
        card.appendChild(image);
        detailsDiv.appendChild(phone);
        detailsDiv.appendChild(address);
        urlP.appendChild(url);
        detailsDiv.appendChild(urlP);
        detailsDiv.appendChild(membership);
        card.appendChild(detailsDiv);


        // Append the card to the spotlightCards container
        spotlightCards.appendChild(card);
    });
}

function generateLogoReel(members) {
    members.forEach((member) => {
        // create html elements
        const logo = document.createElement('img');
        // set content / attributes
        logoWrapper.setAttribute('class', 'logo-wrapper');
        logo.setAttribute('src', `./images/${member.img}`);
        logo.setAttribute('alt', `${member.companyname} Business Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '500');
        logo.setAttribute('height', '500');
        // add logo to logoWrapper
        logoWrapper.appendChild(logo);
        // add card to logoWrapper element in html
        logoReel.appendChild(logoWrapper);
    })

    members.forEach((member) => {
        // create html elements
        const logo = document.createElement('img');
        // set content / attributes
        logoWrapper.setAttribute('class', 'logo-wrapper');
        logo.setAttribute('src', `./images/${member.img}`);
        logo.setAttribute('alt', `${member.companyname} Business Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '500');
        logo.setAttribute('height', '500');
        // add logo to logoWrapper
        logoWrapper.appendChild(logo);
        // add card to logoWrapper element in html
        logoReel.appendChild(logoWrapper);
    })
}

function getMembership(number) {
    switch (number) {
        case 1:
            return ""
        case 2:
            return "Silver"
        case 3:
            return "Gold"
        default:
            return "";
    }
}

logoWrapper.addEventListener('mouseover', () => {
    logoWrapper.style.animationPlayState = 'paused'; // Pauses the animation
});

logoWrapper.addEventListener('mouseout', () => {
    logoWrapper.style.animationPlayState = 'running'; // Resumes the animation
});
