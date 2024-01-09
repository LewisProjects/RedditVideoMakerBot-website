// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Reddit Video Maker Bot',
	tagline: 'Create Reddit Videos with just✨ one command ✨',
	url: 'https://docusaurus-2.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: ' ',
	organizationName: 'LewisProjects', // Usually your GitHub org/user name.
	projectName: 'RedditVideoMakerBot-website', // Usually your repo name.

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	scripts: [
    		{
      			defer: true,
      			"data-domain": "reddit-video-maker-bot.netlify.app",
      			src: "https://analytics.opensourcesimon.dev/js/script.js",
    		}, // Analytics
  	],
	headTags: [
    		{
      			tagName: 'meta',
      			attributes: {
        			name: 'google-site-verification',
        			content: 'yqvfJBHBh4gcfzB8Ov6n15yj3heY-tBv9c-MzFsYM0w',
      			},
    		},
  	],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/LewisProjects/RedditVideoMakerBot-website/blob/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'RedditVideoMakerBot',
				items: [
					{
						type: 'doc',
						docId: 'prerequisites',
						position: 'left',
						label: 'Tutorial',
					},
					{
						href: 'https://github.com/elebumm/RedditVideoMakerBot',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://discord.gg/VAAkJTXcr8',
						label: 'Discord',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
				{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/prerequisites',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/VAAkJTXcr8',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
