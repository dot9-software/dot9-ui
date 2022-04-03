import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExampleButton from "../../example/Example";
import ExampleButtonCode from "./Example.code";

export default {
  title: "Example",
  component: ExampleButton,
  parameters: {
    componentSource: {
      code: ExampleButtonCode,
      language: "javascript",
    },
  },
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Button",
      description: "The buttons text",
      table: {
        defaultValue: { summary: "Button" },
      },
    },
    color: {
      control: "color",
      defaultValue: "#0356fc",
      description: "The buttons backgroundColor",
      table: {
        defaultValue: { summary: "#0356fc" },
      },
    },
  },
} as ComponentMeta<typeof ExampleButton>;

const Template: ComponentStory<typeof ExampleButton> = (args) => (
  <ExampleButton {...args} />
);

export const ExampleStory = Template.bind({});
ExampleStory.args = { text: "Button", color: "#0356fc" };
