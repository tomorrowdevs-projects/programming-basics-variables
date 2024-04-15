user_coin = int(input("Enter the amount of cents: "))

toonie_count = user_coin // 200

remaining_amount = user_coin % 200

loonie_count = remaining_amount // 100
remaining_amount %= 100

quarter_count = remaining_amount // 25
remaining_amount %= 25

dime_count = remaining_amount // 10
remaining_amount %= 10

nickel_count = remaining_amount // 5
remaining_amount %= 5


penny_count = remaining_amount

print("Your change is:")
print("Toonies:", toonie_count)
print("Loonies:", loonie_count)
print("Quarters:", quarter_count)
print("Dimes:", dime_count)
print("Nickels:", nickel_count)
print("Pennies:", penny_count)