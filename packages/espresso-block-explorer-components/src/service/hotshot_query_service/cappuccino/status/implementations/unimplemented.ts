import UnimplementedError from '@/errors/UnimplementedError';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

/**
 * UnimplementedCappuccinoHotShotQueryServiceStatusAPI is a class that
 * implements the CappuccinoHotShotQueryServiceStatusAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Status API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
  async blockHeight(): Promise<number> {
    throw new UnimplementedError();
  }
}
