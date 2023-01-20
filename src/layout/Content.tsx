import React from 'react';
import { Helmet } from 'react-helmet';

type ContentProps = {
  element: React.ReactNode
  title: string
};

const Content:React.FC<ContentProps> = ({ element, title }) => {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {element}
    </>
  )
}
export default Content;