'use strict';

var storeHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var storeData = [
  ['Seattle', 23, 65, 6.3],
  ['Tokyo', 3, 24, 1.2],
  ['Dubai', 11, 38, 3.7],
  ['Paris', 20, 38, 2.3],
  ['Lima', 2, 16, 4.6]
];

var newArr = [];

var Store = function(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCust, hourlySales, dailySales){
  this.city = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = hourlySales;
  this.calcHourly = dailySales;
};

Store.prototype.customerRandomizer = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
};

Store.prototype.cookiesPerHour = function() {
  var hourlyCookies = [];
  for (var i = 0; i < storeHoursArray.length; i++) {
    hourlyCookies.push(Math.round(this.customerRandomizer() * this.avgCookiesPerCust));
  }
  return hourlyCookies;
};


Store.prototype.cookiesPerDay = function() {
  var dailyCookies = 0;
  for (var i = 0; i < storeHoursArray.length; i++) {
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
  tr.setAttribute('id','totals');
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

Store.prototype.renderSalesData = function(){
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.textContent = `${this.city}`;
  tr.appendChild(th);
  for(var i = 0; i < storeHoursArray.length; i++){
    var td = document.createElement('td');
    td.textContent = `${this.cookiesPerHour()[i]}`;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.cookiesPerDay()}`;
  tr.appendChild(td);
};

renderTableHead();

renderTableFooter();

var storeForm = document.getElementById('addstore');
storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  var city = e.target.city.value;
  var mincustomers = e.target.mincustomers.value;
  var maxcustomers = e.target.maxcustomers.value;
  var avgcookies = e.target.avgcookies.value;
  var newStore = new Store(city, mincustomers, maxcustomers, avgcookies);
  newStore.renderSalesData();
}

(function renderAll(data){
  for(var i = 0; i < data.length; i++){
    data[i] = new Store(data[i][0], data[i][1],data[i][2],data[i][3]);
    data[i].renderSalesData();
  }
})(storeData);


///////
//why resetting to zero here?
// var hourlyTotal = 0;
// for (i = 0; i < storeHoursArray.length; i++) {
//   for (j = 0; j < storeHoursArray.length; j++) {
//     hourlyTotal += Store[j].hourlySales[i];
//     totalTotal += Store[j].hourlySales
//   }
// };

