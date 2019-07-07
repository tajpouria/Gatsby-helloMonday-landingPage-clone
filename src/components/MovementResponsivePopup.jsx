import React, { useState } from 'react';
import movementResponsivePopupStyles from './movementResponsivePopup.module.scss';

import gatsbyAstronaut from '../images/gatsby-astronaut.png';

export default function MovementResponsivePopup({
  children, moveX, moveY, rotateX, rotateY,
}) {
  return (
    <div
      className={movementResponsivePopupStyles.movingZone}
      style={{
        left: moveX,
        top: moveY,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      src={gatsbyAstronaut}
      alt=""
    >
      {children}
    </div>
  );
}
