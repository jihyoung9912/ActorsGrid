import React from 'react';

export interface SearchedTextProps {
  setSearchedActor: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchedText {
  searchedActor: string;
}
