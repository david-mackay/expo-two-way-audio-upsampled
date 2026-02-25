import ExpoTwoWayAudioModule from "./ExpoTwoWayAudioModule";
/**
 * Initialize the audio engine at the given sample rate.
 * @param sampleRate PCM sample rate in Hz (default 24000). Common values: 16000, 24000, 44100, 48000.
 */
export async function initialize(sampleRate = 24000) {
    return await ExpoTwoWayAudioModule.initialize(sampleRate);
}
export function playPCMData(audioData) {
    return ExpoTwoWayAudioModule.playPCMData(audioData);
}
export function bypassVoiceProcessing(bypass) {
    return ExpoTwoWayAudioModule.bypassVoiceProcessing(bypass);
}
export function toggleRecording(val) {
    return ExpoTwoWayAudioModule.toggleRecording(val);
}
export function isRecording() {
    return ExpoTwoWayAudioModule.isRecording();
}
export function tearDown() {
    return ExpoTwoWayAudioModule.tearDown();
}
export function restart() {
    return ExpoTwoWayAudioModule.restart();
}
export async function getMicrophonePermissionsAsync() {
    return ExpoTwoWayAudioModule.getMicrophonePermissionsAsync();
}
export async function requestMicrophonePermissionsAsync() {
    return ExpoTwoWayAudioModule.requestMicrophonePermissionsAsync();
}
export function getMicrophoneModeIOS() {
    return ExpoTwoWayAudioModule.getMicrophoneModeIOS();
}
export function setMicrophoneModeIOS() {
    return ExpoTwoWayAudioModule.setMicrophoneModeIOS();
}
//# sourceMappingURL=core.js.map