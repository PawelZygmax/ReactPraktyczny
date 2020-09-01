import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { connect } from "react-redux";

const ArticlesView = ({ articles }) => {
  return (
    <GridTemplate>
      {articles.map(({ title, content, articleUrl, created, id }) => (
        <Card
          id={id}
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(ArticlesView);
