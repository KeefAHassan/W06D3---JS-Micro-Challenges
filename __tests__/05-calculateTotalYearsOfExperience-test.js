const calculateTotalYearsOfExperience = require('../05-calculateTotalYearsOfExperience.js');


test('Tony and Carla have a combined 14 years of experience', () => {
  let testEmployees = [
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 }
  ];

  expect(calculateTotalYearsOfExperience(testEmployees)).toBe(14);
});

