var sliderButtomLeft = document.querySelectorAll(".slider-button-left");
var sliderButtomRight = document.querySelectorAll(".slider-button-right");
var sliderSectionsRotar = document.querySelector(".rotary-hammers-slider");
var sliderSectionsDrill = document.querySelector('.drills-cards');
var sliderRadioFrst = document.querySelectorAll(".slider-radio-1");
var sliderRadioSec = document.querySelectorAll(".slider-radio-2");
var services = document.querySelectorAll('.services-list-base');
var servicesDelivery = document.querySelector('.services-delivery-section');
var servicesGuarant = document.querySelector('.services-guarant-section');
var servicesCredit = document.querySelector('.services-credit-section');
var servicesList = document.querySelectorAll('.services-list-base');
var companyDetails = document.querySelector('.company-details');
var feedBackClose = document.querySelector('.feed-back-close');
var feedbackPopup = document.querySelector('.feedback-popup');
var feedBackButton = document.querySelector('.feed-back-button');
var mapWidget = document.querySelector('.map-widget');
var mapContacts = document.querySelector('.map-contacts');
var mapClose = document.querySelector('.map-close'); 


sliderButtomLeft[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.add('show');
  sliderSectionsRotar.classList.add('hide');
})

sliderButtomLeft[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.add('show');
  sliderSectionsRotar.classList.add('hide');
})

sliderButtomRight[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.remove('show');
  sliderSectionsRotar.classList.remove('hide');
})

sliderButtomRight[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.remove('show');
  sliderSectionsRotar.classList.remove('hide');
})

sliderRadioFrst[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.add('show');
  sliderSectionsRotar.classList.add('hide');
})

sliderRadioFrst[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.add('show');
  sliderSectionsRotar.classList.add('hide');
})

sliderRadioSec[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.remove('show');
  sliderSectionsRotar.classList.remove('hide');
})

sliderRadioSec[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderSectionsDrill.classList.remove('show');
  sliderSectionsRotar.classList.remove('hide');
})

services[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesDelivery.classList.add("show");
  servicesDelivery.classList.remove("hide");
  servicesGuarant.classList.add("hide");
  servicesCredit.classList.add("hide");
})

services[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesDelivery.classList.remove("show");
  servicesDelivery.classList.add("hide");
  servicesGuarant.classList.remove("hide");
  servicesGuarant.classList.add("show");
  servicesCredit.classList.add("hide");
})

services[2].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesDelivery.classList.remove("show");
  servicesDelivery.classList.add("hide");
  servicesGuarant.classList.remove("show");
  servicesCredit.classList.remove("hide");
  servicesCredit.classList.add("show");
})

servicesList[0].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesList[0].classList.add("services-list-active");
  servicesList[1].classList.remove("services-list-active");
  servicesList[2].classList.remove("services-list-active");
})

servicesList[1].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesList[0].classList.remove("services-list-active");
  servicesList[1].classList.add("services-list-active");
  servicesList[2].classList.remove("services-list-active");
})

servicesList[2].addEventListener('click', function (evt) {
  evt.preventDefault();
  servicesList[0].classList.remove("services-list-active");
  servicesList[1].classList.remove("services-list-active");
  servicesList[2].classList.add("services-list-active");
})

feedBackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('hide')
})

feedBackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('hide');
})

mapContacts.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapWidget.classList.remove('hide');
})

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapWidget.classList.add('hide');
})

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