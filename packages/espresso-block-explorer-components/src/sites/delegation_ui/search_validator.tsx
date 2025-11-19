import { TextEditing } from '@/components/input/text/text';
import SearchGlass from '@/components/visual/icons/SearchGlass';
import React from 'react';
import {
  SearchFilterContext,
  SetSearchFilterContext,
} from './contexts/search_filter_context';

/**
 * SearchValidator is a React component that renders a search input for
 * filtering validators.
 */
export const SearchValidator: React.FC = () => {
  const searchTerm = React.useContext(SearchFilterContext);
  const setSearchTerm = React.useContext(SetSearchFilterContext);

  return (
    <div className="search-node-container">
      <TextEditing
        className="search-node"
        value={searchTerm}
        onChange={(_event, searchTerm) => setSearchTerm(searchTerm)}
        placeholder="Search Validator"
      />
      <SearchGlass />
    </div>
  );
};
