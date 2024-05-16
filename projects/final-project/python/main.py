
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


print(f'You need {bmr:.0f} calories per day')
