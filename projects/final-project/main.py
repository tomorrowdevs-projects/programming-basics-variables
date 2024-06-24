#CALCULATION OF DAILY CALORIE REQUIREMENT
import math
gender=input("Enter your gender (male/female):")
age=int(input("Enter your age:"))
height=float(input("Enter your height in centimeters:"))
weight=float(input("Enter your weight in kilograms:"))
activity_level=input("Enter your level of physical activity (sedentary/light/moderate/heavy):")

if gender=="female":
    bmr=655.1+(9.6*weight)+(1.9*height)-(4.7*age)
else:
    bmr=66.5+(13.7*weight)+(5*height)-(6.7*age)
    
if activity_level=="sedentary":
    daily_calories=bmr*1.2
elif activity_level=="light":
    daily_calories=bmr*1.375
elif activity_level=="moderate":
    daily_calories=bmr*1.55
else:
    daily_calories=bmr*1.725

#MEAL PLAN GENERATION
#Breakfast food list with nutritional information in 100 gr
skim_milk_calories="34 Kcal"
skim_milk_carbohydrates="4.9 gr"
skim_milk_proteins="3.3 gr"
skim_milk_fats="0 gr"
portion_skim_milk=f"{math.ceil((daily_calories*250)/2000)} gr skim milk"

corn_flakes_calories="371 Kcal"
corn_flakes_carbohydrates="81 gr"
corn_flakes_proteins="8.0 gr"
corn_flakes_fats="1.0 gr"
portion_corn_flakes=f"{math.ceil((daily_calories*40)/2000)} gr corn flakes"

greek_yogurt_calories="96 Kcal"
greek_yogurt_carbohydrates="3.8 gr"
greek_yogurt_proteins="9 gr"
greek_yogurt_fats="5 gr"
portion_greek_yogurt=f"{math.ceil((daily_calories*150)/2000)} gr greek yogurt"

orosaiwa_calories="433 Kcal"
orosaiwa_carbohydrates="77 gr"
orosaiwa_proteins="8.5 gr"
orosaiwa_fats="9.3 gr"
portion_orosaiwa=f"{math.ceil((daily_calories*30)/2000)} gr oro saiwa"

breakfast_preference=input("Enter your breakfast preference:")
breakfast_restriction=input("Enter your breakfast restriction:") 

if breakfast_preference=="greek yogurt":
    portion_skim_milk=portion_greek_yogurt
if breakfast_preference=="oro saiwa":
    portion_corn_flakes=portion_orosaiwa
if breakfast_restriction=="skim milk":
    portion_skim_milk=portion_greek_yogurt
if breakfast_restriction=="corn flakes":
    portion_corn_flakes=portion_orosaiwa
    
breakfast= f"Breakfast: {portion_skim_milk} + {portion_corn_flakes}"

#Lunch food list with nutritional information in 100 gr 
pasta_calories="351 Kcal"
pasta_carbohydrates="70 gr"    
pasta_proteins="14 gr"
pasta_fats="1 gr"
portion_pasta=f"{math.ceil((daily_calories*80)/2000)} gr pasta"

rice_calories="358 Kcal"
rice_carbohydrates="79 gr"    
rice_proteins="6.5 gr"
rice_fats="0.5 gr"
portion_rice=f"{math.ceil((daily_calories*80)/2000)} gr rice"

lentils_calories="353 Kcal"
lentils_carbohydrates="60 gr"  
lentils_proteins="26 gr"
lentils_fats="1 gr"
portion_lentils=f"{math.ceil((daily_calories*120)/2000)} gr lentils"

beans_calories="291 Kcal"
beans_carbohydrates="47.5 gr"  
beans_proteins="20.2 gr"
beans_fats="2 gr"
portion_beans=f"{math.ceil((daily_calories*120)/2000)} gr beans"

peas_calories="81 Kcal"
peas_carbohydrates="14.4 gr"  
peas_proteins="5.4 gr"
peas_fats="0.4 gr"
portion_peas=f"{math.ceil((daily_calories*120)/2000)} gr peas"

spinach_calories="23 Kcal"
spinach_carbohydrates="3.6 gr"  
spinach_proteins="2.9 gr"
spinach_fats="0.4 gr"
portion_spinach=f"{math.ceil((daily_calories*150)/2000)} gr spinach"

tomatoes_calories="20 Kcal"
tomatoes_carbohydrates="3.5 gr"  
tomatoes_proteins="0.8 gr"
tomatoes_fats="0.2 gr"
portion_tomatoes=f"{math.ceil((daily_calories*150)/2000)} gr tomatoes"
		
zucchini_calories="21 Kcal"
zucchini_carbohydrates="3.1 gr"  
zucchini_proteins="2.7 gr"
zucchini_fats="0.4 gr"
portion_zucchini=f"{math.ceil((daily_calories*150)/2000)} gr zucchini"

olive_oil_calories="884 Kcal"
olive_oil_carbohydrates="0 gr"  
olive_oil_proteins="0 gr"
olive_oil_fats="100 gr"
portion_olive_oil=f"{math.ceil((daily_calories*10)/2000)} gr olive oil"

lunch_preference=input("Enter your lunch preference:")
lunch_restriction=input("Enter your lunch restriction:") 

if lunch_preference=="rice":
    portion_pasta=portion_rice
if lunch_preference=="peas":
    portion_lentils=portion_peas
if lunch_preference=="tomatoes":
    portion_spinach=portion_tomatoes
if lunch_restriction=="lentils":
    portion_lentils=portion_beans
if lunch_restriction=="spinach":
    portion_spinach=portion_zucchini

lunch= f"Lunch: {portion_pasta} + {portion_lentils} + {portion_spinach} + {portion_olive_oil}"

#Dinner food list with nutritional information in 100 gr
bread_calories="271 Kcal"
bread_carbohydrates="50 gr"  
bread_proteins="8.8 gr"
bread_fats="3.5 gr"
portion_bread=f"{math.ceil((daily_calories*60)/2000)} gr bread"

potatoes_calories="80 Kcal"
potatoes_carbohydrates="17.5 gr"  
potatoes_proteins="2 gr"
potatoes_fats="0 gr"
portion_potatoes=f"{math.ceil((daily_calories*200)/2000)} gr potatoes"

cottage_cheese_calories="87 Kcal"
cottage_cheese_carbohydrates="2.6 gr"  
cottage_cheese_proteins="12.9 gr"
cottage_cheese_fats="2.5 gr"
portion_cottage_cheese=f"{math.ceil((daily_calories*200)/2000)} gr cottage cheese"

chicken_breast_calories="100 Kcal"
chicken_breast_carbohydrates="0 gr"  
chicken_breast_proteins="23.3 gr"
chicken_breast_fats="0.8 gr"
portion_chicken_breast=f"{math.ceil((daily_calories*200)/2000)} gr chicken breast"

eggs_calories="143 Kcal"
eggs_carbohydrates="0.7 gr"  
eggs_proteins="12.6 gr"
eggs_fats="9.5 gr"
portion_eggs=f"{math.ceil((daily_calories*120)/2000)} gr eggs"

broccoli_calories="34 Kcal"
broccoli_carbohydrates="6.6 gr"  
broccoli_proteins="2.8 gr"
broccoli_fats="0.4 gr"
portion_broccoli=f"{math.ceil((daily_calories*150)/2000)} gr broccoli"

dinner_preference=input("Enter your dinner preference:")
dinner_restriction=input("Enter your dinner restriction:") 

if dinner_preference=="potatoes":
    portion_bread=portion_potatoes
if dinner_preference=="eggs":
    portion_cottage_cheese=portion_eggs
if dinner_restriction=="cottage cheese":
    portion_cottage_cheese=portion_chicken_breast

dinner= f"Dinner: {portion_bread} + {portion_cottage_cheese} + {portion_broccoli} + {portion_olive_oil}"

#Snacks food list with nutritional information in 100 gr
apples_calories="52 Kcal"
apples_carbohydrates="13.8 gr"  
apples_proteins="0.3 gr"
apples_fats="0.2 gr"
portion_apples=f"{math.ceil((daily_calories*150)/2000)} gr apples"

peaches_calories="39 Kcal"
peaches_carbohydrates="9.5 gr"  
peaches_proteins="0.9 gr"
peaches_fats="0.2 gr"
portion_peaches=f"{math.ceil((daily_calories*150)/2000)} gr peaches"

almonds_calories="542 Kcal"
almonds_carbohydrates="4 gr"  
almonds_proteins="16 gr"
almonds_fats="52 gr"
portion_almonds=f"{math.ceil((daily_calories*30)/2000)} gr almonds"

pistachios_calories="601 Kcal"
pistachios_carbohydrates="8 gr"  
pistachios_proteins="18 gr"
pistachios_fats="55 gr"
portion_pistachios=f"{math.ceil((daily_calories*30)/2000)} gr pistachios"

snack_preference=input("Enter your snack preference:")
snack_restriction=input("Enter your snack restriction:") 

if snack_preference=="pistachios":
    portion_almonds=portion_pistachios
if snack_restriction=="apples":
    portion_apples=portion_peaches
    
morning_snack= f"Morning snack: {portion_apples}"
afternoon_snack= f"Afternoon snack: {portion_almonds}"

print(f"Daily meal plan:\n{breakfast}\n{morning_snack}\n{lunch}\n{afternoon_snack}\n{dinner}")
print("Thank you for using our application")
