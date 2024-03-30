# 1) Ask the user for the number of days, hours, minutes and seconds
# 2) Compute the total amount of seconds
# 3) Print the input and the total amount of seconds with appropriate labels

days=int(input("Please insert the number of days (input has to be submitted as integer and in digits:"))
hours=int(input("Please insert the number of hours (input has to be submitted as integer and in digits):"))
minutes=int(input("Please insert the number of minutes (input has to be submitted as integer and in digits):"))
seconds=int(input("Please insert the number of seconds (input has to be submitted as integer and in digits):"))

seconds_amount=days*24*60*60+hours*60*60+minutes*60+seconds

print("Result seconds: "+str(seconds_amount))