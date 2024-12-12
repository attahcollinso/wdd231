import { openModal } from './modal.js';

async function loadProducts() {
    const productList = document.getElementById('product-list');
    try {
        const response = await fetch('./data/products.json');
        const products = await response.json();

        productList.innerHTML = products
            .map(
                (product) => `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button onclick="openModal(${product.id})">View Details</button>
                </div>
            `
            )
            .join('');
    } catch (error) {
        productList.textContent = 'Unable to load products.';
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);
