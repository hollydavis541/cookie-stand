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

function renderTableHead() {
  var section = document.getElementById('cookiesales');
  var table = document.createElement('table');
  table.setAttribute ('id', 'table');
  section.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var thStore = document.createElement('th');
  thStore.setAttribute('scope','col');
  thStore.textContent = '';
  tr.appendChild(thStore);

  for(var i = 0; i < storeHoursArray.length; i++){
    var thTime = document.createElement('th');
    thTime.setAttribute('scope','col');
    thTime.textContent = `${storeHoursArray[i]}`;
    tr.appendChild(thTime);
  }
  var thStoreTotal = document.createElement('th');
  thStoreTotal.setAttribute('scope','col');
  thStoreTotal.textContent = 'Daily Total';
  tr.appendChild(thStoreTotal);
}

function renderTableFooter() {
  var table = document.getElementById('table');

  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);

  var tr = document.createElement('tr');
  tr.setAttribute('id','totalTarget');
  tfoot.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Hourly Total';
  th.setAttribute('scope', 'row');
  tr.appendChild(th);

  for(var i = 0; i < storeHoursArray.length; i++){
    var tdHourlyTotal = document.createElement('th');
    tdHourlyTotal.setAttribute('scope','col');
    tdHourlyTotal.textContent = '';
    tr.appendChild(tdHourlyTotal);
  }
  var thHourlyTotal = document.createElement('th');
  thHourlyTotal.setAttribute('scope','col');
  thHourlyTotal.textContent = '';
  tr.appendChild(thHourlyTotal);
}

renderTableHead();
renderTableFooter();


// var seattle = new Store('Seattle', 23, 65, 6.3, storeHoursArray);
// var tokyo = new Store('Toyko', 3, 24, 1.2, storeHoursArray);
// var dubai = new Store('Dubai', 11, 38, 3.7, storeHoursArray);
// var paris = new Store('Paris', 20, 38, 2.3, storeHoursArray);
// var lima = new Store('Lima', 2, 16, 4.6, storeHoursArray);

// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
