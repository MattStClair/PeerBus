'use strict';

var orderArray = JSON.parse(localStorage.userOrder);

for(var i = 0; i < orderArray.length; i++){

  var path = 'images/' + orderArray[i].path;

  var image = document.getElementById('imageTest');

  image.src = path;
}
