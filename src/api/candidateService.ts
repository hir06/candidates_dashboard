import { baseURL } from "../../src/constants";
import { candidateBoard } from "../types/candidateList.types";

export const getAllCandidatesList = async(): Promise<candidateBoard.candidateData[] | undefined> => {
    const response = await fetch(baseURL + '/candidates');
    /* check on status since API returns 500 error code with response and status 200 */
    if(response !== undefined && response.status !== 500){
        return await response.json();
    }
    else {
        return undefined
    }
}

// TODO: get rid of this redudant function 
export const parseCandidatesData = (data: candidateBoard.candidateListApiResponse): candidateBoard.candidateData[] => {
    const { data: candidatesData } = data;
    /* here after getting the API data we're transforming it to calculate the age */
    return candidatesData.map(
        ({
            id,
            name,
            email,
            birth_date,
            position_applied,
            year_of_experience,
            application_date,
            status,
        }) => ({
            id,
            name,
            email,
            age: computeAge(birth_date),
            position_applied,
            year_of_experience,
            application_date,
            status,    
        })
    );
}

function computeAge(birthDateString: string) {
    const ageMilliseconds = Date.now() - Number(new Date(birthDateString));
    const ageFromEpoch = new Date(ageMilliseconds);
    return Math.abs(ageFromEpoch.getUTCFullYear() - 1970);
}
