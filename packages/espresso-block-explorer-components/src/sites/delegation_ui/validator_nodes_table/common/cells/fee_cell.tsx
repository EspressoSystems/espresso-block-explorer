import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { PercentageText } from '@/components/text';
import { CurrentLocale } from '@/contexts/locale_provider';
import { CurrentDelegationsContext } from '@/sites/delegation_ui/contexts/current_delegations_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { commissionIncreaseSinceDelegation } from '@/sites/delegation_ui/validator_details/commission_warning';
import { useValidatorHistoryFile } from '@/sites/delegation_ui/validator_details/validator_details_contexts';
import {
  activityFromFile,
  commissionChangesFromFile,
  delegationBaselinesFromFile,
} from '@/sites/delegation_ui/validator_details/validator_history_file';
import { commissionIncreaseText } from '@/sites/delegation_ui/validator_details/validator_summary';
import { default as React } from 'react';

/**
 * DelegatedFee shows the commission of a validator the wallet delegates to,
 * marked with an arrow when it went up after the wallet last delegated.
 */
const DelegatedFee: React.FC<{ account: `0x${string}` }> = ({ account }) => {
  const validator = React.useContext(ValidatorNodeContext);
  const locale = React.useContext(CurrentLocale);
  const { file } = useValidatorHistoryFile(validator.addressText);
  const commission = validator.commission.valueOf();
  const increase = React.useMemo(() => {
    if (file.state !== 'live') {
      return null;
    }
    try {
      return commissionIncreaseSinceDelegation(
        activityFromFile(file.file),
        commissionChangesFromFile(file.file),
        account,
        commission,
        delegationBaselinesFromFile(file.file),
      );
    } catch {
      // One bad history file must not take the validators table down.
      return null;
    }
  }, [file, account, commission]);

  if (!increase) {
    return <PercentageText percentage={commission} />;
  }

  const date = (value: Date) =>
    new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(
      value,
    );
  return (
    <span
      className="validator-details-commission-up"
      title={commissionIncreaseText(increase, date)}
    >
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        aria-hidden="true"
      >
        <path d="M6 10V2M2.5 5.5 6 2l3.5 3.5" />
      </svg>
      <PercentageText percentage={commission} />
    </span>
  );
};

/**
 * FeeCell displays the commission fee of a validator as a percentage. For
 * validators the connected wallet delegates to, an arrow marks a commission
 * increase since it delegated.
 */
export const FeeCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const account = React.useContext(RainbowKitAccountAddressContext);
  const delegations = React.useContext(CurrentDelegationsContext);

  if (account && delegations.has(validator.addressText)) {
    return <DelegatedFee account={account} />;
  }
  return <PercentageText percentage={validator.commission.valueOf()} />;
};
