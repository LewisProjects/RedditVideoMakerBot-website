---
description: >-
  playwright is an API to automate browsers like Chrome, and Firefox. etc... It
  is needed to take screenshots of the reddit thread
sidebar_position: 5
---

# Installing playwright

Playwright is installed in the requirements.txt.

You can install Playwright with the PIP package manager or Conda.

Link to the installation guide: [https://playwright.dev/python/docs/intro#pip](https://playwright.dev/python/docs/intro#pip)

## Installing playwright

```shell
pip install -r requirements.txt
```

If you do encounter errors, you can install it separately by running these commands:

```bash
pip install playwright
```

or

```bash
pip3 install playwright
```

## Installing headless browser

The headless browser will take the screenshots needed for the video.

```shell
python -m playwright install
```

```shell
python -m playwright install-deps
```
