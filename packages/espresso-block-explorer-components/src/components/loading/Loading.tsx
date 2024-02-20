import { addClassToClassName } from '../higher_order';
import Text from '../text/Text';

export interface CircularProgressIndicatorProps {
  className?: string;
}

/**
 * Circular Progress Indicator is a progress indicator that is used to
 * represent the idea that progress is being made, but we are uncertain about
 * how much progress has been made, or remains.
 */
export const CircularProgressIndicator: React.FC<
  CircularProgressIndicatorProps
> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, ...rest } = props;
  return (
    <div
      className={addClassToClassName(className, 'circular-progress-indicator')}
      {...rest}
    >
      <Text text="Loading..." />
    </div>
  );
};
