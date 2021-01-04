import React, {useMemo} from 'react'
import { useTable } from "react-table";
const UserAdminTest = () => {
    const data = useMemo(
      () => [
        {
          col_id: "Hello",
          col_name: "World",
          col_account: "World",
          col_auth: "World",
          delete: "x",
        },
        {
          col_id: "Hello",
          col_name: "World",
          col_account: "World",
          col_auth: "World",
          delete: "x",
        },
        {
          col_id: "Hello",
          col_name: "World",
          col_account: "World",
          col_auth: "World",
          delete: "x",
        },
      ],
      []
    );
    const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: "col_id", // accessor is the "key" in the data
        },
        {
          Header: "姓名",
          accessor: "col_name",
        },
        {
          Header: "帳號",
          accessor: "col_account",
        },
        {
          Header: "權限",
          accessor: "col_auth",
        },
        {
          Header: "刪除",
          accessor: "delete",
        },
      ],
      []
    );
    const tableInstance = useTable({ columns, data });
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance;
    return (
      <div className="userAdminTest">
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
}

export default UserAdminTest
