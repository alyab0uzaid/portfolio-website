export interface VibrantPalette {
  Vibrant?: { hex: string };
  Muted?: { hex: string };
  DarkVibrant?: { hex: string };
  LightVibrant?: { hex: string };
  DarkMuted?: { hex: string };
}

export interface VibrantInstance {
  getPalette(): Promise<VibrantPalette>;
}

export interface VibrantConstructor {
  new (imageUrl: string): VibrantInstance;
}

declare global {
  interface Window {
    Vibrant: VibrantConstructor;
  }
}

export {}; 