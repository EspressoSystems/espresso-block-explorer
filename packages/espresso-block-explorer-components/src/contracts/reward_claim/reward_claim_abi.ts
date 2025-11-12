export default [
  {
    type: 'function',
    name: 'claimRewards',
    inputs: [
      {
        name: 'lifetimeRewards',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'authData',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'claimedRewards',
    inputs: [
      {
        name: 'claimer',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getVersion',
    inputs: [],
    outputs: [
      {
        name: 'majorVersion',
        type: 'uint8',
        internalType: 'uint8',
      },
      {
        name: 'minorVersion',
        type: 'uint8',
        internalType: 'uint8',
      },
      {
        name: 'patchVersion',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'event',
    name: 'RewardsClaimed',
    inputs: [
      {
        name: 'user',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AlreadyClaimed',
    inputs: [],
  },
  {
    type: 'error',
    name: 'DailyLimitExceeded',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidAuthRoot',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidRewardAmount',
    inputs: [],
  },
] as const;
