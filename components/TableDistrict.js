import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const columns = [
  { field: "name", headerName: "District", width: 130 },
  { field: "confirmed", headerName: "Confirmed", width: 130 },
  { field: "active", headerName: "Active", width: 130 },
  { field: "recovered", headerName: "Recovered", width: 130 },
  { field: "deceased", headerName: "Deaths", width: 130 },
];

export default function DataTable(props) {
  const { data } = props;
  const finalData = data.map((value) => {
    return value[0];
  });
  const rows = finalData;
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
        pageSize={40}
        autoHeight={true}
      />
    </View>
  );
}
