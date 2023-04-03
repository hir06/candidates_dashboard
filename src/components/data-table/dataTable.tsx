import React from "react";
import { headerArray, sortableCol } from "../../constants";
import "./dataTable.css";
import { candidateBoard } from "../../types/candidateList.types";


type Props = {
  candidatesData: candidateBoard.candidateData[];
  updateSortParams: (col: string) => void;
};

const DataTable: React.FC<Props> = ({ candidatesData, updateSortParams }) => {
  const onSort = (col: string) => {
    updateSortParams(col);
  };

  return (
    <div className="container">
      <div>
        {
          <div>
            <div className="grid grid__header">
              {headerArray.map(({ key, value }) => {
                return sortableCol.includes(value) ? (
                  <span
                    key={key}
                    className="sortable-col"
                    onClick={() => {
                      onSort(value);
                    }}
                  >
                    {key}
                  </span>
                ) : (
                  <span key={key}>{key}</span>
                );
              })}
            </div>
            {candidatesData.length ? (
              <div>
                {candidatesData.map((item: candidateBoard.candidateData) => (
                  <div className="grid grid__data" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.age}</span>
                    <span>{item.position_applied}</span>
                    <span>{item.year_of_experience}</span>
                    <span>{item.application_date}</span>
                    <span>{item.status}</span>
                  </div>
                ))}
              </div>
            ) : (
              "No Data Available"
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default DataTable;
