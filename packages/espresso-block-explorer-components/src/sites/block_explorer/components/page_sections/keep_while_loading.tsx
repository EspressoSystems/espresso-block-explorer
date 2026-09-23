import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { default as React } from 'react';

export interface KeepWhileLoadingProps {
  /**
   * The loaded data's context first, then those describing what it was loaded
   * for (the page, the block). Must be the same list on every render.
   */
  contexts: readonly React.Context<unknown>[];
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * KeepWhileLoading shows its children the last loaded values of `contexts`
 * until new data arrives, so the current page stays on screen while the next
 * one loads. The values never move ahead of the data. The first load, and
 * errors, pass through as they are.
 */
export const KeepWhileLoading: React.FC<KeepWhileLoadingProps> = ({
  contexts,
  children,
}) => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  const values = contexts.map((context) => React.use(context));
  const [kept, setKept] = React.useState<null | unknown[]>(null);

  const fresh = !loading && !error && values[0] !== kept?.[0];
  if (fresh) {
    setKept(values);
  }

  const shown = fresh ? values : kept;
  const holding =
    !error && shown !== null && values.some((v, i) => v !== shown[i]);
  const provided = holding ? shown : values;

  // Always the same providers, so holding on never remounts the children.
  return contexts.reduceRight<React.ReactNode>(
    (inner, context, index) => (
      <context.Provider value={provided[index]}>{inner}</context.Provider>
    ),
    <LoadingContext.Provider value={holding ? false : loading}>
      {children}
    </LoadingContext.Provider>,
  );
};
