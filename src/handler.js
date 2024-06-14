'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomnumber=parseInt(Math.random()*100);
  console.log("Random generated number is",randomnumber);
  return randomnumber;
};
