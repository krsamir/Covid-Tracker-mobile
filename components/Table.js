import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "react-native";

const columns = [
  { field: "state", headerName: "State", width: 130 },
  { field: "confirmed", headerName: "Confirmed", width: 130 },
  { field: "active", headerName: "Active", width: 130 },
  { field: "recovered", headerName: "Recovered", width: 130 },
  { field: "deaths", headerName: "Deaths", width: 130 },
];

export default function DataTable(props) {
  const { fullData } = props;
  const rows = fullData;
  return (
    <View
      style={{
        height: 400,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellClick={(value) => {
          console.log(value.row.state);
        }}
        pageSize={40}
        autoHeight={true}
      />
    </View>
  );
}
