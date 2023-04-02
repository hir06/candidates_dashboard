import React, { FC, useState } from "react";
import { status } from "../../constants";
import './filters.css'
const STATUS_FILTERS: Array<string> = status;

/**
 * Component for setting filters
 *
 * @constructor
 */
export const Filters = ({ filters, inputFilters, onReset,onSubmit, isDisabled }) => {

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) {
    const { name, value } = event.target;
    inputFilters({ ...filters, [name]: value });
  }

  return (
    <div className="filters">
    
      
        <div>
          <span> Filter by name:  </span>  
          <input
            type="text"
            name="name"
            id="name-filter"
            value={filters.name ?? ''}
            onChange={handleFilterChange}
          />
        </div>
        <div>
        <span> Filter by position:  </span>  
          <input
            type="text"
            name="position"
            id="position-filter"
            value={filters.position ?? ''}
            onChange={handleFilterChange}
          />
        </div>
        <div>
        <span> Filter by application status:  </span>  
            <select 
              name="status"
              value={filters.status ?? ''} 
              onChange={handleFilterChange}
            >
              <option value={null}></option>  
              {STATUS_FILTERS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
      
        </div>
        <div className="actions">
            <button
            onClick={onReset}
            className="clearButton"
            type="reset"> Reset the Board </button>
        </div>
    
    </div>
  );
};
