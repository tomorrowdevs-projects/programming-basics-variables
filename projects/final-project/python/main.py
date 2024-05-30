
u_gender = input('What is your gender? Choose and type one option-(male/female): ')
u_age = int(input('How old are you? '))
u_height = int(input('What is your height in centimeters? '))
u_weight = int(input('What is your weight in kilograms? '))
u_activity = input('What is your physical activity? Choose and type one of those options-(sedentary/light/moderate/heavy): ')
u_pref = input('Do you have a food preference? ')
u_restrict = input('Do you have a food restriction? ')

#basal metabolic rate (BMR) with Harris-Benedict formula ---- Men: BMR = 66 + (13.7 x wt in kg) + (5 x ht in cm) - (6.8 x age in years)  ----- Women: BMR = 655 + (9.6 x wt in kg) + (1.8 x ht in cm) - (4.7 x age in years)

if u_gender == 'male':                                                      # BMR gender calculation
    bmr = 66 + (13.7 * u_weight) + (5 * u_height) - (6.8 * u_age)
else:
    bmr = 655 + (9.6 * u_weight) + (1.8 * u_height) - (4.7 * u_age)

if u_activity == 'sedentary':                                               # Activity Multiplier
    bmr = bmr * 1.2
elif u_activity == 'light':
    bmr = bmr * 1.375
elif u_activity == 'moderate':
    bmr = bmr * 1.55
elif u_activity == 'heavy':
    bmr = bmr *1.725


print(f'\nYou need {bmr:.2f} calories per day\n')

bmr_breakfast = bmr * 0.20                                                   # Daily caloric subdivision

bmr_snack_1 = bmr_snack_2 = bmr * 0.05

bmr_lunch = bmr * 0.40

bmr_dinner = bmr * 0.30


# print(f'{bmr_breakfast:.0f}')
# print(f'{bmr_snack_1:.0f}')
# print(f'{bmr_lunch:.0f}')
# print(f'{bmr_snack_2:.0f}')
# print(f'{bmr_dinner:.0f}')


orange_juice = {                                                               # Dictionaries for food
    "name" : 'Orange Juice',                                                           
    "g" : 100,
    "kcal" : 33,
    "carbo" : 31,
     "fats" : 0,
     "prot" : 2
}

bread = {
    "name" : 'Bread',
    "g" : 30,
    "kcal" : 67,
    "carbo" : 54.69,
     "fats" : 3.51,
     "prot" : 9
}

hazelnut_cream = {
    "name" : 'Hazelnut Cream',
    "g" : 10,
    "kcal" : 53,
    "carbo" : 21.78,
     "fats" : 29.16,
     "prot" : 2.76
}

rice = {
    "name" : 'Rice',
    "g" : 20,
    "kcal" : 22,
    "carbo" : 19.12,
     "fats" : 1.08,
     "prot" : 2
}

beans = {
    "name" : 'Beans',
    "g" : 50,
    "kcal" : 55,
    "carbo" : 47.80,
     "fats" : 2.70,
     "prot" : 5
}

oil = {
    "name" : 'Extra Virgin Olive Oil',                                                                  
    "g" : 10,
    "kcal" : 90,
    "carbo" : 0,
     "fats" : 90,
     "prot" : 0
}

tomato = {
    "name" : 'Tomato',
    "g" : 50,
    "kcal" : 48,
    "carbo" : 38.40,
     "fats" : 1.80,
     "prot" : 7.80
}

apple = {
    "name" : "Apple",
    "g" : 100,
    "kcal" : 38,
    "carbo" : 37.20,
     "fats" : 0,
     "prot" : 0.80
}

yogurt = {
    "name" : "Yogurt",
    "g" : 50,
    "kcal" : 21,
    "carbo" : 7.05,
     "fats" : 7.65,
     "prot" : 6.80
}

white_meat = {
    "name" : "White Meat",
    "g" : 10,
    "kcal" : 13,
    "carbo" : 0.01,
     "fats" : 0.81,
     "prot" : 12.08
}

vegetables = {
    "name" : 'Vegetables',
    "g" : 10,
    "kcal" : 30,
    "carbo" : 10.60,
     "fats" : 10.30,
     "prot" : 20.60
}

# Breakfast

br_plate_1 = ((bmr_breakfast / 3) // orange_juice["kcal"]) * orange_juice["g"]
br_plate_2 = ((bmr_breakfast / 3) // bread["kcal"]) * bread["g"]
br_plate_3 = ((bmr_breakfast / 3) // hazelnut_cream["kcal"]) * hazelnut_cream["g"]

print('For breakfast you have:')
print(f'{br_plate_1:.2f} g of {orange_juice["name"]}')
print(f'{br_plate_2:.2f} g of {bread["name"]}')
print(f'{br_plate_3:.2f} g of {hazelnut_cream["name"]}')

# Snack 1

sn_1 = (bmr_snack_1 // yogurt["kcal"]) * yogurt["g"]

print('\nFor the first snack of the day you have:')
print(f'{sn_1:.2f}g of {yogurt["name"]}')

# Lunch

lu_plate_1 = ((bmr_lunch / 4) // rice["kcal"]) * rice["g"]
lu_plate_2 = ((bmr_lunch / 4) // beans["kcal"]) * beans["g"]
lu_plate_3 = ((bmr_lunch / 4) // oil["kcal"]) * oil["g"]
lu_plate_4 = ((bmr_lunch / 4) // tomato["kcal"]) * tomato["g"]

print('\nFor lunch you have:')
print(f'{lu_plate_1:.2f} g of {rice["name"]}')
print(f'{lu_plate_2:.2f} g of {beans["name"]}')
print(f'{lu_plate_3:.2f} g of {oil["name"]}')
print(f'{lu_plate_4:.2f} g of {tomato["name"]}')

# Snack 2

sn_2 = (bmr_snack_2 // apple["kcal"]) * apple["g"]

print('\nFor the second snack of the day you have:')
print((f'{sn_2:.2f}g of {apple["name"]}'))

# Dinner

dn_plate_1 = ((bmr_dinner / 4) // bread["kcal"]) * bread["g"]
dn_plate_2 = ((bmr_dinner / 4) // white_meat["kcal"]) * white_meat["g"]
dn_plate_3 = ((bmr_dinner / 4) // vegetables["kcal"]) * vegetables["g"]
dn_plate_4 = ((bmr_dinner / 4) // oil["kcal"]) * oil["g"]

print('\nFor dinner you have:')
print(f'{dn_plate_1:.2f} g of {bread["name"]}')
print(f'{dn_plate_2:.2f} g of {white_meat["name"]}')
print(f'{dn_plate_3:.2f} g of {vegetables["name"]}')
print(f'{dn_plate_4:.2f} g of {oil["name"]}')


