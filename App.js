import React, { useState } from "react";
import { Switch, Paper, Grid, Typography } from "@material-ui/core/";
import { View, StyleSheet, Text } from "react-native";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },

    typography: {
      fontSize: darkMode ? "20" : "16",
    },
  });

  //const trocaFont = {};

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid alignItems="center"></Grid>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6">Modo</Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Fonte</Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 200,
          }}
        >
          <Typography>
            "A vingança nunca é plena mata a alma, e a envenena"
          </Typography>
        </View>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
