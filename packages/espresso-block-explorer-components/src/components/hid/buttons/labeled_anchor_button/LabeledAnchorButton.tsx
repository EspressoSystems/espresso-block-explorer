import { addClassToClassName } from '@/higher_order';
import AnchorButton, { AnchorButtonProps } from '../anchor_button/AnchorButton';

/**
 * LabeledAnchorButton is an AnchorButton but designed to hold text.  It
 * mirrors the Design of the LabeledButton, while being an Anchor tag for
 * links instead of an actual button.
 */
const LabeledAnchorButton: React.FC<AnchorButtonProps> = (props) => (
  <AnchorButton
    {...props}
    // eslint-disable-next-line react/prop-types
    className={addClassToClassName(props.className, 'label type--ui--button')}
  />
);

export default LabeledAnchorButton;
