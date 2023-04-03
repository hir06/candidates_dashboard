import { useMemo, useState, useCallback } from "react";
import { candidateBoard } from "../types/candidateList.types";
import { filterConfig } from "../types/filterConfig.types";

interface UseFilteredDataProps {
  data: candidateBoard.candidateData[];
  initialFilters?: filterConfig.config;
  // this is custom filterFn for more flexibility and reusability of the hook
  filterFn?: (data: candidateBoard.candidateData[], filters: filterConfig.config) => candidateBoard.candidateData[];
}

interface UseFilteredDataReturn {
  filteredData: candidateBoard.candidateData[];
  filters: filterConfig.config;
  setFilters: React.Dispatch<React.SetStateAction<filterConfig.config>>;
  resetFilters: () => void;
}

const useFilteredData = ({ data, initialFilters = {}, filterFn }: UseFilteredDataProps): UseFilteredDataReturn => {
  const [filters, setFilters] = useState<filterConfig.config>(initialFilters);

  const filterCandidates = useCallback(
    (candidate: candidateBoard.candidateData): boolean => {
      const { name, position, status } = filters;

      if (name && !candidate.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      if (position && !candidate.position_applied.toLowerCase().includes(position.toLowerCase())) {
        return false;
      }

      if (status && candidate.status !== status) {
        return false;
      }

      return true;
    },
    [filters]
  );

  function resetFilters() {
    setFilters(initialFilters);
  }
  
  const filteredData = useMemo(() => filterFn ? filterFn(data, filters) : data.filter(filterCandidates), [data, filterCandidates, filterFn, filters]) 
  return { filteredData, filters, setFilters, resetFilters };
};

export default useFilteredData;
