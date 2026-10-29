import { Text, WalletAddressText } from '@/components/text';
import { addClassToClassName } from '@/higher_order';
import { WalletAddress } from '@/models/wallet_address';
import { default as React } from 'react';
import {
  validatorDetailsPageHref,
  ValidatorDetailsLinksContext,
} from '../../contexts/validator_details_context';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import { InAppLink } from '../link/in_app_link';
import { default as CopyWalletAddress } from '../../validator_nodes_table/common/cells/copy_wallet_address';

export interface ValidatorNameProps {
  className?: string;
}

export const ValidatorName: React.FC<ValidatorNameProps> = (props) => {
  const validator = React.useContext(ValidatorNodeContext);
  const linkToDetails = React.useContext(ValidatorDetailsLinksContext);

  const nodeName = validator.metadata?.content?.name ?? null;
  const walletAddress = new WalletAddress(validator.address);

  const label = nodeName ? (
    <span className={addClassToClassName(props.className, 'node-name')}>
      <Text text={nodeName} />
    </span>
  ) : (
    <WalletAddressText value={walletAddress} />
  );

  return (
    <CopyWalletAddress
      className={addClassToClassName(props.className, 'node-name')}
      value={walletAddress}
    >
      {linkToDetails ? (
        <InAppLink
          className="validator-details-link"
          href={validatorDetailsPageHref(validator.addressText)}
          title="View validator details"
        >
          {label}
        </InAppLink>
      ) : (
        label
      )}
    </CopyWalletAddress>
  );
};

/**
 * ValidatorNameLink displays the validator's name, or its address if it has
 * no name, as a link to the validator details page.
 */
export const ValidatorNameLink: React.FC<ValidatorNameProps> = (props) => {
  const validator = React.useContext(ValidatorNodeContext);

  const nodeName = validator.metadata?.content?.name ?? null;
  const walletAddress = new WalletAddress(validator.address);

  return (
    <InAppLink
      className={addClassToClassName(
        props.className,
        'node-name validator-details-link',
      )}
      href={validatorDetailsPageHref(validator.addressText)}
      title="View validator details"
    >
      {nodeName ? (
        <Text text={nodeName} />
      ) : (
        <WalletAddressText value={walletAddress} />
      )}
    </InAppLink>
  );
};
