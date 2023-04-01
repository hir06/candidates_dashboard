export namespace filterConfig {
    // instead of hardcoding we can iterate through the list and find out the distinct values but that would be o(n) complexity
    export type status = 'approved' | 'rejected' | 'waiting';
    
    export const isValidStatus = (value: unknown): value is status => {
        if (['approved', 'rejected', 'waiting'].includes(value as status)) {
            return true;
        }
        return false;
    };
    
}