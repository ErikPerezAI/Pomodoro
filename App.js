import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import Tabs from "./src/components/Tabs";
import StartButton from "./src/components/StartButton";

import { COLORS } from "./src/constants/colors";
import { playStartSound, playAlarmSound } from "./src/utils/sounds";

export default function App() {
  const TIMES = {
    pomodoro: 1500,
    short: 300,
    long: 600,
  };

  const [mode, setMode] = useState("pomodoro");
  const [time, setTime] = useState(TIMES.pomodoro);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setTime(TIMES[mode]);
    setRunning(false);
  }, [mode]);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            playAlarmSound();
            setRunning(false);
            return TIMES[mode];
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    if (!running) {
      playStartSound();
    }

    setRunning(!running);
  };

  return (
    <View style={[styles.container, { backgroundColor: COLORS[mode] }]}>
      <Header />

      <Timer time={time} />

      <Tabs mode={mode} setMode={setMode} />

      <StartButton running={running} onPress={handleStartStop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
