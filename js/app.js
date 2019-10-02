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
  simulatedCookieAmount: function() {
    var hourlyCookies = [];
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
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    var cookieSalesByHour = document.getElementById('cookiesales');
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    cookieSalesByHour.appendChild(storename);
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
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
  simulatedCookieAmount: function() {
    var hourlyCookies = [];
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
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    var cookieSalesByHour = document.getElementById('cookiesales');
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    cookieSalesByHour.appendChild(storename);
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
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
  simulatedCookieAmount: function() {
    var hourlyCookies = [];
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
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    var cookieSalesByHour = document.getElementById('cookiesales');
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    cookieSalesByHour.appendChild(storename);
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
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
  simulatedCookieAmount: function() {
    var hourlyCookies = [];
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
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    var cookieSalesByHour = document.getElementById('cookiesales');
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    cookieSalesByHour.appendChild(storename);
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
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
  simulatedCookieAmount: function() {
    var hourlyCookies = [];
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
    return totalDailyCookies.toLocaleString();
  },
  render: function() {
    var cookieSalesByHour = document.getElementById('cookiesales');
    var storename = document.createElement('h1');
    storename.setAttribute('id', 'storename');
    storename.textContent = `${this.location}`;
    cookieSalesByHour.appendChild(storename);
    var cookiesSoldPerHour = document.createElement('ul');
    cookiesSoldPerHour.setAttribute('class', 'cookiesperhour');
    storename.appendChild(cookiesSoldPerHour);
    for (var i = 0; i < this.storeHours.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${this.storeHours[i]}: ${this.simulatedCookieAmount()[i]} cookies`;
      cookiesSoldPerHour.appendChild(li);
    }
    li.textContent = `Total: ${this.total()} cookies`;
    cookiesSoldPerHour.appendChild(li);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
