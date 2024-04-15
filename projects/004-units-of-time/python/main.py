days = int(input("enter a number of days"))
hours = int(input("enter a number of hours"))
minutes = int(input("enter a number of minutes"))
seconds = int(input("enter a number of seconds"))

days_seconds = days*86400
hours_seconds = hours*3600
minutes_seconds = minutes*60
seconds_seconds = seconds*1

print(days_seconds+hours_seconds+minutes_seconds+seconds_seconds)
