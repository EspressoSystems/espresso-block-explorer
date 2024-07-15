import { CappuccinoExplorerGetSearchResultResponse } from '../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/explorer/get_search_result_response';
import { default as React } from 'react';

export interface InitialSearchState {
    rawQuery?: string;
    query?: string;
    searchResultsQuery?: string;
    lastActivity?: Date;
    searchResults?: CappuccinoExplorerGetSearchResultResponse;
    isLoading?: boolean;
    offset?: null | number;
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
