'use strict';

function setOfPeople(people) {
  const peopleInRoom = new Set();

  people.forEach(person => {
    if (peopleInRoom.has(person)) {
      peopleInRoom.delete(person);
    } else {
      peopleInRoom.add(person);
    }
  });

  return peopleInRoom;
}

module.exports = setOfPeople;
