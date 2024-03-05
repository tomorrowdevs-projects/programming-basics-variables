#Consider the software that runs on a self-checkout machine.   
#One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash.
#Write a program that begins by reading a number of cents from the user as an integer.   
#Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper.
#**The change should be given using as few coins as possible.**   
#Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

StartingCents = int(input('Digitare numero di centesimi inseriti: '))

Toonies = StartingCents // 200
TCents: int = StartingCents - (Toonies * 200)

Loonies = TCents // 100
LCents: int = TCents - (Loonies * 100)

Quarters = LCents // 25
QCents: int = LCents - (Quarters * 25)

Dimes = QCents // 10
DCents: int = QCents - (Dimes * 10)

Nickels = DCents // 5
NCents: int = DCents - (Nickels * 5)

Pennies = NCents // 1

print("Monete da restituire: ",Toonies,"Toonies,",Loonies,"Loonies,",Quarters,"Quarters,",Dimes,"Dimes,",Nickels,"Nickels,",Pennies,"Pennies")
