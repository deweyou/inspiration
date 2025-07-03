import { defineConfig, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';

// config doc: https://unocss.dev/guide/config-file
// interactive doc: https://unocss.dev/interactive/
// icon doc: https://iconify.design/
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
  ],
});
