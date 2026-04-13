import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import './fake_data_notice.css';

export interface FakeDataNoticeProps {
  className?: string;
}

const FakeDataNotice: React.FC<FakeDataNoticeProps> = (props) => (
  <div
    {...props}
    className={addClassToClassName(props.className, 'fake-data-notice')}
  >
    <p>
      This Demo contains fake data and navigation that is not indicative of the
      final product.
    </p>
  </div>
);

export default FakeDataNotice;
