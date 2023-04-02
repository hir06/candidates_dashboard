import { useMemo, useState, useCallback } from "react";
import { candidateBoard } from "../types/namespaces/candidateList.types";
import { filterConfig } from "../types/namespaces/filterConfig.types";

interface UseFilteredDataProps {
  data: candidateBoard.candidateApiResponse[];
  initialFilters?: filterConfig.config;
  // this is custom filterFn for more flexibility and reusability of the hook
  filterFn?: (data: candidateBoard.candidateApiResponse[], filters: filterConfig.config) => candidateBoard.candidateApiResponse[];
}

interface UseFilteredDataReturn {
  filteredData: candidateBoard.candidateApiResponse[];
  filters: filterConfig.config;
  setFilters: React.Dispatch<React.SetStateAction<filterConfig.config>>;
  resetFilters: () => void;
}

const useFilteredData = ({ data, initialFilters = {}, filterFn }: UseFilteredDataProps): UseFilteredDataReturn => {
  const [filters, setFilters] = useState<filterConfig.config>(initialFilters);

  const filterCandidates = useCallback(
    (employee: candidateBoard.candidateApiResponse): boolean => {
      const { name, position, status } = filters;

      if (name && !employee.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      if (position && !employee.position_applied.toLowerCase().includes(position.toLowerCase())) {
        return false;
      }

      if (status && employee.status !== status) {
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
