import React from "react";
import { Text, StyleSheet } from "react-native";
import { formatTime } from "../utils/timeUtils";

export default function Timer({ time }) {
  return <Text style={styles.timer}>{formatTime(time)}</Text>;
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 80,
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
});
