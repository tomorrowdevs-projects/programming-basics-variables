#REQUIREMENTS
#1) ask the user for dog years
#2) check input format: only positive integer numbers. Ask the user for a new input if the check fails
#3) convert dog years in human years (first two dog years equal 21 human years, then, a dog years equals 4 human years)
#4) print the result

while True:
    dog_years=int(input("Please, input the dog years (only positive integer values):"))
    if dog_years>=0:
        break
    else:
        print("The input value has to be a non-negative integer, please enter a correct value for dog years")

if dog_years>2:
    human_years=int(2*10.5+(dog_years-2)*4)
else:
    human_years=int(dog_years*10.5)

print(str(human_years)+" human years = "+str(dog_years)+" dog years")