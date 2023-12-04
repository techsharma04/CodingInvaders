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
        if len(channel) > 15:
            if not (channel in musicChannels):
                musicChannels.append(channel)

    return musicChannels


print(f"${nameLength(youtubeChannels)}")
