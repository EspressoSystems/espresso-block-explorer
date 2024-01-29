import React from 'react';
export interface RollUpInfoProps {
    className?: string;
    namespace: number;
}
/**
 * RollUpInfo is a small section of information concerning the rollup in
 * question. It contains, if known, the Rollup's name, namespace, website link
 * and block explorer link.
 */
declare const RollUpInfo: React.FC<RollUpInfoProps>;
export default RollUpInfo;
