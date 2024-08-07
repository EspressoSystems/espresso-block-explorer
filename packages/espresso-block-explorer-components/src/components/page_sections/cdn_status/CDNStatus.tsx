import { addClassToClassName } from '@/components/higher_order';
import Heading2 from '@/components/layout/heading/Heading2';
import Text from '@/components/text/Text';
import React from 'react';
import './cdn_status.css';

interface CDNStatusProps {
  className?: string;
}

/**
 * CDNStatus is a component that represents the CDN's current status.
 * At the moment, we have no way of retrieving this information, or seeing
 * the current status of the CDN.  So for now this always just reports the
 * CDN as being online.
 */
export const CDNStatus: React.FC<CDNStatusProps> = (props) => {
  return (
    <div className={addClassToClassName(props.className, 'cdn-status')}>
      <Heading2 className="cdn-status--heading">
        <Text text="CDN Status" />
      </Heading2>
      <strong className="cdn-status--status online">
        <Text text="Online" />
      </strong>
    </div>
  );
};
