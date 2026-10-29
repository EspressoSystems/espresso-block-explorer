import { CurrentLocale } from '@/contexts/locale_provider';
import { default as React } from 'react';
import './charts.css';
import {
  RELIABILITY_STATUS_LABEL,
  RELIABILITY_STATUSES,
  reliabilityStatus,
  ReliabilityStatus,
} from './reliability';
import { NOT_VOTING } from './participation';
import {
  EarningsPeriod,
  EpochPerformance,
  EpochVotes,
  StakeFlow,
  StakePoint,
} from './sample_history';

/**
 * useElementWidth tracks the rendered width of an element so the SVG charts
 * can draw at their real pixel size.
 */
function useElementWidth<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  number,
] {
  const ref = React.useRef<T>(null);
  const [width, setWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    setWidth(element.clientWidth);
    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0]?.contentRect.width ?? 0);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, width];
}

function useCompactFormatter(): Intl.NumberFormat {
  const locale = React.useContext(CurrentLocale);
  return React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        notation: 'compact',
        maximumFractionDigits: 1,
      }),
    [locale],
  );
}

/**
 * useAxisLabels formats axis tick values with the shortest compact notation
 * that still gives every tick a distinct label, so a small change on a large
 * stake doesn't render as identical labels.
 */
function useAxisLabels(ticks: number[]): string[] {
  const locale = React.useContext(CurrentLocale);
  const key = ticks.join(',');

  return React.useMemo(() => {
    const values = key ? key.split(',').map(Number) : [];
    for (let digits = 1; digits <= 4; digits++) {
      const formatter = new Intl.NumberFormat(locale, {
        notation: 'compact',
        maximumFractionDigits: digits,
      });
      const labels = values.map((v) => formatter.format(v));
      if (new Set(labels).size === labels.length) {
        return labels;
      }
    }

    const full = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
    return values.map((v) => full.format(v));
  }, [locale, key]);
}

function useFullFormatter(): Intl.NumberFormat {
  const locale = React.useContext(CurrentLocale);
  return React.useMemo(
    () => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }),
    [locale],
  );
}

function useShortDateFormatter(): Intl.DateTimeFormat {
  const locale = React.useContext(CurrentLocale);
  return React.useMemo(
    () => new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }),
    [locale],
  );
}

/**
 * niceCeiling rounds a value up to 1, 2, 2.5, or 5 times a power of ten.
 */
function niceCeiling(value: number): number {
  if (value <= 0) {
    return 1;
  }
  const power = Math.pow(10, Math.floor(Math.log10(value)));
  const n = value / power;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * power;
}

/**
 * roundedBar draws a bar anchored to its baseline with a rounded data end.
 */
function roundedBar(
  x: number,
  y: number,
  width: number,
  height: number,
  direction: 'up' | 'down',
): string {
  if (height <= 0) {
    return '';
  }
  const r = Math.min(3, width / 2, height);
  if (direction === 'up') {
    return `M${x},${y + height}V${y + r}Q${x},${y} ${x + r},${y}H${x + width - r}Q${x + width},${y} ${x + width},${y + r}V${y + height}Z`;
  }
  return `M${x},${y}V${y + height - r}Q${x},${y + height} ${x + r},${y + height}H${x + width - r}Q${x + width},${y + height} ${x + width},${y + height - r}V${y}Z`;
}

interface TooltipState {
  x: number;
  y: number;
  content: React.ReactNode;
}

/**
 * ChartTooltip is centered over its anchor point, but clamped so it never
 * extends past the edges of its chart.
 */
const ChartTooltip: React.FC<{
  state: null | TooltipState;
  containerWidth: number;
}> = ({ state, containerWidth }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tooltipWidth, setTooltipWidth] = React.useState(0);

  // Re-measure whenever the hovered point (and so the content) changes.
  React.useLayoutEffect(() => {
    if (ref.current) {
      setTooltipWidth(ref.current.offsetWidth);
    }
  }, [state]);

  if (!state) {
    return null;
  }

  const half = tooltipWidth / 2;
  const left = Math.max(half, Math.min(state.x, containerWidth - half));

  return (
    <div
      ref={ref}
      className="validator-details-chart-tooltip"
      role="status"
      style={{ left, top: state.y }}
    >
      {state.content}
    </div>
  );
};

const TooltipRow: React.FC<{
  label: React.ReactNode;
  value: React.ReactNode;
  swatch?: string;
}> = ({ label, value, swatch }) => (
  <div className="row">
    <span>
      {swatch && <i className={`swatch ${swatch}`} />}
      {label}
    </span>
    <span>{value}</span>
  </div>
);

export interface StakeHistoryChartProps {
  points: StakePoint[];
  height?: number;
}

/**
 * StakeHistoryChart is an area chart of the validator's total stake over
 * time, with a crosshair tooltip.
 */
export const StakeHistoryChart: React.FC<StakeHistoryChartProps> = ({
  points,
  height = 240,
}) => {
  const [ref, width] = useElementWidth<HTMLDivElement>();
  const [hover, setHover] = React.useState<null | number>(null);
  const full = useFullFormatter();
  const shortDate = useShortDateFormatter();

  const pad = { top: 12, right: 8, bottom: 24, left: 52 };
  const plotWidth = Math.max(0, width - pad.left - pad.right);
  const plotHeight = height - pad.top - pad.bottom;

  const values = points.map((p) => p.stake);
  const rawLow = Math.min(...values);
  const rawHigh = Math.max(...values);
  const span = rawHigh - rawLow || rawHigh * 0.01 || 1;
  const low = Math.max(0, rawLow - span * 0.15);
  const high = rawHigh + span * 0.08;

  const x = (i: number) =>
    pad.left + (points.length <= 1 ? 0 : (i / (points.length - 1)) * plotWidth);
  const y = (v: number) =>
    pad.top + plotHeight - ((v - low) / (high - low)) * plotHeight;

  const line = points
    .map(
      (p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.stake).toFixed(1)}`,
    )
    .join('');
  const ticks = [0, 1, 2, 3, 4].map((i) => low + ((high - low) * i) / 4);
  const tickLabels = useAxisLabels(ticks);
  const last = points.length - 1;
  // Roughly one date label per 90px, and never one crowding the last label.
  const labelEvery = Math.max(
    1,
    Math.ceil(points.length / Math.max(2, Math.floor(plotWidth / 90))),
  );
  const showLabel = (i: number) =>
    i === last || (i % labelEvery === 0 && last - i >= labelEvery * 0.6);

  const onMove = (event: React.MouseEvent<SVGRectElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - box.left) / box.width;
    setHover(Math.max(0, Math.min(last, Math.round(ratio * last))));
  };

  const hovered = hover === null ? null : points[hover];

  return (
    <div className="validator-details-chart" ref={ref}>
      {width > 0 && points.length > 1 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label="Total stake over time"
        >
          {ticks.map((t, i) => (
            <g key={t}>
              <line
                className="gridline"
                x1={pad.left}
                x2={width - pad.right}
                y1={y(t)}
                y2={y(t)}
              />
              <text
                className="axis-label"
                x={pad.left - 8}
                y={y(t) + 3}
                textAnchor="end"
              >
                {tickLabels[i]}
              </text>
            </g>
          ))}
          {points.map((p, i) =>
            showLabel(i) ? (
              <text
                key={i}
                className="axis-label"
                x={x(i)}
                y={height - 6}
                textAnchor={i === 0 ? 'start' : i === last ? 'end' : 'middle'}
              >
                {shortDate.format(p.date)}
              </text>
            ) : null,
          )}
          <path
            className="area"
            d={`${line}L${x(last)},${pad.top + plotHeight}L${x(0)},${pad.top + plotHeight}Z`}
          />
          <path className="line" d={line} />
          <circle
            className="dot"
            cx={x(last)}
            cy={y(points[last].stake)}
            r={4}
          />
          {hovered && hover !== null && (
            <>
              <line
                className="crosshair"
                x1={x(hover)}
                x2={x(hover)}
                y1={pad.top}
                y2={pad.top + plotHeight}
              />
              <circle
                className="dot"
                cx={x(hover)}
                cy={y(hovered.stake)}
                r={4}
              />
            </>
          )}
          <rect
            className="hit"
            x={pad.left}
            y={pad.top}
            width={plotWidth}
            height={plotHeight}
            onMouseMove={onMove}
            onMouseLeave={() => setHover(null)}
          />
        </svg>
      )}
      <ChartTooltip
        containerWidth={width}
        state={
          hovered && hover !== null
            ? {
                x: x(hover),
                y: y(hovered.stake),
                content: (
                  <>
                    <b>{shortDate.format(hovered.date)}</b>
                    <TooltipRow
                      label="Total stake"
                      value={`ESP ${full.format(hovered.stake)}`}
                    />
                  </>
                ),
              }
            : null
        }
      />
    </div>
  );
};

export interface StakeFlowChartProps {
  flows: StakeFlow[];
  height?: number;
}

/**
 * StakeFlowChart shows stake delegated (above the baseline) and undelegated
 * (below the baseline) per day on a single shared axis.
 */
export const StakeFlowChart: React.FC<StakeFlowChartProps> = ({
  flows,
  height = 150,
}) => {
  const [ref, width] = useElementWidth<HTMLDivElement>();
  const [hover, setHover] = React.useState<null | number>(null);
  const compact = useCompactFormatter();
  const full = useFullFormatter();
  const shortDate = useShortDateFormatter();

  const pad = { top: 8, right: 8, bottom: 22, left: 52 };
  const plotWidth = Math.max(0, width - pad.left - pad.right);
  const plotHeight = height - pad.top - pad.bottom;
  const high = niceCeiling(
    Math.max(...flows.map((f) => Math.max(f.delegated, f.undelegated)), 1),
  );
  const mid = pad.top + plotHeight / 2;
  const k = plotHeight / 2 / high;
  const slot = flows.length ? plotWidth / flows.length : 0;
  const barWidth = Math.max(2, slot - 2);
  const labelEvery = Math.max(
    1,
    Math.ceil(flows.length / Math.max(2, Math.floor(plotWidth / 70))),
  );
  const hovered = hover === null ? null : flows[hover];

  return (
    <div className="validator-details-chart" ref={ref}>
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label="Stake delegated and undelegated per day"
        >
          {[high, high / 2, 0, -high / 2, -high].map((v) => (
            <g key={v}>
              <line
                className={v === 0 ? 'baseline' : 'gridline'}
                x1={pad.left}
                x2={width - pad.right}
                y1={mid - v * k}
                y2={mid - v * k}
              />
              <text
                className="axis-label"
                x={pad.left - 8}
                y={mid - v * k + 3}
                textAnchor="end"
              >
                {v === 0
                  ? '0'
                  : `${v > 0 ? '+' : '−'}${compact.format(Math.abs(v))}`}
              </text>
            </g>
          ))}
          {flows.map((f, i) => {
            const bx = pad.left + i * slot + 1;
            return (
              <g key={f.date.valueOf()}>
                <path
                  className="bar inflow"
                  d={roundedBar(
                    bx,
                    mid - f.delegated * k - 1,
                    barWidth,
                    f.delegated * k,
                    'up',
                  )}
                />
                <path
                  className="bar outflow"
                  d={roundedBar(
                    bx,
                    mid + 1,
                    barWidth,
                    f.undelegated * k,
                    'down',
                  )}
                />
                {(i % labelEvery === 0 || i === flows.length - 1) && (
                  <text
                    className="axis-label"
                    x={bx + barWidth / 2}
                    y={height - 6}
                    textAnchor="middle"
                  >
                    {shortDate.format(f.date)}
                  </text>
                )}
                <rect
                  className="hit"
                  x={pad.left + i * slot}
                  y={pad.top}
                  width={slot}
                  height={plotHeight}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                />
              </g>
            );
          })}
        </svg>
      )}
      <ChartTooltip
        containerWidth={width}
        state={
          hovered && hover !== null
            ? {
                x: pad.left + hover * slot + slot / 2,
                y: mid - hovered.delegated * k,
                content: (
                  <>
                    <b>{shortDate.format(hovered.date)}</b>
                    <TooltipRow
                      swatch="inflow"
                      label="Delegated"
                      value={full.format(hovered.delegated)}
                    />
                    <TooltipRow
                      swatch="outflow"
                      label="Undelegated"
                      value={full.format(hovered.undelegated)}
                    />
                  </>
                ),
              }
            : null
        }
      />
    </div>
  );
};

/**
 * epochReliabilityStatus grades one epoch against that epoch's network
 * average, the same way windows of epochs are graded.
 */
function epochReliabilityStatus(
  epoch: EpochPerformance,
  networkRates?: Map<number, number>,
): ReliabilityStatus {
  return reliabilityStatus(
    epoch.slotsLed > 0 ? epoch.slotsMissed / epoch.slotsLed : 0,
    networkRates?.get(epoch.epoch) ?? null,
  );
}

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
export const EpochReliabilityGrid: React.FC<EpochReliabilityGridProps> = ({
  epochs,
  columns: preferredColumns = 30,
  gap = 4,
  highlightLast = false,
  whenFor,
  networkRates,
}) => {
  const [ref, width] = useElementWidth<HTMLDivElement>();
  const [hover, setHover] = React.useState<null | number>(null);
  const full = useFullFormatter();

  // Halve the columns on narrow screens so cells stay large enough to read.
  const columns =
    width > 0 && width < 520
      ? Math.ceil(preferredColumns / 2)
      : preferredColumns;

  const cell = width > 0 ? (width - gap * (columns - 1)) / columns : 0;
  const rows = Math.ceil(epochs.length / columns);
  const height = rows * (cell + gap) - gap;
  const position = (i: number) => ({
    x: (i % columns) * (cell + gap),
    y: Math.floor(i / columns) * (cell + gap),
  });
  const hovered = hover === null ? null : epochs[hover];

  return (
    <div className="validator-details-chart" ref={ref}>
      {width > 0 && (
        <svg
          width={width}
          height={Math.max(0, height)}
          role="img"
          aria-label="Missed leader slots per epoch"
        >
          {epochs.map((e, i) => {
            const { x, y } = position(i);
            const status = epochReliabilityStatus(e, networkRates);
            const m = cell / 2;
            const q = Math.min(5, cell / 4);
            return (
              <g
                key={e.epoch}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <rect
                  className={`epoch-cell ${status}`}
                  x={x}
                  y={y}
                  width={cell}
                  height={cell}
                  rx={3}
                />
                {highlightLast && i === epochs.length - 1 && (
                  <rect
                    className="epoch-latest-ring"
                    x={x - 2.5}
                    y={y - 2.5}
                    width={cell + 5}
                    height={cell + 5}
                    rx={5}
                  />
                )}
                {status === 'good' && (
                  <circle
                    className="epoch-mark-dark"
                    cx={x + m}
                    cy={y + m}
                    r={1.75}
                  />
                )}
                {status === 'fair' && (
                  <circle
                    className="epoch-mark"
                    cx={x + m}
                    cy={y + m}
                    r={2.5}
                  />
                )}
                {status === 'poor' && (
                  <path
                    className="epoch-mark-stroke"
                    d={`M${x + m - q},${y + m - q}L${x + m + q},${y + m + q}M${x + m + q},${y + m - q}L${x + m - q},${y + m + q}`}
                  />
                )}
              </g>
            );
          })}
        </svg>
      )}
      <ChartTooltip
        containerWidth={width}
        state={
          hovered && hover !== null
            ? {
                x: position(hover).x + cell / 2,
                y: position(hover).y,
                content: (
                  <>
                    <b>
                      Epoch {hovered.epoch}
                      {whenFor ? ` · ${whenFor(hover)}` : ''}
                    </b>
                    <TooltipRow
                      label="Missed"
                      value={`${full.format(hovered.slotsMissed)} of ${full.format(hovered.slotsLed)}`}
                    />
                    <TooltipRow
                      label="Rate"
                      value={`${((hovered.slotsMissed / hovered.slotsLed) * 100).toFixed(2)}%`}
                    />
                    <TooltipRow
                      label="Status"
                      value={
                        RELIABILITY_STATUS_LABEL[
                          epochReliabilityStatus(hovered, networkRates)
                        ]
                      }
                    />
                  </>
                ),
              }
            : null
        }
      />
    </div>
  );
};

function usePercentFormatter(): Intl.NumberFormat {
  const locale = React.useContext(CurrentLocale);
  return React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: 'percent',
        maximumFractionDigits: 1,
      }),
    [locale],
  );
}

export interface EpochVoteChartProps {
  /**
   * votes are in epoch order; the latest is drawn on the right.
   */
  votes: EpochVotes[];
  height?: number;
  /**
   * whenFor describes when the epoch at an index was, for its tooltip.
   */
  whenFor?: (index: number) => string;
  /**
   * axisLabelFor labels the x axis under the oldest and middle epochs, e.g.
   * "7d ago"; the latest is always labelled "Latest".
   */
  axisLabelFor?: (index: number) => null | string;
}

/**
 * EpochVoteChart shows the share of eligible blocks voted on per epoch, with
 * the network average as a dashed line. Epochs under NOT_VOTING are drawn as
 * a red tick on the baseline.
 */
export const EpochVoteChart: React.FC<EpochVoteChartProps> = ({
  votes,
  height = 180,
  whenFor,
  axisLabelFor,
}) => {
  const [ref, width] = useElementWidth<HTMLDivElement>();
  const [hover, setHover] = React.useState<null | number>(null);
  const percent = usePercentFormatter();

  // The same frame as EarningsChart, so switching views keeps the plot put.
  const pad = { top: 8, right: 0, bottom: 22, left: 52 };
  const plotWidth = Math.max(0, width - pad.left - pad.right);
  const plotHeight = height - pad.top - pad.bottom;
  const base = pad.top + plotHeight;
  const y = (rate: number) =>
    base - Math.min(1, Math.max(0, rate)) * plotHeight;
  const slot = votes.length ? plotWidth / votes.length : 0;
  const barWidth = Math.max(2, slot - (slot > 12 ? 4 : 2));
  const barX = (i: number) => pad.left + i * slot + (slot - barWidth) / 2;
  const last = votes.length - 1;
  const network = votes
    .map((v, i) =>
      v.networkRate === null
        ? null
        : `${pad.left + i * slot + slot / 2},${y(v.networkRate)}`,
    )
    .filter((point): point is string => point !== null);
  const hovered = hover === null ? null : votes[hover];

  return (
    <div className="validator-details-chart" ref={ref}>
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label="Share of eligible blocks voted on per epoch"
        >
          {[0, 0.5, 1].map((v) => (
            <g key={v}>
              <line
                className="gridline"
                x1={pad.left}
                x2={width - pad.right}
                y1={y(v)}
                y2={y(v)}
              />
              <text
                className="axis-label"
                x={pad.left - 8}
                y={y(v) + 3}
                textAnchor="end"
              >
                {percent.format(v)}
              </text>
            </g>
          ))}
          {votes.map((v, i) =>
            v.rate < NOT_VOTING ? (
              <rect
                key={v.epoch}
                className="bar not-voting"
                x={barX(i)}
                y={base - 3}
                width={barWidth}
                height={3}
                rx={1}
              />
            ) : (
              <path
                key={v.epoch}
                className="bar votes"
                d={roundedBar(
                  barX(i),
                  y(v.rate),
                  barWidth,
                  base - y(v.rate),
                  'up',
                )}
              />
            ),
          )}
          {network.length > 1 && (
            <polyline className="network-line" points={network.join(' ')} />
          )}
          {axisLabelFor &&
            [0, Math.floor(last / 2)]
              .filter((i, k) => i < last && (k === 0 || i > 0))
              .map((i, k) => {
                const label = axisLabelFor(i);
                return (
                  label && (
                    <text
                      key={i}
                      className="axis-label"
                      x={k === 0 ? pad.left : pad.left + i * slot + slot / 2}
                      y={height - 6}
                      textAnchor={k === 0 ? 'start' : 'middle'}
                    >
                      {label}
                    </text>
                  )
                );
              })}
          <text
            className="axis-label latest"
            x={width - pad.right}
            y={height - 6}
            textAnchor="end"
          >
            Latest
          </text>
          {votes.map((v, i) => (
            <rect
              key={v.epoch}
              className="hit"
              x={pad.left + i * slot}
              y={pad.top}
              width={slot}
              height={plotHeight}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </svg>
      )}
      <ChartTooltip
        containerWidth={width}
        state={
          hovered && hover !== null
            ? {
                x: pad.left + hover * slot + slot / 2,
                y: y(Math.max(hovered.rate, hovered.networkRate ?? 0)),
                content: (
                  <>
                    <b>
                      Epoch {hovered.epoch}
                      {whenFor ? ` · ${whenFor(hover)}` : ''}
                    </b>
                    <TooltipRow
                      swatch="votes"
                      label="Voted"
                      value={percent.format(hovered.rate)}
                    />
                    {hovered.networkRate !== null && (
                      <TooltipRow
                        label="Average"
                        value={percent.format(hovered.networkRate)}
                      />
                    )}
                  </>
                ),
              }
            : null
        }
      />
    </div>
  );
};

export interface EarningsChartProps {
  /**
   * periods are in time order; the latest is drawn on the right.
   */
  periods: EarningsPeriod[];
  validatorName: string;
  height?: number;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * EarningsChart stacks the rewards that reached delegators and the
 * validator per period. Periods cover whole epochs, so they are scaled to a
 * per-day rate.
 */
export const EarningsChart: React.FC<EarningsChartProps> = ({
  periods,
  validatorName,
  height = 180,
}) => {
  const [ref, width] = useElementWidth<HTMLDivElement>();
  const [hover, setHover] = React.useState<null | number>(null);
  const compact = useCompactFormatter();
  const full = useFullFormatter();
  const shortDate = useShortDateFormatter();

  const rates = periods.map((p) => {
    const days = Math.max(
      (p.end.valueOf() - p.start.valueOf()) / MS_PER_DAY,
      1 / 24,
    );
    return {
      period: p,
      delegators: p.delegators / days,
      validator: p.validator / days,
    };
  });
  const pad = { top: 8, right: 0, bottom: 22, left: 52 };
  const plotWidth = Math.max(0, width - pad.left - pad.right);
  const plotHeight = height - pad.top - pad.bottom;
  const base = pad.top + plotHeight;
  const high = niceCeiling(
    Math.max(...rates.map((r) => r.delegators + r.validator), 1),
  );
  const y = (value: number) => base - (value / high) * plotHeight;
  const slot = rates.length ? plotWidth / rates.length : 0;
  const barWidth = Math.max(2, slot - (slot > 12 ? 4 : 2));
  const labelEvery = Math.max(
    1,
    Math.ceil(rates.length / Math.max(2, Math.floor(plotWidth / 90))),
  );
  const hovered = hover === null ? null : rates[hover];

  return (
    <div className="validator-details-chart" ref={ref}>
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label="Rewards per day to delegators and the validator"
        >
          {[0, high / 2, high].map((v) => (
            <g key={v}>
              <line
                className="gridline"
                x1={pad.left}
                x2={width - pad.right}
                y1={y(v)}
                y2={y(v)}
              />
              <text
                className="axis-label"
                x={pad.left - 8}
                y={y(v) + 3}
                textAnchor="end"
              >
                {compact.format(v)}
              </text>
            </g>
          ))}
          {rates.map((r, i) => {
            const x = pad.left + i * slot + (slot - barWidth) / 2;
            const top = y(r.delegators + r.validator);
            const middle = y(r.delegators);
            return (
              <g key={r.period.end.valueOf()}>
                <rect
                  className="bar delegators"
                  x={x}
                  y={middle}
                  width={barWidth}
                  height={base - middle}
                />
                <path
                  className="bar validator"
                  d={roundedBar(
                    x,
                    top,
                    barWidth,
                    Math.max(0, middle - top - 0.5),
                    'up',
                  )}
                />
                {i % labelEvery === 0 && i < rates.length - labelEvery / 2 && (
                  <text
                    className="axis-label"
                    x={x + barWidth / 2}
                    y={height - 6}
                    textAnchor="middle"
                  >
                    {shortDate.format(r.period.end)}
                  </text>
                )}
                <rect
                  className="hit"
                  x={pad.left + i * slot}
                  y={pad.top}
                  width={slot}
                  height={plotHeight}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                />
              </g>
            );
          })}
          <text
            className="axis-label latest"
            x={width - pad.right}
            y={height - 6}
            textAnchor="end"
          >
            Latest
          </text>
        </svg>
      )}
      <ChartTooltip
        containerWidth={width}
        state={
          hovered && hover !== null
            ? {
                x: pad.left + hover * slot + slot / 2,
                y: y(hovered.delegators + hovered.validator),
                content: (
                  <>
                    <b>{shortDate.format(hovered.period.end)}</b>
                    <TooltipRow
                      swatch="delegators"
                      label="Delegators"
                      value={`${full.format(hovered.delegators)} ESP/day`}
                    />
                    <TooltipRow
                      swatch="validator"
                      label={validatorName}
                      value={`${full.format(hovered.validator)} ESP/day`}
                    />
                  </>
                ),
              }
            : null
        }
      />
    </div>
  );
};

/**
 * EarningsLegend explains the EarningsChart series.
 */
export const EarningsLegend: React.FC<{ validatorName: string }> = ({
  validatorName,
}) => (
  <div className="validator-details-legend">
    <span>
      <i className="swatch delegators" />
      Delegators
    </span>
    <span>
      <i className="swatch validator" />
      {validatorName}
    </span>
  </div>
);

/**
 * EpochVoteLegend explains the EpochVoteChart series.
 */
export const EpochVoteLegend: React.FC = () => (
  <div className="validator-details-legend">
    <span>
      <i className="swatch votes" />
      Votes
    </span>
    <span>
      <i className="swatch network-line" />
      Network average
    </span>
  </div>
);

/**
 * EpochReliabilityLegend explains the EpochReliabilityGrid cell states.
 */
export const EpochReliabilityLegend: React.FC = () => (
  <div className="validator-details-legend">
    {RELIABILITY_STATUSES.map((status) => (
      <span key={status}>
        <i className={`swatch ${status}`} />
        {RELIABILITY_STATUS_LABEL[status]}
      </span>
    ))}
  </div>
);

/**
 * StakeFlowLegend explains the StakeFlowChart series.
 */
export const StakeFlowLegend: React.FC = () => (
  <div className="validator-details-legend">
    <span>
      <i className="swatch inflow" />
      Delegated
    </span>
    <span>
      <i className="swatch outflow" />
      Undelegated
    </span>
  </div>
);
