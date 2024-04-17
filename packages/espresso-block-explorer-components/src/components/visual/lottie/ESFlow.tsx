import React from 'react';
import Lottie from 'react-lottie';
import { addClassToClassName } from '../../higher_order';
import './es_flow.css';
import animationData from './es_flow.json';

export interface ESFlowLottieProps {
  width?: string;
  height?: string;
  className?: string;
}

const ESFlowLottie: React.FC<ESFlowLottieProps> = ({
  className,
  width,
  height,
}) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        className: addClassToClassName(className, 'es-flow-lottie'),
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
);

export default ESFlowLottie;
