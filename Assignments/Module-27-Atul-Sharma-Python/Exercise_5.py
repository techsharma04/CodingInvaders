youtubeChannels = [
    "Indie Folk Central",
    "RoadTravelledLess",
    "Netflix",
    "PlayStation",
    "RoadTravelledLess",
    "Python is Awesome",
    "JavaScript",
]


def nameLength(channels):
    musicChannels = []

    for channel in channels:
        if len(channel) > 15 and channel not in musicChannels:
            musicChannels.append(channel)

    return "\n".join(musicChannels)


print(f"{nameLength(youtubeChannels)}")
