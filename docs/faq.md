# Frequently Asked Questions

- [Main.py Not Working](#mainpy-is-not-working)
- [Easy Way To Edit Config](#easy-way-to-edit-config)
- [Read The Post Not Just The Title](#read-the-post-not-just-the-title)
- [TikTok Reader Crashing](#tiktok-reader-crashing)
- [Preview TTS Voice](#preview-tts-voice)
- [TikTok SessionId Expiring](#tiktok-sessionid-expiring)
- [Main.py Crashing Due To Video Length](#mainpy-crashing-due-to-video-length)
- [No matching distribution for torch](#no-matching-distribution-for-torch)
- [Moivepy error x.mp3 not found](#moivepy-error-xmp3-not-found)
- [Index out of range tried all valid filters](#index-out-of-range-tried-all-valid-filters)
- [main.py closing automatically](#mainpy-closing-automatically)

## Main.py is not working

The most common occurence is the use of an incorrect Python version, or a missing dependency. Make sure you have Python 3.10 installed, and that you have installed the dependencies using `pip install -r requirements.txt`. If you are still having trouble, feel free to ask for help in the [Discord](https://discord.gg/QaTx2ZDqea)

## Easy Way To Edit Config

Run `python GUI.py` this opens a web editor in which you can edit the config file. You can also preview the TTS voices.

## Read The Post Not Just The Title

The bot by default will only read the title of the post. If you want to read the post as well, you can change the `story_mode` option in the `config.toml` file to `true`. This will make the bot read the post as well as the title. Method 0 is one screenshot of the whole text. We recommend method 1, which is a fancy image for every sentence.

## TikTok SessionId Expiring

It is, what it is - head to TikTok and log in, then copy the `sessionid` cookie from the browser and paste it into the `config.toml` file. Or you can write a script to do this for you :)

## TikTok Reader Crashing

TikTok TTS has a maximum character limit, ~300. If you are getting a crash, it is likely that the post is too long. You can change the `voice_choice` option in the `config.toml` file to `streamlabs`.

## Preview TTS Voice

Run the `python GUI.py`, it will open a browser window with a GUI option to change settings. You can click on the `Settings` button in the header and click on the `Speaker` icon next to each applicable option to preview the voice.

## NSFW Posts Not Working

By default NSFW is disabled. To enable it, you can change the `allow_nsfw` option in the `config.toml` file to `true`. This will make the bot read NSFW posts as well as SFW posts. 

**NOTE:** This needs to be enable on the Reddit account used to create the app.

## Main.py Crashing Due To Video Length

This is most likely due to a corrupt video, remove the files from `assets/backgrounds`

## No matching distribution for torch 

This is because you are using python 3.11 to solve this issue delete the python `3.11` and install python `3.10`

## Moivepy error x.mp3 not found

Cause of this error is unknown (possibly due to text leght being longer then limit) but you can try to use other post. 

## Index out of range tried all valid filters 

This happens when bot can't find any post that satisfy the settings. Try changing `min_comment` or `max_comment`. 

## main.py closing automatically

This a is generally cause due to directly opening main.py by clicking on it. This is the wrong way of running the bot, please open CMD on Windows and run `main.py`. For further information, please check our documentation.

