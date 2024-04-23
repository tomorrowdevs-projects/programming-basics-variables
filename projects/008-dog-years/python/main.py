human_years = int(input("Enter the age you want to convert into dog years!"))

if human_years < 0:
    print("Error: please enter a non negative number.")
elif human_years < 2:
     print(human_years,"Human years =",human_years * 10.5, "dog years")
else:
    dog_first_2_years = 2 * 10.5
    dog_remaining_years = (human_years - 2) * 4
    total_years = dog_first_2_years + dog_remaining_years

    print(human_years,"Human years =", format(total_years,'.0f') + " dog years")

