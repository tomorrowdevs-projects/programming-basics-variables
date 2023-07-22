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
console.log(dailyCalorieNeeds);

const breakfastCalories = dailyCalorieNeeds * 0,5;
const lunchCalories = breakfastCalories * 0,5;
const dinnerCalories = lunchCalories * 0,5;
const snacksCalories = lunchCalories * 0,5;