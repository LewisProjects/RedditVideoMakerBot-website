---
description: >-
  Before getting the bot to work, let's start off by checking some things from
  your list.
sidebar_position: 2
---

# Prerequisites

## Requirements

- [ ] Python, version 3.9+.

### Python

First of all, check if you have Python 3.9+ already installed by running `python3 --version` (if this does not work, try `python --version`).

It returns the following output:

```shell
Python 3.9.0
```

You can go to the next step if it's the same or higher.

If it returns the following output:

```shell
python3: command not found
```

Then you need to install Python.

#### Installing python on Windows

The easiest way to install Python on Windows is to use the [Python for Windows installer](https://www.python.org/downloads/windows/).

When you install Python this way, you will see a checkbox at the bottom which says _Add Python 3.10.x to PATH._ **Make sure you check this box. It is extremely** **crucial!**

![image](<.gitbook/assets/image (2) (1).png>) ![image](<.gitbook/assets/image (4).png>)

Alternatively, you can download Python from the Microsoft Store (not recommended, it's an outdated version and not supported by the official developers).

Finally, you can download Python using a Package Manager (e.g., [Chocolatey](https://chocolatey.org/)) by running the following command:

```powershell
choco install python
```

#### Installing python on MacOS

The easiest way to install Python 3.9+ on MacOS is to use the [Installer for Python](https://www.python.org/downloads/mac-osx/).

Once you are on the download page, click on the latest Python3 release. Then, go to the end of the page and click the `macOS 64-bit universal2 installer` button.

Then, click the `Continue` button until the installation is complete. (The installation will require your password)

Then, to check if everything is working, run the following command:

```
python3 --version
```

If it returns the following output:

```
Python 3.9.0
```

You can go to the next step (the version can be higher, but not lower).

You can also install Python on MacOS by using the [Homebrew](https://brew.sh/) package manager.

After installing Homebrew, run the following command:

```
brew install python@3.9
```

(It's recommended to install the latest version of Python)

```
brew install python@3.10
```

#### Installing python on Linux

Python may be installed on your system by default. Check it using the following command:

```bash
python3 --version
```

If it returns the following output:

```bash
Python 3.9.0
```

You are good to go (the version can be higher, but not lower)!

If not, then you can install Python by using your package manager (e.g., [apt-get](https://www.debian.org/), [yum](https://www.yum.com/), [pacman](https://www.archlinux.org/), [zypper](https://www.opensuse.org/), etc.).

Voila! You are done. 👍
