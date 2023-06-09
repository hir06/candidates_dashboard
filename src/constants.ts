import { sortConfig } from "./types/sortConfig.types";

export const baseURL = 'https://personio-fe-coding-challenge.vercel.app/api'
export const headerArray = [
    { key: "Name", value: "name" },
    { key: "Email", value: "email" },
    { key: "Age", value: "birth_date" },
    { key: "Position Applied", value: "position_applied" },
    { key: "Year Of Experience", value: "year_of_experience" },
    { key: "Application Date", value: "application_date" },
    { key: "Status", value: "status" },
  ];

export const sortableCol = [
    'position_applied',
    'year_of_experience', 
    'application_date'
];
export const status = [
  'rejected',
  'approved',
  'waiting'
];
export const columnToSortType = new Map([
  ['position_applied', sortConfig.SortType.STRING],
  ['year_of_experience', sortConfig.SortType.NUMBER],
  ['application_date', sortConfig.SortType.DATE],
]);