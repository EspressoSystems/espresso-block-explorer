import { default as React } from 'react';
/**
 * ModalControls defines the interface for controlling a modal dialog.
 */
export interface ModalControls {
    /**
     * ref is a React ref to the HTMLDialogElement.
     */
    ref: React.Ref<HTMLDialogElement>;
    /**
     * open opens the modal dialog.
     */
    open: () => void;
    /**
     * close closes the modal dialog.
     */
    close: () => void;
    /**
     * setOpenState sets the open state of the modal dialog.
     *
     * NOTE: This is provided to allow a Dialog onClose callback to
     * set the open state to false when the dialog is closed by
     * user interaction (e.g., clicking outside the dialog).  This is
     * not meant to be consumed by users unless he/she knows what he/she
     * is doing.
     */
    setOpenState: (isOpen: boolean) => void;
    /**
     * isOpen indicates whether the modal dialog is open.
     */
    isOpen: boolean;
}
/**
 * ModalContext is a React context that provides
 * the modal controls for a dialog.
 */
export declare const ModalContext: React.Context<ModalControls>;
/**
 * ProvideDialogModalControls is a React component that provides
 * the modal controls via ModalContext.
 */
export declare const ProvideDialogModalControls: React.FC<React.PropsWithChildren>;
/**
 * DialogModal is a React component that renders a dialog element
 * and connects it to the ModalContext for control.
 */
export declare const DialogModal: React.FC<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> & {
    closedby?: 'none' | 'any' | 'closerequest';
}>;
