dayOldBread = int(input("Number of loaves of day-old:"))

regularPrice = dayOldBread * 3.49
discount = (regularPrice * 60) / 100
totalPrice = regularPrice - discount

print("Regular price: " + f"{regularPrice:>10.2f}")
print("Discount: " + f"{discount:>15.2f}")
print("Total price: " + f"{totalPrice:>12.2f}")