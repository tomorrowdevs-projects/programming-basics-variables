# REQUIREMENTS
# 1) Take a number of seconds from the user as input (the number of seconds has to be less than 864000, i.e. 10 days)
# 2) Compute the equivalent time in format D:HH:MM:SS
# 3) Print at video in format D:HH:MM:SS
# 4) HH, MM and SS has to occupy only two digits

seconds_input=int(input("Please insert the number of seconds as an integer (input has to be submitted in digits and has to\
be less than 864000 s, i.e. 10 days):"))

seconds_amount=seconds_input

days_number=seconds_amount//86400
seconds_amount-=86400*days_number

hours_number=seconds_amount//3600
seconds_amount-=3600*hours_number

minutes_number=seconds_amount//60
seconds_amount-=60*minutes_number

print(str(seconds_input)+" = "+str(days_number)+':'+format(hours_number,'0>2')+':'+format(minutes_number,'0>2')+':'+format(seconds_amount,'0>2'))