

document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    const currentDateTime = new Date();
    timestampInput.value = currentDateTime.toISOString();
});

document.getElementById("description").addEventListener("focus", function () {
    const textarea = this;
    textarea.value = textarea.value.trimStart();
    setTimeout(() => {
        textarea.setSelectionRange(0, 0);
    }, 0);
});

const membershipInfo = document.querySelector("#membership-info");
const npCard = document.querySelector("#np-info");
const bronzeCard = document.querySelector("#bronze-info");
const silverCard = document.querySelector("#silver-info");
const goldCard = document.querySelector("#gold-info");

function openMembershipInfo(membership) {
    membershipInfo.innerHTML = '';

    const closeModal = document.createElement('button');
    closeModal.setAttribute('id', 'close-modal');
    closeModal.innerHTML = '❌';
    membershipInfo.appendChild(closeModal);

    const modalH2 = document.createElement('h2');
    modalH2.style.color = 'black';
    const modalP = document.createElement('p');
    const modalTable = document.createElement('table');
    modalTable.setAttribute('class', 'modal-table');
    
    const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerHTML = `Price: `;
    td1.setAttribute('class', 'bold');
    const tdPrice = document.createElement('td');
    tdPrice.setAttribute('id', 'price');
    
    const tr2 = document.createElement('tr');
    const td2 = document.createElement('td');
    td2.innerHTML = `Benefits: `;
    td2.setAttribute('class', 'bold');
    const tdBenefits = document.createElement('td');
    tdBenefits.setAttribute('id', 'benefits');

    switch (membership) {
        case 'Black Nike Canvas':
            modalH2.innerHTML = 'Black Nike Shoe';
            modalP.innerHTML = '  What We Do <br> 1. Content creation<br> 2. Audience Engagement<br> 3. Brand Representation<br> 4. Search Engine Optimation<br> 5. Campain and Advert Management etc.';
            tdPrice.innerHTML = '#1,500,000.00';
            tdBenefits.innerHTML = `2k Followers per Week`;
            modalH2.style.background = 'var(--sand)';
            break;
        case 'bronze':
            modalH2.innerHTML = 'Real Estate Agent';
            modalP.innerHTML = 'What We Do<br> Rent or Buy<br> 1. Self-contain<br>2. 1, 2, 3, 4 etc Bedroom Flats<br> 3. Buy and Build Empty lands<br> 4. Houses<br> 5. Office Spaces etc.<br>.';
            tdPrice.innerHTML = `#20,000.00`;
            tdBenefits.innerHTML = `Genuine Comfortable Property.`;
            modalH2.style.background = 'linear-gradient(135deg, #fab979, #fab979, #ec9645, #fac77d, #f6a353, #fab979)'; 
            break;
        case 'silver':
            modalH2.innerHTML = 'Trado Medicals';
            modalP.innerHTML = 'What We Do<br> 1. Treatment and Cure of Diseases like Staphylococus, Candidaities etc.<br>2. Treatment and Cure of Hormonal Inbalance<br>3. Infertility<br>4. Weak Erection etc<br>';
            tdPrice.innerHTML = '#500,000.00';
            tdBenefits.innerHTML = `Have Your Own Children<br> Last Long in Bed<br> Healthy Life`;
            modalH2.style.background = 'linear-gradient(135deg, #d4d4d4, #d4d4d4, #bfbfbf, #e8e8e8, #bfbfbf, #d4d4d4)';
            break;
        case 'gold':
            modalH2.innerHTML = 'Marriage councilling';
            modalP.innerHTML = 'What We Do<br>  1. How to Choose a Husband/Wife Potential Dates<br>2. Secrets of Successful Relationships and marriages<br>3. How to Keep Your Husband from Snatchers and late nights.<br>4. How to Build a fateful Husband/Wife etc';
            tdPrice.innerHTML = '#800,000.00';
            tdBenefits.innerHTML = `Build love<br> Build Trust<br> Marry The Right Partner`;
            modalH2.style.background = 'linear-gradient(135deg, #f7d34d, #f7d34d, #e6b422, #fbdd68, #e6b422, #f7d34d)';
            break;
        default:
            modalP.innerHTML = 'Invalid membership type selected.';
    }

    membershipInfo.appendChild(modalH2);
    membershipInfo.appendChild(modalP);
    tr1.appendChild(td1);
    tr1.appendChild(tdPrice);
    modalTable.appendChild(tr1);
    tr2.appendChild(td2);
    tr2.appendChild(tdBenefits);
    modalTable.appendChild(tr2);
    membershipInfo.appendChild(modalTable);

    membershipInfo.showModal();

    closeModal.addEventListener('click', () => {
        membershipInfo.close();
    });
}

npCard.addEventListener('click', () => {
    openMembershipInfo('Black Nike Canvas');
});
bronzeCard.addEventListener('click', () => {
    openMembershipInfo('bronze');
});
silverCard.addEventListener('click', () => {
    openMembershipInfo('silver');
});
goldCard.addEventListener('click', () => {
    openMembershipInfo('gold');
});

