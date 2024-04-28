
value_small = 0.10
value_big = 0.25


print("How many small bottles do you have?")
number_small = int(input())

print("How many big bottles do you have?")
number_big = int(input())
      
refund = number_small*value_small + number_big*value_big
print("Your refund is: " + str(round(refund , 2)) + "$") # The round() function returns a floating point number that is a rounded version of the specified number, with the specified number of decimals.
                                                         # The default number of decimals is 0, meaning that the function will return the nearest integer.
                                                         # Syntax: round(number, digits)

# ALTERNATIVE print("Your refund is: " + "%.2f" % refund + "$")
