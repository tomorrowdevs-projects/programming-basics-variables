
day_sec = 86400
hours_sec = 3600
minutes_sec = 60
# i = 2

# user input

n_seconds = int(input("Insert a number of seconds:"))

# calculation Day

n_day = n_seconds // day_sec
n_seconds = n_seconds % day_sec

# calculation Hours

n_hours = n_seconds // hours_sec
n_seconds = n_seconds % hours_sec

# calculation Minutes

n_minutes = n_seconds // minutes_sec
n_seconds = n_seconds % minutes_sec


print(f'{n_day}:{n_hours:02}:{n_minutes:02}:{n_seconds:02}')  # f-string ":02" indica il numero di digits totali mettendo uno zero davanti ai numeri con cifra singola
# ALTERNATIVA: print(f'{(int(n_day))}:{int(n_hours):0{i}}:{int(n_minutes):0{i}}:{int(n_seconds):0{i}}')

