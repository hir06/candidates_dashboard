import { sortConfig } from '../types/sortConfig.types';
import { useMemo, useState } from "react";

export const useSort = (items: any = [], config: sortConfig.config | null = null) => {
    const [sortParams, setSortParams] = useState(config);
    const compareNumbers = (
        a: number,
        b: number,
        direction: string
    ) => {
        const multiplier = direction === 'asc' ? 1 : -1;
        return (a - b) * multiplier;
    };
    
    const compareDates = (a: string, b: string, direction: string) => {
        const multiplier = direction === 'asc' ? 1 : -1;
        return (Date.parse(a) - Date.parse(b)) * multiplier;
    };

    const compareStrings = (
        a: string,
        b: string,
        direction: string
    ) => {
        const result = a.localeCompare(b);
        const multiplier = direction === 'asc' ? 1 : -1;
        return result * multiplier;
    };
    const sortedItems = useMemo(() => {
        let sortableItems = items ? [...items] : [];
        if (sortParams !== null) {
            switch (sortParams.sortType) {
                case 'number':
                    sortableItems.sort((a,b) => compareNumbers(a[sortParams.sortBy],b[sortParams.sortBy],sortParams.direction));
                    break;
                case 'string':
                    sortableItems.sort((a,b) => compareStrings(a[sortParams.sortBy],b[sortParams.sortBy],sortParams.direction));
                    break;
                case 'date':
                    sortableItems.sort((a,b) => compareDates(a[sortParams.sortBy],b[sortParams.sortBy],sortParams.direction));
                    break;
            }
        }
        return sortableItems;
        
    }, [items, sortParams]);

    const onSort = (config :sortConfig.config, persist: boolean = false) => {
        let direction = "asc";
        if (persist) {
          setSortParams(config);
        } else {
          if (
            sortParams &&
            sortParams.sortBy === config.sortBy &&
            sortParams.direction === "asc"
          ) {
            direction = "desc";
          }
          setSortParams({ ...config, direction });
        }
    };

    return { items: sortedItems, onSort, sortParams, setSortParams };
};
