import { NumberLike } from '../../../../../../../../../../../src/models/numeric/numeric';
export interface GenericLATLNG<LAT extends NumberLike, LNG extends NumberLike> {
    readonly lat: LAT;
    readonly lng: LNG;
    min(o: GenericLATLNG<LAT, LNG>): GenericLATLNG<LAT, LNG>;
    max(o: GenericLATLNG<LAT, LNG>): GenericLATLNG<LAT, LNG>;
}
