# REQUEST 
# 1) ask the user for the number of bottles of volume<=1L and the number of bottles of volume>1L
# 2) compute the amount of money considering 0.1 $ for each bottle of volume<=1L and 0.25 $ for each bottle of volume>1L
# 3) show the total amount of money to the user. The total amount has to be shown along $ symbol and with two decimal digits 

n_bottles=float(input("Please, insert the number of bottle whose volume is minor or equal than 1 L (only integer values in digits):"))
amount=n_bottles*0.1
n_bottles=float(input("Please, insert the number of bottle whose volume is greater than 1 L (only integer values in digits):"))
amount=amount+n_bottles*0.25
print("The total amount for your bottles is: "+format(amount,".2f")+" "+"$")