function getAge(person)
{
    if ("yearOfDeath" in person)
    {
        return person.yearOfDeath - person.yearOfBirth;
    }
    else
    {
        return (new Date()).getFullYear() - person.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let currentPersonAge = getAge(currentPerson);
        let oldestAge = getAge(oldestPerson);

        return (currentPersonAge > oldestAge) ? currentPerson : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
