declare const _default: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "_hashBlsKey";
    readonly inputs: readonly [{
        readonly name: "blsVK";
        readonly type: "tuple";
        readonly internalType: "struct BN254.G2Point";
        readonly components: readonly [{
            readonly name: "x0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "x1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "blsKeys";
    readonly inputs: readonly [{
        readonly name: "blsKeyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "used";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "claimValidatorExit";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimWithdrawal";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "delegate";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "delegations";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "delegator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "deregisterValidator";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "exitEscrowPeriod";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVersion";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "majorVersion";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "minorVersion";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "patchVersion";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "_tokenAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_lightClientAddress";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_exitEscrowPeriod";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_initialOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "initializedAtBlock";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lightClient";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract LightClientV2";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "proxiableUUID";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "registerValidator";
    readonly inputs: readonly [{
        readonly name: "blsVK";
        readonly type: "tuple";
        readonly internalType: "struct BN254.G2Point";
        readonly components: readonly [{
            readonly name: "x0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "x1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }, {
        readonly name: "schnorrVK";
        readonly type: "tuple";
        readonly internalType: "struct EdOnBN254.EdOnBN254Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "blsSig";
        readonly type: "tuple";
        readonly internalType: "struct BN254.G1Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }, {
        readonly name: "commission";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "token";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ERC20";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "undelegate";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "undelegations";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "delegator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "unlocksAt";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateConsensusKeys";
    readonly inputs: readonly [{
        readonly name: "newBlsVK";
        readonly type: "tuple";
        readonly internalType: "struct BN254.G2Point";
        readonly components: readonly [{
            readonly name: "x0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "x1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }, {
        readonly name: "newSchnorrVK";
        readonly type: "tuple";
        readonly internalType: "struct EdOnBN254.EdOnBN254Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "newBlsSig";
        readonly type: "tuple";
        readonly internalType: "struct BN254.G1Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "upgradeToAndCall";
    readonly inputs: readonly [{
        readonly name: "newImplementation";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "validatorExits";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "unlocksAt";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "validators";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "delegatedAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "status";
        readonly type: "uint8";
        readonly internalType: "enum StakeTable.ValidatorStatus";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "ConsensusKeysUpdated";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "blsVK";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct BN254.G2Point";
        readonly components: readonly [{
            readonly name: "x0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "x1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }, {
        readonly name: "schnorrVK";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct EdOnBN254.EdOnBN254Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Delegated";
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "validator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialized";
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Undelegated";
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "validator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Upgrade";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Upgraded";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ValidatorExit";
    readonly inputs: readonly [{
        readonly name: "validator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ValidatorRegistered";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "blsVk";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct BN254.G2Point";
        readonly components: readonly [{
            readonly name: "x0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "x1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y0";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }, {
            readonly name: "y1";
            readonly type: "uint256";
            readonly internalType: "BN254.BaseField";
        }];
    }, {
        readonly name: "schnorrVk";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct EdOnBN254.EdOnBN254Point";
        readonly components: readonly [{
            readonly name: "x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "commission";
        readonly type: "uint16";
        readonly indexed: false;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Withdrawal";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AddressEmptyCode";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "BLSSigVerificationFailed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BlsKeyAlreadyUsed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ERC1967InvalidImplementation";
    readonly inputs: readonly [{
        readonly name: "implementation";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "ERC1967NonPayable";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FailedInnerCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientAllowance";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "InsufficientBalance";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "InvalidCommission";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidInitialization";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSchnorrVK";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotInitializing";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NothingToWithdraw";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "PrematureWithdrawal";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UUPSUnauthorizedCallContext";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UUPSUnsupportedProxiableUUID";
    readonly inputs: readonly [{
        readonly name: "slot";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
}, {
    readonly type: "error";
    readonly name: "UndelegationAlreadyExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ValidatorAlreadyExited";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ValidatorAlreadyRegistered";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ValidatorInactive";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ValidatorNotExited";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAmount";
    readonly inputs: readonly [];
}];
export default _default;
