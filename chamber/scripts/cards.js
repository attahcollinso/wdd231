const logoReel = document.querySelector('.logo-reel');
const logoWrapper = document.createElement('div');

async function getMemberData() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) {
            throw new Error('Could not fetch member data');
        }
        const data = await response.json();
        generateLogoReel(data)
    } catch (error) {
        console.error("Encountered error during fetch:", error);
    }
}

getMemberData();

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

logoWrapper.addEventListener('mouseover', () => {
    logoWrapper.style.animationPlayState = 'paused'; // Pauses the animation
});

logoWrapper.addEventListener('mouseout', () => {
    logoWrapper.style.animationPlayState = 'running'; // Resumes the animation
});