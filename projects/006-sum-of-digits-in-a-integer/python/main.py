number = input("Please enter a four-digit number: ")
#Listing all the single digits of the integer using indexes:
first_digit = int(number[0])
second_digit = int(number[1])
third_digit = int(number[2])
fourth_digit = int(number[3])
# Adding all digits together
sum_of_digits = int(first_digit + second_digit + third_digit + fourth_digit)

print(sum_of_digits)