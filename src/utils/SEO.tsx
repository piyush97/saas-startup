import React from "react";
import { Helmet } from "react-helmet";
import { APP_LANGUAGE, APP_NAME, HOME } from "../constants/appConstants";
/**
 * SEO Props
 */
type SEOProps = {
  /**
   * Title of The Page
   * @type {string}
   */
  title: string;
  /**
   * Description of the page
   * @type {string}
   */
  description: string;
  /**
   * Content of the page or OG
   * @type {string}
   */
  content: string;
  /**
   * Icon 57 of Apple Icon
   * @type {string}
   */
  icon57: string;

  /**
   * Icon 72 of Apple Icon
   * @type {string}
   */
  icon72: string;
  /**
   * OG Description for FB
   * @type {string}
   */
  ogDescription: string;
  /**
   * OG Image standard
   * @type {string}
   */
  ogImage: string;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  content,
  icon57,
  icon72,
  ogDescription,
  ogImage,
  children,
}) => {
  return (
    <>
      <Helmet
        encodeSpecialCharacters
        titleTemplate={`${APP_NAME} - %s`}
        defaultTitle={HOME}
      >
        {/* html attributes */}
        <html lang={APP_LANGUAGE} />
        {/* body attribute */}
        <body />
        <meta charSet="utf-8" />
        {/* title attributes and value */}
        <title itemProp="name" lang="en">
          {title}
        </title>
        {/* multiple meta elements */}
        <meta name={description} content={content} />
        {/* Open Graph Type */}
        <meta property="og:type" content={content} />
        <meta
          property="og:description"
          content={ogDescription}
          data-rh="true"
        />
        <meta property="og:image" content={ogImage} data-rh="true" />
        {/* Twitter */}
        <meta name="twitter:card" content={ogImage} />
        {/* multiple link elements */}
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="apple-touch-icon" href={icon57} />
        <link rel="apple-touch-icon" sizes="72x72" href={icon72} />
      </Helmet>
      {children}
    </>
  );
};

export default SEO;