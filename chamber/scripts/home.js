
const logoReel = document.querySelector('.logo-reel');
const logoWrapper = document.createElement('div');
const spotlightCards = document.querySelector('#spotlight-cards');

async function getMemberData() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) {
            throw new Error('Unable to fetch member data');
        }
        const data = await response.json();
        generateLogoReel(data);
        displayMemberSpotlight(data);
    } catch (error) {
        console.error("Error fetching data:", error);
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
        address.textContent = `${member.address.number} ${member.address.street}, ${member.address.area}, ${member.address.city}`;
        phone.textContent = member.phone;
        url.href = `http://${member.url}`;
        url.textContent = member.url;
        url.target = '_blank';
        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '500');
        image.setAttribute('height', '200');
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