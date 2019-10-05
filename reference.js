'use strict';
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var controlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
var citySalesByHour = []; // locationHourlySales
var cityData = [ // locatonData
  [`Seattle`, 23, 65, 6.3, [], 0],
  [`Tokyo`, 3, 24, 1.2, [], 0],
  [`Dubai`, 11, 38, 2.3, [], 0],
  [`Paris`, 20, 38, 2.3, [], 0],
  [`Lima`, 2, 16, 4.6, [], 0],
];
// var cityArray = [];
var City = function(location, minCustPerDay, maxCustPerDay, avgCooksPerCust, salesByHour, totalDailySales){
  this.location = location;
  this.minCustPerDay = minCustPerDay;
  this.maxCustPerDay = maxCustPerDay;
  this.avgCooksPerCust = avgCooksPerCust;
  this.salesByHour = salesByHour;
  this.totalDailySales = totalDailySales;
};
//random customer generator
City.prototype.customerPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustPerDay - this.minCustPerDay + 1) + this.minCustPerDay);
};

//cookie sales per hour and store in within City Object
City.prototype.salesByHourCalc = function(){
  for(var i = 0; i < storeHours.length; i++ ) {
    var cookieSales = Math.round((this.customerPerHour() * controlCurve[i]) * this.avgCooksPerCust);
    this.salesByHour.push(cookieSales);
  }
  citySalesByHour.push(this.salesByHour);
};

//calculate total daily sales per city and store within City Object
City.prototype.totalDailySalesCalc = function(){
  this.totalDailySales = 0;
  for(var i = 0; i < this.salesByHour.length; i++){
    this.totalDailySales += this.salesByHour[i];
  };
};


//create table row 1 with heading
var renderTableHead = function() {
  var citySalesLists = document.getElementById('citySalesLists');

  var article = document.createElement('article');
  citySalesLists.appendChild(article);

  var table = document.createElement('table');
  table.setAttribute('id', `sales-table`);
  article.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var row1 = document.createElement('tr');
  thead.appendChild(row1);

  var th = document.createElement('th');
  th.textContent = ``;
  row1.appendChild(th);

  for(var i = 0; i < storeHours.length; i++){
    th = document.createElement('th');
    th.textContent = `${storeHours[i]}`;
    row1.appendChild(th);
  }
  var th = document.createElement('th');
    th.textContent = `Daily Location Total`;
    row1.appendChild(th);

};

//create row for table foot with totals
var renderTableFoot = function() {
  var table = document.getElementById(`sales-table`);

  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);

  var row1 = document.createElement('tr');
  tfoot.appendChild(row1);

  var td = document.createElement('td');
  td.textContent = `Totals`;
  row1.appendChild(td);
  
  var grandTotal = 0;
  for( var i = 0; i < storeHours.length; i++){
    var hourTotal = 0;
    for(var j = 0; j < citySalesByHour.length; j++){
      hourTotal += parseInt(citySalesByHour[j][i]);
    }
    grandTotal += hourTotal;
    td = document.createElement('td');
    td.textContent = hourTotal;
    row1.appendChild(td);
  }
  
  td = document.createElement('td');
  td.textContent = grandTotal;
  row1.appendChild(td);

  
};

//render rows for each city
City.prototype.renderTableBody = function() {
  var table = document.getElementById(`sales-table`);
  var row1 = document.createElement('tr');
  table.appendChild(row1);
  var td = document.createElement('td');
  td.textContent = `${this.location}`;
  row1.appendChild(td);

  for(var i = 0; i < storeHours.length; i++){
    var content = this.salesByHour[i];
    var td = document.createElement('td');
    td.textContent = content;
    row1.appendChild(td);
  };
  var td = document.createElement('td');
  td.setAttribute('class', 'total');
  td.textContent = `${this.totalDailySales}`;
  row1.appendChild(td);

  document.getElementById('sales-table').deleteTFoot(); //found @ https://www.w3schools.com/jsref/met_table_deletetfoot.asp
  renderTableFoot();
};

//add event listener to add new city from forms
var addNewCityForm = document.getElementById('add-new-city-form');
addNewCityForm.addEventListener('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  var location = event.target.cityName.value;
  var minCustPerDay = event.target.minCustomers.value;
  var maxCustPerDay = event.target.maxCustomers.value;
  var avgCooksPerCust = event.target.avgSales.value;

  var newCity = new City(location, minCustPerDay, maxCustPerDay, avgCooksPerCust, [], 0);
  newCity.salesByHourCalc();
  newCity.totalDailySalesCalc();
  newCity.renderTableBody();
}

(function displaySales(data) {
  renderTableHead();
  renderTableFoot();
  for(var i = 0; i < data.length; i++){
    data[i] = new City(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
    data[i].salesByHourCalc();
    data[i].totalDailySalesCalc();
    data[i].renderTableBody();
  };
  
  
})(cityData);
