import { RatioRational } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/common/ratio';
import { default as React } from 'react';
export interface RatioRationalText {
    rate: RatioRational;
}
/**
 * RatioRationalText is a component that displays a RatioRational
 * as a percentage, with a tooltip showing the exact fraction.
 */
export declare const RatioRationalText: React.FC<RatioRationalText>;
