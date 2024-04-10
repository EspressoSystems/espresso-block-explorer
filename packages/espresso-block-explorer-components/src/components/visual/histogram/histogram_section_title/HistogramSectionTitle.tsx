import React from 'react';
import Heading2 from '../../../layout/heading/Heading2';
import './histogram_section_title.css';

export interface HistogramSectionTitleProps {
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
    <div className="histogram-section-title">
      <Heading2>{props.children[0]}</Heading2>
      {props.children[1]}
    </div>
  );
};
