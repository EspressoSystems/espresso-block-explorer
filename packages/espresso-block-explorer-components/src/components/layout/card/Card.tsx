import React from 'react';
import './card.css';
import {
  HigherOrderComponentWithClassNameProps,
  addClassToClassName,
} from '../../higher_order';

export interface CardProps extends HigherOrderComponentWithClassNameProps {}

const Card: React.FC<CardProps> = (props) => (
  <div {...props} className={addClassToClassName(props.className, 'card')} />
);

export default Card;
