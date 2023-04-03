import React, { ChangeEvent, FC } from "react";
import { status } from "../../constants";
import { filterConfig } from '../../types/filterConfig.types'
import "./filters.css";

type FiltersProps = {
  filters: filterConfig.config,
  updateFilters: (filters: { name?: string; position?: string; status?: string }) => void;
  onReset: () => void;
};

const STATUS_FILTERS: string[] = status;

/**
 * Component for setting filters and propogating changes to parent
 */
export const Filters: FC<FiltersProps> = ({
  filters,
  updateFilters,
  onReset,
}) => {
  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // TODO: put a debounce here to limit the filters
    const { name, value } = event.target;
    updateFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <div>
        <span> Filter by name: </span>
        <input
          type="text"
          name="name"
          id="name-filter"
          value={filters.name ?? ""}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <span> Filter by position: </span>
        <input
          type="text"
          name="position"
          id="position-filter"
          value={filters.position ?? ""}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <span> Filter by application status: </span>
        <select
          name="status"
          value={filters.status ?? ""}
          onChange={handleFilterChange}
        >
          <option value=""></option>
          {STATUS_FILTERS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="actions">
        <button onClick={onReset} className="clearButton" type="reset">
          Reset the Board
        </button>
      </div>
    </div>
  );
};
