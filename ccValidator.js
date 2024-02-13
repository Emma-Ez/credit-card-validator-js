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
  
// Identify card type based on card number using RegEx
function identifyCardType(cardNumber) {
    const cardTypeRegexes = {
      Visa: /^4/,
      MasterCard: /^5[1-5]/,
      AmericanExpress: /^3[47]/,
      Discover: /^6(?:011|5)/
    };
  
    for (const cardType in cardTypeRegexes) {
      if (cardTypeRegexes[cardType].test(cardNumber)) {
        return cardType;
      }
    }
    return null;
}
  
const expectedLengths = {
    Visa: 16,
    MasterCard: 16,
    AmericanExpress: 15,
    Discover: 16
};

// Usage
let cardNumber = "5224 5678 4012 3456";
    if (validateCard(cardNumber)) {
      console.log("Valid card!");
      console.log("Card Type:", identifyCardType(cardNumber));
    } else {
      console.log("Invalid card!");
}
    
