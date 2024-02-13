 // Function to validate credit card number using RegEx and Luhn algorithm
function validateCard(cardNumber) {
    // Remove any non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

// Check length based on card type
const cardType = identifyCardType(cardNumber);
    if (!cardType || cardNumber.length !== expectedLengths[cardType]) {
      return false;
    }

// Applying Luhn Algorithm
let sum = 0;
for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
      if ((cardNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
  
    return sum % 10 === 0;
}
  