import { themes } from "@storybook/theming";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
		},
	},
	docs: {
		theme: themes.dark,
	},
};
