#REQUESTS
# 1) Calculation of daily calorie need
# 1.1) ask user for gender (male/female)
# 1.2) ask user for heght (in cm)
# 1.3) ask user for weigth (in kg)
# 1.4) ask user for level of physical activity (sedentary/light/moderate/heavy)
# 2) Diet creation
# 2.1) ask user for food preferences or restrictions
# 2.2) create text variables for food and their nutritional info
# 2.3) calculate the amount of food for each meal
# 2.4) store the daily diet in text variable

#CREATING A FOOD DB (food name - kCal)
#note: the kcal value is relevant to 100 g of product
#breakfast
cereals='Cereals - kCal 348 - g 80'
muesli='Muesli - kCal 442 - g 80'
milk='Milk - kCal 59 - g 250'
yogurt='Yogurt - kCal 66 - g 250'
brown_melba_toast='Brown melba toast - kCal 413 - g 80'
melba_toast='Melba toast - kCal 421 - g 80'
bread='Bread - kCal 264 - g 80'
brown_bread='Brown bread - kCal 213 - g 80'
hazelnut_cream='Hazelnut cream - kCal 551 - g 30'
marmalade='Marmalade - kCal 246 - g 30'
#snack
apple='Apple - kCal 52 - g 150'
banana='Banana - kCal 89 - g 100'
orange='Orange - kCal 45 - g 200'
kiwi='Kiwi - kCal 58 - g 90'
nut='Nut - kCal 709 - g 10'
almond='Almond - kCal 624 - g 1'
#launch
pasta='Pasta - kCal 353 - g 80'
wholemeal_pasta='Wholemeal pasta - kCal 338 - g 80'
rice='Rice - kCal 350 - g 80'
tomato_sauce='Tomato sauce - kCal 69 - g 100'
chicken='Chicken - kCal 128 - g 200'
salad='Salad - kCal 20 - g 80'
#bread/brown bread
bresaola='Bresaola - kCal 167 - g 200'
raw_ham='Raw ham - kCal 229 - g 200'
#dinner
#chicken
#salad
#bread/brown bread
vegetable_soup='Vegetable soup - kCal 53 - g 200'
beef='Beef - kCal 134 - g 200'
pizza_margherita='Pizza margherita - kCal 238 - g 350'

#CREATING FOOD LIST
food_list='BREAKFAST\nCereals\nMuesli\nMilk\nYogurt\nBrown melba toast\nMelba toast\nBread\nBrown bread\nHazelnut cream\nMarmalade\
\n\nSNACK\nApple\nBanana\nOrange\nKiwi\nNut\nAlmond\n\nLAUNCH\nPasta\nWholemeal pasta\nRice\nTomato sauce\nChicken\nSalad\nBread\
\nBrown bread\nBresaola\nRaw ham\n\nDINNER\nChicken\nSalad\nBread\nBrown bread\nVegetable soup\nBeef\nPizza margherita'

#ASKING FOR USER INPUT
gender=input('Enter your gender (male/female):')
age=int(input('Enter your age (only positive integer numbers in digits):'))
height=int(input('Enter your height in cm (only positive integer numbers in digit):'))
weight=float(input('Enter your weight in kg (only positive numbers in digits):'))
activity=input('Enter your level of physical activity (sedentary/light/medium/high):')
print('Please, read carefully the avaible list of food and then input your preferences or restrictions. If you have no preferences or\
 restriction, type none.\n\n'+food_list) #showing user the available food list in order to making possible a choice
preferences=input('Enter your preferences in this way "breakfast base-breakfast condiment;snack fruit 1-snack fruit 2;\
launch base-launch condiment;dinner base-dinner condiment" (if you have no preferences for one, type "none" for there):')
food_restr=input('Enter your restrictions (input has to be submitted in this format restr1-restr2-...):')

#OPERATING RESTRICTIONS
cereals=cereals*(not cereals[0:cereals.index(' -')] in food_restr)+'none-'*(cereals[0:cereals.index(' -')] in food_restr)
muesli=muesli*(not muesli[0:muesli.index(' -')] in food_restr)+'none-'*(muesli[0:muesli.index(' -')] in food_restr)
milk=milk*(not milk[0:milk.index(' -')] in food_restr)+'none-'*(milk[0:milk.index(' -')] in food_restr)
yogurt=yogurt*(not yogurt[0:yogurt.index(' -')] in food_restr)+'none-'*(yogurt[0:yogurt.index(' -')] in food_restr)
brown_melba_toast=brown_melba_toast*(not brown_melba_toast[0:brown_melba_toast.index(' -')] in food_restr)+'none-'*\
(brown_melba_toast[0:brown_melba_toast.index(' -')] in food_restr)
melba_toast=melba_toast*(not melba_toast[0:melba_toast.index(' -')] in food_restr)+'none-'*(melba_toast[0:melba_toast.index(' -')]\
in food_restr)
bread=bread*(not bread[0:bread.index(' -')] in food_restr)+'none-'*(bread[0:bread.index(' -')] in food_restr)
brown_bread=brown_bread*(not brown_bread[0:brown_bread.index(' -')] in food_restr)+'none-'*(brown_bread[0:brown_bread.index(' -')]\
in food_restr)
hazelnut_cream=hazelnut_cream*(not hazelnut_cream[0:hazelnut_cream.index(' -')] in food_restr)+'none-'*(hazelnut_cream\
[0:hazelnut_cream.index(' -')] in food_restr)
marmalade=marmalade*(not marmalade[0:marmalade.index(' -')] in food_restr)+'none-'*(marmalade[0:marmalade.index(' -')] in food_restr)
apple=apple*(not apple[0:apple.index(' -')] in food_restr)+'none-'*(apple[0:apple.index(' -')] in food_restr)
banana=banana*(not banana[0:banana.index(' -')] in food_restr)+'none-'*(banana[0:banana.index(' -')] in food_restr)
orange=orange*(not orange[0:orange.index(' -')] in food_restr)+'none-'*(orange[0:orange.index(' -')] in food_restr)
kiwi=kiwi*(not kiwi[0:kiwi.index(' -')] in food_restr)+'none-'*(kiwi[0:kiwi.index(' -')] in food_restr)
nut=nut*(not nut[0:nut.index(' -')] in food_restr)+'none-'*(nut[0:nut.index(' -')] in food_restr)
almond=almond*(not almond[0:almond.index(' -')] in food_restr)+'none-'*(almond[0:almond.index(' -')] in food_restr)
pasta=pasta*(not pasta[0:pasta.index(' -')] in food_restr)+'none-'*(pasta[0:pasta.index(' -')] in food_restr)
wholemeal_pasta=wholemeal_pasta*(not wholemeal_pasta[0:wholemeal_pasta.index(' -')] in food_restr)+'none-'*(wholemeal_pasta[0:wholemeal_pasta.index(' -')] in food_restr)
rice=rice*(not rice[0:rice.index(' -')] in food_restr)+'none-'*(rice[0:rice.index(' -')] in food_restr)
tomato_sauce=tomato_sauce*(not tomato_sauce[0:tomato_sauce.index(' -')] in food_restr)+'none-'*(tomato_sauce[0:tomato_sauce.index(' -')] in food_restr)
chicken=chicken*(not chicken[0:chicken.index(' -')] in food_restr)+'none-'*(chicken[0:chicken.index(' -')] in food_restr)
salad=salad*(not salad[0:salad.index(' -')] in food_restr)+'none-'*(salad[0:salad.index(' -')] in food_restr)
bresaola=bresaola*(not bresaola[0:bresaola.index(' -')] in food_restr)+'none-'*(bresaola[0:bresaola.index(' -')] in food_restr)
raw_ham=raw_ham*(not raw_ham[0:raw_ham.index(' -')] in food_restr)+'none-'*(raw_ham[0:raw_ham.index(' -')] in food_restr)
vegetable_soup=vegetable_soup*(not vegetable_soup[0:vegetable_soup.index(' -')] in food_restr)+'none-'*(vegetable_soup\
[0:vegetable_soup.index(' -')] in food_restr)
beef=beef*(not beef[0:beef.index(' -')] in food_restr)+'none-'*(beef[0:beef.index(' -')] in food_restr)
pizza_margherita=pizza_margherita*(not pizza_margherita[0:pizza_margherita.index(' -')] in food_restr)+'none-'*\
(pizza_margherita[0:pizza_margherita.index(' -')] in food_restr)

#CALORIE NEED CALCULATION
BCN=(gender=='male')*(66.5+(13.8*weight)+5*height-6.8*age)+(gender=='female')*(655.1+(9.6*weight)+1.9*height-4.7*age) #daily basic calorie need
CN=round((activity=='sedentary')*1.1*BCN+(activity=='light')*1.2*BCN+(activity=='medium')*1.3*BCN+(activity=='high')*1.4*BCN,2) #daily calorie need
CN_breakfast=round(0.3*CN,2)
CN_snack=round(0.05*CN,2)
CN_launch=round(0.35*CN,2)
CN_dinner=round(0.25*CN,2)

#--DIET CREATION--#
#BREAKFAST
base=preferences[0:preferences.index('-')]
condiment=preferences[preferences.index('-')+1:preferences.index(';')]
preferences=preferences[preferences.index(';')+1:]
base=base.replace('none',cereals[0:cereals.index('-')])
base=base.replace('none',muesli[0:muesli.index('-')])
base=base.replace('none',brown_melba_toast[0:brown_melba_toast.index('-')])
base=base.replace('none',melba_toast[0:melba_toast.index('-')])
base=base.replace('none',bread[0:bread.index('-')])
base=base.replace('none',brown_bread[0:brown_bread.index('-')])
condiment=condiment.replace('none',milk[0:milk.index('-')])
condiment=condiment.replace('none',yogurt[0:yogurt.index('-')])
condiment=condiment.replace('none',hazelnut_cream[0:hazelnut_cream.index('-')])
condiment=condiment.replace('none',marmalade[0:marmalade.index('-')])
str_to_evaluate=base.replace(' ','_').rstrip('_').lower()
b_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
b_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
str_to_evaluate=condiment.replace(' ','_').rstrip('_').lower()
c_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
c_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
moltiplicatore=CN_breakfast/(b_qt*b_kcal+c_qt*c_kcal) #moltiplicatore delle quantità di base e condimento
b_qt=int(b_qt*moltiplicatore*100)
c_qt=int(c_qt*moltiplicatore*100)
daily_diet='BREAKFAST\n'+base+' '+str(b_qt)+' g\n'+condiment+' '+str(c_qt)+' g\n\n'

#SNACK
base=preferences[0:preferences.index('-')]
condiment=preferences[preferences.index('-')+1:preferences.index(';')]
preferences=preferences[preferences.index(';')+1:]
base=base.replace('none',apple[0:apple.index('-')])
base=base.replace('none',banana[0:banana.index('-')])
base=base.replace('none',orange[0:orange.index('-')])
base=base.replace('none',kiwi[0:kiwi.index('-')])
condiment=condiment.replace('none',nut[0:nut.index('-')])
condiment=condiment.replace('none',almond[0:almond.index('-')])
str_to_evaluate=base.replace(' ','_').rstrip('_').lower()
b_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
b_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
str_to_evaluate=condiment.replace(' ','_').rstrip('_').lower()
c_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
c_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
moltiplicatore=CN_breakfast/(b_qt*b_kcal+c_qt*c_kcal) #moltiplicatore delle quantità di base e condimento
b_qt=int(b_qt*moltiplicatore*100)
c_qt=int(c_qt*moltiplicatore*100)
snack='SNACK\n'+base+' '+str(b_qt)+' g\n'+condiment+' '+str(c_qt)+' g\n\n'
daily_diet=daily_diet+snack

#LAUNCH
base=preferences[0:preferences.index('-')]
condiment=preferences[preferences.index('-')+1:preferences.index(';')]
preferences=preferences[preferences.index(';')+1:]
base=base.replace('none',pasta[0:pasta.index('-')])
base=base.replace('none',wholemeal_pasta[0:wholemeal_pasta.index('-')])
base=base.replace('none',rice[0:rice.index('-')])
base=base.replace('none',chicken[0:chicken.index('-')])
base=base.replace('none',bread[0:bread.index('-')])
base=base.replace('none',brown_bread[0:brown_bread.index('-')])
base=base.replace('none',salad[0:salad.index('-')])
base=base.replace('none',bresaola[0:bresaola.index('-')])
base=base.replace('none',raw_ham[0:raw_ham.index('-')])
condiment=condiment.replace('none',tomato_sauce[0:tomato_sauce.index('-')])
str_to_evaluate=base.replace(' ','_').rstrip('_').lower()
b_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
b_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
str_to_evaluate=condiment.replace(' ','_').rstrip('_').lower()
c_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
c_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
moltiplicatore=CN_breakfast/(b_qt*b_kcal+c_qt*c_kcal) #moltiplicatore delle quantità di base e condimento
b_qt=int(b_qt*moltiplicatore*100)
c_qt=int(c_qt*moltiplicatore*100)
daily_diet=daily_diet+'LAUNCH\n'+base+' '+str(b_qt)+' g\n'+condiment+' '+str(c_qt)+' g\n\n'
daily_diet=daily_diet+snack

#DINNER
base=preferences[0:preferences.index('-')]
condiment=preferences[preferences.index('-')+1:preferences.index(';')]
preferences=preferences[preferences.index(';')+1:]
base=base.replace('none',chicken[0:chicken.index('-')])
base=base.replace('none',salad[0:salad.index('-')])
base=base.replace('none',vegetable_soup[0:vegetable_soup.index('-')])
base=base.replace('none',beef[0:beef.index('-')])
base=base.replace('none',pizza_margherita[0:pizza_margherita.index('-')])
condiment=condiment.replace('none',bread[0:bread.index('-')])
condiment=condiment.replace('none',brown_bread[0:brown_bread.index('-')])
str_to_evaluate=base.replace(' ','_').rstrip('_').lower()
b_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
b_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
str_to_evaluate=condiment.replace(' ','_').rstrip('_').lower()
c_kcal=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- kCal\')+6:'+str_to_evaluate+'.index(\'- g\')]'))
c_qt=float(eval(str_to_evaluate+'['+str_to_evaluate+'.index(\'- g\')+3:]'))/100
moltiplicatore=CN_breakfast/(b_qt*b_kcal+c_qt*c_kcal) #moltiplicatore delle quantità di base e condimento
b_qt=int(b_qt*moltiplicatore*100)
c_qt=int(c_qt*moltiplicatore*100)
daily_diet=daily_diet+'DINNER\n'+base+' '+str(b_qt)+' g\n'+condiment+' '+str(c_qt)+' g'

print(daily_diet+'\n\nThank you for having tried our app!')