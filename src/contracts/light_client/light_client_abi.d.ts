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
    readonly name: "_getVk";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "vk";
        readonly type: "tuple";
        readonly internalType: "struct IPlonkVerifier.VerifyingKey";
        readonly components: readonly [{
            readonly name: "domainSize";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "numInputs";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sigma0";
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
            readonly name: "sigma1";
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
            readonly name: "sigma2";
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
            readonly name: "sigma3";
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
            readonly name: "sigma4";
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
            readonly name: "q1";
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
            readonly name: "q2";
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
            readonly name: "q3";
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
            readonly name: "q4";
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
            readonly name: "qM12";
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
            readonly name: "qM34";
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
            readonly name: "qO";
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
            readonly name: "qC";
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
            readonly name: "qH1";
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
            readonly name: "qH2";
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
            readonly name: "qH3";
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
            readonly name: "qH4";
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
            readonly name: "qEcc";
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
            readonly name: "g2LSB";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "g2MSB";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "currentBlockNumber";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "disablePermissionedProverMode";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "finalizedState";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "viewNum";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "blockHeight";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "blockCommRoot";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "genesisStakeTableState";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "threshold";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "blsKeyComm";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }, {
        readonly name: "schnorrKeyComm";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }, {
        readonly name: "amountComm";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "genesisState";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "viewNum";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "blockHeight";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "blockCommRoot";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getHotShotCommitment";
    readonly inputs: readonly [{
        readonly name: "hotShotBlockHeight";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "hotShotBlockCommRoot";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }, {
        readonly name: "hotshotBlockHeight";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getStateHistoryCount";
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
        readonly name: "_genesis";
        readonly type: "tuple";
        readonly internalType: "struct LightClient.LightClientState";
        readonly components: readonly [{
            readonly name: "viewNum";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "blockHeight";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "blockCommRoot";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }];
    }, {
        readonly name: "_genesisStakeTableState";
        readonly type: "tuple";
        readonly internalType: "struct LightClient.StakeTableState";
        readonly components: readonly [{
            readonly name: "threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blsKeyComm";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "schnorrKeyComm";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "amountComm";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }];
    }, {
        readonly name: "_stateHistoryRetentionPeriod";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "isPermissionedProverEnabled";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lagOverEscapeHatchThreshold";
    readonly inputs: readonly [{
        readonly name: "blockNumber";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "blockThreshold";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "newFinalizedState";
    readonly inputs: readonly [{
        readonly name: "newState";
        readonly type: "tuple";
        readonly internalType: "struct LightClient.LightClientState";
        readonly components: readonly [{
            readonly name: "viewNum";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "blockHeight";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "blockCommRoot";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }];
    }, {
        readonly name: "proof";
        readonly type: "tuple";
        readonly internalType: "struct IPlonkVerifier.PlonkProof";
        readonly components: readonly [{
            readonly name: "wire0";
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
            readonly name: "wire1";
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
            readonly name: "wire2";
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
            readonly name: "wire3";
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
            readonly name: "wire4";
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
            readonly name: "prodPerm";
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
            readonly name: "split0";
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
            readonly name: "split1";
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
            readonly name: "split2";
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
            readonly name: "split3";
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
            readonly name: "split4";
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
            readonly name: "zeta";
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
            readonly name: "zetaOmega";
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
            readonly name: "wireEval0";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "wireEval1";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "wireEval2";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "wireEval3";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "wireEval4";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "sigmaEval0";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "sigmaEval1";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "sigmaEval2";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "sigmaEval3";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }, {
            readonly name: "prodPermZetaOmegaEval";
            readonly type: "uint256";
            readonly internalType: "BN254.ScalarField";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "permissionedProver";
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
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setPermissionedProver";
    readonly inputs: readonly [{
        readonly name: "prover";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setstateHistoryRetentionPeriod";
    readonly inputs: readonly [{
        readonly name: "historySeconds";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "stateHistoryCommitments";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "l1BlockHeight";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "l1BlockTimestamp";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "hotShotBlockHeight";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "hotShotBlockCommRoot";
        readonly type: "uint256";
        readonly internalType: "BN254.ScalarField";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "stateHistoryFirstIndex";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "stateHistoryRetentionPeriod";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
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
    readonly name: "NewState";
    readonly inputs: readonly [{
        readonly name: "viewNum";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }, {
        readonly name: "blockHeight";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }, {
        readonly name: "blockCommRoot";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "BN254.ScalarField";
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
    readonly name: "PermissionedProverNotRequired";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PermissionedProverRequired";
    readonly inputs: readonly [{
        readonly name: "permissionedProver";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
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
    readonly type: "error";
    readonly name: "AddressEmptyCode";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }];
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
    readonly name: "InsufficientSnapshotHistory";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidAddress";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidArgs";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidHotShotBlockForCommitmentCheck";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidInitialization";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidMaxStateHistory";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidProof";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidScalar";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoChangeRequired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotInitializing";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OutdatedState";
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
    readonly name: "OwnershipCannotBeRenounced";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ProverNotPermissioned";
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
    readonly name: "WrongStakeTableUsed";
    readonly inputs: readonly [];
}];
export default _default;
