numero_panini = int(input("Quanti panini di ieri hai venduto? "))
prezzo_fresco = 3.49
sconto_percentuale = 60

prezzo_regolare = numero_panini * prezzo_fresco
sconto = prezzo_regolare * sconto_percentuale / 100
prezzo_totale = prezzo_regolare - sconto

print("Prezzo fresco: {:.2f}€".format(prezzo_regolare))
print("Sconto per prodotto del giorno precedente: {:.2f}€".format(sconto))
print("Incasso totale per pane di ieri: {:.2f}€".format(prezzo_totale))
