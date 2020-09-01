import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

const label = "Colors";

const options = {
  Primary: "hsl(49,100%, 58%)",
  Secondary: "hsl(196, 83%, 75%)",
  Tertiary: "hsl(106, 47%, 64%)",
};

const defaultValue = "hsl(49, 100%, 58%)";
const groupId = "GROUP-ID1";

const value = select(label, options, defaultValue, groupId);

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Primary", () => <Button>Hello button</Button>)
  .add("Options", () => (
    <Button color={select(label, options, defaultValue, groupId)}>Hello button</Button>
  ))
  .add("Disabled", () => <Button disabled={boolean("Disabled", false)}>Hello button</Button>)
  .add("Secondary", () => <Button secondary>Hello button</Button>);
