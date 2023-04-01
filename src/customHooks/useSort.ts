import { sortConfig } from './../types/namespaces/sortConfig.types';
import { useMemo, useState } from "react";

export const useSort = (items: any = [], config: sortConfig.config | null = null) => {
    const [sortParams, setSortParams] = useState(config);
    const compareNumbers = (
        a: number,
        b: number,
        direction: string
    ) => {
        const multiplier = direction === 'asc' ? -1 : 1;
        return (a - b) * multiplier;
    };
    
    const compareDates = (a: Date, b: Date, direction: string) => {
        const multiplier = direction === 'asc' ? -1 : 1;
        return (a.getTime() - b.getTime()) * multiplier;
    };

    const compareStrings = (
        a: string,
        b: string,
        direction: string
    ) => {
        const result = a.localeCompare(b);
        const multiplier = direction === 'asc' ? -1 : 1;
        return result * multiplier;
    };
    const sortedItems = useMemo(() => {
        let sortableItems = items ? [...items] : [];
        if (sortParams !== null) {
            console.log('inside sort', sortParams?.sortBy)
            switch (sortParams.sortType) {
                case 'number':
                    [...sortableItems].sort((a,b) => b[sortParams.sortBy] - a[sortParams.sortBy]);
                    break;
                case 'string':
                    [...sortableItems].sort((a,b) => compareStrings(a[sortParams.sortBy],b[sortParams.sortBy],sortParams.direction));
                    break;
                case 'date':
                    [...sortableItems].sort((a,b) => compareDates(a[sortParams.sortBy],b[sortParams.sortBy],sortParams.direction));
                    break;
            }
        }
        console.log('here', sortableItems);
        return sortableItems;
        
    }, [items, sortParams]);

    const getSortedData = (config :sortConfig.config, persist: boolean = false) => {
       if(!config) return
            let dir = config.direction || "asc";
            switch(config.sortBy) {
                case 'position_applied':
                    config.sortType = 'string'
                    break
                case 'year_of_experience': 
                    config.sortType = 'number'
                    break
                case 'application_date':
                    config.sortType = 'date'
                    break
                default:
                    config.sortType = 'number'
            }
            if(config.direction === 'asc') config.direction = 'desc' 
            else config.direction = 'asc'
            // if (persist) {
            //     setSortConfig(config);
            // } else {
            //     if (
            //         config &&
            //         config.sortBy &&
            //         config.direction === "asc"
            //     ) {
            //         dir = "desc";
            //     }
               
            //     setSortConfig({ sortBy: config.sortBy, direction: dir });
            // }
            setSortParams({...config, direction: dir});
        
    };

    return { items: sortedItems, getSortedData, sortParams, setSortParams };
};
