'use strict';

var orderArray = JSON.parse(localStorage.userOrder);
var container = document.getElementById('ordersContainer');

var containerList = document.getElementById('userInfo');

for(var i = 0; i < orderArray.length; i++){

  var userNameListItem = document.createElement('p');
  userNameListItem.textContent = 'usname: ' + orderArray[i].name;
  container.appendChild(userNameListItem);

  var userQuantLi = document.createElement('p');
  userQuantLi.textContent = 'address: ' + orderArray[i].quantity;
  container.appendChild(userQuantLi);

  var userStreetLi = document.createElement('p');
  userStreetLi.textContent = 'address: ' + orderArray[i].street;
  container.appendChild(userStreetLi);

  var userZipLi = document.createElement('p');
  userZipLi.textContent = 'Zipcode is: ' + orderArray[i].zip;
  container.appendChild(userZipLi);

  var userPhoneLi = document.createElement('li');
  userPhoneLi.textContent = 'address: ' + orderArray[i].phoneNumber;
  container.appendChild(userPhoneLi);


  var addOrderItem = document.createElement('div');
  var createImage = document.createElement('img');  //create variable for div
  var path = orderArray[i].path;
  createImage.src = path;
  addOrderItem.appendChild(createImage);

  var pEl = document.createElement('p'); //create p element in that div
  pEl.textContent = orderArray[i].item; //adds array item in local storage
  addOrderItem.appendChild(pEl);
  container.appendChild(addOrderItem);
}
