'use strict';

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum',
  'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep',
  'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var dropdown = document.getElementById('dropdown');

for(var i = 0; i < names.length; i++) {
  var option = document.createElement('option');
  option.textContent = names[i];
  dropdown.appendChild(option);
}

Order.all = [];

function Order(item, quantity, name, street, zip, phoneNumber, creditCardNumber) {
  this.item = item;
  this.path = item + '.jpg';
  this.quantity = quantity;
  this.name = name;
  this.street = street;
  this.zip = zip;
  this.phoneNumber = phoneNumber;
  this.creditCardNumber = creditCardNumber;
  Order.all.push(this);
}


function handleSubmit(e) {
  e.preventDefault();

  var item = e.target.dropdown.options[e.target.dropdown.options.selectedIndex].value;
  var quantity = e.target.quantity.value;
  var name = e.target.name.value;
  var street = e.target.street.value;
  var zip = e.target.zip.value;
  var phoneNumber = e.target.phone_number.value;
  var creditCardNumber = e.target.credit_card_number.value;

  new Order(item, quantity, name, street, zip, phoneNumber, creditCardNumber);

  //store in local storage
  localStorage.userOrder = JSON.stringify(Order.all);
}

document.getElementById('form').addEventListener('submit', handleSubmit);
