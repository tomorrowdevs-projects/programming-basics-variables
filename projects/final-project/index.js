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

const prompt = require('prompt-sync')({sigint: true}); // Statement to add the node 'prompt-sync' module

// Prompt the user for the necessary personal information
const gender = prompt('Indica cortesemente il tuo genere.Digita 0 per "Male" o 1 per "Female"! => ');
const age = prompt('Indica cortesemente la tua età: => ');
const height = prompt('Indica cortesemente la tua altezza (in cm): => ');
const weight = prompt('Indica cortesemente il tuo peso corporeo (in Kg): => ');
const physicalActivityLevel = prompt('Inserisci il tuo livello di attività fisica scegliendo tra le seguenti parole chiave: sedentary/light/moderate/heavy => ');
const foodRestraints = prompt('Hai delle preferenze di cibo o delle allergie/intolleranze da rendere note? => ');

const dailyCalorieNeeds = (gender * age) + (weight * (height / 10)) + 1000; // This formula is only to be intended fot exercise scope, not for real medical calculations
console.log('\nIl tuo fabbisogno calorico giornaliero è di: => ' + dailyCalorieNeeds + '\n\nQui di seguito trovi la tua DIETA GIORNALIERA PERSONALIZZATA:');

//---- LIST OF FOODS ---- (All the nutritional information are relative to 100 g of products)
    
    // Calories are intended as Kcal values; Proteins, Fats and Carbohydrates are expressed in g.

//-- Breakfast foods     

const milkCalories = 64;
const milkProteins = 3.3;
const milkFats = 3.6;
const milkCarbohydrates = 4.9;

const yogurtCalories = 66;
const yogurtProteins = 3.8;
const yogurtFats = 3.9;
const yogurtCarbohydrates = 4.3;

const citrusfruitjuiceCalories = 33;
const citrusfruitjuiceProteins = 0.5;
const citrusfruitjuiceFats = 0;
const citrusfruitjuiceCarbohydrates = 8.2;

const jamCalories = 222;
const jamProteins = 0.5;
const jamFats = 0;
const jamCarbohydrates = 58.7;

const cookiesCalories = 420;
const cookiesProteins = 7;
const cookiesFats = 10;
const cookiesCarbohydrates = 80;

const briocheCalories = 358;
const briocheProteins = 8.3;
const briocheFats = 20;
const briocheCarbohydrates = 38;

//-- Lunch, dinner and snacks foods

const wholeBreadCalories = 224;
const wholeBreadProteins = 7.5;
const wholeBreadFats = 1.3;
const wholeBreadCarbohydrates = 48.5;

const pastaCalories = 353;
const pastaProteins = 10.9;
const pastaFats = 1.4;
const pastaCarbohydrates = 79.1;

const riceCalories = 332;
const riceProteins = 6.7;
const riceFats = 0.4;
const riceCarbohydrates = 80.4;

const potatoesCalories = 85;
const potatoesProteins = 2.1;
const potatoesFats = 1;
const potatoesCarbohydrates = 17.9;

const meatCalories = 127.7;
const meatProteins = 20.63;
const meatFats = 5.02;
const meatCarbohydrates = 0.06;

const fishCalories = 97.1;
const fishProteins = 16.67;
const fishFats = 2.89;
const fishCarbohydrates = 1.17;

const eggsCalories = 128;
const eggsProteins = 12.4;
const eggsFats = 8.7;
const eggsCarbohydrates = 0;

const coldCutsCalories = 144.6;
const coldCutsProteins = 27.56;
const coldCutsFats = 3.74;
const coldCutsCarbohydrates = 0.2;

const cheesesCalories = 271.33;
const cheesesProteins = 18.78;
const cheesesFats = 21.35;
const cheesesCarbohydrates = 1.05;

const fruitCalories = 35.39;
const fruitProteins = 0.68;
const fruitFats = 0.18;
const fruitCarbohydrates = 8.28;

const vegetablesCalories = 20.13;
const vegetablesProteins = 1.74;
const vegetablesFats = 0.2;
const vegetablesCarbohydrates = 3.01;

const legumesCalories = 295.7;
const legumesProteins = 22.09;
const legumesFats = 2;
const legumesCarbohydrates = 49.39;

const peasCalories = 52;
const peasProteins = 76;
const peasFats = 0.2;
const peasCarbohydrates = 12.4;

const evoOilCalories = 899;
const evoOilProteins = 0;
const evoOilFats = 99.9;
const evoOilCarbohydrates = 0;



//---- Calories needs for each meal ----
const breakfastCalories = dailyCalorieNeeds * 0.5;
    console.log('Calorie colazione ' + breakfastCalories)
const lunchCalories = breakfastCalories * 0.5;
    console.log('Calorie pranzo ' + lunchCalories)
const dinnerCalories = lunchCalories * 0.5;
    console.log('Calorie cena ' + dinnerCalories)
const snacksCalories = lunchCalories * 0.5;
    console.log('Calorie spuntini ' + snacksCalories)


//---------- Breakfast meal --------------

    // OPTION 1 
let breakfastRemainingCalories = breakfastCalories - (yogurtCalories + cookiesCalories + briocheCalories);

let additionalAmountCookies = (breakfastRemainingCalories / cookiesCalories);
let additionalCookiesCalories = additionalAmountCookies * cookiesCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalCookiesCalories;

let totalAmountCookies = ((additionalAmountCookies + 1) * 100).toFixed();

let additionalAmountBrioche = (breakfastRemainingCalories / briocheCalories);
let additionalBriocheCalories = additionalAmountBrioche * briocheCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalBriocheCalories;

let totalAmountBrioche = ((additionalAmountBrioche + 1) * 100).toFixed();

let additionalAmountYogurt = (breakfastRemainingCalories / yogurtCalories);
let additionalYogurtCalories = additionalAmountYogurt * yogurtCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalYogurtCalories;

let totalAmountYogurt = ((additionalAmountYogurt + 1) * 100).toFixed();

const breakfastOption1 = 
('\nOPZIONE 1\nYogurt => ' + totalAmountYogurt + ' g' +  ' di cui: proteine ' + (yogurtProteins * (additionalAmountYogurt + 1)).toFixed(2) + ' g;' + ' grassi ' + (yogurtFats * (additionalAmountYogurt + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (yogurtCarbohydrates * (additionalAmountYogurt + 1)).toFixed(2) + ' g' + 
'\nBiscotti => ' + totalAmountCookies + ' g' + ' di cui: proteine ' + (cookiesProteins * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' grassi ' + (cookiesFats * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (cookiesCarbohydrates * (additionalAmountCookies + 1)).toFixed(2)+ ' g' + 
'\nBrioche => ' + totalAmountBrioche + ' g' + ' di cui: proteine ' + (briocheProteins * (additionalAmountBrioche + 1)).toFixed(2) + ' g;' + ' grassi ' + (briocheFats * (additionalAmountBrioche + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (briocheCarbohydrates * (additionalAmountBrioche + 1)).toFixed(2) + ' g');


    // OPTION 2

breakfastRemainingCalories = breakfastCalories - (citrusfruitjuiceCalories + jamCalories + cookiesCalories);

additionalAmountCookies = (breakfastRemainingCalories / cookiesCalories);
additionalCookiesCalories = additionalAmountCookies * cookiesCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalCookiesCalories;

totalAmountCookies = ((additionalAmountCookies + 1) * 100).toFixed();

let additionalAmountJam = (breakfastRemainingCalories / jamCalories);
let additionalJamCalories = additionalAmountJam * jamCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalJamCalories;

let totalAmountJam = ((additionalAmountJam + 1) * 100).toFixed();

let additionalAmountCjuice = (breakfastRemainingCalories / citrusfruitjuiceCalories);
let additionalCjuiceCalories = additionalAmountCjuice * citrusfruitjuiceCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalCjuiceCalories;

let totalAmountCjuice = ((additionalAmountCjuice + 1) * 100).toFixed();

const breakfastOption2 = 
('\nOPZIONE 2\nSpremuta di arancia => ' + totalAmountCjuice + ' g' +  ' di cui: proteine ' + (citrusfruitjuiceProteins * (additionalAmountCjuice + 1)).toFixed(2) + ' g;' + ' grassi ' + (citrusfruitjuiceFats * (additionalAmountCjuice + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (citrusfruitjuiceCarbohydrates * (additionalAmountCjuice + 1)).toFixed(2) + ' g' + 
'\nBiscotti => ' + totalAmountCookies + ' g' + ' di cui: proteine ' + (cookiesProteins * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' grassi ' + (cookiesFats * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (cookiesCarbohydrates * (additionalAmountCookies + 1)).toFixed(2)+ ' g' + 
'\nMarmellata => ' + totalAmountJam + ' g' + ' di cui: proteine ' + (jamProteins * (additionalAmountJam + 1)).toFixed(2) + ' g;' + ' grassi ' + (jamFats * (additionalAmountJam + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (jamCarbohydrates * (additionalAmountJam + 1)).toFixed(2) + ' g');


    // OPTION 3

breakfastRemainingCalories = breakfastCalories - (milkCalories + cookiesCalories + briocheCalories);

additionalAmountCookies = (breakfastRemainingCalories / cookiesCalories);
additionalCookiesCalories = additionalAmountCookies * cookiesCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalCookiesCalories;

totalAmountCookies = ((additionalAmountCookies + 1) * 100).toFixed();


additionalAmountBrioche = (breakfastRemainingCalories / briocheCalories);
additionalBriocheCalories = additionalAmountBrioche * briocheCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalBriocheCalories;

totalAmountBrioche = ((additionalAmountBrioche + 1) * 100).toFixed();


let additionalAmountMilk = (breakfastRemainingCalories / milkCalories);
let additionalMilkCalories = additionalAmountMilk * milkCalories;
breakfastRemainingCalories = breakfastRemainingCalories - additionalMilkCalories;

let totalAmountMilk = ((additionalAmountMilk + 1) * 100).toFixed();

const breakfastOption3 =
('\nOPZIONE 3\nLatte intero => ' + totalAmountMilk + ' g' +  ' di cui: proteine ' + (milkProteins * (additionalAmountMilk + 1)).toFixed(2) + ' g;' + ' grassi ' + (milkFats * (additionalAmountMilk + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (milkCarbohydrates * (additionalAmountMilk + 1)).toFixed(2) + ' g' + 
'\nBiscotti => ' + totalAmountCookies + ' g' + ' di cui: proteine ' + (cookiesProteins * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' grassi ' + (cookiesFats * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (cookiesCarbohydrates * (additionalAmountCookies + 1)).toFixed(2)+ ' g' + 
'\nBrioche => ' + totalAmountBrioche + ' g' + ' di cui: proteine ' + (briocheProteins * (additionalAmountBrioche + 1)).toFixed(2) + ' g;' + ' grassi ' + (briocheFats * (additionalAmountBrioche + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (briocheCarbohydrates * (additionalAmountBrioche + 1)).toFixed(2) + ' g');

console.log('\nIn base al tuo fabbisogno calorico giornaliero, ecco 3 diversi tipi di colazione suggerite:\n' + breakfastOption1 + '\n' + breakfastOption2 + '\n' + breakfastOption3);


//---------- Lunch meal --------------

    // OPTION 1 
let lunchRemainingCalories = lunchCalories - (pastaCalories + meatCalories + fruitCalories);

let additionalAmountPasta = (lunchRemainingCalories / pastaCalories);
let additionalPastaCalories = additionalAmountPasta * pastaCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalPastaCalories;

let totalAmountPasta = ((additionalAmountPasta + 1) * 100).toFixed();

let additionalAmountMeat = (lunchRemainingCalories / meatCalories);
let additionalMeatCalories = additionalAmountMeat * meatCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalMeatCalories;

let totalAmountMeat = ((additionalAmountMeat + 1) * 100).toFixed();

let additionalAmountFruit = (lunchRemainingCalories / fruitCalories);
let additionalFruitCalories = additionalAmountFruit * fruitCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalFruitCalories;

let totalAmountFruit = ((additionalAmountFruit + 1) * 100).toFixed();

const lunchOption1 =
('\nOPZIONE 1\nPasta => ' + totalAmountPasta + ' g' +  ' di cui: proteine ' + (pastaProteins * (additionalAmountPasta + 1)).toFixed(2) + ' g;' + ' grassi ' + (pastaFats * (additionalAmountPasta + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (pastaCarbohydrates * (additionalAmountPasta + 1)).toFixed(2) + ' g' + 
'\nCarne => ' + totalAmountMeat + ' g' + ' di cui: proteine ' + (meatProteins * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' grassi ' + (meatFats * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (meatCarbohydrates * (additionalAmountCookies + 1)).toFixed(2)+ ' g' + 
'\nFrutta => ' + totalAmountFruit + ' g' + ' di cui: proteine ' + (fruitProteins * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' grassi ' + (fruitFats * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (fruitCarbohydrates * (additionalAmountFruit + 1)).toFixed(2) + ' g');


    // OPTION 2

lunchRemainingCalories = lunchCalories - (riceCalories + vegetablesCalories + evoOilCalories);

let additionalAmountOil = (lunchRemainingCalories / evoOilCalories);
let additionalOilCalories = additionalAmountOil * evoOilCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalOilCalories;

let totalAmountOil = ((additionalAmountOil + 1) * 100).toFixed();

let additionalAmountRice = (lunchRemainingCalories / riceCalories);
let additionalRiceCalories = additionalAmountRice * riceCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalRiceCalories;

let totalAmountRice = ((additionalAmountRice + 1) * 100).toFixed();

let additionalAmountVegetables = (lunchRemainingCalories / vegetablesCalories);
let additionalVegetablesCalories = additionalAmountVegetables * vegetablesCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalVegetablesCalories;

let totalAmountVegetables = ((additionalAmountVegetables + 1) * 100).toFixed();

const lunchOption2 =
('\nOPZIONE 2\nRiso => ' + totalAmountRice + ' g' +  ' di cui: proteine ' + (riceProteins * (additionalAmountRice + 1)).toFixed(2) + ' g;' + ' grassi ' + (riceFats * (additionalAmountRice + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (riceCarbohydrates * (additionalAmountRice + 1)).toFixed(2) + ' g' + 
'\nVerdure => ' + totalAmountVegetables + ' g' + ' di cui: proteine ' + (vegetablesProteins * (additionalAmountVegetables + 1)).toFixed(2) + ' g;' + ' grassi ' + (vegetablesFats * (additionalAmountVegetables + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (vegetablesCarbohydrates * (additionalAmountVegetables + 1)).toFixed(2)+ ' g' + 
'\nOlio Evo => ' + totalAmountOil + ' g' + ' di cui: proteine ' + (evoOilProteins * (additionalAmountOil + 1)).toFixed(2) + ' g;' + ' grassi ' + (evoOilFats * (additionalAmountOil + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (evoOilCarbohydrates * (additionalAmountOil + 1)).toFixed(2) + ' g');


    // OPTION 3

lunchRemainingCalories = lunchCalories - (coldCutsCalories + legumesCalories + fruitCalories);

let additionalAmountLegumes = (lunchRemainingCalories / legumesCalories);
let additionalLegumesCalories = additionalAmountLegumes * legumesCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalLegumesCalories;

let totalAmountLegumes = ((additionalAmountLegumes + 1) * 100).toFixed();

let additionalAmountCuts = (lunchRemainingCalories / coldCutsCalories);
let additionalCutsCalories = additionalAmountCuts * coldCutsCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalCutsCalories;

let totalAmountCuts = ((additionalAmountCuts + 1) * 100).toFixed();

additionalAmountFruit = (lunchRemainingCalories / fruitCalories);
additionalFruitCalories = additionalAmountFruit * fruitCalories;
lunchRemainingCalories = lunchRemainingCalories - additionalFruitCalories;

totalAmountFruit = ((additionalAmountFruit + 1) * 100).toFixed();

const lunchOption3 =
('\nOPZIONE 3\nSalumi => ' + totalAmountCuts + ' g' +  ' di cui: proteine ' + (coldCutsProteins * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' grassi ' + (coldCutsFats * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (coldCutsCarbohydrates * (additionalAmountCuts + 1)).toFixed(2) + ' g' + 
'\nLegumi => ' + totalAmountLegumes + ' g' + ' di cui: proteine ' + (legumesProteins * (additionalAmountLegumes + 1)).toFixed(2) + ' g;' + ' grassi ' + (legumesFats * (additionalAmountLegumes + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (legumesCarbohydrates * (additionalAmountLegumes + 1)).toFixed(2)+ ' g' + 
'\nFrutta => ' + totalAmountFruit + ' g' + ' di cui: proteine ' + (fruitProteins * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' grassi ' + (fruitFats * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (fruitCarbohydrates * (additionalAmountFruit + 1)).toFixed(2) + ' g');

console.log('\nIn base al tuo fabbisogno calorico giornaliero, ecco 3 diversi tipi di pranzo suggeriti:\n' + lunchOption1 + '\n' + lunchOption2 + '\n' + lunchOption3);


//---------- Snacks meal --------------

    // OPTION 1 
let snacksRemainingCalories = snacksCalories - (wholeBreadCalories + fruitCalories + coldCutsCalories);

let additionalAmountBread = (snacksRemainingCalories / wholeBreadCalories);
let additionalBreadCalories = additionalAmountBread * wholeBreadCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalBreadCalories;

let totalAmountBread = ((additionalAmountBread + 1) * 100).toFixed();

additionalAmountCuts = (snacksRemainingCalories / coldCutsCalories);
additionalCutsCalories = additionalAmountCuts * coldCutsCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalCutsCalories;

totalAmountCuts = ((additionalAmountCuts + 1) * 100).toFixed();

additionalAmountFruit = (snacksRemainingCalories / fruitCalories);
additionalFruitCalories = additionalAmountFruit * fruitCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalFruitCalories;

totalAmountFruit = ((additionalAmountFruit + 1) * 100).toFixed();

const snacksOption1 =
('\nOPZIONE 1\nPane => ' + totalAmountBread + ' g' + ' di cui: proteine ' + (wholeBreadProteins * (additionalAmountBread + 1)).toFixed(2) + ' g;' + ' grassi ' + (wholeBreadFats * (additionalAmountBread + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (wholeBreadCarbohydrates * (additionalAmountBread + 1)).toFixed(2) + ' g'+ '\nSalumi => ' + totalAmountCuts + ' g' +  ' di cui: proteine ' + (coldCutsProteins * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' grassi ' + (coldCutsFats * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (coldCutsCarbohydrates * (additionalAmountCuts + 1)).toFixed(2) + ' g' + 
'\nFrutta => ' + totalAmountFruit + ' g' + ' di cui: proteine ' + (fruitProteins * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' grassi ' + (fruitFats * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (fruitCarbohydrates * (additionalAmountFruit + 1)).toFixed(2) + ' g');


    // OPTION 2

snacksRemainingCalories = snacksCalories - (eggsCalories + cheesesCalories + fruitCalories);

let additionalAmountCheeses = (snacksRemainingCalories / cheesesCalories);
let additionalCheesesCalories = additionalAmountCheeses * cheesesCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalCheesesCalories;

let totalAmountCheeses = ((additionalAmountCheeses + 1) * 100).toFixed();

let additionalAmountEggs = (snacksRemainingCalories / eggsCalories);
let additionalEggsCalories = additionalAmountEggs * eggsCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalEggsCalories;

let totalAmountEggs = ((additionalAmountEggs + 1) * 100).toFixed();

additionalAmountFruit = (snacksRemainingCalories / fruitCalories);
additionalFruitCalories = additionalAmountFruit * fruitCalories;
snacksRemainingCalories = snacksRemainingCalories - additionalFruitCalories;

totalAmountFruit = ((additionalAmountFruit + 1) * 100).toFixed();

const snacksOption2 =
('\nOPZIONE 2\nUova => ' + totalAmountEggs + ' g' + ' di cui: proteine ' + (eggsProteins * (additionalAmountEggs + 1)).toFixed(2) + ' g;' + ' grassi ' + (eggsFats * (additionalAmountEggs + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (eggsCarbohydrates * (additionalAmountEggs + 1)).toFixed(2) + ' g' + 
'\nFormaggio => ' + totalAmountCheeses + ' g' +  ' di cui: proteine ' + (cheesesProteins * (additionalAmountCheeses + 1)).toFixed(2) + ' g;' + ' grassi ' + (cheesesFats * (additionalAmountCheeses + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (cheesesCarbohydrates * (additionalAmountCheeses + 1)).toFixed(2) + ' g' + 
'\nFrutta => ' + totalAmountFruit + ' g' + ' di cui: proteine ' + (fruitProteins * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' grassi ' + (fruitFats * (additionalAmountFruit + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (fruitCarbohydrates * (additionalAmountFruit + 1)).toFixed(2) + ' g');

console.log('\nIn base al tuo fabbisogno calorico giornaliero, ecco 2 diversi tipi di spuntini suggeriti:\n' + snacksOption1 + '\n' + snacksOption2);


//---------- Dinner meal --------------

    // OPTION 1 
let dinnerRemainingCalories = dinnerCalories - (fishCalories + potatoesCalories + evoOilCalories);

additionalAmountOil = (dinnerRemainingCalories / evoOilCalories);
additionalOilCalories = additionalAmountOil * evoOilCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalOilCalories;

totalAmountOil = ((additionalAmountOil + 1) * 100).toFixed();

let additionalAmountFish = (dinnerRemainingCalories / fishCalories);
let additionalFishCalories = additionalAmountFish * fishCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalFishCalories;

let totalAmountFish = ((additionalAmountFish + 1) * 100).toFixed();

let additionalAmountPotatoes = (dinnerRemainingCalories / potatoesCalories);
let additionalPotatoesCalories = additionalAmountPotatoes * potatoesCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalPotatoesCalories;

let totalAmountPotatoes = ((additionalAmountPotatoes + 1) * 100).toFixed();

const dinnerOption1 =
('\nOPZIONE 1\nPesce => ' + totalAmountFish + ' g' + ' di cui: proteine ' + (fishProteins * (additionalAmountFish + 1)).toFixed(2) + ' g;' + ' grassi ' + (fishFats * (additionalAmountFish + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (fishCarbohydrates * (additionalAmountFish + 1)).toFixed(2) + ' g' + 
'\nPatate => ' + totalAmountPotatoes + ' g' +  ' di cui: proteine ' + (potatoesProteins * (additionalAmountPotatoes + 1)).toFixed(2) + ' g;' + ' grassi ' + (potatoesFats * (additionalAmountPotatoes + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (potatoesCarbohydrates * (additionalAmountPotatoes + 1)).toFixed(2) + ' g' + 
'\nOlio Evo => ' + totalAmountOil + ' g' + ' di cui: proteine ' + (evoOilProteins * (additionalAmountOil + 1)).toFixed(2) + ' g;' + ' grassi ' + (evoOilFats * (additionalAmountOil + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (evoOilCarbohydrates * (additionalAmountOil + 1)).toFixed(2) + ' g');


    // OPTION 2

dinnerRemainingCalories = dinnerCalories - (meatCalories + vegetablesCalories + peasCalories);

additionalAmountMeat = (dinnerRemainingCalories / meatCalories);
additionalMeatCalories = additionalAmountMeat * meatCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalMeatCalories;

totalAmountMeat = ((additionalAmountMeat + 1) * 100).toFixed();

let additionalAmountPeas = (dinnerRemainingCalories / peasCalories);
let additionalPeasCalories = additionalAmountPeas * peasCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalPeasCalories;

let totalAmountPeas = ((additionalAmountPeas + 1) * 100).toFixed();

additionalAmountVegetables = (dinnerRemainingCalories / vegetablesCalories);
additionalVegetablesCalories = additionalAmountVegetables * vegetablesCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalVegetablesCalories;

totalAmountVegetables = ((additionalAmountVegetables + 1) * 100).toFixed();

const dinnerOption2 =
('\nOPZIONE 2\nCarne => ' + totalAmountMeat + ' g' + ' di cui: proteine ' + (meatProteins * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' grassi ' + (meatFats * (additionalAmountCookies + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (meatCarbohydrates * (additionalAmountCookies + 1)).toFixed(2)+ ' g' +  
'\nVerdure => ' + totalAmountVegetables + ' g' + ' di cui: proteine ' + (vegetablesProteins * (additionalAmountVegetables + 1)).toFixed(2) + ' g;' + ' grassi ' + (vegetablesFats * (additionalAmountVegetables + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (vegetablesCarbohydrates * (additionalAmountVegetables + 1)).toFixed(2)+ ' g' + 
'\nPiselli => ' + totalAmountPeas + ' g' + ' di cui: proteine ' + (peasProteins * (additionalAmountPeas + 1)).toFixed(2) + ' g;' + ' grassi ' + (peasFats * (additionalAmountPeas + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (peasCarbohydrates * (additionalAmountPeas + 1)).toFixed(2) + ' g');

    // OPTION 3

dinnerRemainingCalories = dinnerCalories - (eggsCalories + coldCutsCalories + wholeBreadCalories);

additionalAmountBread = (dinnerRemainingCalories / wholeBreadCalories);
additionalBreadCalories = additionalAmountBread * wholeBreadCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalBreadCalories;

totalAmountBread = ((additionalAmountBread + 1) * 100).toFixed();

additionalAmountCuts = (dinnerRemainingCalories / coldCutsCalories);
additionalCutsCalories = additionalAmountCuts * coldCutsCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalCutsCalories;

totalAmountCuts = ((additionalAmountCuts + 1) * 100).toFixed();

additionalAmountEggs = (dinnerRemainingCalories / eggsCalories);
additionalEggsCalories = additionalAmountEggs * eggsCalories;
dinnerRemainingCalories = dinnerRemainingCalories - additionalEggsCalories;

totalAmountEggs = ((additionalAmountEggs + 1) * 100).toFixed();

const dinnerOption3 =
('\nOPZIONE 3\nUova => ' + totalAmountEggs + ' g' + ' di cui: proteine ' + (eggsProteins * (additionalAmountEggs + 1)).toFixed(2) + ' g;' + ' grassi ' + (eggsFats * (additionalAmountEggs + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (eggsCarbohydrates * (additionalAmountEggs + 1)).toFixed(2) + ' g' + 
'\nSalumi => ' + totalAmountCuts + ' g' +  ' di cui: proteine ' + (coldCutsProteins * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' grassi ' + (coldCutsFats * (additionalAmountCuts + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (coldCutsCarbohydrates * (additionalAmountCuts + 1)).toFixed(2) + ' g' +
'\nPane => ' + totalAmountBread + ' g' + ' di cui: proteine ' + (wholeBreadProteins * (additionalAmountBread + 1)).toFixed(2) + ' g;' + ' grassi ' + (wholeBreadFats * (additionalAmountBread + 1)).toFixed(2) + ' g;' + ' carboidrati ' + (wholeBreadCarbohydrates * (additionalAmountBread + 1)).toFixed(2) + ' g');

console.log('\nIn base al tuo fabbisogno calorico giornaliero, ecco 3 diversi tipi di cena suggerite:\n' + dinnerOption1 + '\n' + dinnerOption2 + '\n' + dinnerOption3);

console.log('\nGrazie per aver utilizzato il nostro programma! Le informazioni da noi suggerite sono al solo scopo dimostrativo della funzionalità del programma stesso!')