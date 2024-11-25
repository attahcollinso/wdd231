const cards = document.querySelector('#cards');
const table = document.querySelector('#table-view');
let members = []

async function getMemberData() {
    try {
        const response = await fetch('data/members.json');
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
        const ownerName  = document.createElement('p');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const urlP = document.createElement('p');
        const url = document.createElement('a');

        
        companyName.textContent = `${member.companyname}`;
        card.setAttribute('class', 'card');
        image.setAttribute('src', `./images/${member.img}`);
        image.setAttribute('alt', `${member.companyname} Business Logo`);
        ownerName.classList.add('bold');
        ownerName.textContent = member.ownername
        address.textContent = `${member.address.number} ${member.address.street}, ${member.address.area}, ${member.address.city}`;
        phone.textContent = member.phone;
        url.href = `http://${member.url}`;
        url.textContent = member.url;
        url.target = '_blank';

        if (index !== 0) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        detailsDiv.setAttribute('class', 'details-div');

        
        card.appendChild(companyName);
        card.appendChild(image);
        detailsDiv.appendChild(ownerName);
        detailsDiv.appendChild(address);
        detailsDiv.appendChild(phone);
        urlP.appendChild(url)
        detailsDiv.appendChild(urlP);
        card.appendChild(detailsDiv);
        
        
        cards.appendChild(card);
    })
}
function displayMemberTable() {
    cards.classList.add('hide');
    table.classList.remove('hide');
    table.innerHTML = '';

    const tableHeaderRow = document.createElement('tr');
    const tableHeader1 = document.createElement('th');
    const tableHeader2 = document.createElement('th');
    const tableHeader3 = document.createElement('th');
    const tableHeader4 = document.createElement('th');
    const tableHeader5 = document.createElement('th');
    tableHeader1.textContent = 'Company Name';
    tableHeader2.textContent = 'Contact Name';
    tableHeader3.textContent = 'Address';
    tableHeader4.textContent = 'Phone Number';
    tableHeader5.textContent = 'Website';
    tableHeaderRow.appendChild(tableHeader1);
    tableHeaderRow.appendChild(tableHeader2);
    tableHeaderRow.appendChild(tableHeader3);
    tableHeaderRow.appendChild(tableHeader4);
    tableHeaderRow.appendChild(tableHeader5);
    tableHeaderRow.classList.add('visually-hidden');
    table.appendChild(tableHeaderRow);
    members.forEach(member => {
        const tableRow = document.createElement('tr');
        const companyTd = document.createElement('td');
        const ownerTd  = document.createElement('td');
        const addressTd = document.createElement('td');
        const phoneTd = document.createElement('td');
        const urlTd = document.createElement('td');
        const url = document.createElement('a');
        companyTd.classList.add('bold');
        companyTd.textContent = member.companyname;
        ownerTd.textContent = member.ownername
        addressTd.textContent = `${member.address.number} ${member.address.street}, ${member.address.area}, ${member.address.city}`;
        phoneTd.textContent = member.phone;
        url.classList.add('url-table');
        url.href = `http://${member.url}`;
        url.textContent = member.url;
        url.target = '_blank';
        urlTd.appendChild(url);
        tableRow.appendChild(companyTd);
        tableRow.appendChild(ownerTd);
        tableRow.appendChild(addressTd);
        tableRow.appendChild(phoneTd);
        tableRow.appendChild(urlTd);
        table.appendChild(tableRow);
    });
}

const gridButton = document.querySelector('#grid-button');
const tableButton = document.querySelector('#table-button');

gridButton.addEventListener('click', () => {
    displayMemberCards();
});
tableButton.addEventListener('click', () => {
    displayMemberTable();
});