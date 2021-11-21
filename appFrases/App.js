import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Switch,Typography, Paper } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //cor do tema escuro ou claro//
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },

    //seta o tamanho da fonte de acordo com o tema, caso seja escuro a fonte aumentará para 24, caso o tema seja claro, o tamanho padrão: 16//
    typography: {
      fontSize: darkMode ? "24" : "16",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ width: "100%", height: "100%" }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={{ flexDirection: "row" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="subtitle2">Fonte</Typography>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              ></Switch>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="subtitle2">Tema</Typography>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              ></Switch>
            </View>
          </View>
          <View style={styles.container}>
            <Typography variant="h3">
              "A vingança nunca é plena mata a alma e a envenena"
            </Typography>
          </View>
        </View>
      </Paper>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    margin: 50,
  },
});

export default App;
