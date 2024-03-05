#Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
#Compute and display the total number of seconds represented by this duration.

#Example:   
#- Input days: 1  
#- Input hours: 10
#- Input minutes: 12  
#- Input seconds: 32
#- Result seconds: 123152

Giorni = int(input("Inserisci giorni: "))
Ore = int(input("Inserisci ore: "))
Minuti = int(input("Inserisci minuti: "))
Secondi = int(input("Inserisci secondi: "))

TotGiorni = Giorni * 24 * 60 * 60
TotOre = Ore * 60 * 60
TotMinuti = Minuti * 60

TotSecondi = TotGiorni + TotOre + TotMinuti + Secondi

print("Secondi totali immessi: ", TotSecondi)
