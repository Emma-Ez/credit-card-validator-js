 // Function to validate credit card number using RegEx and Luhn algorithm
function validateCard(cardNumber) {
    // Remove any non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

// Check length based on card type
const cardType = identifyCardType(cardNumber);
    if (!cardType || cardNumber.length !== expectedLengths[cardType]) {
      return false;
    }