import React from 'react';
import { WithEdgeMargin } from '..';
import { addClassToClassName } from '../components/higher_order';
import ParagraphTextSmall from '../components/layout/paragraph/ParagraphTextSmall';
import './fake_data_notice.css';

export interface FakeDataNoticeProps {
  className?: string;
}

const EdgeMarginParagraph = WithEdgeMargin(ParagraphTextSmall);

const FakeDataNotice: React.FC<FakeDataNoticeProps> = (props) => (
  <div
    {...props}
    className={addClassToClassName(props.className, 'fake-data-notice')}
  >
    <EdgeMarginParagraph>
      This Demo contains fake data and navigation that is not indicative of the
      final product.
    </EdgeMarginParagraph>
  </div>
);

export default FakeDataNotice;
