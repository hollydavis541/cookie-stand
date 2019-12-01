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
    Store.data.push(this);
  };

  // Array of properties from constructor above
  Store.data = [];

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
    $('#cookiesales').append('<table>');
    $('table').attr('id', 'table'); // remove once refactoring complete
    $('table').append('<thead>');
    $('thead').append('<tr>');
    $('tr').append('<th>');
    storeHours.forEach(el => {
      $('tr').append(`<th>${el}</th>`);
    });
    $('tr').append('<th>Daily Total</th>');
  }

  function renderTableFooter() {
    $('table').append('<tfoot>');
    $('tfoot').append('<tr>');
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
    $('tbody').append('<tr>');
    $('tbody tr').append(`<th>${this.city}</th>`);
    for(var i = 0; i < storeHours.length; i++){
      var sales = this.hourlySales[i];
      $('tbody tr').append(`<td>${sales}</td>`);
    }
    $('tbody tr').append(`<td>${this.dailySales}</td>`);
    $('tbody tr td').attr('class', 'total');
  };

  $('#addstore').on('submit', handleSubmit);

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
    makeChart();
  }

  function removeFooter() {
    $('tfoot').remove();
  }

  // Chart Generator
  var genLabels = function(images) {
    var labelsArr = [];
    for (var i=0; i < images.length; i++){
      labelsArr.push(images[i].city);
    }
    return labelsArr;
  };

  var genData01 = function(images) {
    var dataArr = [];
    for (var i=0; i < images.length; i++){
      dataArr.push(images[i].clicks);
    }
    return dataArr;
  };

  var genData02 = function(images) {
    var dataArr = [];
    for (var i=0; i < images.length; i++){
      dataArr.push(images[i].timesShown);
    }
    return dataArr;
  };

  function makeChart(){

    var ctx = document.getElementById('canvas-chart').getContext('2d');
    var productChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: genLabels(Store.data),
        datasets: [{
          label: 'Votes',
          data: genData01(Store.data),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Appearances',
          data: genData02(Store.data),
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // Found stepSize info at https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
              stepSize: 1
            }
          }]
        }
      }
    });
  }

  (function renderAll(data){
    renderTableHeader();
    $('table').append('<tbody>');
    for(var i = 0; i < data.length; i++){
      data[i] = new Store(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
      data[i].cookiesPerHour();
      data[i].cookiesPerDay();
      data[i].renderSalesData();
    }
    renderTableFooter();
    console.log(Store.data);
    makeChart();
  })(locationData);

});
