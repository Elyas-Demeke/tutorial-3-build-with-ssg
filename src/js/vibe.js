const vibes = [
    "... and you are awesome!",
    "... and have a wonderful day!",
    "... and you've got this!",
    "... and so is this the puppy!"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]


document.querySelector(".vibe").append(vibe)