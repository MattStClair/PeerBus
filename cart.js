'use strict';

var orderArray = JSON.parse(localStorage.userOrder);
var container = document.getElementById('ordersContainer');

//var containerList = document.getElementById('userInfo');

for(var i = 0; i < orderArray.length; i++){

  var addOrderItem = document.createElement('div');

  var userNameListItem = document.createElement('p');
  userNameListItem.textContent = 'Name: ' + orderArray[i].name;
  addOrderItem.appendChild(userNameListItem);

  var userQuantLi = document.createElement('p');
  userQuantLi.textContent = 'Quantity: ' + orderArray[i].quantity;
  addOrderItem.appendChild(userQuantLi);

  var userStreetLi = document.createElement('p');
  userStreetLi.textContent = 'Street: ' + orderArray[i].street;
  addOrderItem.appendChild(userStreetLi);

  var userZipLi = document.createElement('p');
  userZipLi.textContent = 'Zipcode is: ' + orderArray[i].zip;
  addOrderItem.appendChild(userZipLi);

  var userPhoneLi = document.createElement('p');
  userPhoneLi.textContent = 'Phone: ' + orderArray[i].phoneNumber;
  addOrderItem.appendChild(userPhoneLi);

  var userCardNum = document.createElement('p');
  userCardNum.textContent = 'Card Number: ' + orderArray[i].creditCardNumber;
  addOrderItem.appendChild(userCardNum);

  var createImage = document.createElement('img');  //create variable for div
  var path = orderArray[i].path;
  createImage.src = path;
  addOrderItem.appendChild(createImage);

  var pEl = document.createElement('p'); //create p element in that div
  pEl.textContent = orderArray[i].item; //adds array item in local storage
  addOrderItem.appendChild(pEl);


  var but = document.createElement('button');
  but.textContent = 'click to remove item';
  addOrderItem.appendChild(but);

  but.addEventListener('click', removeItem);
  container.appendChild(addOrderItem);
}



//
function removeItem (event) {
  var button = event.target;
  button.parentNode.parentNode.removeChild(button.parentNode);

 }
