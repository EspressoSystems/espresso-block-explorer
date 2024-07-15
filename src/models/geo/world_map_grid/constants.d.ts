import { default as ChainProjection } from '../projection/ChainProjection';
import { default as DensityIndependentPoint } from '../units/DensityIndependentPoint';
import { default as LatLng } from '../units/LatLng';

/**
 * The visual design of the World Map calls for a map of the world whose land
 * masses are represented by dots. The dots are arranged in a grid pattern, and
 * as such can be represented by a grid of points.
 *
 * It seems that for enough resolution to be adhere to the design, and to make
 * out the definition of the land masses, the horizontal size of the grid should
 * be on the order of around 1000 points. This is a rough estimate based on
 * visual inspection of the results.
 *
 * Each dot in the grid is represented by a circle with a width, and height, of
 * 4.25 density independent pixels.  The dots are spaced out by 1 density
 * independent pixel. The overall map resolution is 652dp by 378dp, with no
 * padding on the edges.  We should be able to estimate each desired cell size
 * by taking the 4.25dp and adding the 1dp gap for the ultimate cell size.
 * 4.25dp + 1dp = 5.25dp.  Accounting for the lack of a gap on the edge, that
 * means we should add another 1dp to the ends to account for the spacing as
 * well.
 * 653dp / 5.25dp = 124
 * 379dp / 5.25dp = 72
 *
 * The dots should be centered within the grid cell, and if possible they should
 * attempt to be pixel aligned for the best visual fidelity.
 *
 * Furthermore, the height and width of the mercator projections are more-or-less
 * made to be the same. Anything else results in distortions of the land masses
 * from the well known mercator projection shapes that they exhibit.
 *
 * However, since we're not going to display Antarctica on the map, it leaves
 * the bottom of the map feeling quite empty and barren.  Based on visual
 * inspection, it seems like only the top 60% of the area of the map has any
 * land mass at all.
 *
 * It can be quite costly to make the projection of this map and calculate these
 * points on the fly. So we should pre-calculate and bake the result for the
 * best results, and for reduced file size burden. As we want to bake this
 * size, it would be best if we chose a horizontal resolution that has many
 * multiples for all of the dimensions involved.  In general 12 is a great
 * multiple to choose as it has many multiple factors, and it's why many grid
 * designs in the web are based on a size of 12.  This will allow us to
 * potentially downscale the grid by factors of of 1/12, 1/6, 1/4, 1/3, and
 * 1/2 at the very least.
 *
 * Additionally we should include a multiple of 7, as we only want to keep
 * around 70% of the height.  This will allow us to derive the height of the
 * gride based on the width of the grid, and it would have the 12 multiples
 * as well, making for a nice whole number grid consistently.
 *
 * Beyond that the last multiple should make the horizontal grid have at least
 * 1000 points. Another 12 is a great choice for this, however based on visual
 * inspection, and in order for Hawaii to make an appearance at all, the whole
 * number 16 is a very good choice. (It also has the added benefit of being a
 * multiple of 8).
 */
export declare const mapWidth: DensityIndependentPoint;
/**
 * The width is 70% of the height, as the bottom 30% of the map is empty.
 */
export declare const mapHeight: DensityIndependentPoint;
/**
 * Within the design, each cell of grids is shown as a circle.  The radius for
 * the given circle is about 4.25dp with a gap between the circles of about 1dp.
 *
 * In order to fit within our grid multiples and for the best visual density,
 * it seems to make the most sense to use a grid cell size of 4dp, and a radius
 * of 3. This will leave the 1dp gap, and we'll get some dissonance due to the
 * radius, but with numbers this small, it's difficult to avoid that.
 */
export declare const gridCellSize: DensityIndependentPoint;
export declare const gridCellRadius: DensityIndependentPoint;
export declare const degreesToCoordinateSpaceProjection: ChainProjection<import('..').Degrees, import('..').Radians, DensityIndependentPoint>;
export declare const numXCells: number;
export declare const numYCells: number;
export declare const gridCellCoordinateSpaceCenters: LatLng<DensityIndependentPoint>[];
export declare const totalNumberOfMapDataBytes: number;
