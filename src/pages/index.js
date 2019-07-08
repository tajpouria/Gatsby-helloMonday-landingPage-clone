import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SlideShow from '../components/SlideShow';

export default function index() {
  const {
    slidesJson: { properties },
  } = useStaticQuery(graphql`
    query {
      slidesJson {
        properties {
          _id
          index
          picture
          title
          content
        }
      }
    }
  `);

  return <SlideShow properties={properties} />;
}
