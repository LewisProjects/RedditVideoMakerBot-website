---
description: Troubleshooting common problems
sidebar_position: 9
---

# Troubleshooting

On this page, we will outline some common errors you may encounter while installing and running the bot.

## Error 1: 400 Error (or credentials error)

This error means that your credentials are not set right.

Check your credentials. If this error continues, try to add the name of the bot to the developers. If that does not work, and you have a password-less login (e.g., google or apple), remove it and add the password.

## Error 2: x: command not found

It probably means you did not install something or that the command you typed is wrong.

## Error 3: can't open file 'main.py': \[Errno 2] No such file or director no such file or directory

It means you are not in the right folder. Make sure you are in the correct folder.

## Error 4: package not found

You did not install the pip packages

Install them by running

```shell
pip install -r requirements.txt
```

Or

```shell
pip3 install -r requirements.txt
```

If you have a problem with a specific package (e.g., rich), install it by itself.

```shell
pip3 install rich
```

## Other problems

If you have any other problems, check out the [Github repository](https://github.com/elebumm/RedditVideoMakerBot).
