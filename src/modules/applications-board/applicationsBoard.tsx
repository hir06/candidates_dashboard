import React, { memo, useEffect, useState } from 'react';
import { getAllCandidatesList, parseCandidatesData } from "../../api/candidateService";
import Loader from '../../components/loader/loader'
import DataTable from '../../components/data-table/dataTable';
import { candidateBoard } from '../../types/candidateList.types';
import { useSort } from '../../customHooks/useSort';
import { sortConfig } from '../../types/sortConfig.types';
import { Filters } from '../../components/filters/filters';
import { columnToSortType } from '../../constants';
import './applicationsBoard.css';
import useFilteredData from '../../customHooks/useFilters';

function ApplicationsDashboard() {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<candidateBoard.candidateData[]>([]);
  const [displayedData, setDisplayedData] = useState<candidateBoard.candidateData[]>([])
  const { filteredData, filters, setFilters, resetFilters } = useFilteredData({ data: data });
  const { sortParams, items, setSortParams, onSort} = useSort(filteredData);
  const params = new URLSearchParams(window.location.search);
 
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

  useEffect(() => {
    setDisplayedData(items)
  },[items])
  
  useEffect(() => {
    if(data) {
      setDisplayedData(data);
    }
  }, [data]);

  useEffect(() => {
    updateUrlParams()
  }, [filters, sortParams])
  // onRefresh we take params from url and apply sorting and filtering accordingly just once hence dependency array just contains the API data
  useEffect(() => {
    const columnToSortType = new Map([
      ['position_applied', sortConfig.SortType.STRING],
      ['year_of_experience', sortConfig.SortType.NUMBER],
      ['application_date', sortConfig.SortType.DATE],
    ]);

    if (data) {
      let sortBy = params.get("sortBy");
      let direction = params.get("direction");
      let name = params.get("name");
      let status = params.get("status");
      let position = params.get("position");
      let sortType = columnToSortType.get(sortBy)
      if (name || status || position) {
        setFilters({ name, status, position });
      }
      setDisplayedData(filteredData) //filtered data
     
      let sortParams = { sortBy, direction, sortType};
      sortParams?.sortBy && setSortParams(sortParams);;
    }
  }, [data]);

  const updateUrlParams = () => {
    let newParams = {};
    filters.name && (newParams["name"] = filters.name);
    filters.status && (newParams["status"] = filters.status);
    filters.position && (newParams["position"] = filters.position);
    if (sortParams?.sortBy) {
      newParams = { ...newParams, "sortBy" : sortParams.sortBy, "direction": sortParams.direction};
    }
    if (Object.keys(newParams).length > 0) {
      const urlparams = new URLSearchParams(newParams);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${urlparams}`
      );
    }
  };

  const handleError = (e: any) => {
    // TODO: add this to the logger/ error dashboards like dataDog
    console.log(e)
  };

  const applySort = async(col: string, dir : string ='asc') => {
    const params: sortConfig.config = { sortBy: col, sortType: columnToSortType.get(col) }
    onSort(params)
  }

  const applyFilters = async(filterConfig) => {
    setFilters(filterConfig)
  }
  const clearUrlParams = () => {
    window.history.replaceState({ data }, "", `${window.location.pathname}`);
  };
  const onReset = async() => {
    resetFilters();
    setSortParams(null)
    setFilters({})
    clearUrlParams();
    setDisplayedData(data)
  }

  return (
    <div className="dashboard">
     {isLoading? <Loader size={50} /> : ''}
     {!isLoading && displayedData?.length !== 0 && <Filters updateFilters={applyFilters} filters={filters} onReset={onReset} />}
     {!isLoading && displayedData?.length !== 0  && 
     <DataTable candidatesData={displayedData} updateSortParams={applySort} />}
    </div>
  );
}

export default ApplicationsDashboard;