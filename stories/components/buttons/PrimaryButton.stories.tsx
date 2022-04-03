import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryButtonCode from "./PrimaryButton.code";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

export default {
  title: "Buttons/Primary Button",
  component: PrimaryButton,
  parameters: {
    componentSource: {
      code: PrimaryButtonCode,
      language: "javascript",
    },
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = { text: "Button" };
