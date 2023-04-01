
export namespace candidateBoard {

    export interface candidateApiResponse  {
        "id": number,
        "name": string,
        "application_date": string,
        "birth_date": string,
        "position_applied": string,
        "status": string,
        "year_of_experience": number,
        "email": string,  
    }

    export interface candidateListApiResponse {
        data: candidateApiResponse[];
        /* TODO: API returns 500 sometimes with 200 as a status code and error object in a response investigate that and maybe can handle this over http error */
        error: { code: string; message: string };
    }
     
    export interface candidateData {
        "id": number,
        "name": string,
        "application_date": string,
        "age": number,
        "position_applied": string,
        "status": string,
        "year_of_experience": number,
        "email": string,  
    }
}