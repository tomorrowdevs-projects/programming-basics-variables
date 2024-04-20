old_bread = int(input("enter the amount of day old bread loaves you're willing to purchase"))

fresh_loaf = 3.49
regular_price = old_bread * fresh_loaf
discount = 0.60 * regular_price
total_price = (regular_price - discount)

print("Regular price:", format(regular_price, '.2f') + "€")
print("Discount:", format(discount, '.2f') + "€")
print("Total price:", format(total_price, '.2f') + "€")
