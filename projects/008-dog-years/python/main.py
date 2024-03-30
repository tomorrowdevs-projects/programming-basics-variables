#REQUIREMENTS
#1) ask the user for dog years
#2) check input format: only positive integer numbers. Ask the user for a new input if the check fails
#3) convert dog years in human years (first two dog years equal 21 human years, then, a dog years equals 4 human years)
#4) print the result

human_years=int(input("Please, input the human years (only positive integer values):"))
try:
    1/(abs(human_years)+human_years)
except ZeroDivisionError:
    print("The submitted integer is negative or 0, please lanuch the program and input a positive integer.")
else:
    dog_years=(human_years-2<=0)*human_years*10.5+(human_years-2>0)*(2*10.5+(human_years-2)*4)
    print(str(dog_years)+" human years = "+str(human_years)+" dog years")