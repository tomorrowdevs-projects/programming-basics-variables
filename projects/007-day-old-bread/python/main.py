''' A bakery sells loaves of bread for €3.49 each.  
Day old bread is discounted by 60 percent. 

Write a program that begins by reading the number of loaves of day-old bread being purchased from the user. 
Then your program should display:   
- Regular price for the bread
- Discount because it is a day old
- Total price    

Each of these amounts should be displayed on its own line with an appropriate label. 
All the values should be displayed using two decimal places, 
and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

Example:   
Input = 256   
Regular price:  893.44€  
Discount:       536.06€  
Total price:    357.38€  
'''
old_bread = int(input("enter the amount of day old bread loaves you're willing to purchase"))

fresh_loaf = 3.49
regular_price = old_bread * fresh_loaf
discount = 0.60 * regular_price
total_price = (regular_price - discount)

print("Regular price:", format(regular_price, '.2f') + "€")
print("Discount:", format(discount, '.2f') + "€")
print("Total price:", format(total_price, '.2f') + "€")
