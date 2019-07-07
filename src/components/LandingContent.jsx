import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import flexxa_logo from '../images/Artboard 1.svg';
import './landingContent.scss';
import SplitText from 'react-pose-text';

export default function LandingContent({ property: { title, content }, yAxisQuantity }) {
  const [_yAxisQuantity, setYAxisQuantity] = useState(0);

  useEffect(() => {
    setYAxisQuantity(yAxisQuantity);
  }, [yAxisQuantity]);

  const charPoses = {
    exit: { opacity: 0, y: _yAxisQuantity },
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
        <img className="FlexxaLogo" src={flexxa_logo} />
        <span className="FlexxaLogo LogoDescription">UI App Maker</span>
      </Link>
      <div id="DIV_7">
        <span id="SPAN_10">
          <span id="SPAN_11">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              {title}
            </SplitText>
          </span>
        </span>
        <div id="DIV_15">
          <div id="DIV_16" />
        </div>
        <span id="SPAN_20">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {content}
          </SplitText>
        </span>
        <div className="dotsContainer">
          <a href="/" className="dots" />
          <p>Read More</p>
          <div className="dot" />
        </div>
      </div>
      <div id="DIV_21" />
    </div>
  );
}
