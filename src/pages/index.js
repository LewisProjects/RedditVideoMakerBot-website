import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/prerequisites"
					>
						Click here to read the tutorial - 5 min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="A bot that makes videos from Reddit posts."
		>
		<Head
				<meta name="google-site-verification" content="yqvfJBHBh4gcfzB8Ov6n15yj3heY-tBv9c-MzFsYM0w" />
		</Head>
			<HomepageHeader />
			<main className={styles.main}>
				<div className={styles.container}>
					<p>
						Get in touch with Lewis and his server filled with a bunch of lovely developers <a href="https://discord.gg/5uw4eCQf6Z">here</a>.
						This simple documentation will guide you through the installation process of the bot and its required source files and get you running in no time!
					</p>
					<h2 className={styles.heading2}>What is this project?</h2>
					<p>
						The Reddit Video Maker Bot is a project made by Lewis Menelaws. It allows you to create Reddit videos with just one command.
					</p>
					<h2 className={styles.heading2}>Motivation</h2>
					<p>
						We have all seen those Text To Speech videos on YouTube and TikTok, right? A Minecraft background, screenshots from a random Reddit thread, and TTS.
						Well, those low-effort videos can be completely automated now! Using this bot, you can produce a high-quality video (perfect for your TikTok and YouTube) in 5 to 10 minutes with almost no effort.
					</p>
					<h2 className={styles.heading2}>What does it do?</h2>
					<p>
						The bot uses Reddit API to get a random thread and it's comments
						from the chosen subreddit. Then it reads the title and the body of
						the thread's comments and translates them to text to speech. It
						saves the audio to a file that can be used later. After that it uses
						Playwright to take the screenshot of the comments and saves them to
						png file. Then it downloads a random clip from a Minecraft video.
						And finally, it creates a video from the audio and the screenshot
						and compiles it to a video using FFmpeg.
					</p>
					<h2 className={styles.heading2}>Authors</h2>
					<div className={styles.author}>
						<div>
							<h3 className={styles.heading3}>Reddit Video Maker Bot</h3>
							<h4>Founder</h4>
							<ul>
								<li>Lewis Menelaws</li>
							</ul>
							<h4>Maintainers/developers</h4>
							<ul>
								<li>Jason <a href="https://github.com/JasonLovesDoggo">@JasonLovesDoggo</a></li>
								<li>Simon <a href="https://github.com/OpenSourceSimon">@OpenSourceSimon</a></li>
								<li>Callum Leslie <a href="https://github.com/callumio">@callumio</a></li>
								<li>Verq <a href="https://github.com/CordlessCoder">@CordlessCoder</a></li>
								<li>Luka Hietala <a href="https://github.com/LukaHietala">@LukaHietala</a></li>
								<li>Freebiell <a href="https://github.com/FreebieII">@FreebieII</a></li>
							</ul>
						</div>
						<div>
							<h3 className={styles.heading3}>Documentation</h3>
							<h4 className={styles.heading4}>Site</h4>
							<ul>
								<li>Simon (Owner and rewriter)</li>
							</ul>
							<h4 className={styles.heading4}>Tutorial</h4>
							<ul>
								<li>OpenSourceSimon</li>
								<li>HarryDaDev</li>
								<li>Luka Hietala</li>
								<li>micziz</li>
								<li>CordlessCoder</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
