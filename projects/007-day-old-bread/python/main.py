u_bread = int(input('insert number of old-day bread purchased:'))

full_p = u_bread * 3.49 # prezzo pieno

disc = (full_p * 60) / 100 # calcolo sconto

total = full_p - disc # totale


# F-string (String Format) allows you to format selected parts of a string. 
# To specify a string as an f-string, simply put an f in front of the string. 
# To format values in an f-string, add placeholders {}, a placeholder can contain variables, operations, functions, and modifiers to format the value.

# A placeholder can also include a modifier to format the value.
# A modifier is included by adding a colon : followed by a legal formatting type, like .2f which means fixed point number with 2 decimals.

print(f'Regular price:{full_p:>10.2f}€') # '>10' serve per allineare il testo a destra, il valore per determinare il numero di spazi, in questo caso 10 
print(f'Discount:{disc:>15.2f}€')        # '.2f' serve per determinare il numero di decimali da visualizzare, in questo caso due.
print(f'Total price:{total:>12.2f}€')    

# Fonte: https://www.w3schools.com/python/python_string_formatting.asp