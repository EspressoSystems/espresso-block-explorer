import React from 'react';
export interface AnchorButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: boolean;
}
declare const AnchorButton: React.FC<AnchorButtonProps>;
export default AnchorButton;
