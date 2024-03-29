# REQUIREMENTS 
# 1) Write a program that begins by reading a number of cents from the user as an integer.  
# 2) Then compute and display the denominations of the coins that should be used to give that amount of change to the shopper.  
#    **The change should be given using as few coins as possible.**  
# 3) Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.
#    - Penny = 1 cent
#    - Nickel = 5 cents
#    - Dime = 10 cents
#    - Quarter = 25 cents
#    - Loonie = 100 cents
#    - Toonie = 200 cents

total_amount=int(input("Please insert the number of cents as an integer (input has to be submitted in digits):"))
remaining_amount=total_amount

toonies=remaining_amount//200
remaining_amount-=200*toonies

loonies=remaining_amount//100
remaining_amount-=100*loonies

quarters=remaining_amount//25
remaining_amount-=25*quarters

dimes=remaining_amount//10
remaining_amount-=10*dimes

nickels=remaining_amount//5
remaining_amount-=5*nickels

pennies=remaining_amount//1
remaining_amount-=1*pennies

print('toonies', toonies, 'loonies', loonies, 'quarters', quarters, 'dimes', dimes, 'nickels', nickels, 'pennies', pennies)