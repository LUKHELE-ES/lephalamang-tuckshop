//0404015793080 LUKHELE ES ISAT 
// Product prices
const productPrices = {
    bread: 15.00,
    milk: 12.50,
    canned_goods: 25.00,
    snacks: 10.00,
    beverages: 18.00
};

// DECLARING INPUT AND BUTTONS
const productSelect = document.getElementById('products');
const quantityInput = document.getElementById('quantity');
const subtotalInput = document.getElementById('subtotal');
const purchaseBtn = document.getElementById('purchaseBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Calculate subtotal when product or quantity changes
function calculateSubtotal() {
    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value) || 0;
    
    if (selectedProduct && productPrices[selectedProduct]) {
        const subtotal = productPrices[selectedProduct] * quantity;
        subtotalInput.value = `R${subtotal.toFixed(2)}`;
    } else {
        subtotalInput.value = 'R0.00';
    }
}

// Event listeners for sales page
productSelect.addEventListener('change', calculateSubtotal);
quantityInput.addEventListener('input', calculateSubtotal);

// Handle purchase button click
purchaseBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const contact = document.getElementById('contact').value;
    const payment = parseFloat(document.getElementById('payment').value) || 0;
    const subtotal = parseFloat(subtotalInput.value.replace('R', '')) || 0;
    
    // Basic validation
    if (!name || !surname) {
        alert('Please enter your name and surname');
        return;
    }
    
    if (!contact) {
        alert('Please enter your contact information');
        return;
    }
    
    if (!productSelect.value) {
        alert('Please select a product');
        return;
    }
    
    if (payment < subtotal) {
        alert(`Payment amount is insufficient. Please pay at least R${subtotal.toFixed(2)}`);
        return;
    }
    //DISPLAY
    // Successful purchase
    alert(`Thank you for your purchase, ${name} ${surname}!\n\nYour order has been processed successfully.`);
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('contact').value = '';
    productSelect.selectedIndex = 0;
    quantityInput.value = 1;
    subtotalInput.value = 'R0.00';
    document.getElementById('payment').value = '';
});

// Handle cancel button
cancelBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel this purchase?')) {
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('contact').value = '';
        productSelect.selectedIndex = 0;
        quantityInput.value = 1;
        subtotalInput.value = 'R0.00';
        document.getElementById('payment').value = '';
    }
});