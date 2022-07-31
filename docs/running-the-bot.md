---
description: Running the bot.
sidebar_position: 7
---

# Running the bot

## Before we run the bot

Make sure you have everything set up correctly in [configuring.md](configuring.md). Screwing up will take a while to fix.

## Running the actual bot

Now we can run the bot.

Type `python main.py` (or `python3 main.py`) in your terminal. (make sure it is the correct folder e.g: RedditVideoBotMaker).

![rtb](<.gitbook/assets/image (8) (1) (1).png>)

You should see something like this. It indicates that you have done everything correctly.

Now every time you wish to produce an automated video like this one, all you have to do is run `python3 main.py` (or `python main.py`) from the terminal (like this time, without any installation procedures), and the bot will pick the top posts from your favorite subreddit and produce a high-quality video ready for YouTube Shorts and TikTok. You can also dive into the code and make an infinite loop. Do note, though, that if you have any errors, we will not be able to assist you.

**Make sure you won't delete the background video** (the parkour/rocket league gameplay). It is one hour long. Deleting it will result in downloading it again the next time you run the code. The bot essentially picks two random points in the background video, creates a 60-second long clip, and pastes it in as the background of the final video.

Once your video is processed, you should be able to view it! To view it, check out [this page](viewing-the-video.md).
