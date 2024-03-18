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

cents_amount=int(input("Please insert the number of cents as an integer (input has to be submitted in digits):"))
coins_number=cents_amount//200
print(str(coins_number)+" "+"Toonie")
cents_amount-=200*coins_number

coins_number=cents_amount//100
print(str(coins_number)+" "+"Loonie")
cents_amount-=100*coins_number

coins_number=cents_amount//25
print(str(coins_number)+" "+"Quarter")
cents_amount-=25*coins_number

coins_number=cents_amount//10
print(str(coins_number)+" "+"Dime")
cents_amount-=10*coins_number

coins_number=cents_amount//5
print(str(coins_number)+" "+"Nickel")
cents_amount-=5*coins_number

coins_number=cents_amount//1
print(str(coins_number)+" "+"Penny")
cents_amount-=coins_number
