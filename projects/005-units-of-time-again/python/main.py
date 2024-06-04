seconds = int(input("Seconds: "))
print(seconds, end =" = ")

days = seconds // 86400

seconds = seconds % 86400
hours = seconds // 3600

seconds = seconds % 3600
minutes = seconds // 60

seconds = seconds % 60

print(str(days) + ":" + str("{:02d}".format(hours)) + ":" + str("{:02d}".format(minutes)) + ":" + str("{:02d}".format(seconds)))