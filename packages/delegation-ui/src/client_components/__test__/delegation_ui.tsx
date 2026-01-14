import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import DelegationUIComponent from '../delegation_ui';

describe('DelegationUI', () => {
  it('should not throw', () => {
    render(<DelegationUIComponent />);
  });
});
