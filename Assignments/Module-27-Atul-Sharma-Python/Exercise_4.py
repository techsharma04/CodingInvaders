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
        element = channel.lower()
        # if any(keyword.lower() in channel.lower() for keyword in musicKeywords):
        if "music" in element or "song" in element or "folk" in element:
            musicChannels.append(channel)

    return ", ".join(musicChannels)


print(f"{findMusicChannels(youtubeChannels)}")
