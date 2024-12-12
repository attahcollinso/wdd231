export function openModal(productId) {
    const modal = document.getElementById('product-modal');
    const modalDetails = document.getElementById('modal-details');

    fetch('./data/products.json')
        .then((response) => response.json())
        .then((products) => {
            const product = products.find((p) => p.id === productId);
            modalDetails.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
            `;
        });

    modal.style.display = 'flex';

    const close = modal.querySelector('.close');
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
