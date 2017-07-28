'use strict';

var orderArray = JSON.parse(localStorage.userOrder);
var container = document.getElementById('ordersContainer');

//var containerList = document.getElementById('userInfo');

for(var i = 0; i < orderArray.length; i++){

  var addOrderItem = document.createElement('div');
  addOrderItem.id = orderArray[i].item;

  var but = document.createElement('button');
  but.textContent = 'X';
  addOrderItem.appendChild(but);

  var createImage = document.createElement('img');  //create variable for div
  var path = orderArray[i].path;
  createImage.src = path;
  addOrderItem.appendChild(createImage);

  var userNameListItem = document.createElement('p');
  userNameListItem.textContent = 'Name: ' + orderArray[i].name;
  addOrderItem.appendChild(userNameListItem);

  var pEl = document.createElement('p'); //create p element in that div
  pEl.textContent = 'Item: ' + orderArray[i].item; //adds array item in local storage
  addOrderItem.appendChild(pEl);

  var userQuantLi = document.createElement('p');
  userQuantLi.textContent = 'Quantity: ' + orderArray[i].quantity;
  addOrderItem.appendChild(userQuantLi);

  var userStreetLi = document.createElement('p');
  userStreetLi.textContent = 'Street: ' + orderArray[i].street;
  addOrderItem.appendChild(userStreetLi);

  var userZipLi = document.createElement('p');
  userZipLi.textContent = 'Zipcode: ' + orderArray[i].zip;
  addOrderItem.appendChild(userZipLi);

  var userPhoneLi = document.createElement('p');
  userPhoneLi.textContent = 'Phone: ' + orderArray[i].phoneNumber;
  addOrderItem.appendChild(userPhoneLi);

  var userCardNum = document.createElement('p');
  userCardNum.textContent = 'Card Number: ' + orderArray[i].creditCardNumber;
  addOrderItem.appendChild(userCardNum);

  but.addEventListener('click', removeItem);
  container.appendChild(addOrderItem);
}



//
function removeItem (event) {
  var button = event.target;
  for(var i = 0; i < orderArray.length; i++)
  {
    if(button.parentNode.id === orderArray[i].item){
      orderArray.splice(i, 1);
      localStorage.userOrder = JSON.stringify(orderArray);
    }
  }
  button.parentNode.parentNode.removeChild(button.parentNode);
}

function handleClick() {
  window.location.href = 'index.html';
}

document.getElementById('return').addEventListener('click', handleClick);
