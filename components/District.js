import React from "react";
import { View, Text } from "react-native";
import CardDistrict from "./CardDistrict";
import TableDistrict from "./TableDistrict";
function District(props) {
  const { name, state } = props.route.params;
  const district = props.DistrictData;
  const valueData = Object.entries(district[name].districtData);
  const lastData = valueData.map((value, index) => {
    return [
      {
        id: index,
        name: value[0],
        active: value[1].active,
        confirmed: value[1].confirmed,
        recovered: value[1].recovered,
        deceased: value[1].deceased,
      },
    ];
  });
  return (
    <View>
      <CardDistrict state={state} name={name} />
      <TableDistrict data={lastData} name={name} />
    </View>
  );
}

export default District;
