import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { default as React } from 'react';
import { ModalContext } from './modal_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedStake,
} from './validator_selection_context';

/**
 * DelegateAfterConnectContext asks the user to connect a wallet and, once
 * they do, opens the staking modal on the delegate step for the given
 * validator. Without a wallet connected, this lets Delegate continue where
 * it left off instead of making the user find the validator again.
 */
export const DelegateAfterConnectContext = React.createContext<
  (validator: `0x${string}`) => void
>(() => {});

/**
 * ProvideDelegateAfterConnect provides the DelegateAfterConnectContext. It
 * must be rendered inside of the staking modal's ProvideDialogModalControls.
 */
export const ProvideDelegateAfterConnect: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  const rainbowKitModal = React.useContext(RainbowKitModalContext);
  const stakingModal = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const [pending, setPending] = React.useState<null | `0x${string}`>(null);
  const sawConnectModal = React.useRef(false);

  React.useEffect(() => {
    if (!pending) {
      return;
    }

    if (account) {
      setPending(null);
      setSelection(new ValidatorConfirmedStake(pending));
      stakingModal.open();
      return;
    }

    // Closing the connect modal without connecting cancels the delegation.
    if (rainbowKitModal.connectModalOpen) {
      sawConnectModal.current = true;
    } else if (sawConnectModal.current) {
      setPending(null);
    }
  }, [
    pending,
    account,
    rainbowKitModal.connectModalOpen,
    setSelection,
    stakingModal,
  ]);

  const delegateAfterConnect = React.useCallback(
    (validator: `0x${string}`) => {
      sawConnectModal.current = false;
      setPending(validator);
      rainbowKitModal.openConnectModal?.();
    },
    [rainbowKitModal],
  );

  return (
    <DelegateAfterConnectContext.Provider value={delegateAfterConnect}>
      {children}
    </DelegateAfterConnectContext.Provider>
  );
};
