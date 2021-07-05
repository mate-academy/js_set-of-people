'use strict';

function setOfPeople(array) {
  const uniquePeopleSet = new Set();

  array.forEach(person => {
    if (uniquePeopleSet.has(person)) {
      uniquePeopleSet.delete(person);
    } else {
      uniquePeopleSet.add(person);
    }
  });

  return uniquePeopleSet;
}

module.exports = setOfPeople;
