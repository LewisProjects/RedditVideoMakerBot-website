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

## TikTok SessionId Expiring

It is, what it is - head to TikTok and log in, then copy the `sessionid` cookie from the browser and paste it into the `config.toml` file.

## TikTok Reader Crashing

TikTok TTS has a maximum character limit, ~300. If you are getting a crash, it is likely that the post is too long. You can change the `voice_choice` option in the `config.toml` file to for example `streamlabspolly`.

## Main.py Crashing Due To Video Length

This is most likely due to a corrupt video, remove the files from `assets/backgrounds`

## No matching distribution for torch 

This is because you're using Python 3.11. To solve this issue, you need to delete Python `3.11` and install Python `3.10`.

## Index out of range tried all valid filters 

This happens when bot can't find any post that satisfy the settings. Lower the `min_comment` and use different subreddits.

## Package not found

You did not install the pip packages

Install them by running

```shell
pip install -r requirements.txt
```

If you have a problem with a specific package (e.g., rich), install it by itself.

```shell
pip3 install rich
```

## Other problems

If you still face issues, try reinstalling Python and the bot and perform everything mentioned here again. 
You can also try looking for your error on the troubleshooting page or in the panic section (if there is one). 
If you still didn't manage to solve your error, raise an issue on the [GitHub repository](https://github.com/elebumm/RedditVideoMakerBot/issues) or get onto the [Discord server](https://discord.com/invite/5uw4eCQf6Z) and ask the community for some help.

