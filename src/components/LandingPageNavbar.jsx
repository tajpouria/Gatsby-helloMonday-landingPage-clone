import React from 'react';

import './landingPageNavbar.scss';

export default function LandingPageNavbar({ items }) {
  return (
    <div className="LandingPageNavBar">
      {items.map(item => (
        <div key={item} className="LandingPageNavBar-regular">
          {item}
        </div>
      ))}
      <div className="LandingPageNavBar-commerce">Try For Free</div>
    </div>
  );
}
