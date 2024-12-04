import {
  HigherOrderComponentWithClassNameProps,
  addClassToClassName,
} from '@/higher_order';
import React from 'react';
import './card.css';

export interface CardProps extends HigherOrderComponentWithClassNameProps {}

/**
 * Card represents a component that is styled after a card style.  It is used
 * as a general container that wants to have its contents displayed within a
 * card style.
 *
 * The component is influenced by the card style from Material Design but is
 * ultimately based on the Espresso Block Explorer Design.
 *
 * By default the card will have some default padding applied to it, which is
 * there for convenience.  However there are cases where this initial padding
 * is not desired.  In this case you should use the `CardNoPadding` component
 * provided by this module as well.
 */
const Card: React.FC<CardProps> = (props) => (
  <div
    {...props}
    className={addClassToClassName(props.className, 'card card--padding')}
  />
);

/**
 * CardNoPadding as a convenience component for creating a card that does not
 * have any padding applied to it.  This is useful when you want to have a card
 * that is flush with the edges of the container.  It allows one to style their
 * card container, and customize other aspects of it to their liking.
 */
export const CardNoPadding: React.FC<CardProps> = (props) => (
  <div {...props} className={addClassToClassName(props.className, 'card')} />
);

export default Card;
