import { Audio } from "expo-av";

export const playStartSound = async () => {
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
  });

  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/start.mp3"),
  );

  await sound.playAsync();
};

export const playAlarmSound = async () => {
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
  });

  const { sound } = await Audio.Sound.createAsync(
    require("../../assets/alarm.mp3"),
  );

  await sound.playAsync();
};
