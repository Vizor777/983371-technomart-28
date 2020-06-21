var buttonBuy = document.querySelector('.button-buy');
var storeBasket = document.querySelector('.store-basket');
var orderClose = document.querySelector('.order-close');


buttonBuy.addEventListener('click', function (evt) {
  evt.preventDefault();
  storeBasket.classList.remove('hide');
})

orderClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  storeBasket.classList.add('hide');
})