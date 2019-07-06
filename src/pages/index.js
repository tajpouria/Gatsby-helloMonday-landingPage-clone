import React from 'react';

import GaspTransition from '../components/GaspTransition';
import LandingContent from '../components/LandingContent';

export default function index() {
  return (
    <GaspTransition>
      <LandingContent />
    </GaspTransition>
  );
}
