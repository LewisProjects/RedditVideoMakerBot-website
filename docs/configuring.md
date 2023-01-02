---
description: Configuring the reddit API and the bot.
sidebar_position: 6
---

# Configure The Bot

We need to do some configuration before we can use the bot.

## Setting up the API

First, you will need to get some values for the configuration. These values are:

`REDDIT_CLIENT_ID` `REDDIT_CLIENT_SECRET` `REDDIT_USERNAME` `REDDIT_PASSWORD`

You can get these values from [here](https://www.reddit.com/prefs/apps).

The next step will be the most essential in this entire section. Avoid any errors here!

Head over to the _apps_ page under the _prefs page_: [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps). Once you are here, you should scroll down and click a button saying _create another app..._ (it could be different if it's your first app). Once you click it, you should see:

![reddit](<.gitbook/assets/image (6) (1).png>)

**Name**: you can put in any name, for example: `automated-bot`

**Radio Buttons**: where it shows you the three radio buttons, pick the third one (_script)_.

**Description**: put in anything, it does not matter.

**About URL**: link any webpage like `https://google.com`.

**Redirect URI**: link any webpage like `https://google.com`.

Great, you created the app! Now you need to give the values to the bot.

![Image](https://user-images.githubusercontent.com/66544866/173240642-af00257e-4414-4a57-a3be-24443ee7c29f.png)

The text under "personal use script" is your `REDDIT_CLIENT_ID,` the text right next to SECRET is your `REDDIT_CLIENT_SECRET` (**DO NOT SHARE THIS WITH ANYONE**).

The text where it says _developers_ is your `REDDIT_USERNAME`, and `REDDIT_PASSWORD` is your Reddit account's password. **Your information is not logged**.

Next, run:

```shell
python3 main.py
```

It will initialize the setup process.

Fill in the `REDDIT_CLIENT_ID` and `REDDIT_CLIENT_SECRET` (**AGAIN, DO NOT SHARE THIS WITH ANYONE**), `REDDIT_USERNAME` and `REDDIT_PASSWORD`

## Obtaining TikTok SessionID
If you want to use the TikTok TTS, you need a TikTok account. The process of obtaining a SessionID can be difficult. 

1. Log in to the [TikTok Web App](https://tiktok.com)
2. Install the [Cookie Editor extension](https://cookie-editor.cgagnier.ca/) for your browser.
3. Open the extension and look for `sessionid`
4. Copy it
5. Paste it in the config.toml at `tiktok_sessionid`

## Filling in the rest

The setup will prompt you a couple more times, set up the bot how you like it, and then you are good to go!

## Reconfiguring the bot

After the initial setup, the bot will create a `config.toml` file in the root directory. If you need to change anything, then modify it there.
