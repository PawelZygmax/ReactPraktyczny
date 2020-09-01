import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Sidebar from "./Sidebar";
import StoryRouter from "storybook-react-router";

storiesOf("Sidebar", module)
  .addDecorator(StoryRouter())
  .add("Normal", () => <Sidebar />);
