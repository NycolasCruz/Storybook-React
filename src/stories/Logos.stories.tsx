import { Meta, StoryObj } from "@storybook/react";

import { Logos } from "../components/Logos";

export default {
	title: "Components/Logos",
	component: Logos,
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "85vh",
				}}
			>
				{Story()}
			</div>
		),
	],
} as Meta;

export const Default = {} as StoryObj;
