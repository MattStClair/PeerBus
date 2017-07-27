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



function handleSubmit(e) {
  e.preventDefault();

  var item = e.target.dropdown.options[e.target.dropdown.options.selectedIndex].value;

  // var quantity = e.target.quantity.value;
  // var name = e.target.name.value;
  // var street = e.target.street.value;
  // var zip = e.target.zip.value;
  // var phoneNumber = e.target.phone_number.value;
  // var creditCardNumber = e.target.credit_card_number.value;


  //store in local storage
  localStorage.userOrder = JSON.stringify(item);
}

document.getElementById('form').addEventListener('submit', handleSubmit);
