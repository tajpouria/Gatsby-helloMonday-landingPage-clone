import React from 'react';
import { Link } from 'gatsby';
import SplitText from 'react-pose-text';
import PropTypes from 'prop-types';

import flexxaLogo from '../images/Artboard 1.svg';
import './landingContent.scss';

export default function LandingContent({ property: { title, content } }) {
  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: 1000,
    },
  };

  return (
    <div id="DIV_1">
      <div id="DIV_2">
        What's up
        <div id="DIV_3" />
      </div>
      <a href="mailto:hello@hellomonday.com" id="A_5">
        hello@flexxa.com
      </a>
      <div id="DIV_6">© Copyright 2019</div>
      <Link to="/">
        <img alt="flexxa" className="FlexxaLogo" src={flexxaLogo} />
        <span className="FlexxaLogo LogoDescription">UI App Maker</span>
      </Link>
      <span id="SPAN_11">
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          {title}
        </SplitText>
      </span>
      <span id="SPAN_20">
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          {content}
        </SplitText>
      </span>
      <div id="DIV_7">
        <a href="/" className="dots" />
        <div className="dot" />
        <p className="dotsContainer-text">Read more</p>
      </div>
    </div>
  );
}

LandingContent.propTypes = {
  property: PropTypes.object.isRequired,
};
