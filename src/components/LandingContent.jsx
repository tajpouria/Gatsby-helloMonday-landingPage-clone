import React, { useState, useEffect } from 'react';

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
      delay: 500,
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
      <div id="DIV_7">
        <span id="SPAN_8">Case</span>
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
        <div id="DIV_19">See more</div>
        <span id="SPAN_20">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {content}
          </SplitText>
        </span>
      </div>
      <div id="DIV_21" />
      <div id="DIV_22">Case</div>
    </div>
  );
}
