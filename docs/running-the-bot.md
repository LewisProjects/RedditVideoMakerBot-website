---
description: Running the bot.
sidebar_position: 6
---

# Running the bot
Now we can run the bot.

Type `python main.py` in your CMD window that should be still open. (make sure it is the correct folder e.g: RedditVideoBotMaker).

You should see something like this. Fill in the information and press enter. Don't worry, after you've filled in the information, you won't have to do it again. It's all saved in a file called `config.toml`.

![rtb](<.gitbook/assets/config.png>)

Now every time you wish to produce an automated video like this one, 
all you have to do is run `python main.py` from the terminal and the bot will pick the top posts from your 
favorite subreddit and produce a high-quality video ready for YouTube Shorts and TikTok.

**Make sure you won't delete the background video** (the parkour/rocket league gameplay). It is one hour long. Deleting it will result in downloading it again the next time you run the code. The bot essentially picks two random points in the background video, creates a 60-second long clip, and pastes it in as the background of the final video.

Once your video is processed, you should be able to view it! To view it, check out [this page](/docs/viewing-the-video).
