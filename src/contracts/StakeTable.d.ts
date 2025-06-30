declare const _default: ({
    type: string;
    inputs: never[];
    stateMutability: string;
    name?: undefined;
    outputs?: undefined;
    anonymous?: undefined;
} | {
    type: string;
    name: string;
    inputs: {
        name: string;
        type: string;
        internalType: string;
        components: {
            name: string;
            type: string;
            internalType: string;
        }[];
    }[];
    outputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    stateMutability: string;
    anonymous?: undefined;
} | {
    type: string;
    name: string;
    inputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    outputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    stateMutability: string;
    anonymous?: undefined;
} | {
    type: string;
    name: string;
    inputs: ({
        name: string;
        type: string;
        internalType: string;
        components: {
            name: string;
            type: string;
            internalType: string;
        }[];
    } | {
        name: string;
        type: string;
        internalType: string;
        components?: undefined;
    })[];
    outputs: never[];
    stateMutability: string;
    anonymous?: undefined;
} | {
    type: string;
    name: string;
    inputs: ({
        name: string;
        type: string;
        indexed: boolean;
        internalType: string;
        components?: undefined;
    } | {
        name: string;
        type: string;
        indexed: boolean;
        internalType: string;
        components: {
            name: string;
            type: string;
            internalType: string;
        }[];
    })[];
    anonymous: boolean;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    type: string;
    name: string;
    inputs: {
        name: string;
        type: string;
        internalType: string;
    }[];
    stateMutability?: undefined;
    outputs?: undefined;
    anonymous?: undefined;
})[];
export default _default;
