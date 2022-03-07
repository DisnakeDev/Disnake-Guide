// @ts-check

module.exports = {
	title: 'Disnake Guide',
	url: 'https://guide.disnake.dev/',
	favicon: 'public/favicon.ico',

	organizationName: 'DisnakeDev',
	projectName: 'guide',
	baseUrl: '/',
	trailingSlash: false,

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/DisnakeDev/guide/edit/main/guide',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/css/lightTheme.css'),
						require.resolve('./src/css/darkTheme.css'),
						require.resolve('./src/css/extraComponents.css'),
					],
				},
			}),
		],
	],

	themeConfig: {
		colorMode: {
			respectPrefersColorScheme: true,
		},
		metadata: [
			{
				name: 'og:image',
				content: 'https://guide.disnake.dev/public/disnake-meta-image.png',
			},
			{
				name: 'theme-color',
				content: '#f0c43f',
			},
			{
				name: 'twitter:card',
				content: 'summary',
			},
		],
		navbar: {
			title: 'Disnake',
			logo: {
				alt: 'Disnake Logo',
				src: 'public/disnake-logo.png',
				href: 'https://disnake.dev/',
			},
			items: [
				{
					to: 'https://docs.disnake.dev/',
					label: 'Docs',
					position: 'left',
				},
				{
					to: '/',
					label: 'Guide',
					position: 'left',
				},
				{
					to: 'https://docs.disnake.dev/en/latest/api.html',
					label: 'API Reference',
					position: 'left',
				},
				{
					href: 'https://github.com/DisnakeDev/disnake',
					className: 'navbar-item-github',
					position: 'right',
				},
			],
		},
		autoCollapseSidebarCategories: true,
		prism: {
			theme: require('./src/utils/prismLight'),
			darkTheme: require('./src/utils/prismDark'),
		},
		algolia: {
			appId: 'WPCP8YA273',
			apiKey: '5a21886b115baa4f6819b23d0a1e87c0',
			indexName: 'guide-disnake',
			placeholder: 'Search',
		},
	},
};
