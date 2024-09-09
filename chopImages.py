from PIL import Image
import numpy as np
import os

# List files in ./stimuli
files = os.listdir("./stimuli")
files = [f for f in files if f.endswith(".jpg")]

# Loop through files
for file in files:
    # Load the file
    img = Image.open("./stimuli/" + file)
    # Check if the image has the right width
    if img.size[0] not in [576, 600]:
        continue

    # Split the image into 3 equally sized pieces by width
    width = img.size[0] // 3
    img1 = img.crop((0, 0, width, img.size[1]))
    img2 = img.crop((width, 0, 2 * width, img.size[1]))
    img3 = img.crop((2 * width, 0, img.size[0], img.size[1]))

    # Save images
    img1.save("./stimuli/" + file[:-4] + "_1.jpg")
    img2.save("./stimuli/" + file[:-4] + "_2.jpg")
    img3.save("./stimuli/" + file[:-4] + "_3.jpg")
