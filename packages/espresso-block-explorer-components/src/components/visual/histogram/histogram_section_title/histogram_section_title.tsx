import { addClassToClassName } from '@/higher_order';
import { WithUiText300 } from '@/block_explorer/components/typography/typography';
import React from 'react';
import './histogram_section_title.css';

export interface HistogramSectionTitleProps {
  className?: string;
  children: [React.ReactNode, React.ReactNode];
}

const UiText300H2 = WithUiText300('h2');

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
      <UiText300H2>{props.children[0]}</UiText300H2>
      {props.children[1]}
    </div>
  );
};
