/**
 * GridHeadCell is a component that represents a header cell in the grid.
 */
export const GridHeadCell: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return (
    <div {...rest} className="grid-head-cell">
      {children}
    </div>
  );
};
