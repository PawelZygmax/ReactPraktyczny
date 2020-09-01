import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GlobalStyle from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "theme/mainTheme";
import PageContext from "context";
import PropTypes from "prop-types";

const MainTemplate = ({ children }) => {
  const [pageType, setPageType] = useState("");
  const pathname = useLocation().pathname;

  const pageTypes = ["twitters", "articles", "notes"];

  useEffect(() => {
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    setPageType(currentPage);
  }, [pathname]);

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default MainTemplate;
