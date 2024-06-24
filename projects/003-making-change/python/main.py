# Read the amount in cents from the user
amount = int(input("Enter the amount in cents: "))

# Calculate the number of each coin denomination needed
toonies = amount // 200
amount %= 200

loonies = amount // 100
amount %= 100

quarters = amount // 25
amount %= 25

dimes = amount // 10
amount %= 10

nickels = amount // 5
amount %= 5

pennies = amount

# Display the number of each coin denomination
print(f"{loonies} loonies, {toonies} toonies, {quarters} quarters, {dimes} dimes, {nickels} nickels, {pennies} pennies")