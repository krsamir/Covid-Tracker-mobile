import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { View, Text } from "react-native";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 90,
    width: 100,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const fullData = props.fullData;
  if (!fullData) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundImage: `linear-gradient(315deg, #485461 0%, #28313b 74%)`,
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{ marginBottom: "10px", marginTop: "30px" }}
        >
          <Paper className={classes.paper}>
            <View style={{ display: "flex", paddingTop: "20%" }}>
              <Text style={{ fontWeight: "bold" }}>Confirmed Cases</Text>
              <Text
                style={{ fontWeight: "bold", color: "red", marginTop: "5px" }}
              >
                {fullData.confirmed}
              </Text>
            </View>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginBottom: "10px" }}>
          <Paper className={classes.paper}>
            <View style={{ display: "flex", paddingTop: "20%" }}>
              <Text style={{ fontWeight: "bold" }}>Active Cases</Text>
              <Text
                style={{ fontWeight: "bold", color: "red", marginTop: "5px" }}
              >
                {fullData.active}
              </Text>
            </View>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} style={{ marginBottom: "10px" }}>
          <Paper className={classes.paper}>
            <View style={{ display: "flex", paddingTop: "20%" }}>
              <Text style={{ fontWeight: "bold" }}>Recovered Cases</Text>
              <Text
                style={{ fontWeight: "bold", color: "red", marginTop: "5px" }}
              >
                {fullData.recovered}
              </Text>
            </View>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} style={{ marginBottom: "30px" }}>
          <Paper className={classes.paper}>
            <View style={{ display: "flex", paddingTop: "20%" }}>
              <Text style={{ fontWeight: "bold" }}>Death Cases</Text>
              <Text
                style={{ fontWeight: "bold", color: "red", marginTop: "5px" }}
              >
                {fullData.deaths}
              </Text>
            </View>
          </Paper>
        </Grid>
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            marginBottom: "100px",
          }}
        >
          {Date().slice(0, 15)},{Date().slice(15, 24)}
        </Text>
      </View>
    );
  }
}
