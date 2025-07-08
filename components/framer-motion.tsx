import React from 'react';
import { motion } from 'motion/react';
import StateAnimations from './animations/state-animation';
import Gestures from './animations/gesture';
import ScrollTriggered from './animations/scroll-triggered';
import CardAnimation from './animations/card-animation';

const FramerMotionDemo = () => {
  return (
    <div className=" w-full h-[100vh]">
      {/* <StateAnimations /> */}
      {/* <Gestures /> */}
      <CardAnimation />
    </div>
  );
};

export default FramerMotionDemo;
