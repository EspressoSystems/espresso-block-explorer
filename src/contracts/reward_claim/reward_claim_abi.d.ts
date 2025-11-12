declare const _default: readonly [{
    readonly type: "function";
    readonly name: "claimRewards";
    readonly inputs: readonly [{
        readonly name: "lifetimeRewards";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "authData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claimedRewards";
    readonly inputs: readonly [{
        readonly name: "claimer";
        readonly type: "address";
        readonly internalType: "address";
    }];
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
    readonly type: "event";
    readonly name: "RewardsClaimed";
    readonly inputs: readonly [{
        readonly name: "user";
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
    readonly name: "AlreadyClaimed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "DailyLimitExceeded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidAuthRoot";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidRewardAmount";
    readonly inputs: readonly [];
}];
export default _default;
