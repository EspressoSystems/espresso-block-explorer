import { CappuccinoExplorerGetSearchResultResponse } from '../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/explorer/get_search_result_response';
import { default as React } from '../../../../../../node_modules/react';
import { PartialLocationHref } from './__shared__/search_input_shared';

export interface InitialSearchState {
    rawQuery?: string;
    query?: string;
    searchResultsQuery?: string;
    searchResults?: CappuccinoExplorerGetSearchResultResponse;
    isLoading?: boolean;
    offset?: null | number;
    location?: PartialLocationHref;
}
export interface SearchInputProps {
    initialState?: InitialSearchState;
    forceFocusState?: boolean;
}
/**
 * SearchInput is the component that will allow the user to search for blocks,
 * transactions, rollups, and addresses.
 *
 * Right now it only supports searching for blocks and transactions.
 */
export declare const SearchInput: React.FC<SearchInputProps>;
