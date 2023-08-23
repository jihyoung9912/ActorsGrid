import React, { createContext, useContext, useState } from 'react';

// Define the type for the children prop it's not reusable, so define in same file
interface SearchProviderProps {
  children: React.ReactNode;
}

// Create Search context
const SearchContext = createContext<
  | {
      searchedActor: string;
      setSearchedActor: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

// Create a custom hook to use the context
export const useSearchContext = () => useContext(SearchContext);

// Create a provider component to wrap around your app
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchedActor, setSearchedActor] = useState('');

  return (
    <SearchContext.Provider value={{ searchedActor, setSearchedActor }}>
      {children}
    </SearchContext.Provider>
  );
};
