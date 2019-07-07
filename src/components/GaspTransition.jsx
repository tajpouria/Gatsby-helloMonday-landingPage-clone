import React, { Component } from 'react';
import { TweenLite, Expo } from 'gsap';
import PropTypes from 'prop-types';

import MovementResponsivePopup from './MovementResponsivePopup';
import gaspTransitionsStyles from './gaspTransition.module.scss';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import pic04 from '../images/pic04.jpg';
import pic05 from '../images/pic05.jpg';

const SLIDE_PICTURES = [pic01, pic02, pic03, pic04, pic05];

export default class GaspTransition extends Component {
  static prototypes = {
    children: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.state = {};

    this.loaderWrap = null;
    this.loaderTween = null;
    this.toggleBtn = null;
    this.toggleLoaderHandler = this.toggleLoaderHandler.bind(this);

    this.nextSlideLoaderHandler = this.nextSlideLoaderHandler.bind(this);
    this.prevSlideLoaderHandler = this.prevSlideLoaderHandler.bind(this);
  }

  componentDidMount() {
    this.toggleLoaderHandler();
    setInterval(() => {
      this.toggleLoaderHandler();
    }, 10000);
  }

  toggleLoaderHandler() {
    if (!this.loaderTween) {
      this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
        y: '100%',
        ease: Expo.easeInOut,
        delay: 0.02,
      });
    }
    this.loaderTween.reversed(!this.loaderTween.reversed());
  }

  nextSlideLoaderHandler() {
    this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
      y: '100%',
      ease: Expo.easeInOut,
      delay: 0.02,
    });
  }

  prevSlideLoaderHandler() {
    console.log(this.loaderWrap);
    this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
      y: '0%',
      ease: Expo.easeInOut,
      delay: 0.02,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div onWheel={this.nextSlideLoaderHandler}>
        <div ref={div => (this.loaderWrap = div)} className={gaspTransitionsStyles.loader}>
          <MovementResponsivePopup>
            <img src={SLIDE_PICTURES[0]} alt="" />
          </MovementResponsivePopup>
        </div>
        <div className={gaspTransitionsStyles.content}>
          <MovementResponsivePopup>
            <img src={SLIDE_PICTURES[1]} alt="" />
          </MovementResponsivePopup>
        </div>
        <div ref={div => (this.loaderWrap = div)} className={gaspTransitionsStyles.loader}>
          <MovementResponsivePopup>
            <img src={SLIDE_PICTURES[2]} alt="" />
          </MovementResponsivePopup>
        </div>
        {children}
        <a
          onClick={this.prevSlideLoaderHandler}
          style={{ top: '71%' }}
          className={gaspTransitionsStyles.btn}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
        <a
          onClick={this.nextSlideLoaderHandler}
          style={{ top: '77%' }}
          className={gaspTransitionsStyles.btn}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    );
  }
}

// there is a content el by z-index 0 & loader el by z-index 1000
// when ever next and prev clicked loader will placed on top of content cuz have
// bigger z-index

// i want :
// have 5 el
// two el that is loader should have z-index of 1000 and content z-index of 0
// whenever i clicked next or prev the

// TODO: make slide show for 3 el
// change the image src relay on conditions
