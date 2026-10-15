export const TONES = ['cyan', 'purple', 'magenta', 'green', 'orange'] as const
export type Tone = (typeof TONES)[number]
/** Cycles the Teia tones so neighbouring cards never share a colour. */
export const toneAt = (i: number): Tone => TONES[i % TONES.length]
