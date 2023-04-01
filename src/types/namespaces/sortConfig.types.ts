export namespace sortConfig {
    export type config = {sortBy: string, direction: string, sortType?: string} | null;
    export type sortableCol =  'position_applied' | 'year_of_experience' | 'application_date';
    export type sortDirection = 'asc' | 'desc';
}