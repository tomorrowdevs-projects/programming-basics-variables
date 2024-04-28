PENNY_VALUE = 1
NICKEL_VALUE = 5
DIME_VALUE = 10
QUARTER_VALUE = 25
LOONIE_VALUE = 100
TOONIE_VALUE = 200


print("insert cents")
user_cents = int(input())   # richiesta cents all'utente


n_toonie = user_cents/TOONIE_VALUE   # calcolo tooines

#print(str(int(n_toonie)) + " toonies")

sum_toonie = int(n_toonie)*TOONIE_VALUE
updated_user_cents = user_cents - sum_toonie


n_loonie = updated_user_cents/LOONIE_VALUE   # calcolo loonie

#print(str(int(n_loonie)) + " loonies")

sum_loonie = int(n_loonie)*LOONIE_VALUE
updated_user_cents = updated_user_cents - sum_loonie


n_quarter = updated_user_cents/QUARTER_VALUE   # calcolo quarter

#print(str(int(n_quarter)) + " quarters")

sum_quarter = int(n_quarter)*QUARTER_VALUE
updated_user_cents = updated_user_cents - sum_quarter


n_dime = updated_user_cents/DIME_VALUE   # calcolo dime

#print(str(int(n_dime)) + " dimes")

sum_dime = int(n_dime)*DIME_VALUE
updated_user_cents = updated_user_cents - sum_dime


n_nickel = updated_user_cents/NICKEL_VALUE   # calcolo nickel

#print(str(int(n_nickel)) + " nickels")

sum_nickel = int(n_nickel)*NICKEL_VALUE
updated_user_cents = updated_user_cents - sum_nickel


n_penny = updated_user_cents/PENNY_VALUE   # calcolo penny

#print(str(int(n_penny)) + " pennies")

print(str(int(n_toonie)) + " toonies, " + str(int(n_loonie)) + " loonies, " + str(int(n_quarter)) + " quarters, " + str(int(n_dime)) + " dimes, " + str(int(n_nickel)) + " nickels, " + str(int(n_nickel)) + " nickels, " + str(int(n_penny)) + " pennies.")