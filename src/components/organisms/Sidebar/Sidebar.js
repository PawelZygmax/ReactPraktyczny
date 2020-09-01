import React, { useContext } from "react";
import styled from "styled-components";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import { NavLink } from "react-router-dom";
import bulbIcon from "assets/icons/bulb.svg";
import logoutIcon from "assets/icons/logout.svg";
import penIcon from "assets/icons/pen.svg";
import twitterIcon from "assets/icons/twitter.svg";
import logo from "assets/icons/logo.svg";
import PageContext from "context";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 0;
  height: 100vh;
  width: 153px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
  align-items: center;
  justify-content: space-between;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = () => {
  const pageType = useContext(PageContext);

  return (
    <StyledWrapper activeColor={pageType}>
      <StyledLogoLink to="/notes" />
      <StyledLinksList>
        <ButtonIcon as={NavLink} activeClass="active" to="/notes" icon={penIcon} />
        <ButtonIcon as={NavLink} activeClass="active" to="/twitters" icon={twitterIcon} />
        <ButtonIcon as={NavLink} activeClass="active" to="/articles" icon={bulbIcon} />
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" activeClass="active" icon={logoutIcon} />
    </StyledWrapper>
  );
};

export default Sidebar;
