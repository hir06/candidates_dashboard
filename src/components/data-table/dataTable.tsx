import { headerArray, sortableCol } from "../../constants";
import "./dataTable.css";

const DataTable = ({
  candidatesData,
  sortData,
}: {
  candidatesData: any;
  sortData: any;
}) => {
  
  const computeAge = (birthDateString: string) => {
    const ageMilliseconds = Date.now() - Number(new Date(birthDateString));
    const ageFromEpoch = new Date(ageMilliseconds);
    return Math.abs(ageFromEpoch.getUTCFullYear() - 1970);
  };
  const sortColumn = (col: string) => {
    sortData(col);
  };
  return (
    <div className={"tableContainer"}>
      <div>
        {
          <div>
            <div className="grid grid__header">
              {headerArray.map(({ key, value }) => {
                return sortableCol.includes(value) ? (
                  <span
                    key={key}
                    className=""
                    onClick={() => sortColumn(value)}
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
                {candidatesData.map((item: any) => (
                  <div className="grid grid__data" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{computeAge(item.birth_date)}</span>
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
