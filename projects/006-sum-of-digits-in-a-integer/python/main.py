number = input("Inserisci quattro cifre: ")
if (len(number)==4 and number.isdigit()):
    sum = int(number[0]) + int(number[1]) + int(number[2]) + int(number[3])
    print(str(number[0])+"+"+str(number[1])+"+"+str(number[2])+"+"+str(number[3])+"="+str(sum))