export type PartialLocationHref = Pick<Location, 'href'>;
/**
 * MockLocation is a mock implementation of the Location interface. This is
 * useful for testing that the location is being updated correctly when
 * appropriate.
 */
export declare class MockLocation implements PartialLocationHref {
    lastHref: null | string;
    get href(): string;
    set href(value: string);
}
/**
 * getSearchBar is a helper function that will return the search bar element
 * from the canvasElement provided.
 */
export declare const getSearchBar: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * interactionSelectSearchBar is a helper function that will select the search
 * bar element from the canvasElement provided.
 */
export declare const interactionSelectSearchBar: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * interactiveKeyInSearchString is a helper function that will key in the
 * given search term into the search bar element provided.
 */
export declare const interactiveKeyInSearchString: (canvasElement: HTMLElement, searchTerm: string) => Promise<void>;
/**
 * interactionKeyInBlocksForSearch is a helper function that will key in the
 * search term "block~" into the search bar element provided.
 */
export declare const interactionKeyInBlocksForSearch: (canvasElement: HTMLElement) => Promise<void>;
export declare const interactionKeyInTransactionsForSearch: (canvasElement: HTMLElement) => Promise<void>;
/**
 * getSearchResultsParentContainer is a helper function that will return the
 * search results parent container element from the canvasElement provided.
 */
export declare const getSearchResultsParentContainer: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * getBlockSearchResultElements is a helper function that will return the block
 * search result section element from the canvasElement provided.
 */
export declare const getBlockSearchResultElement: (canvasElement: HTMLElement) => Promise<Element | null>;
/**
 * getBlockSearchResultElements is a helper function that will return the
 * block search results element as an array of elements.
 */
export declare const getBlockSearchResultElements: (canvasElement: HTMLElement) => Promise<HTMLAnchorElement[]>;
/**
 * getTransactionSearchResultElements is a helper function that will return
 * the transaction search result element from the canvasElement provided.
 */
export declare const getTransactionSearchResultElement: (canvasElement: HTMLElement) => Promise<Element | null>;
/**
 * getTransactionSearchResultElements is a helper function that will return
 * the transaction search results element as an array of elements.
 */
export declare const getTransactionSearchResultElements: (canvasElement: HTMLElement) => Promise<HTMLAnchorElement[]>;
/**
 * interactionNavigateDownThroughAllSearchResults is a helper function that will
 * navigate down through all search results from the canvasElement provided.
 */
export declare const interactionNavigateDownThroughAllSearchResults: (canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionHitEnterOnSearchShouldNotNavigate is a helper function
 * that will hit Enter on the search input which should not result in
 * any navigation action.
 */
export declare const interactionHitEnterOnSearchShouldNotNavigate: (location: MockLocation, canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionHitEnterOnSearchShouldNavigate is a helper function that will hit
 * Enter on the search input in order to submit the request to navigate to the
 * selected search result.
 */
export declare const interactionHitEnterOnSearchShouldNavigate: (location: MockLocation, canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionEnteringKeyDownAgainShouldReturnToSearchTerm is a helper function
 * that will return to the search term from the canvasElement provided.
 */
export declare const interactionEnteringKeyDownAgainShouldReturnToSearchTerm: (canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionNavigateUpThroughAllSearchResults is a helper function that will
 * navigate up through all search results from the canvasElement provided.
 */
export declare const interactionNavigateUpThroughAllSearchResults: (canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionEnteringKeyUpAgainShouldReturnToSearchTerm is a helper function
 * that will return to the search term from the canvasElement provided.
 */
export declare const interactionEnteringKeyUpAgainShouldReturnToSearchTerm: (canvasElement: HTMLElement) => Promise<void>;
/**
 * interactionEnteringEscapeShouldUnfocusSearchInput is a helper function that
 * will unfocus the search input from the canvasElement provided.
 */
export declare const interactionEnteringEscapeShouldUnfocusSearchInput: (canvasElement: HTMLElement) => Promise<void>;
/**
 * interactiveSelectAllDelete is a helper function that will send the keys to
 * select all of the text in the input and delete the selection.
 */
export declare const interactiveSelectAllDelete: (canvasElement: HTMLElement) => Promise<void>;
