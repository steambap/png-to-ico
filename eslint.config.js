import globals from "globals";

export default [
	{
		languageOptions: {
			globals: {
				...globals.es2021,
				...globals.jest,
			},
		},
		rules: {
			indent: ["error", "tab"],
			quotes: ["error", "double"],
		},
	},
];
