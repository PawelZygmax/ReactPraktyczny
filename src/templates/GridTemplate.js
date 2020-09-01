import React, { useContext, useState } from "react";
import PageContext from "context";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import UserPageTemplate from "templates/UserPageTemplate";
import PropTypes from "prop-types";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import PlusIcon from "assets/icons/plus.svg";
import NewItemModal from "components/organisms/NewItemModal/NewItemModal";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-size: 35%;
  z-index: 10000;
`;

const GridTemplate = ({ children }) => {
  const pageType = useContext(PageContext);
  const [isNewItemModalVisible, setNewItemModalVisibility] = useState(false);

  const handleNewItemModalToggle = () => {
    setNewItemModalVisibility(!isNewItemModalVisible);
  };

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big as="h1">
            {pageType}
          </StyledHeading>
          <StyledParagraph>6 {pageType}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon
          icon={PlusIcon}
          activeColor={pageType}
          onClick={handleNewItemModalToggle}
        />
        <NewItemModal isVisible={isNewItemModalVisible} handleClose={handleNewItemModalToggle} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridTemplate;
