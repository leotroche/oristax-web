import ts from "typescript-eslint"
import astro from "eslint-plugin-astro"

export default ts.config(
	...ts.configs.recommended,
	...astro.configs["flat/recommended"],
	...astro.configs["flat/jsx-a11y-recommended"],
	{
		rules: {
			"prefer-const": "error",
			"no-constant-condition": "error",
		},
	},
	{
		files: ["**/*.astro"],
		rules: {
			"astro/prefer-class-list-directive": "error",
		},
	},
)
