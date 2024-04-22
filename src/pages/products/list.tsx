import React from "react";
import { EditButton, List, ShowButton, useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const ProductList = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColDef<IProduct>[]>(
    () => [
        {
            field: "id",
            headerName: "ID",
            type: "number",
            width: 50,
        },
        { field: "name", headerName: "Name", minWidth: 300, flex: 1 },
        { field: "price", headerName: "Price", minWidth: 100, flex: 1 },
        {
          field: "actions",
          headerName: "Actions",
          renderCell: function render({ row }) {
              return (
                  <div>
                      <EditButton hideText recordItemId={row.id} />
                      <ShowButton hideText recordItemId={row.id} />
                  </div>
              );
          },
          align: "center",
          headerAlign: "center",
          minWidth: 80,
        },
      ],
    []
  );

  return (
    <List>
        <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
}