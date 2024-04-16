import { Lottie } from '@crello/react-lottie';
import React from 'react';
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
    className={addClassToClassName(className, 'es-flow-lottie')}
    config={{
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
);

export default ESFlowLottie;
