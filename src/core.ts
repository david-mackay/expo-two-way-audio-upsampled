import { type PermissionResponse, createPermissionHook } from "expo-modules-core";
import ExpoTwoWayAudioModule from "./ExpoTwoWayAudioModule";

/**
 * Initialize the audio engine at the given sample rate.
 * @param sampleRate PCM sample rate in Hz (default 24000). Common values: 16000, 24000, 44100, 48000.
 */
export async function initialize(sampleRate: number = 24000) {
  return await ExpoTwoWayAudioModule.initialize(sampleRate);
}

export function playPCMData(audioData: Uint8Array) {
  return ExpoTwoWayAudioModule.playPCMData(audioData);
}

export function bypassVoiceProcessing(bypass: boolean) {
  return ExpoTwoWayAudioModule.bypassVoiceProcessing(bypass);
}

export function toggleRecording(val: boolean): boolean {
  return ExpoTwoWayAudioModule.toggleRecording(val);
}

export function isRecording(): boolean {
  return ExpoTwoWayAudioModule.isRecording();
}

export function tearDown() {
  return ExpoTwoWayAudioModule.tearDown();
}

export function restart() {
  return ExpoTwoWayAudioModule.restart();
}

export async function getMicrophonePermissionsAsync(): Promise<PermissionResponse> {
  return ExpoTwoWayAudioModule.getMicrophonePermissionsAsync();
}

export async function requestMicrophonePermissionsAsync(): Promise<PermissionResponse> {
  return ExpoTwoWayAudioModule.requestMicrophonePermissionsAsync();
}

export function getMicrophoneModeIOS() {
  return ExpoTwoWayAudioModule.getMicrophoneModeIOS();
}

export function setMicrophoneModeIOS() {
  return ExpoTwoWayAudioModule.setMicrophoneModeIOS();
}
