price_of_bread = 3.49
number_of_loaves = int(input("How many loaves of bread did you get?"))

# Calculating regular price first, and then the discount
regular_bread_price = (number_of_loaves * price_of_bread)
calculate_discount =  (0.60 * regular_bread_price)
final_discount = regular_bread_price - calculate_discount

print(f"Input = {number_of_loaves}")
print(f"Regular Price = {regular_bread_price:.2f}€")
print(f"Discount = {calculate_discount:.2f}€")
print(f"Total Price = {final_discount:.2f}€")

