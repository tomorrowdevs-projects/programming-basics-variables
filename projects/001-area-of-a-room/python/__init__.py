# 1. Write a program that asks the user to enter the width and length of a room.  
# 2. Once these values have been read, your program should compute and display the area of the room.  
# 3. The length and the width will be entered as **floating-point numbers**.  
# 4. Include units in your prompt and output message; either feet or meters, depending on which
#    unit you are more comfortable working with.

width = input("Inserisci la larghezza in mq:")
length = input("Inserisci la lunghezza in mq:")

area = float(width)*float(length)

print(float(area), 'mq')