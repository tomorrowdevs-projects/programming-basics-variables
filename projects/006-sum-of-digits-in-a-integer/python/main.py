#Develop a program that reads a four-digit integer from the user and displays the sum of its digits.
#For example, if the user enters 3141 then your program should display 3+1+4+1=9.

Numbers = input("Immettere 4 numeri: ")
IntNumbers = int(Numbers)

FirstN = IntNumbers // 1000
SecondN = IntNumbers // 100
ThirdN = IntNumbers // 10
FourthN = IntNumbers // 1

RealSecondN = SecondN % 10
RealThirdN = ThirdN % 10
RealFourthN = FourthN % 10

print(FirstN,"+",RealSecondN,"+",RealThirdN,"+",RealFourthN,"=",FirstN+RealSecondN+RealThirdN+RealFourthN)