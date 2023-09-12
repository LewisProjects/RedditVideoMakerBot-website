---
description: Troubleshooting common problems
sidebar_position: 8
---

# Troubleshooting

On this page, we will outline some common errors you may encounter while installing and running the bot.

## 400 Error (or credentials error)

This error means that your credentials are not set right.

Check your credentials. If this error continues, use a different account. Accounts with Google or other social logins won't work.

## Can't open file 'main.py': [Errno 2] No such file or director no such file or directory

It means you are not in the right folder. Make sure you are in the correct folder.

## TikTok Bugs
### Tiktok SessionId Expiring

It is, what it is - head to TikTok and log in, then copy the `sessionid` cookie from the browser and paste it into the `config.toml` file.

### TikTok Reader Crashing

TikTok TTS has a maximum character limit, ~300. If you are getting a crash, it is likely that the post is too long. You can change the `voice_choice` option in the `config.toml` file to for example `streamlabspolly`.

### Error: Error: Code: 1
 Error: Code: 1, reason: probably the aid value isn't correct, message: Couldn't load speech. Try again."
If you encounter this error from Tiktok TTS, it's likely due to a rate limit issue. You can change your voice choice in `config.toml` to resolve it. Example:

```plaintext
[settings.tts]
voice_choice = "streamlabspolly" # Choose from ["elevenlabs", "streamlabspolly", "tiktok", "googletranslate", "awspolly", "pyttsx"]
```

## Error: "AttributeError: module 'ffmpeg' has no attribute 'input'"
To resolve this error, uninstall the "ffmpeg" package and install "ffmpeg-python" with these commands:
```sh
pip uninstall ffmpeg
```
```sh
pip install ffmpeg-python
```

## Main.py Crashing Due To Video Length

This is most likely due to a corrupt video, remove the files from `assets/backgrounds`

## No matching distribution for torch 

This is because you're using Python 3.11. To solve this issue, you need to delete Python `3.11` and install Python `3.10`.

## Index out of range tried all valid filters 

This happens when bot can't find any post that satisfy the settings. Lower the `min_comment` and use different subreddits.

## Error: "package not found"
If you receive a "package not found" error, it means you haven't installed the required pip packages. To install them, run either of the following commands based on your Python version:
```shell
pip install -r requirements.txt
```
or
```shell
pip3 install -r requirements.txt
```
If you're facing issues with a specific package (e.g., "rich"), you can install it individually using:
```shell
pip3 install rich
```

## Other problems

If you still face issues, try reinstalling Python and the bot and perform everything mentioned here again. 
You can also try looking for your error on the troubleshooting page or in the panic section (if there is one). 
If you still didn't manage to solve your error, raise an issue on the [GitHub repository](https://github.com/elebumm/RedditVideoMakerBot/issues) or get onto the [Discord server](https://discord.com/invite/5uw4eCQf6Z) and ask the community for some help.

