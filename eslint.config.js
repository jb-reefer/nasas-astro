import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	{
		ignores: ['dist/', 'node_modules/', '.astro/', '.vercel/'],
	},
	...eslintPluginAstro.configs.recommended,
];
