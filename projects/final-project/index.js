/*
The goal of the project is to create a simple tool that allows users to obtain a personalized diet based on their needs and preferences, using only variables, strings and mathematical calculations without the use of conditional operators or other complex constructs.

- Ask the user for their gender (male/female) and store it in a variable.
- Ask the user for age and store it in a variable.
- Ask the user for the height in centimeters and store it in a variable.
- Ask the user for the weight in kilograms and store it in a variable.
- Ask the user for the level of physical activity (sedentary/light/moderate/heavy) and store it in a variable.
- Ask the user for any food preferences or restrictions and store them in a text variable.
- Using only mathematical calculations, calculate the user's daily calorie needs based on their gender, age, height and weight.
- Store the daily calorie requirement value in a numeric variable.

Meal plan generation:
- Create separate text variables for foods with their nutritional information (calories, proteins, carbohydrates, fats, etc.).
- Using mathematical calculations, calculate the amount of food to consume for each meal (breakfast, lunch, dinner, snacks) in a balanced way.
- Generate a text string that represents the daily food plan with details of the foods and their quantities.

### Meal plan view:
- Print the text string containing the generated food plan on the screen, showing the foods and the relative quantities for each meal.
- If you have provided food preferences or restrictions, adjust your meal plan accordingly.

### End of program:
- Show a closing and thank you message to the user.
*/

const prompt = require('prompt-sync')({sigint: true});

const gender = prompt('Indica cortesemente il tuo genere.\nDigita 0 per "Male" o 1 per "Female"! => ');
const age = prompt('Indica cortesemente la tua età: => ');
const height = prompt('Indica cortesemente la tua altezza (in cm): => ');
const weight = prompt('Indica cortesemente il tuo peso corporeo (in Kg): => ');
const physicalActivityLevel = prompt('Inserisci il tuo livello di attività fisica scegliendo tra le seguenti parole chiave: sedentary/light/moderate/heavy => ');
const foodRestraints = prompt('Hai delle preferenze di cibo o delle allergie/intolleranze da rendere note? => ');

const dailyCalorieNeeds = (gender * age) + (weight * (height / 10)) + 1000;
console.log('Il tuo fabbisogno calorico giornaliero è di: => ' + dailyCalorieNeeds);


const milkCalories = 64;
const yogurtCalories = 66;
const citrusfruitjuiceCalories = 33;
const jamCalories = 222;
const honeyCalories = 304;
const cookiesCalories = 420;
const briocheCalories = 358;

const wholeBreadCalories = 224;
const pastaCalories = 353;
const riceCalories = 332;
const potatoesCalories = 85;
const meatCalories = 127.7;
const fishCalories = 97.1;
const eggsCalories = 128;
const coldCutsCalories = 114.6;
const cheesesCalories = 271.33;
const fruitCalories = 35.39;
const vegetablesCalories = 20.13;
const legumesCalories = 295.7;
const peasCalories = 52;
const evoOilCalories = 899;
const butterCalories = 758;

const breakfastCalories = dailyCalorieNeeds * 0.5;
    console.log(breakfastCalories)
const lunchCalories = breakfastCalories * 0.5;
    console.log(lunchCalories)
const dinnerCalories = lunchCalories * 0.5;
    console.log(dinnerCalories)
const snacksCalories = lunchCalories * 0.5;
    console.log(snacksCalories)

let breakfastRemainingCalories = breakfastCalories - (yogurtCalories + cookiesCalories + briocheCalories);

const additionalAmountCookies = (breakfastRemainingCalories / cookiesCalories).toFixed(1);
    console.log(additionalAmountCookies);
const additionalCookiesCalories = additionalAmountCookies * cookiesCalories;

breakfastRemainingCalories = breakfastRemainingCalories - additionalCookiesCalories;

const additionalAmountBrioche = (breakfastRemainingCalories / briocheCalories).toFixed(1);
console.log(additionalAmountBrioche);
const additionalBriocheCalories = additionalAmountBrioche * briocheCalories;

breakfastRemainingCalories = breakfastRemainingCalories - additionalBriocheCalories;

