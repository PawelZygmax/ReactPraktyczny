import React, { useContext } from "react";
import styled from "styled-components";
import Input from "components/atoms/Input/Input";
import Button from "components//atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import PageContext from "context";
import { connect } from "react-redux";
import { addItemAction } from "actions";
import { Formik, Form, Fields, ErrorMessage } from "formik";

const StyledWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  padding: 100px 90px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemModal = ({ isVisible, addItem, handleClose }) => {
  const pageType = useContext(PageContext);
  return (
    <StyledWrapper activeColor={pageType} isVisible={isVisible}>
      <Heading big>Create new {pageType}</Heading>
      <Formik
        initialValues={{ title: "", content: "", articleUrl: "", twitterName: "", created: "" }}
        onSubmit={(values) => {
          addItem(pageType, values);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {pageType === "twitters" && (
              <StyledInput
                placeholder="twitter name eg. hello_roman"
                type="text"
                name="twitterName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}
            {pageType === "articles" && (
              <StyledInput
                placeholder="link"
                type="text"
                name="articleUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}
            <StyledTextArea
              name="content"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <Button type="submit" activeColor={pageType}>
              Add Note
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (pageType, content) => dispatch(addItemAction(pageType, content)),
});

export default connect(null, mapDispatchToProps)(NewItemModal);
