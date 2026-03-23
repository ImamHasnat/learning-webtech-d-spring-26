const unitPrice = 1000;
const quantityInput = document.getElementById('quantity');
const totalDisplay = document.getElementById('total');

quantityInput.addEventListener('input', function() {
    let quantity = parseInt(quantityInput.value);
    
    // Validation: prevent negative values
    if (quantity < 0) {
        quantity = 0;
        quantityInput.value = 0;
        alert('Quantity cannot be negative. Reset to 0.');
    }
    
    // Calculate total
    const total = unitPrice * quantity;
    totalDisplay.textContent = total;
    
    // Gift coupon notification
    if (total > 1000) {
        alert('Congratulations! You are now eligible for a gift coupon.');
    }
});