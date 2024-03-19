# REQUIREMENTS
# 1) Reads a four-digit integer from the user
# 2) displays the sum of its digits.

number=input("Please, insert a four digits number:")
n1=number[slice(1)]
n2=number[slice(1,2,1)]
n3=number[slice(2,3,1)]
n4=number[slice(3,4,1)]
sum=int(n1)+int(n2)+int(n3)+int(n4)
print(n1+' + '+n2+' + '+n3+' + '+n4+' = '+str(sum))