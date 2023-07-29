'use-strict';

// Calculation of daily calorie requirement
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

/* Distribuzione giornaliera orientativa delle calorie:
15% delle calorie a colazione (non meno del 12-13% e non più del 20%)
05% delle calorie nello spuntino di metà mattina (non meno del 4% e non più dell'8-10%)
40% delle calorie nel pranzo (non meno del 35% ma assolutamente non più del 40%)
05% delle calorie nello spuntino di metà mattina (non meno del 4% e non più dell'8-10%)
35% delle calorie nella cena (non meno del 30% ma assolutamente non più del 35-40%) 
*/

// Variabili verdura
const lattugaCalorie = 21;
const lattugaCarboidrati = 3.5;
const lattugaProteine = 1.2;
const lattugaGrassi = 0.2;

const funghiCalorie = 21;
const funghiCarboidrati = 1.5;
const funghiProteine = 3;
const funghiGrassi = 0.3;

const patateCalorie = 82;
const patateCarboidrati = 18;
const patateProteine = 2;
const patateGrassi = 0.2;

// Variabili frutta
const meleCalorie = 46;
const meleCarboidrati = 11;
const meleProteine = 0.3;
const meleGrassi = 0.1;

const pereCalorie = 43;
const pereCarboidrati = 10;
const pereProteine = 0.4;
const pereGrassi = 0.1;

const bananeCalorie = 65;
const bananeCarboidrati = 14.5;
const bananeProteine = 1.1;
const bananeGrassi = 0.3;

// Variabili prosciutto, carne e pesce
const carneRossaCalorie = 316;
const carneRossaCarboidrati = 0.0;
const carneRossaProteine = 16;
const carneRossaGrassi = 28;

const carneBiancaCalorie = 120;
const carneBiancaCarboidrati = 0.0;
const carneBiancaProteine = 21;
const carneBiancaGrassi = 4;

const salmoneCalorie = 178;
const salmoneCarboidrati = 0.0;
const salmoneProteine = 22;
const salmoneGrassi = 10;

const sgombroCalorie = 178;
const sgombroCarboidrati = 0.0;
const sgombroProteine = 22;
const sgombroGrassi = 10;

const prosciuttoCrudoCalorie = 161;
const prosciuttoCrudoCarboidrati = 0.0;
const prosciuttoCrudoProteine = 29;
const prosciuttoCrudoGrassi = 5;

// Variabili latte, uova e formaggi
const latteInteroCalorie = 66;
const latteInteroCarboidrati = 5;
const latteInteroProteine = 3.2;
const latteInteroGrassi = 3.7;

const mozzarellaCalorie = 213;
const mozzarellaCarboidrati = 0.5;
const mozzarellaProteine = 20;
const mozzarellaGrassi = 14.5;

const yogurtInteroCalorie = 66;
const yogurtInteroCarboidrati = 5;
const yogurtInteroProteine = 3.2;
const yogurtInteroGrassi = 3.7;

const granaCalorie = 384;
const granaCarboidrati = 0.0;
const granaProteine = 33;
const granaGrassi = 28;

// Variabili frutta secca =
const mandorleCalorie = 604;
const mandorleCarboidrati = 4.6;
const mandorleProteine = 22;
const mandorleGrassi = 55.3;

const nociCalorie = 692;
const nociCarboidrati = 5.5;
const nociProteine = 14.3;
const nociGrassi = 68.1;

// Variabili colazione
const tazzinaCaffèCalorie = 2;
const tazzinaCaffèCarboidrati = 0;
const tazzinaCaffèProteine = 0.12;
const tazzinaCaffèGrassi = 68.1;

const cornFlakesCalorie = 365;
const cornFlakesCarboidrati = 87.11;
const cornFlakesProteine = 6.61;
const cornFlakesGrassi = 0.59;
