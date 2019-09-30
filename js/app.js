'use strict';

/* <section id="locationinfo">
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



//   // --- var simulatedCookieAmount = avgCookiesPerCust * seattle.randomNumOfCustomers();
// // --- "Store the results for each location in a separate array… perhaps as a property of the object representing that location"
// // --- var cookiesSoldSeattle = [   ]
// // --- "Display the values of each array as unordered lists in the browser"
