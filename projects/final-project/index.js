'use-strict';

const userGender = prompt('Please enter your gender between male or female');
const userAge = parseFloat(prompt('Please enter your age'));
const userHeightInCm = parseFloat(
    prompt('Please enter the height in centimetres')
);
const userWeightInKg = parseFloat(prompt('Please enter your weight'));
const userPhisicalActivity = prompt(
    'Please enter the level of physical activity between one of these options: sedentary/light/moderate/heavy'
);
const userFood = prompt(
    'Please indicate your food preferences or food restrictions'
);

/* To calculate your daily calorie requirements, I will use the Mifflin-St.Jeor. equation, one of the most reliable formulas according to the American Dietetic Association*/

// Multiple ternary operator to store value in a variable
// I created a third condition in case the sex entered is wrong
// I used the Math.trunc() method to get calorie totals without decimals
const userDailyCalorie =
    userGender === 'female'
        ? alert(
              `The daily calorie requirement based on the data you entered is equal to: ${Math.trunc(
                  userWeightInKg * 10 +
                      userHeightInCm * 6.25 -
                      userAge * 5 -
                      161
              )} calories.
              In addition, your level of ohysical activity is: ${userPhisicalActivity}. 
              You have the following food preferences or food restrictions: ${userFood}.`
          )
        : userGender === 'male'
        ? alert(
              `The daily calorie requirement based on the data you entered is equal to: ${Math.trunc(
                  userWeightInKg * 10 + userHeightInCm * 6.25 - userAge * 5 + 5
              )} calories.
              In addition, your level of physical activity is: ${userPhisicalActivity}. 
              You have the following food preferences or food restrictions: ${userFood}.`
          )
        : alert(
              'It was not possible to calculate the daily calorie requirement, because the gender entered is incorrect. Please choose between male and female.'
          );
