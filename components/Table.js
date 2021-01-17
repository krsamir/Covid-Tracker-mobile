import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const columns = [
  { field: "state", headerName: "State", width: 130 },
  { field: "confirmed", headerName: "Confirmed", width: 130 },
  { field: "active", headerName: "Active", width: 130 },
  { field: "recovered", headerName: "Recovered", width: 130 },
  { field: "deaths", headerName: "Deaths", width: 130 },
];

export default function DataTable(props) {
  const { fullData, navigation } = props;
  //   const finalData = fullData.map((value) => {
  //     if (value.statecode === "TT") {
  //       return value;
  //     } else {
  //       return value;
  //     }
  //   });
  const finalData = fullData.slice(1);
  console.log(finalData);

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
        onCellClick={(value) => {
          navigation.navigate("district", {
            name: value.row.state,
            state: value.row,
          });
        }}
        pageSize={40}
        autoHeight={true}
      />
    </View>
  );
}
