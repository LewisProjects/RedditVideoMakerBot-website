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
						This is a bot that makes videos from Reddit posts. It is built on
						the Reddit API and uses the YouTube API to create the videos.
					</p>
					<h2 className={styles.heading2}>How does it work?</h2>
					<p>
						The bot takes a subreddit and a time frame and creates videos from
						the posts in the subreddit. The time frame is in hours. The bot will
						only create videos from posts that were created within the time
						frame.
					</p>
					<h2 className={styles.heading2}>How do I use it?</h2>
					<p>
						You can use the bot by going to the{' '}
						<Link to="/docs/intro">Tutorial</Link>.
					</p>
					<h2 className={styles.heading2}>Authors</h2>
					<h3>The Reddit Video Maker Bot</h3>
					<h4>Founder</h4>
					<ul>
						<li>Lewis Menelaws</li>
					</ul>
					<h4>Maintainer/developer</h4>
					<ul>
						<li>Jason</li>
						<li>Callum Leslie</li>
						<li>Verq</li>
						<li>Luka Hietala</li>
						<li>Freebiell</li>
					</ul>
					<h3>The Documentation</h3>
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
			</main>
		</Layout>
	);
}
