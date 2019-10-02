'use strict';

var storeHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Store = function(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCust, storeHours){
  this.city = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.storeHours = storeHours;
};

Store.prototype.customerRandomizer = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
};

Store.prototype.cookiesPerHour = function() {
  var hourlyCookies = [];
  for (var i = 0; i < 14; i++) {
    hourlyCookies.push(Math.round(this.customerRandomizer() * this.avgCookiesPerCust));
  }
  return hourlyCookies;
};

Store.prototype.cookiesPerDay = function() {
  var dailyCookies = 0;
  for (var i = 0; i < 14; i++) {
    dailyCookies += this.cookiesPerHour()[0];
  }
  return dailyCookies.toLocaleString();
};

// Store.prototype.render = function() {
//   var cookieSalesByHour = document.getElementById('cookiesales');
//   var storename = document.createElement('h1');
//   storename.setAttribute('id', 'storename');
//   storename.textContent = `${this.city}`;
//   cookieSalesByHour.appendChild(storename);
//   var cookiesSoldPerHour = document.createElement('ul');
//   cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
//   storename.appendChild(cookiesSoldPerHour);
//   for (var i = 0; i < 15; i++) {
//     var li = document.createElement('li');
//     li.textContent = `${this.storeHours[i]}: ${this.cookiesPerHour()[i]} cookies`;
//     cookiesSoldPerHour.appendChild(li);
//   }
//   li.textContent = `Total: ${this.cookiesPerDay()} cookies`;
//   cookiesSoldPerHour.appendChild(li);
// };

Store.prototype.render = function() {
  var section = document.getElementById('cookiesales');
  //creates the table
  var table = document.createElement('table');
  //creates the rows
  var row01 = document.createElement('tr');
  var row02 = document.createElement('tr');
  var row03 = document.createElement('tr');
  var row04 = document.createElement('tr');
  var row05 = document.createElement('tr');
  var row06 = document.createElement('tr');
  var row07 = document.createElement('tr');

  // creates 15 header cells for row01
  var th01 = document.createElement('th');
  th01.textContent = '';
  var th02 = document.createElement('th');
  th02.textContent = storeHoursArray[0];
  var th03 = document.createElement('th');
  th03.textContent = storeHoursArray[1];
  var th04 = document.createElement('th');
  th04.textContent = storeHoursArray[2];
  var th05 = document.createElement('th');
  th05.textContent = storeHoursArray[3];
  var th06 = document.createElement('th');
  th06.textContent = storeHoursArray[4];
  var th07 = document.createElement('th');
  th07.textContent = storeHoursArray[5];
  var th08 = document.createElement('th');
  th08.textContent = storeHoursArray[6];
  var th09 = document.createElement('th');
  th09.textContent = storeHoursArray[7];
  var th10 = document.createElement('th');
  th10.textContent = storeHoursArray[8];
  var th11 = document.createElement('th');
  th11.textContent = storeHoursArray[9];
  var th12 = document.createElement('th');
  th12.textContent = storeHoursArray[10];
  var th13 = document.createElement('th');
  th13.textContent = storeHoursArray[11];
  var th14 = document.createElement('th');
  th14.textContent = storeHoursArray[12];
  var th15 = document.createElement('th');
  th15.textContent = storeHoursArray[13];


  // var h1 = document.createElement('h1');
  // h1.setAttribute('id', 'storename');
  // h1.textContent = `${this.city}`;
  // section.appendChild(h1);
  // var ul = document.createElement('ul');
  // ul.setAttribute('class', 'cookiesperhour');
  // h1.appendChild(ul);
  // for (var i = 0; i < 15; i++) {
  //   var li = document.createElement('li');
  //   li.textContent = `${this.storeHours[i]}: ${this.cookiesPerHour()[i]} cookies`;
  //   ul.appendChild(li);
  // }
  // li.textContent = `Total: ${this.cookiesPerDay()} cookies`;
  // ul.appendChild(li);
};

var seattle = new Store('Seattle', 23, 65, 6.3, storeHoursArray);
var tokyo = new Store('Toyko', 3, 24, 1.2, storeHoursArray);
var dubai = new Store('Dubai', 11, 38, 3.7, storeHoursArray);
var paris = new Store('Paris', 20, 38, 2.3, storeHoursArray);
var lima = new Store('Lima', 2, 16, 4.6, storeHoursArray);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
