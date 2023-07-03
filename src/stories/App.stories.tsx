import { Meta, StoryObj } from "@storybook/react";
import { App } from "../App";

export default {
    title: "App",
    component: App,
    decorators: [
        (Story) => (
            <div id="root">
                {Story()}
            </div>
        )
    ],
} as Meta;

export const Default = {} as StoryObj;