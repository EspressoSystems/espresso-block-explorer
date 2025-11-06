import Text from '@/components/text/Text';
import ButtonLarge from 'sites/delegation_ui/elements/buttons/button_large';

export const ActionsCell: React.FC = () => {
  return (
    <>
      <ButtonLarge className="action" onClick={() => {}}>
        <Text text="Delegate" />
      </ButtonLarge>
    </>
  );
};
