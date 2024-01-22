import React from 'react';
import { AsyncRetriever } from '../../AsyncRetriever';
export declare class RollUpEntry {
    readonly namespace: number;
    readonly name: string;
    readonly site: URL;
    readonly blockExplorer: URL;
    readonly logo24: React.FC;
    readonly logo32: React.FC;
    readonly logo40: React.FC;
    constructor(namespace: number, name: string, site: URL, blockExplorer: URL, logo24: React.FC, logo32: React.FC, logo40: React.FC);
}
export interface RollUpEntryAsyncRetriever extends AsyncRetriever<number, RollUpEntry> {
}
