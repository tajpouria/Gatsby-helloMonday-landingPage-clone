import React, { Component } from 'react';

import LandingContent from '../components/LandingContent';
import MovementResponsivePopup from './MovementResponsivePopup';
import LandingPageNavbar from './LandingPageNavbar';

import './slideShow.scss';
import Card from './Card';

const MOVE_FORCE = 20;
const ROTATE_FORCE = 1.6;

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.properties,
      property: this.props.properties[0],
      yAxisQuantity: 0,
      moveX: 0,
      moveY: 0,
      rotateX: 0,
      rotateY: 0,
      loading: false,
    };
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.nextProperty();
    }, 10000);
  }

  nextProperty() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.nextProperty();
    }, 10000);
    const { properties } = this.state;
    let newIndex = this.state.property.index + 1;
    if (newIndex >= properties.length) newIndex = 0;
    this.setState({
      property: properties[newIndex],
      yAxisQuantity: -20,
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  prevProperty() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.nextProperty();
    }, 10000);
    const { properties } = this.state;
    let newIndex = this.state.property.index - 1;
    if (newIndex <= 0) newIndex = properties.length - 1;
    this.setState({
      property: properties[newIndex],
      yAxisQuantity: 20,
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  handleMouseMove({ screenX, screenY }) {
    const docX = window.innerHeight;
    const docY = window.innerWidth;

    this.setState({
      moveX: ((screenX - docX / 2) / (docX / 2)) * 2 - MOVE_FORCE,
      moveY: ((screenY - docY / 2) / (docY / 2)) * 2 - MOVE_FORCE,
      rotateX: -(screenY / docY) * ROTATE_FORCE * 2 - ROTATE_FORCE,
      rotateY: -(screenX / docX) * ROTATE_FORCE * 2 - ROTATE_FORCE,
    });
  }

  render() {
    const {
      properties,
      property,
      yAxisQuantity,
      moveX,
      moveY,
      rotateX,
      rotateY,
      loading,
    } = this.state;
    return (
      <div onMouseMove={this.handleMouseMove} className="SlideShow">
        <LandingPageNavbar items={['Pricing', 'Support', 'Blog', 'Features']} />
        <button disabled={loading} type="button" onClick={this.nextProperty} className="btn prev">
          <div className="arrow" />
        </button>
        <button disabled={loading} type="button" onClick={this.prevProperty} className="btn next">
          <div className="arrow rotate" />
        </button>
        <MovementResponsivePopup moveX={moveX} moveY={moveY} rotateX={rotateX} rotateY={rotateY}>
          <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${!property ? 0 : property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateY(-${
                      !property ? 0 : property.index * (500 / properties.length)
                    }%)`,
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
