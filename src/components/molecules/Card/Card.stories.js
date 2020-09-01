import React from "react";
import Card from "./Card";
import { storiesOf } from "@storybook/react";

storiesOf("Card", module)
  .add("Twitters", () => <Card pageType="twitters" />)
  .add("Notes", () => <Card pageType="notes" />)
  .add("Articles", () => <Card pageType="articles" />);
