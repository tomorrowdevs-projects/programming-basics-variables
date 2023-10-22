let gender = prompt ('Are you male or female?');

let age = prompt ('How old are you?');

let height = prompt ('Insert your height in cm: ');

let weight = prompt ('Insert your weight in kg: ');

let physicalActivity = prompt ('Your level of physical activity is: sedentary, light, moderate or heavy?');

let foodPref = prompt ('Write here your food preferences, if you have any');

let foodRestr = prompt ('Write here your food restrictions, if you have any');

let dailyCalories = 0;

switch(physicalActivity) {
    case "sedentary" :
    physicalActivity=1.2;
    break;
    case "light" :
    physicalActivity=1.375;
    break;
    case "moderate" :
    physicalActivity=1.55;
    break;
    case "heavy" :
    physicalActivity=1.725;
    break;
    default:
    physicalActivity=1.2;
}
if (gender == 'male') {
    dailyCalories = physicalActivity * (10 * weight) + (6.25 * height) - (5 * age) + 5;
} else if (gender== 'female') {
    dailyCalories = physicalActivity * (10 * weight) + (6.25 * height) - (5 * age) - 161;
}


function breakfastFood () {
    let milk = {name: "milk", quantity: 100, calories: 42,proteins: 3.4, carbohydrates: 5, fats: 1};
        let beverage = [milk];
        
    let biscuits = {name: "biscuits", quantity: 100, calories: 353,proteins:7, carbohydrates:45, fats:16};
    let bread = {name: "bread", quantity: 100, calories: 265,proteins:9, carbohydrates:49, fats:3.2};
    let jam = {name: "jam", quantity: 100, calories: 246,proteins:0.3, carbohydrates:66, fats:0};
    let sweets = [biscuits,bread,jam];

    for (var i = 0; i < sweets.length; i++){
        if (sweets[0] == foodRestr){
            sweets.splice(i, 1);
        }
    }

    for (var i = 0; i < beverage.length; i++){
        if (beverage[0] == foodRestr){
            beverage.splice(i, 1);
        }
    }

    for (var i = 0; i < sweets.length; i++){
        if (sweets[0] == foodPref){
            sweets.push(foodPref);
        }
    }

    for (var i = 0; i < beverage.length; i++){
        if (beverage[0] == foodPref){
            beverage.push(foodPref);
        }
    }

    
    let breakfastKcal = dailyCalories * 0.25;

    let randomBeverage = (beverage[Math.floor(Math.random() * beverage.length)]);


    let randomSweets = (sweets[Math.floor(Math.random() * sweets.length)]);

    let beverageQuantity = (breakfastKcal*0.3)/randomBeverage.calories * randomBeverage.quantity;

    let sweetsQuantity = (breakfastKcal*0.7)/randomSweets.calories * randomSweets.quantity;
    
    console.log('Your breakfast is: ' + randomBeverage.name + ' ' + parseInt(beverageQuantity) + ' gr.' + ' and ' + randomSweets.name + ' ' + parseInt(sweetsQuantity) + ' gr.');

}

breakfastFood ();

function lunchFood () {
    let pasta = {name: "pasta", quantity: 100, calories: 131,proteins:5, carbohydrates:25, fats:1.1};
    let rice = {name: "rice",quantity: 100, calories: 130 ,proteins:2.7, carbohydrates:28, fats:0.3};
        let firstDish = [pasta,rice];

    let legumes = {name: "legumes", quantity: 100, calories: 116,proteins:9, carbohydrates:20, fats:0.4};
    let meat = {name: "meat",quantity: 100, calories: 143,proteins:26, carbohydrates:0, fats:3.5};
    let fish = {name: "fish", quantity: 100, calories: 206,proteins:22, carbohydrates:0, fats:12};
        let secondDish = [legumes, meat, fish];

    let vegetables = {name: "vegetables",quantity: 100, calories: 65,proteins:2.9, carbohydrates:13, fats:0.2};
        let sideDish = [vegetables];

    for (var i = 0; i < firstDish.length; i++){
        if (firstDish[0] == foodRestr){
            firstDish.splice(i, 1);
        }
    };
    
    for (var i = 0; i < secondDish.length; i++){
        if (secondDish[0] == foodRestr){
            secondDish.splice(i, 1);
        }
    };

    for (var i = 0; i < sideDish.length; i++){
        if (sideDish[0] == foodRestr){
            sideDish.splice(i, 1);
        }
    };
    
    for (var i = 0; i < firstDish.length; i++){
        if (firstDish[0] == foodPref){
            firstDish.push(foodPref);
        }
    };
    
    for (var i = 0; i < secondDish.length; i++){
        if (secondDish[0] == foodPref){
            secondDish.push(foodPref);
        }
    };

    for (var i = 0; i < sideDish.length; i++){
        if (sideDish[0] == foodPref){
            sideDish.push(foodPref);
        }
    };

    let lunchKcal = dailyCalories * 0.30;

    let randomfirstDish = (firstDish[Math.floor(Math.random() * firstDish.length)]);

    let randomsecondDish = (secondDish[Math.floor(Math.random() * secondDish.length)]);

    let randomsideDish = (sideDish[Math.floor(Math.random() * sideDish.length)]);

    let firstDishQuantity = (lunchKcal*0.3)/randomfirstDish.calories * randomfirstDish.quantity;

    let secondDishQuantity = (lunchKcal*0.7)/randomsecondDish.calories * randomsecondDish.quantity;

    let sideDishQuantity = (lunchKcal*0.7)/randomsideDish.calories * randomsideDish.quantity;
    
    console.log('Your lunch is: ' + randomfirstDish.name + ' ' + parseInt(firstDishQuantity) + ' gr.' + ', ' + randomsecondDish.name + ' ' + parseInt(secondDishQuantity) + ' gr.' + ' and ' + randomsideDish.name + ' ' + parseInt(sideDishQuantity) + ' gr.');


}

lunchFood ();

function snacksFood () {
    let apple = {name: "apple",quantity: 100, calories: 52,proteins: 0.3, carbohydrates: 14, fats: 0.2};
    let banana = {name: "banana",quantity: 100, calories: 89,proteins: 1.1, carbohydrates: 23, fats: 0.3};
    let orange = {name: "orange",quantity: 100, calories: 45,proteins: 0.7, carbohydrates: 10, fats: 0.2};
        let fruits = [apple, banana, orange];
    
    let peanuts = {name: "peanuts",quantity: 100, calories: 567,proteins:26, carbohydrates:16, fats:49};
    let walnuts = {name: "walnuts",quantity: 100, calories: 607,proteins:20, carbohydrates:21, fats:54};
    let almonds = {name: "almonds",quantity: 100, calories: 576,proteins:21, carbohydrates:22, fats:49};
        let driedFruits = [peanuts,walnuts,almonds];

    for (var i = 0; i < fruits.length; i++){
        if (fruits[0] == foodRestr){
            fruits.splice(i, 1);
        }
    }
    
    for (var i = 0; i < driedFruits.length; i++){
        if (driedFruits[0] == foodRestr){
            driedFruits.splice(i, 1);
        }
    }
    
    for (var i = 0; i < fruits.length; i++){
        if (fruits[0] == foodPref){
            fruits.push(foodPref);
        }
    }
    
    for (var i = 0; i < driedFruits.length; i++){
        if (driedFruits[0] == foodPref){
            driedFruits.push(foodPref);
        }
    }

    let snacksKcal = dailyCalories * 0.25;

    let randomfruits = (fruits[Math.floor(Math.random() * fruits.length)]);


    let randomDriedFruits = (driedFruits[Math.floor(Math.random() * driedFruits.length)]);

    let fruitsQuantity = (snacksKcal*0.3)/randomfruits.calories * randomfruits.quantity;

    let driedFruitsQuantity = (snacksKcal*0.7)/randomDriedFruits.calories * randomDriedFruits.quantity;



    console.log('Your snacks is: ' + randomfruits.name + ' ' + parseInt(fruitsQuantity) + ' gr.' + ' and ' + randomDriedFruits.name + ' ' + parseInt(driedFruitsQuantity) + ' gr.');
}

snacksFood ();

function dinnerFood () {
    let pasta = {name: "pasta",quantity: 100, calories: 131,proteins:5, carbohydrates:25, fats:1.1};
    let rice = {name: "rice",quantity: 100, calories: 130 ,proteins:2.7, carbohydrates:28, fats:0.3};
        let firstDish = [pasta,rice];

    let legumes = {name: "legumes",quantity: 100, calories: 116,proteins:9, carbohydrates:20, fats:0.4};
    let meat = {name: "meat",quantity: 100, calories: 143,proteins:26, carbohydrates:0, fats:3.5};
    let fish = {name: "fish",quantity: 100, calories: 206,proteins:22, carbohydrates:0, fats:12};
        let secondDish = [legumes, meat, fish];

    let vegetables = {name: "vegetables",quantity: 100, calories: 65,proteins:2.9, carbohydrates:13, fats:0.2};
        let sideDish = [vegetables];

    for (var i = 0; i < firstDish.length; i++){
        if (firstDish[0] == foodRestr){
            firstDish.splice(i, 1);
        }
    };
    
    for (var i = 0; i < secondDish.length; i++){
        if (secondDish[0] == foodRestr){
            secondDish.splice(i, 1);
        }
    };

    for (var i = 0; i < sideDish.length; i++){
        if (sideDish[0] == foodRestr){
            sideDish.splice(i, 1);
        }
    };
    
    for (var i = 0; i < firstDish.length; i++){
        if (firstDish[0] == foodPref){
            firstDish.push(foodPref);
        }
    };
    
    for (var i = 0; i < secondDish.length; i++){
        if (secondDish[0] == foodPref){
            secondDish.push(foodPref);
        }
    };

    for (var i = 0; i < sideDish.length; i++){
        if (sideDish[0] == foodPref){
            sideDish.push(foodPref);
        }
    };

    let dinnerKcal = dailyCalories * 0.30;

    let randomfirstDish = (firstDish[Math.floor(Math.random() * firstDish.length)]);

    let randomsecondDish = (secondDish[Math.floor(Math.random() * secondDish.length)]);

    let randomsideDish = (sideDish[Math.floor(Math.random() * sideDish.length)]);

    let firstDishQuantity = (dinnerKcal*0.3)/randomfirstDish.calories * randomfirstDish.quantity;

    let secondDishQuantity = (dinnerKcal*0.7)/randomsecondDish.calories * randomsecondDish.quantity;

    let sideDishQuantity = (dinnerKcal*0.7)/randomsideDish.calories * randomsideDish.quantity;
    
    console.log('Your dinner is: ' + randomfirstDish.name + ' ' + parseInt(firstDishQuantity) + ' gr.' + ', ' + randomsecondDish.name + ' ' + parseInt(secondDishQuantity) + ' gr.' + ' and ' + randomsideDish.name + ' ' + parseInt(sideDishQuantity) + ' gr.');


}

dinnerFood ();






