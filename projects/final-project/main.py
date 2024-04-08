#--REQUIREMENTS--#
# 1) Calculation of daily calorie need
# 1.1) ask user for gender (male/female)
# 1.2) ask user for height (in cm)
# 1.3) ask user for weigth (in kg)
# 1.4) ask user for level of physical activity (sedentary/light/moderate/heavy)
# 2) Diet creation
# 2.1) ask user for food preferences or restrictions
# 2.2) create text variables for food and their nutritional info
# 2.3) calculate the amount of food for each meal
# 2.4) store the daily diet in text variable
# 3) Printing results
# 3.1) Print diet to terminal
# 3.2) Print a closing message

#--NOTES ON THE SOFTWARE--#
#The aim of the software consist in creating a daily diet for the user. In order reach this aim, a food DB is created
#with various foods. Each food can be a base or a condiment, i.d. in the daily diet will be assigned to the user
#a dish for each meal composed by a base and a condiment. Every food has associated a base quantity which is used
#to create the dish, so that each dish has a base calorie content obtained by the sum of the calorie contente
#of the base and the condiment. The base calorie content of the dish will be adjusted in order to fulfill the
#meal calorie need with a multiplier that is used to multiply the base quantity of base and condiment of the dish

#--CREATING A FOOD DB--#
#Note on structure: for each food the DB has three variable FoodName_label (string with name of the food),
#                   FoodName_kcal (int with the calorie content) and FoodName_g (int with the base quantity to be combined with other
#                   foods)
#Note on nutritional values: the kcal and nutritional values are relevant to 100 g of product
#BREAKFAST#
#bases#
cereals_label='Cereals'
cereals_kcal=348
cereals_g=80
muesli_label='Muesli'
muesli_kcal=442
muesli_g=80
brown_melba_toast_label='Brown melba toast' 
brown_melba_toast_kcal=413
brown_melba_toast_g=80
melba_toast_label='Melba toast'
melba_toast_kcal=421
melba_toast_g=80
bread_label='Bread'
bread_kcal=264
bread_g=80
brown_bread_label='Brown bread'
brown_bread_kcal=213
brown_bread_g=80
#condiment#
milk_label='Milk'
milk_kcal=59
milk_g=250
yogurt_label='Yogurt'
yogurt_kcal=66
yogurt_g=250
hazelnut_cream_label='Hazelnut cream'
hazelnut_cream_kcal=551
hazelnut_cream_g=30
marmalade_label='Marmalade'
marmalade_kcal=246
marmalade_g=30
#SNACK#
#base1#
apple_label='Apple'
apple_kcal=52
apple_g=150
banana_label='Banana'
banana_kcal=89
banana_g=100
orange_label='Orange'
orange_kcal=45
orange_g=200
kiwi_label='Kiwi'
kiwi_kcal=58
kiwi_g=90
#base2#
nut_label='Nut'
nut_kcal=709
nut_g=10
almond_label='Almond'
almond_kcal=624
almond_g=1
#LAUNCH#
#base#
pasta_label='Pasta'
pasta_kcal=353
pasta_g=80
wholemeal_pasta_label='Wholemeal pasta'
wholemeal_pasta_kCal=338
wholemeal_pasta_g=80
rice_label='Rice'
rice_kcal=350
rice_g=80
chicken_label='Chicken'
chicken_kcal=128
chicken_g=200
#bread/brown bread
bresaola_label='Bresaola'
bresaola_kcal=167
bresaola_g=200
raw_ham_label='Raw ham'
raw_ham_kcal=229
raw_ham_g=200
#condiment
tomato_sauce_label='Tomato sauce'
tomato_sauce_kcal=69
tomato_sauce_g=100
salad_label='Salad'
salad_kCal=20
salad_g=80
#DINNER#
#bases#
#chicken
#bread/brown bread
beef_label='Beef'
beef_kcal=134
beef_g=200
pizza_margherita_label='Pizza margherita'
pizza_margherita_kcal=238
pizza_margherita_g=350
#condiments#
#salad
vegetable_soup_label='Vegetable soup'
vegetable_soup_kcal=53
vegetable_soup_g=200

#--CREATING FOOD LIST--#
food_list='BREAKFAST\nCereals\nMuesli\nMilk\nYogurt\nBrown melba toast\nMelba toast\nBread\nBrown bread\nHazelnut cream\nMarmalade\
\n\nSNACK\nApple\nBanana\nOrange\nKiwi\nNut\nAlmond\n\nLAUNCH\nPasta\nWholemeal pasta\nRice\nTomato sauce\nChicken\nSalad\nBread\
\nBrown bread\nBresaola\nRaw ham\n\nDINNER\nChicken\nSalad\nBread\nBrown bread\nVegetable soup\nBeef\nPizza margherita'

#--ASKING FOR USER INPUT--#
gender=input('Enter your gender (male/female):')
age=int(input('Enter your age (only positive integer numbers in digits):'))
height=int(input('Enter your height in cm (only positive integer numbers in digit):'))
weight=float(input('Enter your weight in kg (only positive numbers in digits):'))
activity=input('Enter your level of physical activity (sedentary/light/medium/high):')

print('Please, read carefully the avaible list of food and then input your preferences or restrictions. If you have no preferences or\
 restriction, type none.\n\n'+food_list) #showing user the available food list in order to making possible a choice

pref_base_breakfast=input('Enter your preference for a breakfast base (if you have no preferences, type none):')
pref_cond_breakfast=input('Enter your preference for a breakfast condiment (if you have no preferences, type none):')
pref_base_snack=input('Enter your preference for the first base of snack (if you have no preferences, type none):')
pref_cond_snack=input('Enter your preference for the second base of snack (if you have no preferences, type none):')
pref_base_launch=input('Enter your preference for a launch base (if you have no preferences, type none):')
pref_cond_launch=input('Enter your preference for a launch condiment (if you have no preferences, type none):')
pref_base_dinner=input('Enter your preference for a dinner base (if you have no preferences, type none):')
pref_cond_dinner=input('Enter your preference for a dinner condiment (if you have no preferences, type none):')
food_restr=input('Enter your restrictions:')

#--CALORIE NEED CALCULATION--#
#Calculating base calorie need
if gender=='male':
    BCN=(66.5+(13.8*weight)+5*height-6.8*age)
else:
    BCN=(655.1+(9.6*weight)+1.9*height-4.7*age)

#Adjusting calorie need as function of physical activity
if activity=='sedentary':
    CN=round(1.1*BCN,2)
elif activity=='light':
    CN=round(1.2*BCN,2)
elif activity=='medium':
    CN=round(1.3*BCN,2)
else:
    CN=round(1.4*BCN,2)

#Distributing calorie need on the various meals
CN_breakfast=int(0.3*CN)
CN_snack=int(0.05*CN)
CN_launch=int(0.35*CN)
CN_dinner=int(0.25*CN)

#--DIET CREATION--#
#BREAKFAST#
#if the user expressed a preference
base_label=pref_base_breakfast.lower().replace(' ','_')
#if the user didn't express a preference
if base_label=='none':
    if not(muesli_label in food_restr):
        base_label=cereals_label.lower().replace(' ','_')
    elif not(brown_melba_toast_label in food_restr):
        base_label=brown_melba_toast_label.lower().replace(' ','_')
    elif not(melba_toast_label in food_restr):
        base_label=melba_toast_label.lower().replace(' ','_')
    elif not(bread_label in food_restr):
        base_label=bread_label.lower().replace(' ','_')
    elif not(brown_bread_label in food_restr):
        base_label=brown_bread_label.lower().replace(' ','_')
base_kcal=eval('{}_{}'.format(base_label,'kcal'))
base_g=eval('{}_{}'.format(base_label,'g'))

cond_label=pref_cond_breakfast.lower().replace(' ','_')
if cond_label=='none':
    if not(milk_label in food_restr):
        cond_label=milk_label.lower().replace(' ','_')
    elif not(yogurt_label in food_restr):
        cond_label=yogurt_label.lower().replace(' ','_')
    elif not(hazelnut_cream_label in food_restr):
        cond_label=hazelnut_cream_label.lower().replace(' ','_')
    elif not(marmalade_label in food_restr):
        cond_label=marmalade_label.lower().replace(' ','_')
cond_kcal=eval('{}_{}'.format(cond_label,'kcal'))
cond_g=eval('{}_{}'.format(cond_label,'g'))

dish_kcal=int(base_g/100*base_kcal+cond_g/100*cond_kcal)
multiplier=CN_breakfast/dish_kcal
base_g=int(base_g*multiplier)
cond_g=int(cond_g*multiplier)
breakfast='BREAKFAST ({} kCal)\n{}: {:d} kCal, {:d} g\n{}: {:d} kCal, {:d} g'.format(CN_breakfast,base_label,base_kcal,base_g,\
                                                                           cond_label,cond_kcal,cond_g)

#SNACK#
#if the user expressed a preference
base_label=pref_base_snack.lower().replace(' ','_')
#if the user didn't express a preference
if base_label=='none':
    if not(apple_label in food_restr):
        base_label=apple_label.lower().replace(' ','_') #bisogna redere minuscolo il nome della variabile per poterla richiamare con eval
    elif not(banana_label in food_restr):
        base_label=banana_label.lower().replace(' ','_')
    elif not(orange_label in food_restr):
        base_label=orange_label.lower().replace(' ','_')
    elif not(kiwi_label in food_restr):
        base_label=kiwi_label.lower().replace(' ','_')
base_kcal=eval('{}_{}'.format(base_label,'kcal'))
base_g=eval('{}_{}'.format(base_label,'g'))

cond_label=pref_cond_snack.lower().replace(' ','_')
if cond_label=='none':
    if not(nut_label in food_restr):
        cond_label=nut_label.lower().replace(' ','_')
    elif not(almond_label in food_restr):
        cond_label=almond_label.lower().replace(' ','_')
cond_kcal=eval('{}_{}'.format(cond_label,'kcal'))
cond_g=eval('{}_{}'.format(cond_label,'g'))

dish_kcal=int(base_g/100*base_kcal+cond_g/100*cond_kcal)
multiplier=CN_snack/dish_kcal
base_g=int(base_g*multiplier)
cond_g=int(cond_g*multiplier)
snack='SNACK ({} kCal)\n{}: {:d} kCal, {:d} g\n{}: {:d} kCal, {:d} g'.format(CN_snack,base_label,base_kcal,base_g,\
                                                                    cond_label,cond_kcal,cond_g)

#LAUNCH#
#if the user expressed a preference
base_label=pref_base_launch.lower().replace(' ','_')
#if the user didn't express a preference
if base_label=='none':
    if not(pasta_label in food_restr):
        base_label=pasta_label.lower().replace(' ','_') #bisogna redere minuscolo il nome della variabile per poterla richiamare con eval
    elif not(wholemeal_pasta_label in food_restr):
        base_label=wholemeal_pasta_label.lower().replace(' ','_')
    elif not(rice_label in food_restr):
        base_label=rice_label.lower().replace(' ','_')
    elif not(chicken_label in food_restr):
        base_label=chicken_label.lower().replace(' ','_')
    elif not(bread_label in food_restr):
        base_label=bread_label.lower().replace(' ','_')
    elif not(brown_bread_label in food_restr):
        base_label=brown_bread_label.lower().replace(' ','_')
    elif not(bresaola_label in food_restr):
        base_label=bresaola_label.lower().replace(' ','_')
    elif not(raw_ham_label in food_restr):
        base_label=raw_ham_label.lower().replace(' ','_')
base_kcal=eval('{}_{}'.format(base_label,'kcal'))
base_g=eval('{}_{}'.format(base_label,'g'))

cond_label=pref_cond_launch.lower().replace(' ','_')
if cond_label=='none':
    if not(tomato_sauce_label in food_restr):
        cond_label=tomato_sauce_label.lower().replace(' ','_')
    elif not(salad_label in food_restr):
        cond_label=salad_label.lower().replace(' ','_')
cond_kcal=eval('{}_{}'.format(cond_label,'kcal'))
cond_g=eval('{}_{}'.format(cond_label,'g'))

dish_kcal=int(base_g/100*base_kcal+cond_g/100*cond_kcal)
multiplier=CN_launch/dish_kcal
base_g=int(base_g*multiplier)
cond_g=int(cond_g*multiplier)
launch='LAUNCH ({} kCal)\n{}: {:d} kCal, {:d} g\n{}: {:d} kCal, {:d} g'.format(CN_launch,base_label,base_kcal,base_g,\
                                                                    cond_label,cond_kcal,cond_g)

#DINNER#
#if the user expressed a preference
base_label=pref_base_dinner.lower().replace(' ','_')
#if the user didn't express a preference
if base_label=='none':
    if not(chicken_label in food_restr):
        base_label=chicken_label.lower().replace(' ','_') #bisogna redere minuscolo il nome della variabile per poterla richiamare con eval
    elif not(bread_label in food_restr):
        base_label=bread_label.lower().replace(' ','_')
    elif not(brown_bread_label in food_restr):
        base_label=brown_bread_label.lower().replace(' ','_')
    elif not(beef_label in food_restr):
        base_label=beef_label.lower().replace(' ','_')
    elif not(pizza_margherita_label in food_restr):
        base_label=pizza_margherita_label.lower().replace(' ','_')
base_kcal=eval('{}_{}'.format(base_label,'kcal'))
base_g=eval('{}_{}'.format(base_label,'g'))

cond_label=pref_cond_launch.lower().replace(' ','_')
if cond_label=='none':
    if not(vegetable_soup_label in food_restr):
        cond_label=vegetable_soup_label.lower().replace(' ','_')
    elif not(salad_label in food_restr):
        cond_label=salad_label.lower().replace(' ','_')
cond_kcal=eval('{}_{}'.format(cond_label,'kcal'))
cond_g=eval('{}_{}'.format(cond_label,'g'))

dish_kcal=int(base_g/100*base_kcal+cond_g/100*cond_kcal)
multiplier=CN_dinner/dish_kcal
base_g=int(base_g*multiplier)
cond_g=int(cond_g*multiplier)
dinner='DINNER ({} kCal)\n{}: {:d} kCal, {:d} g\n{}: {:d} kCal, {:d} g'.format(CN_dinner,base_label,base_kcal,base_g,\
                                                                    cond_label,cond_kcal,cond_g)

#--SHOWING OUTPUT--#
diet='\nDAILY DIET ({} kCal)\n\n{}\n\n{}\n\n{}\n\n{}\n\n{}'.format(CN,breakfast,snack,launch,snack,dinner)
print(diet+'\n\nThank you for having tried our app!')