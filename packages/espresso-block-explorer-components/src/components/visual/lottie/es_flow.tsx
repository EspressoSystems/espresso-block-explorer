import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as Lottie } from 'react-lottie';
import './es_flow.css';
import { default as animationData } from './es_flow.json';

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
