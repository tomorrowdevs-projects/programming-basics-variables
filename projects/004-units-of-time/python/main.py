input_days = int(input("Enter number of days: "))
input_hours = int(input("Enter number of hours: "))
input_minutes = int(input("Enter the amount of minutes: "))
input_seconds = int(input("Enter the amount of seconds:  "))

seconds_in_day = 86400
seconds_in_hour = 3600
seconds_in_minute = 60 

calculate_seconds_in_days_amount = input_days * seconds_in_day
calculate_seconds_in_hours_amount = input_hours * seconds_in_hour
calculate_seconds_in_minutes_amount = input_minutes * seconds_in_minute

calculate_total_seconds = calculate_seconds_in_days_amount + calculate_seconds_in_hours_amount + calculate_seconds_in_minutes_amount + input_seconds
print(calculate_total_seconds)