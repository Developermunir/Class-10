
// Create an email pattern 


let email = "monir-_.25@gmail.com"

let email_pattern = /^[a-z0-9-._]*@[a-z]{2,6}\.[a-z]{2,5}$/;


console.log(email_pattern.test(email));




//  Create a  username pattern


let username = "rajur_.-30"

let username_pattern = /^[A-Za-z0-9_.-]*$/;

console.log(username_pattern.test(username));




// Create a Bangladeshi phone number pattern


let phone_number= "01723812366"

let phone_number_pattern = /^(\+880|0)[0-9]{10}$/;

console.log(phone_number_pattern.test(phone_number));





//  Create a password pattern 


let password = "Abvcfdg-22aaa"

let password_pattern = /^[A-Z][a-z]{4,6}[~!@#$%&(){}_.-][0-9]{2,4}[a-z]*$/;

console.log(password_pattern.test(password));




//   Create a zipcode pattern  

let zipcode = "5100"

let zipcode_pattern = /^[0-9]{4,6}$/;

console.log(zipcode_pattern.test(zipcode));