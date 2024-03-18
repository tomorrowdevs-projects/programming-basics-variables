#In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
#In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
#and drink containers holding more than one liter have a $0.25 deposit.  
#Write a program that reads the number of containers of each size from the user.
#Your program should continue by computing and displaying the refund that will be received for returning those containers.
#Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

SWaterC = input("Quante bottiglie con capienza <= 1L?: ")
BWaterC = input("Quante bottiglie con capienza > 1L?: ")

TotSWaterC = float(SWaterC) * float(0.10)
TotBWaterC = float(BWaterC) * float(0.25)

TotRefund = TotSWaterC + TotBWaterC

print('$', TotRefund)