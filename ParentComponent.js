import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Cards from "./components/Cards";
import Table from "./components/Table";
import { fetchApiData, fetchDistrictApi } from "./API/api";

function ParentComponent(props) {
  const [fullData, setFullData] = useState([]);
  const [DistrictData, setDistrictData] = useState({});
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
  return (
    <View>
      <Cards {...props} fullData={fullData[0]} />
      <Table {...props} fullData={fullData} DistrictData={DistrictData} />
    </View>
  );
}

export default ParentComponent;
