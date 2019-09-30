'use strict';

/* <section id="locationinfo"> <<< US JS TO ADD THIS ID 
        <h1>storename</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
</section> */


var seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  simulatedCookieAmount: function(){
    return Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust);
  }
};

var tokyo = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCust: 1.2,
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  simulatedCookieAmount: function(){
    return Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust);
  }
};

var dubai = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCust: 3.7,
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  simulatedCookieAmount: function(){
    return Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust);
  }
};

var paris = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCust: 2.3,
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  simulatedCookieAmount: function(){
    return Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust);
  }
};

var lima = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCust: 4.6,
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  simulatedCookieAmount: function(){
    return Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust);
  }
};

var hourlyCookiesSold = [seattle.simulatedCookieAmount(), tokyo.simulatedCookieAmount(), dubai.simulatedCookieAmount(), paris.simulatedCookieAmount(), lima.simulatedCookieAmount()];

console.log(hourlyCookiesSold);

//gets section element that has id of cookiesales
var cookieSalesByHour = document.getElementById('cookiesales');
//creates an h1 element, gives it the id of storename, and adds text to it
var storename = document.createElement('h1');
storename.setAttribute('id', 'storename');
storename.textContent = 'Seattle';
//makes the h1 element a child of the section element
cookieSalesByHour.appendChild(storename);

