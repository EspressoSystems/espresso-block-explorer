import { addClassToClassName } from '@/higher_order';
import AnchorButton, { AnchorButtonProps } from '../anchor_button/AnchorButton';

const IconAnchorButton: React.FC<AnchorButtonProps> = (props) => (
  <AnchorButton
    {...props}
    // eslint-disable-next-line react/prop-types
    className={addClassToClassName(props.className, 'icon')}
  />
);

export default IconAnchorButton;
