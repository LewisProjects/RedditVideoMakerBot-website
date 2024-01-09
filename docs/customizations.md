# Customization Settings

Let's explore some common customizations for your videos. If you're new to making changes, the configuration file is where you'll start. Once you've run your bot and configured your settings, it generates a configuration file.

Here's how to access and understand this file:

**1. Locate the Configuration File**

   - After running your bot, navigate to the root of the bot folder. This folder is usually named `RedditVideoMakerBot-master`.

   - Open the `config.toml` file in your preferred text editor.


Here's an example configuration file with comments added for better understanding:

<details>
<summary>Configuration file</summary>

```yaml
[ai]
# Threads read from Reddit are sorted based on their similarity to the keywords given below
ai_similarity_enabled = false # [true, false]
# Every keyword or even sentence, separated with a comma, is used to sort the Reddit threads based on similarity
ai_similarity_keywords = "" # "Elon Musk, Twitter, Stocks"

[settings]
# Whether to allow NSFW content
allow_nsfw = false # [true, false]
# Sets the Reddit theme, either LIGHT or DARK. For story mode, you can also use a transparent background.
theme = "transparent" # ["dark", "light", "transparent", ]
# Used if you want to run multiple times. Set to an int e.g. 4 or 29 or 1
times_to_run = 1
# Sets the opacity of the comments when overlaid over the background
opacity = 0 # The opacity HAS to be between 0 and 1
# Only read out title and post content, great for subreddits with stories
storymode = true # [true, false]
# Style that's used for the story mode. Set to 0 for single picture display in the whole video, set to 1 for a fancy looking video
storymodemethod = 1
# Max length of the story mode video in characters. 200 characters are approximately 50 seconds.
storymode_max_length = 1000
# Sets the width in pixels of the final video
resolution_w = 1080
# Sets the height in pixels of the final video
resolution_h = 1920
# Sets the browser zoom level. Useful if you want the text larger. The text is really difficult to read at a zoom level higher than 2
zoom = 1.0

[settings.background]
# Sets the background for the video based on the game name
background_video = "minecraft" # ["minecraft", "gta", "rocket-league", "motor-gta", "csgo-surf", "cluster-truck", "minecraft-2","multiversus","fall-guys","steep", ""]
# Sets the background audio for the video
background_audio = "lofi" # ["lofi","lofi-2","chill-summer",""]
# Sets the volume of the background audio. If you don't want background audio, set it to 0.
background_audio_volume = 0.15 # The volume HAS to be between 0 and 1
# Used if you want to render another video without background audio in a separate folder
enable_extra_audio = false # [true, false]
# Generate a thumbnail for the video (put a thumbnail.png file in the assets/backgrounds directory.)
background_thumbnail = false # [true, false]
# Font family for the thumbnail text
background_thumbnail_font_family = "arial"
# Font size in pixels for the thumbnail text
background_thumbnail_font_size = 96
# Font color in RGB format for the thumbnail text
background_thumbnail_font_color = "255,255,255"

[settings.tts]
# The voice platform used for TTS generation.
voice_choice = "streamlabspolly" # ["elevenlabs", "streamlabspolly", "tiktok", "googletranslate", "awspolly", "pyttsx", ]
# Randomizes the voice used for each comment
random_voice = false # [true, false]
# The voice used for elevenlabs
elevenlabs_voice_name = "Bella" # ["Adam", "Antoni", "Arnold", "Bella", "Domi", "Elli", "Josh", "Rachel", "Sam", ]
# Elevenlabs API key
elevenlabs_api_key = "21f13f91f54d741e2ae27d2ab1b99d59"
# The voice used for AWS Polly
aws_polly_voice = "Matthew"
# The voice used for Streamlabs Polly
streamlabs_polly_voice = "Matthew"
# The voice used for TikTok TTS
tiktok_voice = "en_us_001"
# TikTok sessionid needed if you're using the TikTok TTS. Check documentation if you don't know how to obtain it.
tiktok_sessionid = "c76bcc3a7625abcc27b508c7db457ff1"
# The index of the system TTS voices (can be downloaded externally, run ptt.py to find value, start from zero)
python_voice = "1"
# The number of system voices (2 are pre-installed in Windows)
py_voice_num = "2"
# Time in seconds between TTS

 comments
silence_duration = 0.3
# Whether to remove emojis from the comments
no_emojis = false

[reddit.creds]
# The ID of your Reddit app of SCRIPT type
client_id = "fFAGRNJru1FTz70BzhT3Zg"
# The SECRET of your Reddit app of SCRIPT type
client_secret = "fFAGRNJru1FTz70BzhT3Zg"
# The username of your Reddit account
username = "JasonLovesDoggo"
# The password of your Reddit account
password = "fFAGRNJru1FTz70BzhT3Zg"
# Whether you have Reddit 2FA enabled, Valid options are True and False
2fa = false # [true, false]

[reddit.thread]
# If set to false, it will ask you a thread link to extract the thread, if true it will randomize it.
random = false # [true, false]
# What subreddit to pull posts from, the name of the sub, not the URL. You can have multiple subreddits, add a + with no spaces.
subreddit = "LetsNotMeet+NoSleep+hfy+tifu"
# Used if you want to use a specific post.
post_id = ""
# max number of characters a comment can have.
max_comment_length = 500 # the max comment length should be between 10 and 10000
# min_comment_length number of characters a comment can have.
min_comment_length = 1 # the min comment length should be between 1 and 100
# The language you would like to translate to. leave blank for native post language.
post_lang = "" # ['','af', 'ak', 'am', 'ar', 'as', 'ay', 'az', 'be', 'bg', 'bho', 'bm', 'bn', 'bs', 'ca', 'ceb', 'ckb', 'co', 'cs', 'cy', 'da', 'de', 'doi', 'dv', 'ee', 'el', 'en', 'en-US', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gom', 'gu', 'ha', 'haw', 'hi', 'hmn', 'hr', 'ht', 'hu', 'hy', 'id', 'ig', 'ilo', 'is', 'it', 'iw', 'ja', 'jw', 'ka', 'kk', 'km', 'kn', 'ko', 'kri', 'ku', 'ky', 'la', 'lb', 'lg', 'ln', 'lo', 'lt', 'lus', 'lv', 'mai', 'mg', 'mi', 'mk', 'ml', 'mn', 'mni-Mtei', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'nso', 'ny', 'om', 'or', 'pa', 'pl', 'ps', 'pt', 'qu', 'ro', 'ru', 'rw', 'sa', 'sd', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tr', 'ts', 'tt', 'ug', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'yo', 'zh-CN', 'zh-TW', 'zu']
# The minimum number of comments a post should have to be included.
min_comments = 20 # the minimum number of comments should be between 15 and 999999
```
</details>

Feel free to customize these settings as needed to achieve the desired results for your videos.

**NOTE: Any changes to the config file that do not fall within the proper criteria will prevent the bot from running**

------------

# Advanced Customizations: 

Now, let's take a step into more advanced customizations by adding new background videos to make your videos stand out. Here's how to do it:

<details>
<summary>Adding New Background Videos</summary>
  

##### **NOTE: We aim to develop a user-friendly graphical interface (currently a work in progress) in the future, eliminating the need for this manual configuration. Once it's operational, this section will be removed.**

1. Start by finding the video you want to use on YouTube. It's crucial to choose copyright-free and lengthy videos for the best results.

2. **Locate and open** `utils\background_videos.json` in your bot's directory.

3. **Scroll to the bottom** of the file, where you'll find the last entry for a background video.

4. **Copy the last entry**, which should look something like this:

    ```json
    "steep": [
        "https://www.youtube.com/watch?v=EnGiQrWBrko",
        "steep.mp4",
        "joel",
        "center"
    ]
    ```

5. **After** the last entry, add a comma after the last `]` then hit "Enter" and "Home" on your keyboard to position the cursor at the beginning of the new line.

To format the provided text properly for a GitHub Markdown file, you can use the following code blocks and markdown formatting:


6. **Paste** the entry you copied in the previous step (`Ctrl + V`) on the new line.

	```json
	"steep": [
	    "https://www.youtube.com/watch?v=EnGiQrWBrko",
	    "steep.mp4",
	    "joel",
	    "center"
	],
	"steep": [
	    "https://www.youtube.com/watch?v=EnGiQrWBrko",
	    "steep.mp4",
	    "joel",
	    "center"
	]
	```

7. **Modify** the last entry to match your new video. Here's an example:

	```json
	"steep": [
	    "https://www.youtube.com/watch?v=EnGiQrWBrko",
	    "steep.mp4",
	    "joel",
	    "center"
	],
	"nyc-drone": [
	    "https://www.youtube.com/watch?v=CouF-tNHV3g",
	    "nyc_drone.mp4",
	    "the Dronalist",
	    "center"
	]
	```

***Ensure that everything lines up correctly.***

8. **Save** the `background_videos.json` file.

9. **Open `\utils\.config.templat.toml`**: If you can't find this file, you may need to enable "Show hidden files, folders, and drives" in your folder options.

10. **Scroll** to `[settings.background]` Within the `.config.templat.toml` file.

11. **Find `background_video`** and an array of video options:

    ```toml
    options = ["minecraft", "gta", "rocket-league", "motor-gta", "csgo-surf", "cluster-truck", "minecraft-2","multiversus","fall-guys","steep",""],
    ```

12. **Add Your Video** to the list of options, following the correct pattern. In this example, we added `"nyc-drone"`:

    ```toml
    options = ["minecraft", "gta", "rocket-league", "motor-gta", "csgo-surf", "cluster-truck", "minecraft-2","multiversus","fall-guys","steep","nyc-drone",""],
    ```

   ***Ensure that your entry is well-formatted and correctly placed in the list.***

13. **Save** the `.config.templat.toml` file.

14. **Head back** to your `config.toml` file and eddit your `background_video = "nyc-drone"` under the `[settings.background]` section  

These steps will enable your bot to use the new background video you've added. Remember to follow the correct syntax and ensure that your video is copyright-free for a smooth video-making experience.
</details>

<details>
	
<summary>Creating the single text caption video with reddit card intro.</summary>


**Please note: This process requires some manual editing, as it can't be fully automated by the bot.**

To create a video with a Reddit card introduction while removing the text from the Reddit post, follow these steps:

1. **Configure the Bot for Background and TTS Audio Only**

   Open your `config.toml` file and locate the `[settings]` section. Make the following changes:

   ```toml
   [settings]
   theme = "transparent"
   opacity = 0.0
   ```

   Optionally, you can also disable the background audio if needed.
      ```
   # Sets the volume of the background audio. If you don't want background audio, set it to 0.
   background_audio_volume = 0 # The volume HAS to be between 0 and 1
   ```

2. **Adjust Image Generator Settings**

   Open the `/utils/imagenarator.py` file and scroll down until you find this section of code:
   
   ```python
   if transparent:
       font = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 100)
       tfont = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 100)
   else:
       tfont = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 100)  # for title
       font = ImageFont.truetype(os.path.join("fonts", "Roboto-Regular.ttf"), 100)
   size = (1920, 1080)
   ```

   Change all the `100` values to `0` like this:

   ```python
   if transparent:
       font = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 0)
       tfont = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 0)
   else:
       tfont = ImageFont.truetype(os.path.join("fonts", "Roboto-Bold.ttf"), 0)  # for title
       font = ImageFont.truetype(os.path.join("fonts", "Roboto-Regular.ttf"), 0)
   size = (1920, 1080)
   ```

3. **Adding the Introduction Card and Captions**

Once your bot is configured to produce a background image with TTS voice, watch this short video tutorial to learn how to add the introduction card and word-by-word captions:

<video height="600px" controls>  
<source src="https://github.com/theovit/RedditVideoMakerBot-website/raw/Customizations/docs/samples/videos/CapCutCaptions%26Intro.mp4"  type="video/mp4"></source>
</video>

This should be the result of all your hard work.

<video height="600px" controls>  
<source src="https://github.com/theovit/RedditVideoMakerBot-website/raw/Customizations/docs/samples/videos/CapCutCaptions%26Intro-Results.mp4"  type="video/mp4"></source>
</video>




</details>

**Note: Any changes to the config file that don't adhere to the proper criteria may prevent the bot from running correctly.**
