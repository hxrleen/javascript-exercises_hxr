const findTheOldest = function (people) {
  let oldestName = "";
  let maxAge = -1;

  for (let i = 0; i < people.length; i++) {
    const currentYear = new Date().getFullYear();
    const age = people[i].yearOfDeath
      ? people[i].yearOfDeath - people[i].yearOfBirth
      : currentYear - people[i].yearOfBirth;

    if (age > maxAge) {
      maxAge = age;
      oldestName = people[i].name;
    }
  }

  return { name: oldestName, age: maxAge };
};

// Do not edit below this line
module.exports = findTheOldest;
