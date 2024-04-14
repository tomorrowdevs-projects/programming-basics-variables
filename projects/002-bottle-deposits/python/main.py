small_container = int(input("enter the amount of small containers that you're returning"))
large_container = int(input("enter the amount of large containers that you're returning"))
refund_amount =  small_container * 0.10 + large_container * 0.25
formatted_refund = "${:.2f}".format(refund_amount)
print("Your refund is:", formatted_refund)