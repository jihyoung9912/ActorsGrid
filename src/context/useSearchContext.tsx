import React, { createContext, useContext, useState } from 'react';

interface SearchContextValue {
  searchedActor: string;
  setSearchedActor: React.Dispatch<React.SetStateAction<string>>;
}
interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const useSearchContext = (): SearchContextValue => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchedActor, setSearchedActor] = useState('');

  const value: SearchContextValue = {
    searchedActor,
    setSearchedActor,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
