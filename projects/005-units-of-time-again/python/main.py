user_seconds = int(input("Enter an amount of seconds: "))

user_days = user_seconds // 86400
remaining_seconds_after_days = user_seconds % 86400

user_hours = remaining_seconds_after_days // 3600
remaining_seconds_after_hours = remaining_seconds_after_days % 3600

user_minutes = remaining_seconds_after_hours // 60
remaining_seconds = remaining_seconds_after_hours % 60

print(f"{user_days}:{user_hours:02d}:{user_minutes:02d}:{remaining_seconds:02d}")
