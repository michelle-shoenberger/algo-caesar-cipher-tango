def caesar_cipher(string, shift_amount):
    ans =[]
    for char in string:
        if char.isalpha():
            new = ord(char.lower()) + shift_amount
            if new < 97: new += 26
            if new > 122: new -= 26
            if char == char.upper():
                ans.append(chr(new).upper())
            else:
                ans.append(chr(new))
        else:
            ans.append(char)

    return "".join(ans)