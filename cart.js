'use strict';

var orderArray = JSON.parse(localStorage.userOrder);
var container = document.getElementById('ordersContainer');
for(var i = 0; i < orderArray.length; i++){


  var addOrderItem = document.createElement('div');
  var createImage = document.createElement('img');  //create variable for div
  var path = 'images/' + orderArray[i].path;
  createImage.src = path;
  addOrderItem.appendChild(createImage); 
  var pEl = document.createElement('p'); //create p element in that div
  pEl.textContent = orderArray[i].item; //adds array item in local storage
  addOrderItem.appendChild(pEl);
  container.appendChild(addOrderItem);
}
