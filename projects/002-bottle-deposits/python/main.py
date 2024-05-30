bottlesOneLiterOrLess = int (input ("Numero di contenitori da un litro o meno: "))

bottlesMoreOneLiter = int (input ("Numero di contenitori maggiori di un litro:"))

refundOneLiterOrLess = bottlesOneLiterOrLess * 0.10

refundMoreOneLiter = bottlesMoreOneLiter * 0.25

totalRefund = refundOneLiterOrLess + refundMoreOneLiter

print ("Il rimborso è di $ ", format (totalRefund, ".2f"))