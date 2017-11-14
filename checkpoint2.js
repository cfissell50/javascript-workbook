'use strict';

// Take the following array of objects and console.log each user and their corresponding data in the following form: "user_name paid amount for product in city, state." using map.

const userArray = [
    {
            "customer": {
                "id": 1,
                "customerName":"Marilyn Monroe",
                "customerCity":"New York City",
                "customerState":"NY",
                "product":"Yellow Chair",
                "productPrice": 19.99
            }
        },
        {
            "customer": {
                "id": 2,
                "customerName":"Abraham Lincoln",
                "customerCity":"Boston",
                "customerState":"MA",
                "product":"Movie Tickets",
                "productPrice": 27.00
            }
        },
                {
            "customer": {
                "id": 3,
                "customerName":"John F. Kennedy",
                "customerCity":"Dallas",
                "customerState":"TX",
                "product":"Mustang Convertible",
                "productPrice": 24999.99
            }
        },
                {
            "customer": {
                "id": 4,
                "customerName":"Martin Luther King",
                "customerCity":"Burmingham",
                "customerState":"AL",
                "product":"Sandwiches",
                "productPrice": 7.99
            }
        },
];

// use userArray.map function and tick marks to print out in an array
// inside the .map function return the corresponding information listed above.
//return the array in a string so it looks cleaner using toString method.

const customerSentence = userArray.map((entity) => {
  return ` ${entity.customer.customerName} paid $${entity.customer.productPrice} for a ${entity.customer.product} in ${entity.customer.customerCity}, ${entity.customer.customerState}`;

});

console.log(customerSentence.toString());
