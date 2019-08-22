'use strict';

function setOfPeople(array) {
  const onlyOdd = [];

  array.forEach(el => {
    let count = 0; array.forEach(compareEl => {
      if (el === compareEl) { count++; };
    });
    if (count % 2 !== 0) { onlyOdd.unshift(el); }
  });
  const enteredPeopleSet = new Set(onlyOdd);
  const enteredPeopleArray = [...enteredPeopleSet].reverse();

  return enteredPeopleArray;
}

module.exports = setOfPeople;
