import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const Seo = ({ title, description, keywords, copyright, image }) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();

  const {
    defaultTitle,
    defaultDescription,
    defaultCopyright,
    defaultKeywords,
    defaultImage,
    defaultUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    copyright: copyright || defaultCopyright,
    keywords: keywords || defaultKeywords,
    image: `${defaultUrl}${image || defaultImage}`,
    url: `${defaultUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="copyright" content={seo.copyright}></meta>
      <meta name="keywords" content={seo.keywords}></meta>
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
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
        defaultImage: image
        defaultUrl: siteUrl
      }
    }
  }
`;
