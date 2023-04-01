import React, { useEffect, useState } from 'react';
import { getAllCandidatesList, parseCandidatesData } from "../../api/candidateService";
import Loader from '../../components/loader/loader'
import DataTable from '../../components/data-table/dataTable';
import { candidateBoard } from '../../types/namespaces/candidateList.types';
import { useSort } from '../../customHooks/useSort';
import { sortConfig } from '../../types/namespaces/sortConfig.types';
import './dashboard.css';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<candidateBoard.candidateApiResponse[]>([]);

  const { items, getSortedData, sortParams, setSortParams } =
  useSort(data);
  
  useEffect(() => {
    setIsLoading(true);
    getAllCandidatesList()
      .then((response : any) => {
        if(response !== undefined) {
          const transformedData = parseCandidatesData(response)
          setData(transformedData);
        }
      })
      .catch((err) => handleError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleError = (e: any) => {
    console.log(e)
  };

  const requestSort = async(col: string) => {
    const params: sortConfig.config = { sortBy: col, direction: sortParams?.direction || 'asc' }
    await getSortedData(params)
    setData(items)
  }
  return (
    <div className="dashboard">
      {/* TODO: move to header component along with filters */}
     <h1>Candidate Dashboard</h1>
     {isLoading? <Loader size={20} /> : ''}
     {!isLoading && data?.length !== 0 && 
     <DataTable candidatesData={data} sortData={requestSort} />}
    </div>
  );
}

export default Dashboard;

