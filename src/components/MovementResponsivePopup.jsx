import React from 'react';
import PropTypes from 'prop-types';
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
MovementResponsivePopup.propTypes = {
  children: PropTypes.object.isRequired,
  moveX: PropTypes.number.isRequired,
  moveY: PropTypes.number.isRequired,
  rotateX: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
};
