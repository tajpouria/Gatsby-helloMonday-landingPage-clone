import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ property }) {
  const { index, picture } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={require(`../images/slides/${picture}`)} alt={picture} />
    </div>
  );
}

Card.propTypes = {
  property: PropTypes.object.isRequired,
};
