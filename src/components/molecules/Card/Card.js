import React, { useContext, useState } from "react";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/link.svg";
import PageContext from "context";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { removeItemAction } from "actions";

const StyledWrapper = styled.div`
  border-radius: 10px;
  min-width: 300px;
  overflow: hidden;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.2);
  min-height: 380px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const StyledHeadingWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.notes)};
  position: relative;
  z-index: 10;
`;

const StyledBodyWrapper = styled.div`
  padding: 17px 30px 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 40px 0 0;
`;

const StyledHeadingTwitters = styled(Heading)`
  margin: 5px 60px 0 0;
`;

const StyledAvatar = styled.img`
  width: 67px;
  height: 67px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
`;

const Card = ({ id, title, created, twitterName, articleUrl, content, removeItem }) => {
  const pageType = useContext(PageContext);
  const [redirect, setRedirect] = useState(false);

  const handleCardClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={`${pageType}/${id}`} />;
  }

  return (
    <StyledWrapper onClick={handleCardClick}>
      <StyledHeadingWrapper activeColor={pageType}>
        {pageType === "twitters" ? (
          <StyledHeadingTwitters>{title}</StyledHeadingTwitters>
        ) : (
          <StyledHeading>{title}</StyledHeading>
        )}
        <DateInfo>{created}</DateInfo>
        {pageType === "twitters" && (
          <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />
        )}
        {pageType === "articles" && <StyledLinkButton href={articleUrl} />}
      </StyledHeadingWrapper>
      <StyledBodyWrapper>
        <Paragraph>{content}</Paragraph>
        <Button secondary onClick={() => removeItem(pageType, id)}>
          REMOVE
        </Button>
      </StyledBodyWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  twitterName: null,
  articleUrl: null,
};

const mapDisptachToProps = (dispatch) => ({
  removeItem: (pageType, id) => dispatch(removeItemAction(pageType, id)),
});

export default connect(null, mapDisptachToProps)(Card);
