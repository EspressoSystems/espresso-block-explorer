/**
 * GridCell is a component that represents a single cell in the grid.
 */
export const GridCell: React.FC<React.PropsWithChildren> = (props) => {
  return <div className="grid-cell">{props.children}</div>;
};
