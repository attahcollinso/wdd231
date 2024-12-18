
const cards = document.querySelector('#cards');
const table = document.querySelector('#table-view');


let members = []

async function getMemberData() {
    try {
        const response = await fetch('./data/products.json');
        if (!response.ok) {
            throw new Error('Unable to fetch member data');
        }
        members = await response.json();
        members.sort((a, b) => {
            if (a.companyname < b.companyname) {
                return -1;
            }
            if (a.companyname > b.companyname) {
                return 1;
            }
            return 0;
        });
        displayMemberCards()
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getMemberData();

function displayMemberCards() {
    table.classList.add('hide');
    cards.classList.remove('hide');
    cards.innerHTML = '';
    members.forEach((member, index) => {

        const card = document.createElement('section');
        const companyName = document.createElement('h2');
        const image = document.createElement('img');
        const detailsDiv = document.createElement('div');
        const phone = document.createElement('p');
        
        companyName.textContent = `${member.companyname}`;
        card.setAttribute('class', 'card');
        image.setAttribute('src', `./images/${member.img}`);
        image.setAttribute('alt', `${member.companyname} Business Logo`);
        phone.textContent = member.phone;

        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        detailsDiv.setAttribute('class', 'details-div');

        
        card.appendChild(companyName);
        card.appendChild(image);
        detailsDiv.appendChild(phone);
        card.appendChild(detailsDiv);
                
        cards.appendChild(card);
    })
}

