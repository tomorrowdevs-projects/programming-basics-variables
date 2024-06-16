coin = int(input("Inserisci un numero di centesimi: "))

toonies = coin//200
coin = coin%200

loonies = coin//100
coin = coin%100

quarters = coin//25
coin = coin%25

dimes = coin//10
coin = coin%10

nickels = coin//5
coin = coin%5

pennies = coin//1
coin = coin%1

print(f"{toonies} toonies, {loonies} loonies, {quarters} quarters, {dimes} dimes, {nickels} nickels, {pennies} pennies.")
