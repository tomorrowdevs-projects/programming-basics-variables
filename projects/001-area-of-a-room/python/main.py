#RICHIESTA
# Write a program that:
#1) asks the user to enter the width and length of a room;  
#2) Once these values have been read, your program should compute and display the area of the room; 
#3) The length and the width will be entered as **floating-point numbers**;  
#4) Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.

room_legnth=float(input("Enter the length of the room in the unit of measur you choosed (the length has to be insert in digits):"))
room_width=float(input("Enter the width of the room in the unit of measur you choosed (the length has to be insert in digits):"))
room_area=room_legnth*room_width
print("The area of the room is "+str(room_area)+' U.M.\xb2')