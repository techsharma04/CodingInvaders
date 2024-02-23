def decode(message_file):
    decoded_words = {}  # Create an empty dictionary to store decoded words

    # Read the encoded message from the file and parse lines
    with open("coding_qual_input.txt") as file:
        for line in file:
            num, word = line.split()
            decoded_words[int(num)] = word  # Store words in the dictionary

    # Construct the decoded message
    decoded_message = " ".join(
        decoded_words.get(num, "") for num in range(1, len(decoded_words) + 1)
    )

    return decoded_message


# Example usage:
decoded_message = decode("encoded_message.txt")
print(decoded_message)
