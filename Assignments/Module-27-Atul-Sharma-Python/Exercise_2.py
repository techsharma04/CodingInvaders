noOfPlayTimes = [110.5, 145.67, 32.3, 119.28, 7.3, 55.67, 123.4, 11.2, 226.25, 3.9]


# Find the video have been played more than 2 hours
count = 0
for i in noOfPlayTimes:
    if i > 120:
        count += 1

print(count)
