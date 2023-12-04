playDuration = 120
subscribers = 5400567


def amountPaid(videosPlayTime, noOfSubscribers):
    # initial amount (Each user is given 10 dollars to start)
    amountPaidToTheAuthor = 10
    if videosPlayTime > 1000 and noOfSubscribers > 1000000:
        amountPaidToTheAuthor += 40
    elif videosPlayTime > 500 and noOfSubscribers > 500000:
        amountPaidToTheAuthor += 30
    elif videosPlayTime > 100 and noOfSubscribers > 100000:
        amountPaidToTheAuthor += 20
    else:
        amountPaidToTheAuthor

    return amountPaidToTheAuthor


print(
    f"The amount should be paid to the author is ${amountPaid(playDuration, subscribers)}"
)
