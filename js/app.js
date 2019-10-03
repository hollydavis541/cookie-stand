'use strict';

var storeHoursArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Store = function(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCust){
  this.city = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
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

//is there a dryer way to do the following 5 steps? 
var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.renderSalesData();

var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.renderSalesData();

var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.renderSalesData();

var paris = new Store('Paris', 20, 38, 2.3);
paris.renderSalesData();

var lima = new Store('Lima', 2, 16, 4.6);
lima.renderSalesData();

renderTableFooter();

//FORM//



//FROM DEMO//

// 1) events happen no matter what (events are emitted regardless) (clock ticks)
// --- user clicks, nothing happens
// 2) tell code to pay attention to (listen to) an event (clock strikes 12pm)
// --- have to attach a listener to the button element; if you don't attach a listener when user clicks no one is listening 
// 3) tell code to handle that event (go get lunch) 
// --- an event handler is a function (click on the button executes the function) 


var puppyForm = document.getElementById('addPuppyForm');

puppyForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var name = event.target.name.value;
  var breed = event.target.breed.value;
  var description = event.target.description.value;
  var staffsay = event.target.staffsay.value;
  var arrAdditionalInfo = [];

  arrAdditionalInfo.push(event.target.isGoodWithOtherDogs.checked? 'Good with Dogs': 'Not Good With Dogs');
  arrAdditionalInfo.push(event.target.isGoodWithCats.checked? 'Good with Cats': 'Not Good With Cats');
  arrAdditionalInfo.push(event.target.isGoodWithKids.checked? 'Good with Kids': 'Not Good With Kids');
  

  var newPuppy = new Puppy(name, '', breed, staffsay, description, arrAdditionalInfo);
  newPuppy.generateAge();
  newPuppy.renderPup();
  console.log('finished creating form dog');
}
