 // Function to validate credit card number using RegEx and Luhn algorithm
function validateCard(cardNumber) {
    // Remove any non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number consists of 16 digits
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    // Apply Luhn algorithm
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i]);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}