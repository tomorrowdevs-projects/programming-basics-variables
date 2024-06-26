number_of_seconds = int(input("Enter the number of seconds to convert:"))


# Calculate days, hours, minutes, and seconds
days = number_of_seconds // (24 * 3600)
remaining_seconds = number_of_seconds % (24 * 3600)
hours = remaining_seconds // 3600
remaining_seconds %= 3600
minutes = remaining_seconds // 60
seconds = remaining_seconds % 60

# Format the time
formatted_time = "{:01d}:{:02d}:{:02d}:{:02d}".format(days, hours, minutes, seconds)

# Display the formatted time
print(f"{seconds} = {formatted_time}")