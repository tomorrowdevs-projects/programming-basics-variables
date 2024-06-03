coin = int(input("Inserisci un numero di centesimi: "))
print(coin, "cents =", end= " ")

if (coin>=200):
    print((coin//200), "toonies", end="")
    coin = coin%200
    if (coin==0):
        print(".")
    else:
        print(", ", end="")

if (coin>=100):
    print((coin//100), "loonies", end="")
    coin = coin%100
    if (coin==0):
        print(".")
    else:
        print(", ", end="")

if (coin>=25):
    print((coin//25), "quarters", end="")
    coin = coin%25
    if (coin==0):
        print(".")
    else:
        print(", ", end="") 

if (coin>=10):
    print((coin//10), "dimes", end="")
    coin = coin%10
    if (coin==0):
        print(".")
    else:
        print(", ", end="") 

if (coin>=5):
    print((coin//5), "nickels", end="")
    coin = coin%5
    if (coin==0):
        print(".")
    else:
        print(", ", end="") 

if (coin>=1):
    print((coin//1), "pennies.")
