import React, { Component } from 'react';
import { TweenLite, Expo } from 'gsap';
import PropTypes from 'prop-types';

import MovementResponsivePopup from './MovementResponsivePopup';
import gaspTransitionsStyles from './gaspTransition.module.scss';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

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
        onComplete: () => {
          TweenLite.to(this.toggleBtn, 0.2, { autoAlpha: 1 });
        },
      });
    }
    this.loaderTween.reversed(!this.loaderTween.reversed());
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div ref={div => (this.loaderWrap = div)} className={gaspTransitionsStyles.loader}>
          <MovementResponsivePopup>
            <img src={pic02} alt="" />
          </MovementResponsivePopup>
        </div>
        <div className={gaspTransitionsStyles.content}>
          <MovementResponsivePopup>
            <img alt="" src={pic01} />
          </MovementResponsivePopup>
        </div>
        {children}
      </>
    );
  }
}
