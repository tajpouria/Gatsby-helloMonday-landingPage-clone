import React, { Component } from 'react';

import LandingContent from '../components/LandingContent';
import MovementResponsivePopup from './MovementResponsivePopup';

import './slideShow.scss';
import Card from './Card';
import data from './data/data';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      yAxisQuantity: 0,
    };
  }

  nextProperty = () => {
    const { property } = this.state;
    if (property.index === data.properties.length - 1) return;
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
      yAxisQuantity: -20,
    });
  };

  prevProperty = () => {
    const { property } = this.state;
    if (property.index === 0) return;
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
      yAxisQuantity: 20,
    });
  };

  render() {
    const { properties, property, yAxisQuantity } = this.state;
    return (
      <div onWheel={() => this.nextProperty()} className="SlideShow">
        <a onClick={() => this.nextProperty()} className="btn prev">
          <i className="fas fa-chevron-up"></i>
        </a>
        <a onClick={() => this.prevProperty()} className="btn next">
          <i className="fas fa-chevron-down"></i>
        </a>
        <MovementResponsivePopup>
          <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateY(-${property.index * (100 / properties.length)}%)`,
                  }}
                >
                  {properties.map(property => (
                    <Card key={property._id} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MovementResponsivePopup>
        <LandingContent yAxisQuantity={yAxisQuantity} property={property} />
      </div>
    );
  }
}
