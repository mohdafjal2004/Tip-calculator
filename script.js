console.log("Hello World");

//Grabbing all the ids,inputs and buttons
const billTotalInput = document.getElementById("billTotalInput");
const TipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billTotalInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(TipInput.value) / 100;

  // get the total tip amount
  const tipAmount = bill * tipPercentage;

  // calculate the total (tip amount + bill)
  let total = bill + tipAmount;

  // calculate the per person total (total divided by number of people)
  const perHead = total / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = `$${perHead.toFixed(2)}`;

};

const increasePeople = () => {
  // increment the number of people
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople > 1) {
    // increment the number of people
    numberOfPeople -= 1;

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
  }
};
