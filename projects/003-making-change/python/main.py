cents = input("Inserisci l'importo in centesimi: ")

if not cents.isdigit():
    raise ValueError("L'importo deve essere un numero positivo.")
else:
    cents = int(cents)
    if cents < 0:
        raise ValueError("L'importo deve essere un numero positivo.")
    else:
   
        tipi = {
            "toonies": 200,
            "loonies": 100,
            "quarters": 25,
            "dimes": 10,
            "nickels": 5,
            "pennies": 1
        }

        print("Il resto da dare al cliente è:")
        for nome, valore in tipi.items():
            numero = cents // valore
            cents %= valore
            if numero > 0:
                print(f"{numero} {nome}")
