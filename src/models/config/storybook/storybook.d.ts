import { default as React } from 'react';
import { Environment } from '../environment/environment';
export interface StoryBookSpecifyEnvironmentProps {
    environment?: Environment;
    hotshotQueryServiceURL?: string;
    nodeValidatorWebSocketURL?: string;
    l1ValidatorServiceURL?: string;
    children: React.ReactNode | React.ReactNode[];
}
export declare const StoryBookSpecifyEnvironment: React.FC<StoryBookSpecifyEnvironmentProps>;
export interface StoryBookSpecifyEnvironmentAndContractsProps extends StoryBookSpecifyEnvironmentProps {
    espTokenContractAddress?: string;
    stakeTableContractAddress?: string;
}
export declare const StoryBookSpecifyEnvironmentAndContracts: React.FC<StoryBookSpecifyEnvironmentAndContractsProps>;
