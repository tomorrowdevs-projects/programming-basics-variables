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

vegetarian_foods = {

    "greek yogurt": {
        "quantity": "100g",
        "calories": 133,
        "proteins": 23,
        "carbohydrates": 9,
        "fats": 0.4
    }}

calorie_goal = int(user_calorie_need)

calories_per_100g = vegetarian_foods["greek yogurt"]["calories"]

quantity_of_yogurt = int(calorie_goal / calories_per_100g) * 100

print("to reach", calorie_goal, "kcal", "you should eat", quantity_of_yogurt, "grams of yogurt spread during your day")