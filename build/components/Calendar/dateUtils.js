function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import addDays from "date-fns/add_days";

export var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

export var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function chunkArray(arr, chunk_size) {
  var results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunk_size));
  }

  return results;
}

function getCalMonthDays(month, year) {
  var calDays = [];
  var monthFirst = new Date(year, month, 1);
  var monthEnd = new Date(year, month + 1, 0);
  var start = monthFirst.getDay() > 0 ? new Date(year, month, 0 - (monthFirst.getDay() - 1)) : monthFirst;
  var end = monthEnd.getDay() != 6 ? new Date(year, month + 1, 6 - monthEnd.getDay()) : monthEnd;

  var currentDate = start;

  while (currentDate <= end) {
    calDays = [].concat(_toConsumableArray(calDays), [currentDate]);
    currentDate = addDays(currentDate, 1);
  }
  return calDays;
}

export var getCalendarWeeks = function getCalendarWeeks(year, month) {
  return chunkArray(getCalMonthDays(month, year), 7);
};