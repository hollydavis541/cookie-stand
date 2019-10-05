'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var locationHourlySales = [];
var locationData = [
  ['Seattle', 23, 65, 6.3 , [], 0],
  ['Tokyo', 3, 24, 1.2, [], 0],
  ['Dubai', 11, 38, 3.7, [], 0],
  ['Paris', 20, 38, 2.3, [], 0],
  ['Lima', 2, 16, 4.6, [], 0]
];

var Store = function(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCust, hourlySales, dailySales){
  this.city = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = hourlySales;
  this.dailySales = dailySales;
};

Store.prototype.customerRandomizer = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
};

Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var cookieSales = Math.round(this.customerRandomizer() * this.avgCookiesPerCust);
    this.hourlySales.push(cookieSales);
  }
  locationHourlySales.push(this.hourlySales);
};

Store.prototype.cookiesPerDay = function() {
  this.dailySales = 0;
  for (var i = 0; i < storeHours.length; i++) {
    this.dailySales += this.hourlySales[i];
  }
};

function renderTableHeader() {
  var section = document.getElementById('cookiesales');
  var table = document.createElement('table');
  table.setAttribute ('id', 'table');
  section.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var thStore = document.createElement('th');
  thStore.textContent = '';
  tr.appendChild(thStore);

  for(var i = 0; i < storeHours.length; i++){
    var thTime = document.createElement('th');
    thTime.textContent = `${storeHours[i]}`;
    tr.appendChild(thTime);
  }
  var thStoreTotal = document.createElement('th');
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

  var td = document.createElement('td');
  td.textContent = 'Hourly Total';
  tr.appendChild(td);

  var columnTotal = 0;
  for(var i = 0; i < storeHours.length; i++){
    var hourTotal = 0;
    for(var j = 0; j < locationHourlySales.length; j++){
      hourTotal += parseInt(locationHourlySales[j][i]);
    }
    columnTotal += hourTotal;
    td = document.createElement('td');
    td.textContent = hourTotal;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = columnTotal;
  tr.appendChild(td);
}

Store.prototype.renderSalesData = function(){
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  th.textContent = `${this.city}`;
  tr.appendChild(th);
  // creates values for columns 2-15
  for(var i = 0; i < storeHours.length; i++){
    // haha on my last commit I didn't have an "i" below which is why it was rendering the whole array
    var sales = this.hourlySales[i];
    var td = document.createElement('td');
    td.textContent = sales;
    tr.appendChild(td);
  }
  // creates values for Daily Total Column
  td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.dailySales}`;
  tr.appendChild(td);
};

var storeForm = document.getElementById('addstore');
storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(e){
  e.preventDefault();
  var city = e.target.city.value;
  var mincustomers = e.target.mincustomers.value;
  var maxcustomers = e.target.maxcustomers.value;
  var avgcookies = e.target.avgcookies.value;
  var newStore = new Store(city, mincustomers, maxcustomers, avgcookies, hourly, daily);
  newStore.customerRandomizer();
  newStore.cookiesPerHour();
  newStore.cookiesPerDay();
  var hourly = e.target.hourly.value;
  var daily = e.target.daily.value;
  newStore.renderSalesData();
  removeFooter();
  renderTableFooter();
}

function removeFooter() {
  var table = document.getElementById('table');
  table.deleteTFoot();
}

(function renderAll(data){
  renderTableHeader();
  for(var i = 0; i < data.length; i++){
    data[i] = new Store(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
    data[i].cookiesPerHour();
    data[i].cookiesPerDay();
    data[i].renderSalesData();
  }
  renderTableFooter();
})(locationData);
