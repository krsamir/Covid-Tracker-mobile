import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ParentComponent from "./ParentComponent";
import District from "./components/District";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { fetchApiData, fetchDistrictApi } from "./API/api";
const Stack = createStackNavigator();
export default function App() {
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={ParentComponent}
          options={{ title: "Covid Dashboard" }}
        />
        <Stack.Screen name="district" options={{ title: "District" }}>
          {(props) => (
            <District
              {...props}
              DistrictData={DistrictData}
              fullData={fullData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
