import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Table from "./components/Table";
import { fetchApiData, fetchDistrictApi } from "./API/api";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Cards from "./components/Cards";
const darkTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});
export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchApiData();
        const fetchedDistrictData = await fetchDistrictApi();
        setFullData(fetchedData);
        setDistrictData(fetchedDistrictData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [fullData, setFullData] = useState([]);
  const [DistrictData, setDistrictData] = useState({});
  return (
    <ThemeProvider theme={darkTheme}>
      <View>
        <Cards fullData={fullData[0]} />
        <Table fullData={fullData} />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
