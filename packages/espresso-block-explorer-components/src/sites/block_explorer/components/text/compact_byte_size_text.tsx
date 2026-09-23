import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import { default as React } from 'react';
import './compact_byte_size_text.css';

export interface CompactByteSizeTextProps {
  bytes: number;
  /**
   * Whether to follow the rounded size with the exact byte count -- "1.5 MB
   * (1,500,000 bytes)" -- as the detail pages do. Elsewhere the exact count
   * is left to the title.
   */
  withExact?: boolean;
}

/**
 * CompactByteSizeText renders a size in the largest decimal unit it reaches
 * -- "512 B", "2.05 kB", "1.5 MB" -- with the exact byte count available
 * alongside it or on hover.
 *
 * Below a kilobyte the rounded size already is the exact count, so it is
 * shown on its own.
 */
const CompactByteSizeText: React.FC<CompactByteSizeTextProps> = (props) => {
  const formatters = React.useContext(CurrentNumberFormatters);
  const compact = formatters.variableBytes.format(props.bytes);
  const exact = formatters.bytes.format(props.bytes);
  const scaled = Math.abs(props.bytes) >= 1000;

  return (
    <span className="compact-byte-size" title={scaled ? exact : undefined}>
      {compact}
      {props.withExact && scaled && (
        <span className="compact-byte-size--exact"> ({exact})</span>
      )}
    </span>
  );
};

export default CompactByteSizeText;
