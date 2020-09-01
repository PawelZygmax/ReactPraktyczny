import React from "react";
import Input from "./Input";
import { storiesOf } from "@storybook/react";

storiesOf("Input", module)
  .add("Input", () => <Input placeholder="search notes" />)
  .add("InputSearch", () => <Input search placeholder="search notes" />);
