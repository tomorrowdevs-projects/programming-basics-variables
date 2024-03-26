#A bakery sells loaves of bread for €3.49 each.
#Day old bread is discounted by 60 percent.

#Write a program that begins by reading the number of loaves of day-old bread being purchased from the user. Then your program should display:

#Regular price for the bread
#Discount because it is a day old
#Total price
#Each of these amounts should be displayed on its own line with an appropriate label. All the values should be displayed using two decimal places, and the decimal points in all the numbers should be aligned when reasonable values are entered by the user.

#Example:
#Input = 256
#Regular price: 893.44€
#Discount: 536.06€
#Total price: 357.38€

OldBreadPieces = input("Indicare quanti pezzi di pane vecchio sono stati acquistati: ")
RightOldBread = int(OldBreadPieces)
RegPrice = 3.49

RegularBreadPrice = RightOldBread * RegPrice
TwoDecimalRBreadPrice = RegularBreadPrice // 1
print("Regular Price for the bread: ", TwoDecimalRBreadPrice, "€")

DiscountPrice = (TwoDecimalRBreadPrice * 60) / 100
print("Discount because it is a day old: ", DiscountPrice, "€")

TotPrice = TwoDecimalRBreadPrice - DiscountPrice
print("Total price: ", TotPrice, "€")