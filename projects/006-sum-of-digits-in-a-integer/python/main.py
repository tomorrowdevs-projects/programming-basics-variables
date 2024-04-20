#Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
#For example, if the user enters 3141 then your program should display 3+1+4+1=9.

user_digit = int(input("enter a 4 digit number"))

first_digit = user_digit // 1000
second_digit = user_digit % 1000 // 100
third_digit = user_digit % 100 // 10
fourth_digit = user_digit % 10

digit_sum = first_digit + second_digit +third_digit + fourth_digit

print(f"{first_digit}+{second_digit}+{third_digit}+{fourth_digit} = {digit_sum}")