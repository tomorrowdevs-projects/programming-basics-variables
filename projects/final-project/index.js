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
// const userFood = prompt(
//     'Please indicate your food preferences or food restrictions'
// );

/* To calculate your daily calorie requirements, I will use the Mifflin-St.Jeor. equation, one of the most reliable formulas according to the American Dietetic Association*/

// I stored in variables the daily calorie totals according to the chosen gender
const dailyCalorieMan = Math.trunc(
    userWeightInKg * 10 + userHeightInCm * 6.25 - userAge * 5 + 5
);
const dailyCalorieWoman = Math.trunc(
    userWeightInKg * 10 + userHeightInCm * 6.25 - userAge * 5 - 161
);

// Multiple ternary operator to store value in a variable
// I created a third condition in case the sex entered is wrong
// I used the Math.trunc() method to get calorie totals without decimals
const userDailyCalorie =
    userGender === 'female'
        ? alert(
              `The daily calorie requirement based on the data you entered is equal to: ${dailyCalorieWoman} calories.
              In addition, your level of physical activity is: ${userPhisicalActivity.toUpperCase()}.`
          )
        : userGender === 'male'
        ? alert(
              `The daily calorie requirement based on the data you entered is equal to: ${dailyCalorieMan} calories.
              In addition, your level of physical activity is: ${userPhisicalActivity.toLocaleUpperCase()}.`
          )
        : alert(
              'It was not possible to calculate the daily calorie requirement, because the gender entered is incorrect. Please choose between male and female.'
          );

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

const granaCalorie = 380;
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

// Variabile pasta
const pastaCalorie = 371;
const pastaCarboidrati = 74.67;
const pastaProteine = 13.04;
const pastaGrassi = 1.51;

// I have stored in variables the daily distribution of calories for a woman
const dailyWCalBreakfast = Math.trunc((dailyCalorieWoman / 100) * 15);
const dailyWCalMidMorning = Math.trunc((dailyCalorieWoman / 100) * 5);
const dailyWCalLunch = Math.trunc((dailyCalorieWoman / 100) * 40);
const dailyWCalMidAfternoon = Math.trunc((dailyCalorieWoman / 100) * 5);
const dailyWCalDinner = Math.trunc((dailyCalorieWoman / 100) * 35);

// I have stored in variables the daily distribution of calories for a man
const dailyMCalBreakfast = Math.trunc((dailyCalorieMan / 100) * 15);
const dailyMCalMidMorning = Math.trunc((dailyCalorieMan / 100) * 5);
const dailyMCalLunch = Math.trunc((dailyCalorieMan / 100) * 40);
const dailyMCalMidAfternoon = Math.trunc((dailyCalorieMan / 100) * 5);
const dailyMCalDinner = Math.trunc((dailyCalorieMan / 100) * 35);

// Daily meal plan
/* Guideline daily distribution of calories
15% of calories at breakfast 
05% of calories in the mid-morning snack 
40% of calories at lunch ------> 40% of calories for lunch as follows: pasta 50%, parmesan 20%, ham 23% and lettuce 7% (100% of 40%)
05% of calories in the mid-morning snack (no less than 4% and no more than 8-10%)
35% of calories in dinner -----> 35% of calories at lunch divided as follows: 60, 30, 10 (100% of 35%)
*/
const dailyMeanPlan =
    userGender === 'female'
        ? alert(`
BREAKFAST:
1 Coffee cup (${tazzinaCaffèCalorie} calories)
Full-cream milk 100 ml (${latteInteroCalorie} calories)
Oat flakes ${Math.trunc(
              (dailyWCalBreakfast - tazzinaCaffèCalorie - latteInteroCalorie) /
                  (cornFlakesCalorie / 100)
          )} g (${Math.trunc(
              dailyWCalBreakfast - tazzinaCaffèCalorie - latteInteroCalorie
          )} calories);
MID-MORNING SNACK:
Almonds ${Math.trunc(
              dailyWCalMidMorning / (mandorleCalorie / 100)
          )} g (${Math.trunc(
              (dailyWCalMidMorning / (mandorleCalorie / 100)) *
                  (mandorleCalorie / 100)
          )} calories) or
Walnuts ${Math.trunc(
              dailyWCalMidMorning / (nociCalorie / 100)
          )} g (${Math.trunc(
              (dailyWCalMidMorning / (nociCalorie / 100)) * (nociCalorie / 100)
          )} calories)
LUNCH:
Pasta ${Math.trunc(dailyWCalLunch / 2 / (pastaCalorie / 100))} g (${Math.trunc(
              dailyWCalLunch / 2
          )} calories)
Parmesan Cheese ${Math.trunc(
              ((dailyWCalLunch / 100) * 20) / (granaCalorie / 100)
          )} g (${Math.trunc((dailyWCalLunch / 100) * 20)} calories)
Ham ${Math.trunc(
              ((dailyWCalLunch / 100) * 23) / (prosciuttoCrudoCalorie / 100)
          )} g (${Math.trunc((dailyWCalLunch / 100) * 23)} calories)
Lattuce ${Math.trunc(
              ((dailyWCalLunch / 100) * 7) / (lattugaCalorie / 100)
          )} g (${Math.trunc((dailyWCalLunch / 100) * 7)} calories)
MID-AFTERNOON-SNACK:
Apple ${Math.trunc(
              dailyWCalMidAfternoon / (meleCalorie / 100)
          )} g (${Math.trunc(
              (dailyWCalMidAfternoon / (meleCalorie / 100)) *
                  (meleCalorie / 100)
          )} calories) or
Pear ${Math.trunc(dailyWCalMidAfternoon / (pereCalorie / 100))} g (${Math.trunc(
              (dailyWCalMidAfternoon / (pereCalorie / 100)) *
                  (pereCalorie / 100)
          )} calories) or
Banana ${Math.trunc(
              dailyWCalMidAfternoon / (bananeCalorie / 100)
          )} g (${Math.trunc(
              (dailyWCalMidAfternoon / (bananeCalorie / 100)) *
                  (bananeCalorie / 100)
          )} calories)
DINNER:
Red meat ${Math.trunc(
              ((dailyWCalDinner / 100) * 60) / (carneRossaCalorie / 100)
          )} g (${Math.trunc((dailyWCalDinner / 100) * 60)} calories) or
White meat ${Math.trunc(
              ((dailyWCalDinner / 100) * 60) / (carneBiancaCalorie / 100)
          )} g (${Math.trunc((dailyWCalDinner / 100) * 60)} calories) or
Salmon ${Math.trunc(
              ((dailyWCalDinner / 100) * 60) / (salmoneCalorie / 100)
          )} g (${Math.trunc((dailyWCalDinner / 100) * 60)} calories) or 
Mackerel ${Math.trunc(
              ((dailyWCalDinner / 100) * 60) / (sgombroCalorie / 100)
          )} g (${Math.trunc((dailyWCalDinner / 100) * 60)} calories) with
Potatoes ${Math.trunc(
              ((dailyWCalDinner / 100) * 30) / (patateCalorie / 100)
          )} g (${Math.trunc((dailyWCalLunch / 100) * 30)} calories) and
Mushrooms ${Math.trunc(
              ((dailyWCalDinner / 100) * 10) / (funghiCalorie / 100)
          )} g (${Math.trunc((dailyWCalLunch / 100) * 10)} calories)
.`)
        : userGender === 'male'
        ? alert(`
BREAKFAST:
1 Coffee cup (${tazzinaCaffèCalorie} calories)
Full-cream milk 100 ml (${latteInteroCalorie} calories)
Oat flakes ${Math.trunc(
              (dailyMCalBreakfast - tazzinaCaffèCalorie - latteInteroCalorie) /
                  (cornFlakesCalorie / 100)
          )} g (${Math.trunc(
              dailyMCalBreakfast - tazzinaCaffèCalorie - latteInteroCalorie
          )} calories);
MID-MORNING SNACK:
Almonds ${Math.trunc(
              dailyMCalMidMorning / (mandorleCalorie / 100)
          )} g (${Math.trunc(
              (dailyMCalMidMorning / (mandorleCalorie / 100)) *
                  (mandorleCalorie / 100)
          )} calories) or
Walnuts ${Math.trunc(
              dailyMCalMidMorning / (nociCalorie / 100)
          )} g (${Math.trunc(
              (dailyMCalMidMorning / (nociCalorie / 100)) * (nociCalorie / 100)
          )} calories)
LUNCH:
Pasta ${Math.trunc(dailyMCalLunch / 2 / (pastaCalorie / 100))} g (${Math.trunc(
              dailyMCalLunch / 2
          )} calories)
Parmesan Cheese ${Math.trunc(
              ((dailyMCalLunch / 100) * 20) / (granaCalorie / 100)
          )} g (${Math.trunc((dailyMCalLunch / 100) * 20)} calories)
Ham ${Math.trunc(
              ((dailyMCalLunch / 100) * 23) / (prosciuttoCrudoCalorie / 100)
          )} g (${Math.trunc((dailyMCalLunch / 100) * 23)} calories)
Lattuce ${Math.trunc(
              ((dailyMCalLunch / 100) * 7) / (lattugaCalorie / 100)
          )} g (${Math.trunc((dailyMCalLunch / 100) * 7)} calories)
MID-AFTERNOON-SNACK:
Apple ${Math.trunc(
              dailyMCalMidAfternoon / (meleCalorie / 100)
          )} g (${Math.trunc(
              (dailyMCalMidAfternoon / (meleCalorie / 100)) *
                  (meleCalorie / 100)
          )} calories) or
Pear ${Math.trunc(dailyMCalMidAfternoon / (pereCalorie / 100))} g (${Math.trunc(
              (dailyMCalMidAfternoon / (pereCalorie / 100)) *
                  (pereCalorie / 100)
          )} calories) or
Banana ${Math.trunc(
              dailyMCalMidAfternoon / (bananeCalorie / 100)
          )} g (${Math.trunc(
              (dailyMCalMidAfternoon / (bananeCalorie / 100)) *
                  (bananeCalorie / 100)
          )} calories)
DINNER:
Red meat ${Math.trunc(
              ((dailyMCalDinner / 100) * 60) / (carneRossaCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 60)} calories) or
White meat ${Math.trunc(
              ((dailyMCalDinner / 100) * 60) / (carneBiancaCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 60)} calories) or
Salmon ${Math.trunc(
              ((dailyMCalDinner / 100) * 60) / (salmoneCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 60)} calories) or 
Mackerel ${Math.trunc(
              ((dailyMCalDinner / 100) * 60) / (sgombroCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 60)} calories) with
Potatoes ${Math.trunc(
              ((dailyMCalDinner / 100) * 30) / (patateCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 30)} calories) and
Mushrooms ${Math.trunc(
              ((dailyMCalDinner / 100) * 10) / (funghiCalorie / 100)
          )} g (${Math.trunc((dailyMCalDinner / 100) * 10)} calories).`)
        : alert(
              'It was not possible to calculate the daily calorie requirement, because the gender entered is incorrect. Please choose between male and female.'
          );

// I have created a variable with a recommendation based on the type of physical activity he performs
const userLifestyle =
    userPhisicalActivity === 'sedentary' || userPhisicalActivity === 'light'
        ? alert(
              'A diet alone cannot suffice. We advise you to practise sport and walk.'
          )
        : alert(
              'If you follow your diet strictly and continue to avoid sedentary activity, you will reach your goals and your fitness weight.'
          );

const foodTable =
    alert(`In addition to calories, the following table shows the amount of protein, carbohydrates and fat provided by each recommended food in 100 g:

Coffee cup: ${tazzinaCaffèCalorie} calories, ${tazzinaCaffèCarboidrati} carbohydrates, ${tazzinaCaffèProteine} proteins, ${tazzinaCaffèGrassi} fats;
Lattuce: ${lattugaCalorie} calories, ${lattugaCarboidrati} carbohydrates, ${lattugaProteine} proteins, ${lattugaGrassi} fats;
Mushrooms: ${funghiCalorie} calories, ${funghiCarboidrati} carbohydrates, ${funghiProteine} proteins, ${funghiGrassi} fats;
Potatoes: ${patateCalorie} calories, ${patateCarboidrati} carbohydrates, ${patateProteine} proteins, ${patateGrassi} fats;
Apple: ${meleCalorie} calories, ${meleCarboidrati} carbohydrates, ${meleProteine} proteins, ${meleGrassi} fats;
Pear: ${pereCalorie} calories, ${pereCarboidrati} carbohydrates, ${pereProteine} proteins, ${pereGrassi} fats;
Banana: ${bananeCalorie} calories, ${bananeCarboidrati} carbohydrates, ${bananeProteine} proteins, ${bananeGrassi} fats;
Red meat: ${carneRossaCalorie} calories, ${carneRossaCarboidrati} carbohydrates, ${carneRossaProteine} proteins, ${carneRossaGrassi} fats;
White meat: ${carneBiancaCalorie} calories, ${carneBiancaCarboidrati} carbohydrates, ${carneBiancaProteine} proteins, ${carneBiancaGrassi} fats;
Salmon: ${salmoneCalorie} calories, ${salmoneCarboidrati} carbohydrates, ${salmoneProteine} proteins, ${salmoneGrassi} fats;
Mackerel: ${sgombroCalorie} calories, ${sgombroCarboidrati} carbohydrates, ${sgombroProteine} proteins, ${sgombroGrassi} fats;
Ham: ${prosciuttoCrudoCalorie} calories, ${prosciuttoCrudoCarboidrati} carbohydrates, ${prosciuttoCrudoProteine} proteins, ${prosciuttoCrudoGrassi} fats;
Full-cream milk: ${latteInteroCalorie} calories, ${latteInteroCarboidrati} carbohydrates, ${latteInteroProteine} proteins, ${latteInteroGrassi} fats;
Parmesan Cheese: ${granaCalorie} calories, ${granaCarboidrati} carbohydrates, ${granaProteine} proteins, ${granaGrassi} fats;
Almonds: ${mandorleCalorie} calories, ${mandorleCarboidrati} carbohydrates, ${mandorleProteine} proteins, ${mandorleGrassi} fats;
Walnuts: ${nociCalorie} calories, ${nociCarboidrati} carbohydrates, ${nociProteine} proteins, ${nociGrassi} fats;
Oat flakes: ${cornFlakesCalorie} calories, ${cornFlakesCarboidrati} carbohydrates, ${cornFlakesProteine} proteins, ${cornFlakesGrassi} fats;
Pasta: ${pastaCalorie} calories, ${pastaCarboidrati} carbohydrates, ${pastaProteine} proteins, ${pastaGrassi} fats.`);

const messageOfThanks = alert(
    'Thank you for entrusting us with the opportunity to be part of your lifestyle change journey.'
);
