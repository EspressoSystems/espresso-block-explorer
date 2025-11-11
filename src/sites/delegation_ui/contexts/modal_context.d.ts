import { default as React } from 'react';
export interface ModalControls {
    ref: React.Ref<HTMLDialogElement>;
    open: () => void;
    close: () => void;
    setOpenState: (isOpen: boolean) => void;
    isOpen: boolean;
}
export declare const ModalContext: React.Context<ModalControls>;
export declare const ProvideDialogModalControls: React.FC<React.PropsWithChildren>;
export declare const DialogModal: React.FC<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> & {
    closedby?: 'none' | 'any' | 'closerequest';
}>;
