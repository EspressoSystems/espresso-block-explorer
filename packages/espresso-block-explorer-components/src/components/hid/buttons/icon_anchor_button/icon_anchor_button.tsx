import { addClassToClassName } from '@/higher_order';
import AnchorButton, { AnchorButtonProps } from '../anchor_button/anchor_button';

const IconAnchorButton: React.FC<AnchorButtonProps> = (props) => (
  <AnchorButton
    {...props}
    className={addClassToClassName(props.className, 'icon')}
  />
);

export default IconAnchorButton;
