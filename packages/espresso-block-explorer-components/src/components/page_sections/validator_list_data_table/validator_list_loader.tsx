import { TaggedBase64 } from '@/models/espresso';

export interface ValidatorData {
  publicKey: TaggedBase64;
  name: null | string;
  companyDetails: null | {
    name: null | string;
    website: null | string;
  };
  location: {
    coords: null | [number, number];
    country: null | string;
  };
}

export enum ValidatorSummaryColumn {
  publicKey = 'publicKey',
  name = 'name',
  address = 'address',
  companyName = 'companyName',
  companyWebSite = 'companyWebSite',
  location = 'location',
  stake = 'stake',
  uptime = 'uptime',
  commission = 'commission',
  actions = 'actions',
}
