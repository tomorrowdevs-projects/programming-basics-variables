
human_y = int(input('Insert human years:'))

if 0 <= human_y <= 2:                                           # condizione 1
    dog_y = human_y * 10.5
    print(f'{human_y} human years = {dog_y:.1f} dog years')                                                                                                  
elif human_y > 2:                                               # condizione 2 (else if)
    dog_y = (human_y - 2) * 4 + 21
    print(f'{human_y} human years = {dog_y:.1f} dog years')                                                                                              
else:                                                           # se nessuna condizione è rispettata
    print('Negative values are not accepted')
