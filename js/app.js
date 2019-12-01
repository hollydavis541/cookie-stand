'use strict';

$(document).ready(() => {

  const storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  const locationHourlySales = [];
  const locationData = [
    ['Seattle', 23, 65, 6.3 , [], 0],
    ['Tokyo', 3, 24, 1.2, [], 0],
    ['Dubai', 11, 38, 3.7, [], 0],
    ['Paris', 20, 38, 2.3, [], 0],
    ['Lima', 2, 16, 4.6, [], 0]
  ];

  const Store = function(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCust, hourlySales, dailySales){
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
    for (let i = 0; i < storeHours.length; i++) {
      let cookieSales = Math.round(this.customerRandomizer() * this.avgCookiesPerCust);
      this.hourlySales.push(cookieSales);
    }
    locationHourlySales.push(this.hourlySales);
  };

  Store.prototype.cookiesPerDay = function() {
    this.dailySales = 0;
    for (let i = 0; i < storeHours.length; i++) {
      this.dailySales += this.hourlySales[i];
    }
  };

  function renderTableHeader() {
    $('#cookiesales').append('<table>');
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

    let columnTotal = 0;
    for(let i = 0; i < storeHours.length; i++){
      let hourTotal = 0;
      for(let j = 0; j < locationHourlySales.length; j++){
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
    for(let i = 0; i < storeHours.length; i++){
      let sales = this.hourlySales[i];
      $('tbody tr').append(`<td>${sales}</td>`);
    }
    $('tbody tr').append(`<td>${this.dailySales}</td>`);
    $('tbody tr td').attr('class', 'total');
  };

  $('#addstore').on('submit', handleSubmit);

  function handleSubmit(e){
    e.preventDefault();
    let city = e.target.city.value;
    let mincustomers = e.target.mincustomers.value;
    let maxcustomers = e.target.maxcustomers.value;
    let avgcookies = e.target.avgcookies.value;
    let newStore = new Store(city, mincustomers, maxcustomers, avgcookies, [], 0);
    newStore.cookiesPerHour();
    newStore.cookiesPerDay();
    newStore.renderSalesData();
    removeFooter();
    renderTableFooter();
    makePieChart();
    makeBarChart();
  }

  function removeFooter() {
    $('tfoot').remove();
  }

  ////////////////////////////////////////
  //
  // Pie Chart - Daily Sales
  //
  ////////////////////////////////////////
  let getPieLabels = function(info) {
    const labelsArr = [];
    for (let i=0; i < info.length; i++){
      labelsArr.push(info[i].city);
    }
    return labelsArr;
  };

  let genPieData = function(info) {
    const dataArr = [];
    for (let i=0; i < info.length; i++){
      dataArr.push(info[i].dailySales);
    }
    return dataArr;
  };

  function makePieChart(){
    const ctx = document.getElementById('canvas-chart').getContext('2d');
    const productChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: getPieLabels(Store.data),
        datasets: [{
          label: 'Daily Sales',
          data: genPieData(Store.data),
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
        ],
      },
    });
  }

  ////////////////////////////////////////
  //
  // Bar Chart - Hourly Totals
  //
  ////////////////////////////////////////
  let getBarLabels = function(info) {
    const labelsArr = [];
    for (let i=0; i < info.length; i++){
      labelsArr.push(info[i]);
    }
    return labelsArr;
  };

  let genBarData = function() {
    const dataArr = [];
    $('tfoot td').map(function() {
      dataArr.push($(this).text());
    });
    dataArr.shift();
    dataArr.pop();
    return dataArr;
  };

  function makeBarChart(){

    const ctx = document.getElementById('canvas-chart02').getContext('2d');
    const productChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: getBarLabels(storeHours),
        datasets: [{
          label: 'Hourly Sales',
          data: genBarData(Store.data),
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
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });
  }

  // IIFE - Makes all the things show up on the page :)
  (function renderAll(data){
    renderTableHeader();
    $('table').append('<tbody>');
    for(let i = 0; i < data.length; i++){
      data[i] = new Store(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
      data[i].cookiesPerHour();
      data[i].cookiesPerDay();
      data[i].renderSalesData();
    }
    renderTableFooter();
    makePieChart();
    makeBarChart();
  })(locationData);

});
