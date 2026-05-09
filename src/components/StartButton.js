import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function StartButton({ running, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{running ? "Parar" : "Iniciar"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
