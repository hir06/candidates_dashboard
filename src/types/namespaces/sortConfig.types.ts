export namespace sortConfig {
    export enum SortType {
        STRING = 'string',
        NUMBER = 'number',
        DATE = 'date'
      }
    export type config = {sortBy: string, sortType?: SortType , direction?: string} | null;
}