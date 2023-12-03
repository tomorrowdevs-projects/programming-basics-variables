enter_days = int(input("How many days?"))
enter_hours = int(input("How many hours?"))
enter_minutes = int(input("How many minutes?"))
enter_seconds = int(input("How many seconds?"))


total_seconds =  enter_days * 24 * 60 * 60 + enter_hours * 60 * 60 + enter_minutes * 60 + enter_seconds

print(f"Result: {total_seconds}")