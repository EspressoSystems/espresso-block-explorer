import { CurrentLocale } from '@/contexts/locale_provider';
import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import { default as React } from 'react';
import './colors.css';
import { DelegationHeader } from './delegation_header';
import './delegation_ui.css';
import { DelegationUIContent } from './delegation_ui_content';
import { ProvideDelegationUIContexts } from './delegation_ui_contexts';
import { ValidatorDetailsView } from './validator_details/validator_details_ui';

interface DelegationPageProps {
  className?: string;

  /**
   * validatorAddress selects the validator details view when it is not
   * undefined (null means the URL had no address). Both views share the same
   * contexts, so switching between them keeps the loaded validator data.
   */
  validatorAddress?: null | string;
}

/**
 * CustomizeNumberFormatters is a component that provides customized number
 * formatters for the Delegation UI.  Specifically, it ensures that we
 * display a consistent number of decimal places for Percentage, ESP, and ETH
 * displays.
 */
const CustomizeNumberFormatters: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const numberFormatter = React.useContext(CurrentNumberFormatters);
  const locale = React.useContext(CurrentLocale);

  const nextNumberFormatters = {
    ...numberFormatter,

    percentage: new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    ETH: new Intl.NumberFormat(locale, {
      numberingSystem: 'finance',
      style: 'currency',
      currencyDisplay: 'code',
      currency: 'ETH',
      notation: 'standard',
      roundingPriority: 'lessPrecision',
      roundingMode: 'halfEven',
      maximumSignificantDigits: 21,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    ESP: new Intl.NumberFormat(locale, {
      numberingSystem: 'finance',
      style: 'currency',
      currencyDisplay: 'code',
      currency: 'ESP',
      notation: 'standard',
      roundingPriority: 'lessPrecision',
      roundingMode: 'halfEven',
      maximumSignificantDigits: 12,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };

  return (
    <CurrentNumberFormatters.Provider value={nextNumberFormatters}>
      {children}
    </CurrentNumberFormatters.Provider>
  );
};

/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
const DelegationUI: React.FC<DelegationPageProps> = ({ validatorAddress }) => {
  const showValidator = validatorAddress !== undefined;

  // Start each view at the top, as a separate page load would.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [showValidator, validatorAddress]);

  return (
    <ProvideDelegationUIContexts>
      <CustomizeNumberFormatters>
        <main
          className={
            showValidator
              ? 'delegation-ui validator-details-ui'
              : 'delegation-ui'
          }
        >
          <DelegationHeader />

          {showValidator ? (
            <ValidatorDetailsView address={validatorAddress} />
          ) : (
            <DelegationUIContent />
          )}
        </main>
      </CustomizeNumberFormatters>
    </ProvideDelegationUIContexts>
  );
};

export default DelegationUI;
