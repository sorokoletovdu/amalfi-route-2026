import path from 'path';
import { Font } from '@react-pdf/renderer';

const fontsDir = path.resolve(import.meta.dirname ?? __dirname, '../../public/fonts');

export function registerFonts(): void {
  const openSansUpright = path.resolve(fontsDir, 'OpenSans.ttf');
  const openSansItalic  = path.resolve(fontsDir, 'OpenSans-Italic.ttf');
  Font.register({
    family: 'Open Sans',
    fonts: [
      { src: openSansUpright, fontWeight: 400 },
      { src: openSansUpright, fontWeight: 500 },
      { src: openSansUpright, fontWeight: 600 },
      { src: openSansUpright, fontWeight: 700 },
      { src: openSansItalic,  fontWeight: 400, fontStyle: 'italic' },
      { src: openSansItalic,  fontWeight: 500, fontStyle: 'italic' },
      { src: openSansItalic,  fontWeight: 600, fontStyle: 'italic' },
      { src: openSansItalic,  fontWeight: 700, fontStyle: 'italic' },
    ],
  });


}
