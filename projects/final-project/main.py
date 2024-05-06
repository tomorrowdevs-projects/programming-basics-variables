# check if user enters a valid gender
def is_valid_gender(gender):
    gender = gender.lower()
    return gender == "male" or gender == "female"

user_gender = input("Please enter your gender (male or female): ")
if not is_valid_gender(user_gender):
    print("Please enter a valid gender (male or female)).")
    exit()
else:
    pass

user_age = int(input("please enter your age"))
user_height = int(input("please enter your height in cm"))
user_weight = int(input("please enter your weight in kg"))

# check if user enters a valid activity level
def is_valid_activity(activity):
    activity = activity.lower()
    return activity == "sedentary" or activity == "light" or activity == "moderate" or activity == "heavy"
user_activity = input("please enter your level of activity: sedentary/light/moderate/heavy").lower()
if not is_valid_activity(user_activity):
    print("please enter a valid level of activity")
    exit()
else:
    pass

user_preferences = input("Please enter any food prefernces")
user_restrictions = input("Please enter any food restrictions")

male_bmr = int(10 * user_weight + 6.25 * user_height - 5 * user_age + 5)
female_bmr = int(10 * user_weight + 6.25 * user_height - 5 * user_age - 161)

# find users BMR
if user_gender == "male":
    user_bmr = male_bmr
else:
    user_bmr = female_bmr

# find the users calorie need.
if user_activity == "sedentary":
    user_calorie_need = user_bmr * 1.2
elif user_activity == "light":
    user_calorie_need = user_bmr * 1.375
elif user_activity == "moderate":
    user_calorie_need = user_bmr * 1.55
elif user_activity == "heavy":
    user_calorie_need = user_bmr * 1.9

foods = {
    "Chicken Breast": {
        "quantity_g": 100,
        "calories": 165,
        "proteins_g": 31,
        "carbs_g": 0,
        "fats_g": 3.6,
        "type": "non-vegetarian"
    },
    "Egg": {
        "quantity_g": 100,
        "calories": 155,
        "proteins_g": 13,
        "carbs_g": 1.1,
        "fats_g": 11,
        "type": "vegetarian"
    },
    "Spinach": {
        "quantity_g": 100,
        "calories": 23,
        "proteins_g": 2.9,
        "carbs_g": 3.6,
        "fats_g": 0.4,
        "type": "vegetarian"
    },
    "Brown Rice": {
        "quantity_g": 100,
        "calories": 111,
        "proteins_g": 2.6,
        "carbs_g": 23,
        "fats_g": 0.9,
        "type": "vegetarian"
    },
    "Salmon": {
        "quantity_g": 100,
        "calories": 208,
        "proteins_g": 20,
        "carbs_g": 0,
        "fats_g": 13,
        "type": "non-vegetarian"
    },
    "Broccoli": {
        "quantity_g": 100,
        "calories": 34,
        "proteins_g": 2.8,
        "carbs_g": 6,
        "fats_g": 0.4,
        "type": "vegetarian"
    },
    "Greek Yogurt": {
        "quantity_g": 100,
        "calories": 59,
        "proteins_g": 10,
        "carbs_g": 3.6,
        "fats_g": 0.4,
        "type": "vegetarian"
    },
    "Tofu": {
        "quantity_g": 100,
        "calories": 76,
        "proteins_g": 8,
        "carbs_g": 1.9,
        "fats_g": 4.8,
        "type": "vegan"
    },
    "Almonds": {
        "quantity_g": 100,
        "calories": 579,
        "proteins_g": 21,
        "carbs_g": 22,
        "fats_g": 49,
        "type": "vegetarian"
    },
    "Black Beans": {
        "quantity_g": 100,
        "calories": 339,
        "proteins_g": 21,
        "carbs_g": 63,
        "fats_g": 1.4,
        "type": "vegetarian"
    }
}

calorie_goal = int(user_calorie_need)

import random

# Function to generate a diet plan with a random food item
def generate_diet(foods, calorie_goal):
    random_food = random.choice(list(foods.keys()))
    calories_per_100g = foods[random_food]["calories"]
    quantity_of_food = int(calorie_goal / calories_per_100g) * 100
    return random_food, quantity_of_food

# Check if user preferences are in the food list
preferred_foods = {}
for food, info in foods.items():
    if user_preferences.lower() in food.lower():
        preferred_foods[food] = info

# If user preferences are not in the food list, inform the user and proceed with a random food
if not preferred_foods:
    print("Sorry, one or more of your preferred foods are not in this diet. Proceeding with a random food.")
    random_food, quantity_of_food = generate_diet(foods, calorie_goal)
    print("To reach your daily calorie need you should eat: ")
    print(f"- {random_food}: {quantity_of_food} grams")
else:
    # Generate diet plan using preferred foods
    # Code to generate diet plan using preferred foods...
    pass

#FIlter foods
preferred_foods = {}
for food, info in foods.items():
    if user_preferences.lower() in food.lower():
        preferred_foods[food] = info

# calculate portions of preferred food
diet_plan = {}
for food, info in preferred_foods.items():
    calories_per_100g = info["calories"]
    quantity = int(calorie_goal / calories_per_100g) * 100
    diet_plan[food] = {"quantity": quantity, **info}
    
# Display
    print("To reach your daily calorie need you should eat: "), calorie_goal
    for food, info in diet_plan.items():
        print(f"- {food}: {info['quantity']} grams")