'use strict';

$(document).ready(() => {

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
    $('#cookiesales').append('<table></table>');
    $('table').attr('id', 'table'); // remove once refactoring complete
    $('table').append('<thead></thead>');
    $('thead').append('<tr></tr>');
    $('tr').append('<th></th>');
    storeHours.forEach(el => {
      $('tr').append(`<th>${el}</th>`);
    });
    $('tr').append('<th>Daily Total</th>');
  }

  function renderTableFooter() {
    $('table').append('<tfoot></tfoot>');
    $('tfoot').append('<tr></tr>');
    $('tfoot tr').attr('id', 'totals');
    $('tfoot tr').append('<td>Hourly Total</td>');

    var columnTotal = 0;
    for(var i = 0; i < storeHours.length; i++){
      var hourTotal = 0;
      for(var j = 0; j < locationHourlySales.length; j++){
        hourTotal += parseInt(locationHourlySales[j][i]);
      }
      columnTotal += hourTotal;
      $('tfoot tr').append(`<td>${hourTotal}</td>`);
    }
    $('tfoot tr').append(`<td>${columnTotal}</td>`);
  }

  Store.prototype.renderSalesData = function(){
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    th.textContent = `${this.city}`;
    tr.appendChild(th);
    for(var i = 0; i < storeHours.length; i++){
      var sales = this.hourlySales[i];
      var td = document.createElement('td');
      td.textContent = sales;
      tr.appendChild(td);
    }
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
    var newStore = new Store(city, mincustomers, maxcustomers, avgcookies, [], 0);
    newStore.cookiesPerHour();
    newStore.cookiesPerDay();
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

});

// $(document).ready(() => {
//   // Creates Table Header
//   $('#cookiesales').append('<table></table>');
//   $('table').append('<thead></thead>');
//   $('thead').append('<tr></tr>');
//   $('tr').append('<th></th>');
//   storeHours.forEach(el => {
//     $('tr').append(`<th>${el}</th>`);
//   });
//   $('tr').append('<th>Daily Total</th>');

//   // Creates Table Body
//   // $('table').append('<tbody></tbody>');
//   // locationData.forEach(el => {
//   //   $('tbody').append('<tr></tr>');
//   //   $('tbody tr').append(`<th>${el[0]}</th>`);

//   // });
// });
