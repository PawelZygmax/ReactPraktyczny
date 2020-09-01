import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";
import bulbIcon from "assets/icons/bulb.svg";
import logoutIcon from "assets/icons/logout.svg";
import penIcon from "assets/icons/pen.svg";
import twitterIcon from "assets/icons/twitter.svg";
import plusIcon from "assets/icons/plus.svg";
import styled from "styled-components";

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.notes};
`;

storiesOf("ButtonIcon", module)
  .addDecorator((story) => <YellowBackground>{story()}</YellowBackground>)
  .add("bulbIcon", () => <ButtonIcon icon={bulbIcon}></ButtonIcon>)
  .add("bulbIconActive", () => <ButtonIcon active icon={bulbIcon}></ButtonIcon>)
  .add("logoutIcon", () => <ButtonIcon icon={logoutIcon}></ButtonIcon>)
  .add("penIcon", () => <ButtonIcon icon={penIcon}></ButtonIcon>)
  .add("plusIcon", () => <ButtonIcon icon={plusIcon}></ButtonIcon>)
  .add("twitterIcon", () => <ButtonIcon icon={twitterIcon}></ButtonIcon>);
