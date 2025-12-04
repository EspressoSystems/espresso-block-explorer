import { UserEvent } from '@testing-library/user-event';
import { StepFunction } from 'storybook/internal/csf';
export declare function interactionsTypeValue(canvasElement: HTMLElement, step: StepFunction, userEvent: UserEvent, toType: string, expectedValue: string, expectedCursorPosition: number): Promise<void>;
