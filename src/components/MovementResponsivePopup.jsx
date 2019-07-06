import React, { useState } from 'react';
import movementResponsivePopupStyles from './movementResponsivePopup.module.scss';

import examplePic from '../images/gatsby-astronaut.png';

const MOVE_FORCE = 20;
const ROTATE_FORCE = 5;

export default function MovementResponsivePopup() {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = ({ screenX, screenY }) => {
    const docX = window.innerHeight;
    const docY = window.innerWidth;

    setMoveX(((screenX - docX / 2) / (docX / 2)) * 2 - MOVE_FORCE);
    setMoveY(((screenY - docY / 2) / (docY / 2)) * 2 - MOVE_FORCE);

    setRotateX(-(screenY / docY) * ROTATE_FORCE * 2 - ROTATE_FORCE);
    setRotateY(-(screenX / docX) * ROTATE_FORCE * 2 - ROTATE_FORCE);
  };

  return (
    <img
      onMouseMove={handleMouseMove}
      className={movementResponsivePopupStyles.movingZone}
      style={{
        // left: moveX,
        // top: moveY,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      src={examplePic}
      alt=""
    />
  );
}
