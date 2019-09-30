'use strict';

/* <section id="locationinfo">
        <h1>storename</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
</section> */

// 2. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

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

console.log(seattle.simulatedCookieAmount());


//   // --- var simulatedCookieAmount = avgCookiesPerCust * seattle.randomNumOfCustomers();
// // --- "Store the results for each location in a separate array… perhaps as a property of the object representing that location"
// // --- var cookiesSoldSeattle = [   ]
// // --- "Display the values of each array as unordered lists in the browser"
