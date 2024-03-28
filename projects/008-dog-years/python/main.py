#It is commonly said that one human year is equivalent to 7 dog years.
#However, this simple conversion fails to recognize that dogs reach adulthood in approximately two years.

#As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years.

#Write a program that implements the conversion from human years to dog years described in the previous paragraph.
#Ensure that your program works correctly for:

#conversions of less than two human years
#conversions of two or more human years
#Your program should display an appropriate error message if the user enters a negative number.

#Example:
#48 human years = 205.0 dog year

HumanYears = input("Anni da convertire: ")
IntHumanYears = int(HumanYears)

if IntHumanYears < 0:
    print("Impossibile inserire numeri negativi")
   
if IntHumanYears >= 1 and IntHumanYears <= 2:
    ConvDogYears = IntHumanYears * 10.5
    print ("Conversione anni: ", ConvDogYears)

if IntHumanYears > 2:
    FirstConvDogYears = 2 * 10.5
    RealIntHumanYears = IntHumanYears - 2
    FinalDogYears = (RealIntHumanYears * 4) + FirstConvDogYears
    print("Conversione anni: ", FinalDogYears)