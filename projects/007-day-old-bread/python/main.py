
number_of_loaves = int(input("How many loaves of bread did you get?"))



bread_regular_price = 3.49 * number_of_loaves
apply_discount_to_price = (0.60 * bread_regular_price)
total_discount = bread_regular_price - apply_discount_to_price

print(f"Input = {number_of_loaves}")
print(f"Regular Price = {bread_regular_price:.2f}€")
print(f"Discount = {apply_discount_to_price:.2f}€")
print(f"Total Price = {total_discount:.2f}€")
