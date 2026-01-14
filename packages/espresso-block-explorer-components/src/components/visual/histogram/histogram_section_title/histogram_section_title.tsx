import { addClassToClassName } from '@/higher_order';
import React from 'react';
import './histogram_section_title.css';

export interface HistogramSectionTitleProps {
  className?: string;
  children: [React.ReactNode, React.ReactNode];
}

/**
 * HistogramSectionTitle is a title element that is displayed above a histogram.
 * It is expected to label the histogram itself with a title, and have some data
 * next to it that shows some metric aggregation of the data from the histogram
 * itself.
 *
 * Example:
 * +----------------------------------+
 * | Block time                 10.5s |
 * |                          Average |
 * +----------------------------------+
 */
export const HistogramSectionTitle: React.FC<HistogramSectionTitleProps> = (
  props,
) => {
  return (
    <div
      className={addClassToClassName(
        props.className,
        'histogram-section-title',
      )}
    >
      <h2>{props.children[0]}</h2>
      {props.children[1]}
    </div>
  );
};
