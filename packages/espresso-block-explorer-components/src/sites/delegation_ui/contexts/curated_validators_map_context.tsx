import { NodeMetadataContent } from '@/service/espresso_l1_validator_service/common/node_metadata_content';
import React from 'react';

// This is curated information collected from Node Operators directly.
// It has been collected and colated here:
// https://docs.google.com/spreadsheets/d/17Ms7Io9eQH91YetV6_2o5uza9v3-EDUqpIAKC1bCNfo/edit?gid=432590309#gid=432590309
// This curated information was last populated on 2026-02-05T07:58:00-07:00

const mainnetCuratedInfo: Map<`0x${string}`, NodeMetadataContent> = new Map([
  [
    '0xFfD2F63F36272529A66b5C9044157EbDFD19751f',
    new NodeMetadataContent(
      '01node',
      null,
      '01node',
      new URL('https://01node.com/'),
      null,
      null,
    ),
  ],
  [
    '0xfcA122749BD630d7922FE26936e5Ae476EbB97a0',
    new NodeMetadataContent(
      'Blockdaemon',
      null,
      'Blockdaemon',
      new URL('https://www.blockdaemon.com/'),
      null,
      null,
    ),
  ],
  [
    '0x4a1e3627Cb0C0315188c1A1FA8311067D878A0A0',
    new NodeMetadataContent(
      'BlockPI Network',
      null,
      'BlockPI Network',
      new URL('https://blockpi.io/'),
      null,
      null,
    ),
  ],
  [
    '0x8F8bC312F5909CE56f183f41954Cbf51fc3AB846',
    new NodeMetadataContent(
      'deNodes',
      null,
      'deNodes',
      new URL('https://www.denodes.io/'),
      null,
      null,
    ),
  ],
  [
    '0xb64158F46F0C2187Ffe84Af94fe800f307ed9F20',
    new NodeMetadataContent(
      'Finoa Consensus Services',
      null,
      'Finoa Consensus Services',
      new URL('https://www.finoa.io/'),
      null,
      null,
    ),
  ],
  [
    '0x233959B1E43a2088aFc71F1Fef0421d69e0F5d23',
    new NodeMetadataContent(
      'Imperator.co',
      null,
      'Imperator.co',
      new URL('https://www.imperator.co/'),
      null,
      null,
    ),
  ],
  [
    '0x822b1911b8B34a5992Ff486C7C6cf07f901aB547',
    new NodeMetadataContent(
      'shawnrypstra@informal.systems',
      null,
      'shawnrypstra@informal.systems',
      new URL('https://informal.systems/'),
      null,
      null,
    ),
  ],

  [
    '0x18F788c44b7f747bc478274FAfcd3a4991669eb3',
    new NodeMetadataContent(
      'dev-validator@0xmakase.co.jp',
      null,
      'dev-validator@0xmakase.co.jp',
      new URL('https://kudasai.co.jp/en/'),
      null,
      null,
    ),
  ],
  [
    '0x146Bc1B1e64ccde7ee29bA9C58226907E283915A',
    new NodeMetadataContent(
      'jonny@linkpool.io',
      null,
      'jonny@linkpool.io',
      new URL('https://linkpool.com/'),
      null,
      null,
    ),
  ],
  [
    '0xa83b4fda5b3dcc0c36837947a57f55d831f69c39',
    new NodeMetadataContent(
      'nodes@sub7.tech',
      null,
      'nodes@sub7.tech',
      new URL('https://sub7.tech/#herosection'),
      null,
      null,
    ),
  ],
  [
    '0x1B01a081021FA1D0a8A7d62048006A474724524e',
    new NodeMetadataContent(
      'anton.g@p2p.org',
      null,
      'anton.g@p2p.org',
      new URL('https://www.p2p.org/'),
      null,
      null,
    ),
  ],
  [
    '0xf45e43aB5fA5D82baA85409e916EBd41E0b50b78',
    new NodeMetadataContent(
      'node@piertwo.com',
      null,
      'node@piertwo.com',
      new URL('https://piertwo.com/'),
      null,
      null,
    ),
  ],
  [
    '0x4301E31c9657b8249a7f7B1AB6aF4bC0477E4173',
    new NodeMetadataContent(
      'wesley@unit410.com',
      null,
      'wesley@unit410.com',
      new URL('https://unit410.com/'),
      null,
      null,
    ),
  ],
  [
    '0x06057270ec85510cA47aFe6733d98Ed5655b3Aa2',
    new NodeMetadataContent(
      'kevin.matthews@validationcloud.io',
      null,
      'kevin.matthews@validationcloud.io',
      new URL('https://www.validationcloud.io/'),
      null,
      null,
    ),
  ],
  [
    '0x7d93dc23E899e1c0EB63060aCCf023464823eFa4',
    new NodeMetadataContent(
      'amrit@altresear.ch',
      null,
      'amrit@altresear.ch',
      new URL('https://altlayer.io/'),
      null,
      null,
    ),
  ],
  [
    '0x10eE0Af996dA1e206d96402B4F16fA00818083E0',
    new NodeMetadataContent(
      'adrian@nethermind.io',
      null,
      'adrian@nethermind.io',
      new URL('https://www.nethermind.io/'),
      null,
      null,
    ),
  ],
  [
    '0x0fF5a101c5e38a151ceDAbbD3a73ca76Cef007Ff',
    new NodeMetadataContent(
      'devops@luganodes.com',
      null,
      'devops@luganodes.com',
      new URL('https://www.luganodes.com/'),
      null,
      null,
    ),
  ],
  [
    '0xe32122F0850b34D27Ac740aaB18bE9aF217858Dc',
    new NodeMetadataContent(
      'hello@zkvalidator.com',
      null,
      'hello@zkvalidator.com',
      null,
      null,
      null,
    ),
  ],
  [
    '0x985f7272BDff91c00d6f424a666008472C5Ec46c',
    new NodeMetadataContent(
      'staked-devops@kraken.com',
      null,
      'staked-devops@kraken.com',
      new URL('https://www.kraken.com/features/staking'),
      null,
      null,
    ),
  ],
] as const);

/**
 * CuratedValidatorsMapContext provides a React for a curated list of
 * Validator information.
 */
export const CuratedValidatorsMapContext =
  React.createContext<Map<`0x${string}`, NodeMetadataContent>>(
    mainnetCuratedInfo,
  );
