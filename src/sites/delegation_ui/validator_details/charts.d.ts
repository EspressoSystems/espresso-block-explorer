import { default as React } from 'react';
import { EarningsPeriod, EpochPerformance, StakePoint } from './sample_history';
/**
 * STAKE_AXIS_MARGIN is how far the stake chart's axis reaches past the
 * lowest and highest stake in view at most, as a share of each. It is also
 * the margin around a stake that didn't change.
 */
export declare const STAKE_AXIS_MARGIN = 0.03;
/**
 * STAKE_AXIS_MIN_MARGIN is the smallest margin, so that a change of a few
 * ESP on a large stake isn't blown up to fill the chart.
 */
export declare const STAKE_AXIS_MIN_MARGIN = 0.001;
/**
 * STAKE_AXIS_CHANGE_MARGINS is the margin as a multiple of the change in
 * view: at 2, the change takes up a fifth of the chart's height.
 */
export declare const STAKE_AXIS_CHANGE_MARGINS = 2;
/**
 * stakeAxisDomain is the range of the stake chart's axis. It reaches a
 * margin below the lowest stake in view and above the highest, and never
 * below zero.
 *
 * The margin follows the changes in view. A stake that didn't change gets
 * a few percent either side and is drawn as a level line in the middle. A
 * small change narrows the margin to twice its size, so it still shows as
 * a step, a fifth of the chart high, instead of vanishing into a level
 * line; fitting the axis tightly to it would instead make a 0.02% dip look
 * like a cliff. The margin stays between STAKE_AXIS_MIN_MARGIN and
 * STAKE_AXIS_MARGIN, so a large delegation or undelegation shows the stake
 * before and after it with a few percent beyond each.
 */
export declare function stakeAxisDomain(values: number[]): [number, number];
export interface StakeHistoryChartProps {
    points: StakePoint[];
    height?: number;
}
/**
 * StakeHistoryChart is an area chart of the validator's total stake over
 * time, with a crosshair tooltip.
 */
export declare const StakeHistoryChart: React.FC<StakeHistoryChartProps>;
export interface EpochReliabilityGridProps {
    epochs: EpochPerformance[];
    columns?: number;
    gap?: number;
    /**
     * highlightLast outlines the last cell, the latest epoch.
     */
    highlightLast?: boolean;
    /**
     * whenFor describes when the epoch at an index was, e.g. "3d ago", for
     * its tooltip.
     */
    whenFor?: (index: number) => string;
    /**
     * networkRates holds the network's missed slot rate per epoch, which
     * each epoch is graded against.
     */
    networkRates?: Map<number, number>;
}
/**
 * EpochReliabilityGrid draws one cell per epoch, colored and marked by how
 * many leader slots the validator missed in that epoch.
 */
export declare const EpochReliabilityGrid: React.FC<EpochReliabilityGridProps>;
export interface EarningsChartProps {
    /**
     * periods are in time order; the latest is drawn on the right.
     */
    periods: EarningsPeriod[];
    validatorName: string;
    height?: number;
}
/**
 * EarningsChart stacks the rewards that reached delegators and the
 * validator per period. Periods cover whole epochs, so they are scaled to a
 * per-day rate.
 */
export declare const EarningsChart: React.FC<EarningsChartProps>;
/**
 * EarningsLegend explains the EarningsChart series.
 */
export declare const EarningsLegend: React.FC<{
    validatorName: string;
}>;
/**
 * EpochReliabilityLegend explains the EpochReliabilityGrid cell states.
 */
export declare const EpochReliabilityLegend: React.FC;
