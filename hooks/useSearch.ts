// hooks/useSearch.ts
import { useState } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!query) setIsFocused(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return {
    query,
    isFocused,
    handleFocus,
    handleBlur,
    handleChange,
    setQuery,
  };
}
