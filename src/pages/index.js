import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

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
						to="/docs/intro"
					>
						Tutorial - 5min ⏱️
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
			<HomepageHeader />
			<main className={styles.main}>
				<div className={styles.container}>
					<h2 className={styles.heading2}>What is this?</h2>
					<p>
						The Reddit Video Maker Bot is a bot by Lewis Menelaws. It allows you to create Reddit videos with just one command.
					</p>
					<h2 className={styles.heading2}>How does it work?</h2>
					<p>
						The bot uses Reddit API to get a random thread and it's comments
						from the chosen subreddit. Then it reads the title and the body of
						the thread's comments and translates them to text to speech. It
						saves the audio to a file that can be used later. After that it uses
						Playwright to take the screenshot of the comments and saves them to
						png file. Then it downloads a random clip from a Minecraft video.
						And finally, it creates a video from the audio and the screenshot
						and saves it to a file using a package called Moviepy.
					</p>
					<h2 className={styles.heading2}>How do I use it?</h2>
					<p>
						You can learn how to use the bot in {' '}
						<Link to="/docs/intro">Tutorial</Link>.
					</p>
					<h2 className={styles.heading2}>Authors</h2>
					<div className={styles.author}>
						<div>
							<h3 className={styles.heading3}>Reddit Video Maker Bot</h3>
							<h4>Founder</h4>
							<ul>
								<li>Lewis Menelaws</li>
							</ul>
							<h4>Maintainer/developer</h4>
							<ul>
								<li>Jason</li>
								<li>Simon</li>
								<li>Callum Leslie</li>
								<li>Verq</li>
								<li>Luka Hietala</li>
								<li>Freebiell</li>
							</ul>
						</div>
						<div>
							<h3 className={styles.heading3}>Documentation</h3>
							<h4 className={styles.heading4}>Site</h4>
							<ul>
								<li>Luka Hietala (Owner)</li>
							</ul>
							<h4 className={styles.heading4}>Tutorial</h4>
							<ul>
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
