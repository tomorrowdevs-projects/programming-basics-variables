days = int(input("Days: "))
hours = int(input("Hours: "))
minutes = int(input("Minutes: "))
seconds = int(input("Seconds: "))

days = days * 86400
hours = hours * 3600
minutes = minutes * 60

resultSeconds = days + hours + minutes + seconds
print("Result seconds: ", resultSeconds)