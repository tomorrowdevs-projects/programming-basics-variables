# REQUIREMENTS
# 1) Reads a four-digit integer from the user
# 2) displays the sum of its digits.

number=input("Please, insert a four digits number:")
n1=number[0]
n2=number[1]
n3=number[2]
n4=number[3]
sum=int(n1)+int(n2)+int(n3)+int(n4)
print(n1+' + '+n2+' + '+n3+' + '+n4+' = '+str(sum))