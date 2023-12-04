youtubeChannels = [
    "Indie Folk",
    "RoadTravelled",
    "MusicStation",
    "Python",
    "JavaScript",
]

musicKeywords = ["Music", "folk", "song"]


def findMusicChannels(channels):
    musicChannels = []

    for channel in channels:
        if any(keyword.lower() in channel.lower() for keyword in musicKeywords):
            musicChannels.append(channel)

    return musicChannels


print(f"${findMusicChannels(youtubeChannels)}")
