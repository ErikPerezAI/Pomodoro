import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tabs({ mode, setMode }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          mode === "pomodoro" && { borderColor: "red", borderWidth: 4 },
        ]}
        onPress={() => setMode("pomodoro")}
      >
        <Text style={styles.text}>Pomodoro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          mode === "short" && { borderColor: "green", borderWidth: 4 },
        ]}
        onPress={() => setMode("short")}
      >
        <Text style={styles.text}>Descanso corto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          mode === "long" && { borderColor: "blue", borderWidth: 4 },
        ]}
        onPress={() => setMode("long")}
      >
        <Text style={styles.text}>Descanso largo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "rgba(201,201,201,0.2)",
    borderWidth: 2,
    borderColor: "transparent",
  },

  text: {
    fontWeight: "bold",
    color: "black",
  },
});
