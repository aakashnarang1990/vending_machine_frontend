import { elements } from './base';


const renderProduct = product => {
    const markup = `
        <li>
            <div class="box product-box" data-product-id=${product.id}>
                <p>${product.name}</p>
                <p>${product.price}</p>
                <button class="btn-dispense" onclick="dispenseProduct(${product.id})">
                    Dispense
                </button>
            </div>
        </li>
    `;
    elements.productList.insertAdjacentHTML('beforeend', markup)
    const markup2 = `
    <li>
        <div class="box product-box">
            <p>Item : ${product.name}</p>
            <p>Price : ${product.price}</p>
            <p>Qty : ${product.quantity}</p>
            <input type="text" id="qty-${product.id}" name="quantity" size="10"><br>
            <button class="btn-dispense" onclick="addProduct(${product.id}. )">
                Add Qty
            </button>
        </div>
    </li>
    `
    elements.adminProductList.insertAdjacentHTML('beforeend', markup2)
};

export const renderProducts = products => {
    products.forEach(renderProduct)
}

export const clearProducts = () => {
    elements.productList.innerHTML = '';
    elements.adminProductList.innerHTML = ''
    // elements.searchResPages.innerHTML = '';
};