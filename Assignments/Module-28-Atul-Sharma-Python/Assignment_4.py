videos = {
    "Tuple in Python": [13.0, 134.5, 89.3, 98.4],
    "Lists in Python": [72.0, 83.5, 90.3, 98.4],
    "Dictionary in Python": [41.0, 114.5, 62.3, 198.4],
}
# way 1 (Using max function)
for i, j in videos.items():
    print(max(j), end=", ")


# Way 2 (Using Nested for loop)
for i, j in videos.items():
    longestPlayTime = j[0]

    for time in j:
        if time > longestPlayTime:
            longestPlayTime = time

    print(longestPlayTime, end=", ")
