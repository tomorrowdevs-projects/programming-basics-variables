# REQUIREMENTS
# 1) Ask the user for the numeber of the old loaves he wants to buy
# 2) Compute the total price for old loaves (60% regular price), the total regular price (3.49 €/loave) and the discount
# 3) Print input, regular price, discount and actual price in four different lines with label

n_loaves=input("Please type the number of old loaves you want to buy (only integer numbers in digits):")
regular_price=int(n_loaves)*3.49
discount=round(0.4*regular_price,2)
actual_price=regular_price-discount
print('Number of loaves: '+n_loaves+'\n'+'Regular price: '+str(regular_price)+'€'+'\n'+ 'Discount: '+ str(discount)+'€'+'\n'+\
'Actual price:' + str(actual_price) + '€')
