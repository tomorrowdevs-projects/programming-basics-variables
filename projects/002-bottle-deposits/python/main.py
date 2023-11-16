print("This machine will give you $0.10 for each container up to 1 lt, and 0.25 for containers bigger than 1 lt.")
small_bottles = input("How many small bottles do you have?")
big_bottles = input("How many big bottles do you have?")
number_of_small_bottles = int(small_bottles)
number_of_big_bottles = int(big_bottles)
count_small_bottles = number_of_small_bottles * 0.10
count_big_bottles = number_of_big_bottles * 0.25
calculate_total = count_small_bottles + count_big_bottles
print(f"Your total is ${calculate_total:.2f}")