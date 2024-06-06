humanYears = int(input("Human Years:"))
if (humanYears<0):
    print("Negative number!")
elif (humanYears<=2):
    dogYears = humanYears * 10.5
    print(humanYears, "human years =", dogYears, "dog years")
else:
    dogYears = (2*10.5) + ((humanYears-2)*4)
    print(humanYears, "human years =", dogYears, "dog years")