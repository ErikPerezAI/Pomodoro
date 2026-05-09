import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.title}>Pomodoro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 50,
  },
});
