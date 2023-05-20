import React, { useMemo } from "react";
import { recentOrdersColumns, recentOrdersData } from "../mock/mockData";
import { useSelector } from 'react-redux';

const OrderTable = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  
  const columns = useMemo(() => recentOrdersColumns);

  return (
    <table className={`table-auto w-full mt-8 ${isDarkMode ? 'text-white' : ''}`}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={`header-${index}`}
              className={`py-2 px-4 text-left font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {recentOrdersData.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {recentOrdersColumns.map((column, columnIndex) => (
              <td
                key={`cell-${columnIndex}`}
                className={`border-b-2 font-semibold py-4 px-2 md:px-4 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
              >
                {column.accessorKey === "imageURL" && (
                  <img
                    src={row[column.accessorKey]}
                    alt="imageURL"
                    className="w-20 h-10 object-cover"
                  />
                )}
                {column.accessorKey !== "imageURL" && row[column.accessorKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
