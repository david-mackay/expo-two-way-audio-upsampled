import { type PermissionResponse } from "expo-modules-core";
/**
 * Initialize the audio engine at the given sample rate.
 * @param sampleRate PCM sample rate in Hz (default 24000). Common values: 16000, 24000, 44100, 48000.
 */
export declare function initialize(sampleRate?: number): Promise<any>;
export declare function playPCMData(audioData: Uint8Array): any;
export declare function bypassVoiceProcessing(bypass: boolean): any;
export declare function toggleRecording(val: boolean): boolean;
export declare function isRecording(): boolean;
export declare function tearDown(): any;
export declare function restart(): any;
export declare function getMicrophonePermissionsAsync(): Promise<PermissionResponse>;
export declare function requestMicrophonePermissionsAsync(): Promise<PermissionResponse>;
export declare function getMicrophoneModeIOS(): any;
export declare function setMicrophoneModeIOS(): any;
//# sourceMappingURL=core.d.ts.map