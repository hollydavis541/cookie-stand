'use strict';

var seattle = {
  location: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function() {
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 14) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust));
    }
    return hourlyCookies;
  },
  total: function() {
    var totalDailyCookies = 0;
    for (var i = 0; i <= this.storeHours.length; i++) {
      totalDailyCookies += this.simulatedCookieAmount()[0];
    }
    //toLocaleString converts it to a number that has a comma in it if it's in the thousands
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    //gets section element that has id of cookiesales
    var cookieSalesByHour = document.getElementById('cookiesales');
    //creates an h1 element, gives it the id of storename, and adds text to it
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    //makes the h1 element a child of the section element
    cookieSalesByHour.appendChild(storename);
    //creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    // creates a list item for each store hour
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    //creating a final list item to show the total using the totalSum method within this object
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

var tokyo = {
  location: 'Dubai',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCust: 1.2,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function() {
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 14) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust));
    }
    return hourlyCookies;
  },
  total: function() {
    var totalDailyCookies = 0;
    for (var i = 0; i <= this.storeHours.length; i++) {
      totalDailyCookies += this.simulatedCookieAmount()[0];
    }
    //toLocaleString converts it to a number that has a comma in it if it's in the thousands
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    //gets section element that has id of cookiesales
    var cookieSalesByHour = document.getElementById('cookiesales');
    //creates an h1 element, gives it the id of storename, and adds text to it
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    //makes the h1 element a child of the section element
    cookieSalesByHour.appendChild(storename);
    //creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    // creates a list item for each store hour
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    //creating a final list item to show the total using the totalSum method within this object
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

var dubai = {
  location: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCust: 3.7,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function() {
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 14) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust));
    }
    return hourlyCookies;
  },
  total: function() {
    var totalDailyCookies = 0;
    for (var i = 0; i <= this.storeHours.length; i++) {
      totalDailyCookies += this.simulatedCookieAmount()[0];
    }
    //toLocaleString converts it to a number that has a comma in it if it's in the thousands
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    //gets section element that has id of cookiesales
    var cookieSalesByHour = document.getElementById('cookiesales');
    //creates an h1 element, gives it the id of storename, and adds text to it
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    //makes the h1 element a child of the section element
    cookieSalesByHour.appendChild(storename);
    //creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    // creates a list item for each store hour
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    //creating a final list item to show the total using the totalSum method within this object
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

var paris = {
  location: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCust: 2.3,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function() {
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 14) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust));
    }
    return hourlyCookies;
  },
  total: function() {
    var totalDailyCookies = 0;
    for (var i = 0; i <= this.storeHours.length; i++) {
      totalDailyCookies += this.simulatedCookieAmount()[0];
    }
    //toLocaleString converts it to a number that has a comma in it if it's in the thousands
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    //gets section element that has id of cookiesales
    var cookieSalesByHour = document.getElementById('cookiesales');
    //creates an h1 element, gives it the id of storename, and adds text to it
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    //makes the h1 element a child of the section element
    cookieSalesByHour.appendChild(storename);
    //creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    // creates a list item for each store hour
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    //creating a final list item to show the total using the totalSum method within this object
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

var lima = {
  location: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCust: 4.6,
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  randomNumOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  //takes that random number and multiplies it by average hourly cookie amount;
  simulatedCookieAmount: function() {
  //creates an empty array to store the multiplication results (I didn't figure this array step out on my own, I looked at Trevor's code)
    var hourlyCookies = [];
    //loops through the storeHours array (really just to use it's length which is 14) and runs the calculation to get the total hourly amount of cookies--pushes that amount into the empty array created above
    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyCookies.push(Math.round(this.randomNumOfCustomers() * this.avgCookiesPerCust));
    }
    return hourlyCookies;
  },
  total: function() {
    var totalDailyCookies = 0;
    for (var i = 0; i <= this.storeHours.length; i++) {
      totalDailyCookies += this.simulatedCookieAmount()[0];
    }
    //toLocaleString converts it to a number that has a comma in it if it's in the thousands
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    //gets section element that has id of cookiesales
    var cookieSalesByHour = document.getElementById('cookiesales');
    //creates an h1 element, gives it the id of storename, and adds text to it
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    //makes the h1 element a child of the section element
    cookieSalesByHour.appendChild(storename);
    //creates unordered list element, gives it the class of cookiesperhour, and makes it a child of the h1 element above
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    // creates a list item for each store hour
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    //creating a final list item to show the total using the totalSum method within this object
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

console.log(seattle.randomNumOfCustomers());
console.log(seattle.simulatedCookieAmount());
console.log(seattle.total());

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
