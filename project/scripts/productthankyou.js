// // Sample JSON data
// const data = [
//     {
//         "name": "Wireless Headphones",
//         "image": "https://example.com/images/wireless-headphones.jpg",
//         "price": 49.99
//     },
//     {
//         "name": "Smartphone Case",
//         "image": "https://example.com/images/smartphone-case.jpg",
//         "price": 12.99
//     },
//     {
//         "name": "Portable Charger",
//         "image": "https://example.com/images/portable-charger.jpg",
//         "price": 25.50
//     },
//     {
//         "name": "Bluetooth Speaker",
//         "image": "https://example.com/images/bluetooth-speaker.jpg",
//         "price": 39.99
//     },
//     {
//         "name": "USB-C Cable",
//         "image": "https://example.com/images/usb-c-cable.jpg",
//         "price": 9.99
//     }
// ];

// // Function to create and append cards
// function createCards() {
//     const cardsDiv = document.getElementById('cards');
//     if (!cardsDiv) {
//         console.error("No div with ID 'cards' found!");
//         return;
//     }

//     // Iterate through the JSON data and create cards
//     data.forEach(item => {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const img = document.createElement('img');
//         img.src = item.image;
//         img.alt = item.name;
//         img.classList.add('card-image');
//         img.dataset.name = item.name;
//         img.dataset.price = `$${item.price.toFixed(2)}`;
//         card.appendChild(img);

//         const name = document.createElement('h3');
//         name.textContent = item.name;
//         card.appendChild(name);

//         const price = document.createElement('p');
//         price.textContent = `$${item.price.toFixed(2)}`;
//         card.appendChild(price);

//         cardsDiv.appendChild(card);

//         // Add event listener to image for modal display
//         img.addEventListener('click', () => showModal(item.name, item.price));
//     });
// }

// // Function to show the modal
// function showModal(name, price) {
//     const modal = document.getElementById('modal');
//     const modalContent = document.querySelector('.modal-content');

//     // Set modal content
//     modalContent.innerHTML = `
//         <h2>${name}</h2>
//         <p>Price: $${price.toFixed(2)}</p>
//         <button id="closeModal">Close</button>
//     `;

//     // Display the modal
//     modal.style.display = 'block';

//     // Add event listener to close the modal
//     document.getElementById('closeModal').addEventListener('click', () => {
//         modal.style.display = 'none';
//     });
// }

// // Initialize cards on window load
// window.onload = createCards;


const currentUrl = window.location.href;

const everything = currentUrl.split('?')

let formData = everything[1].split('&');


function show(key) {
    let result = '';
    formData.forEach((item) => {
        if (item.startsWith(key)) {
            result = decodeURIComponent(item.split("=")[1])
                .replace(/\+\+/g, "")
                .replace(/\+/g, " ");
        }
    })

    return result;
}

function formatTimestamp(timestamp) {
    try {
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'long',
            timeStyle: 'short',
        }).format(date);
    } catch (error) {
        console.error('Invalid timestamp:', error);
        return 'Invalid date';
    }
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<h2>Thank You for Your Patronage</h2>
<table>
<tr>
    <td>Application for:</td>
    <td>${show("first-name")} ${show("last-name")}</td>
</tr>
<tr>
    <td>Your mobile number:</td>
    <td>${show("phone")}</td>
</tr>
<tr>
    <td>Your email address:</td>
    <td><a href="mailto:${show("email")}?subject=Al%20Reem%20Chamber%20of%20Commerce,%20${show("membership")}%20Membership%20Application%20for%20${show("org-name")}">${show("email")}</a></td>
</tr>
<tr>
    <td>Your Address:</td>
    <td>${show("org-name")}</td>
</tr>
<tr>
    <td>Products Selected:</td>
    <td>${show("membership")}</td>
</tr>
<tr>
    <td>Date & Time:</td>
    <td>${formatTimestamp(show('timestamp'))}</td>
</tr>
</table>
`