import React, { createContext, useContext, useState } from "react";

type FilterGroup = "locales" | "resolutions";

interface Filters {
  locales: string[];
  resolutions: string[];
}

interface FilterContextType {
  filters: Filters;
  toggleSelection: (group: FilterGroup, value: string) => void;
  clearFilters: () => void;
  searchParam: string;
  setSearchParam: (param: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>({
  filters: { locales: [], resolutions: [] },
  toggleSelection: () => {},
  clearFilters: () => {},
  searchParam: "",
  setSearchParam: () => {},
});

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selected, setSelected] = useState<Filters>({
    locales: ["pt-PT"],
    resolutions: ["small"],
  });
  const [searchParam, setSearchParam] = useState<string>("");

  const toggleSelection = (group: FilterGroup, value: string) => {
    setSelected((prev) => {
      const current = prev[group];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const clearFilters = () => {
    setSelected({ locales: [], resolutions: [] });
  };

  return (
    <FilterContext.Provider
      value={{
        filters: selected,
        toggleSelection,
        clearFilters,
        searchParam,
        setSearchParam,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
