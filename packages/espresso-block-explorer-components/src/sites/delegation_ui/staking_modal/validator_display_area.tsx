import { Text, WalletAddressText } from '@/components/text';
import { LinkShare2 } from '@/components/visual/icons/sharp_line';
import { WalletAddress } from '@/models/wallet_address';
import { default as React } from 'react';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { ActiveConsensusChip } from '../elements/chips/active_consensus_chip';
import { InactiveConsensusChip } from '../elements/chips/inactive_consensus_chip';
import { ValidatorImage24x24 } from '../elements/validator/validator_image';
import { ValidatorName } from '../elements/validator/validator_name';
import { default as CopyWalletAddress } from '../validator_nodes_table/common/cells/copy_wallet_address';
import './validator_display_area.css';

/**
 * ActiveStatusChip is a component that displays whether the validator is active
 * in consensus or not as a Chip.
 */
const ActiveStatusChip: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const formattedAddress = validator.addressText;
  const isActive = consensusMap.has(formattedAddress);

  if (isActive) {
    return <ActiveConsensusChip />;
  }
  return <InactiveConsensusChip />;
};

/**
 * ValidatorDisplayArea is a component that displays some summary details and
 * information about the targeted validator.
 */
export const ValidatorDisplayArea: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const walletAddress = new WalletAddress(validator.address);
  return (
    <div className="staking-modal-validator-display-area">
      <div className="validator-display-group">
        <ValidatorImage24x24 />
        <ValidatorName />
        <CopyWalletAddress className="address" value={walletAddress}>
          <WalletAddressText value={walletAddress} />
        </CopyWalletAddress>
        <CompanyWebsite />
      </div>
      <ActiveStatusChip />
    </div>
  );
};

/**
 * CompanyWebsite is a component that displays the validator's company
 * website, if it is populated and a valid URL.
 */
const CompanyWebsite: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const companyWebsite = validator.metadata?.content?.companyWebsite;

  if (!companyWebsite) {
    return null;
  }

  try {
    const url = new URL(companyWebsite);

    // Add a check to ensure that we only support http links to avoid
    // pointential cross site scripting attacks.
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null;
    }

    return (
      <div className="company-website">
        <WebsiteLink href={url} />
      </div>
    );
  } catch {
    return null;
  }
};

interface WebsiteLinkProps {
  href: URL;
}

/**
 * WebsiteLink is an external link to the validator's company website, should
 * it be available.
 */
const WebsiteLink: React.FC<WebsiteLinkProps> = ({ href }) => {
  return (
    <a href={href.toString()} target="_blank" rel="noopener noreferrer">
      <Text text={href.hostname} />
      &nbsp;
      <LinkShare2 />
    </a>
  );
};
