/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  __playClickSound?: (freq?: number, duration?: number) => void;
  __playPacmanChomp?: () => void;
  __playLampClick?: (isTurningOn?: boolean) => void;
  __playAccentChime?: (pick?: string) => void;
  __playTypeSound?: () => void;
  __toggleSound?: () => boolean;
  __isSoundEnabled?: () => boolean;
  __toggleTheme?: () => void;
  __toggleSecretsModal?: () => void;
  __openCommandPalette?: () => void;
  __closeCommandPalette?: () => void;
  webkitAudioContext?: typeof AudioContext;
}
