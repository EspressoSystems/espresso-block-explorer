import { L1ValidatorService } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/l1_validator_service_api';
import { default as React } from 'react';
/**
 * L1ValidatorServiceContext provides a React Context
 * for the L1ValidatorService API.
 */
export declare const L1ValidatorServiceContext: React.Context<L1ValidatorService>;
/**
 * ProvideL1ValidatorServiceAPIContext is a React Component that provides
 * the L1ValidatorService API context to its children.
 */
export declare const ProvideL1ValidatorServiceAPIContext: React.FC<React.PropsWithChildren>;
