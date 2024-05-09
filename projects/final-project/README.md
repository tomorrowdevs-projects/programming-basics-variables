# **Personalized Diet Calculator** 

This project consists in the development of a personalized diet calculator which, based on the information provided by the user regarding their caloric needs and food preferences, automatically generates a balanced daily food plan.

## Objective:
The goal of the project is to create a simple tool that allows users to obtain a personalized diet based on their needs and preferences, using only variables, strings and mathematical calculations without the use of conditional operators or other complex constructs.

## Main features:

### Acquisition of user information:

- Ask the user for their gender (male/female) and store it in a variable.
- Ask the user for age and store it in a variable.
- Ask the user for the height in centimeters and store it in a variable.
- Ask the user for the weight in kilograms and store it in a variable.
- Ask the user for the level of physical activity (sedentary/light/moderate/heavy) and store it in a variable.
- Ask the user for any food preferences or restrictions and store them in a text variable.
- Calculation of daily calorie requirement:

- Using only mathematical calculations, calculate the ser'us daily calorie needs based on their gender, age, height and weight.
Store the daily calorie requirement value in a numeric variable.
Meal plan generation:

- Create separate text variables for foods with their nutritional information (calories, proteins, carbohydrates, fats, etc.).
- Using mathematical calculations, calculate the amount of food to consume for each meal (breakfast, lunch, dinner, snacks) in a balanced way.
- Generate a text string that represents the daily food plan with details of the foods and their quantities.

### Meal plan view:

- Print the text string containing the generated food plan on the screen, showing the foods and the relative quantities for each meal.
If you have provided food preferences or restrictions, adjust your meal plan accordingly.

### End of program:

Show a closing and thank you message to the user.

user_gender = input("Please enter your gender : male/female")
user_age = int(input("please enter your age"))
user_height = int(input("please enter your height in cm"))
user_weight = int(input("please enter your weight in kg"))
user_activity = input("please enter your level of activity: sedentary/light/moderate/heavy"))
user_preferences = input("Please enter any food preferences")
user_restrictions = input("Please enter any food restrictions")