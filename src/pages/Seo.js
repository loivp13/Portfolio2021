import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, keywords, copyright }) => {
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    defaultCopyright,
    defaultKeywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    copyright: copyright || defaultCopyright,
    keywords: keywords || defaultKeywords,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description}></meta>
      <meta name="copyright" content={seo.copyright}></meta>
      <meta name="keywords" content={seo.keywords}></meta>
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultCopyright: copyright
        defaultKeywords: keywords
      }
    }
  }
`;
