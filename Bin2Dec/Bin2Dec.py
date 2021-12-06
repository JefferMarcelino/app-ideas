def converter(number):
    decimal_number = 0 
    chars = len(bin_number) # number of characters in binary number
    position_chars = chars #position of the number in which the calculations will be made
    Condition = None #condition for made the calculations

    #cheking the conditions
    for digit in number:
        if int(digit) > 1:
            Condition = False
        if chars > 8:
            Condition = False
    
    #perfoming the calculations
    if Condition is None and True:
        for digit in bin_number:
            position_chars -= 1
            digit = int(digit)
            decimal_number += (2**(position_chars)) * digit
        print(f"The binary number {bin_number} in decimal is {decimal_number}")
    #warning that one of the requirements was not met
    else:
        print("X - Please, write 0 or 1, and a number less than 8 digits")


#starting the program
bin_number = input("Write a binary number to convert: ")
converter(bin_number)