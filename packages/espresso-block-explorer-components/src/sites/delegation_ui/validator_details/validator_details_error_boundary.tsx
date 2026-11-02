import { default as React } from 'react';

export interface ValidatorDetailsErrorBoundaryProps
  extends React.PropsWithChildren {
  /**
   * fallback is shown in place of the children once they have thrown.
   */
  fallback: React.ReactNode;
}

interface ValidatorDetailsErrorBoundaryState {
  failed: boolean;
}

/**
 * ValidatorDetailsErrorBoundary keeps a validator that fails to render from
 * taking the rest of the staking dashboard down with it. Validator history
 * comes from another site, so a bad value in it must only cost that
 * validator's view. Give it a key per validator so that moving to another
 * validator tries again.
 */
export class ValidatorDetailsErrorBoundary extends React.Component<
  ValidatorDetailsErrorBoundaryProps,
  ValidatorDetailsErrorBoundaryState
> {
  state: ValidatorDetailsErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): ValidatorDetailsErrorBoundaryState {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
