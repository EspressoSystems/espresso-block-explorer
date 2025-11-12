export interface LabelValueSplitProps {
  children: [React.ReactNode, React.ReactNode];
}

export const LabelValueSplit: React.FC<LabelValueSplitProps> = ({
  children,
}) => {
  return (
    <div className="staking-modal-label-value-split">
      <span className="staking-modal-label">{children[0]}</span>
      <span className="staking-modal-value">{children[1]}</span>
    </div>
  );
};
