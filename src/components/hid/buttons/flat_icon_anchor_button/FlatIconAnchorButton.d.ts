export interface FlatIconAnchorButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: boolean;
}
/**
 * FlatIconAnchorButton is a simple Anchor Button that is meant to wrap an
 * icon without imposing any colors to the icon or text contained within.
 *
 * @param props The usual AnchorButtonProps, should have an href field applied.
 * @returns
 */
declare const FlatIconAnchorButton: React.FC<FlatIconAnchorButtonProps>;
export default FlatIconAnchorButton;
