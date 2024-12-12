const cards = document.querySelector('#photo-cards');

let photos = []

async function getPhotoData() {
    try {
        console.log(photos);
        const response = await fetch('./data/photos.json');
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
        image.setAttribute('width', '600');
        image.setAttribute('height', '600');
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
