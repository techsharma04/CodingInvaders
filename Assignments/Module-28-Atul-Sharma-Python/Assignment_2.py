videoTuple = ("Tuple in Python", [13.0, 134.5, 89.3, 98.4])

longestVideo = videoTuple[1]

# Way 1 (Using max)
print(max(longestVideo))


# Way 2 (Using for loop)
longestPlayTime = longestVideo[0]

for i in longestVideo:
    if i > longestPlayTime:
        longestPlayTime = i

print(longestPlayTime)
