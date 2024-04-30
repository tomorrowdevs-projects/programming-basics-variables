
u_digit = int(input('insert four digits:'))

res0 = u_digit // 1000 # calcolo cifra migliaia
u_digit = u_digit % 1000 # tolgo migliaia all'input

res1 = u_digit // 100 # calcolo cifra centinaia
u_digit = u_digit % 100 # tolgo centinaia all'input

res2 = u_digit // 10 # calcolo cifra decine
u_digit = u_digit % 10 # tolgo decina all'input

print(res0, '+', res1, '+', res2, '+', u_digit, '=', res0 + res1 + res2 + u_digit)
