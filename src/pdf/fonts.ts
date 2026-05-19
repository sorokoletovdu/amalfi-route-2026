import path from 'path';
import { Font } from '@react-pdf/renderer';

const fontsDir = path.resolve(import.meta.dirname ?? __dirname, '../../public/fonts');

export function registerFonts(): void {
  Font.register({
    family: 'Inter',
    fonts: [
      { src: path.resolve(fontsDir, 'Inter-Regular.ttf'),   fontWeight: 400 },
      { src: path.resolve(fontsDir, 'Inter-Medium.ttf'),    fontWeight: 500 },
      { src: path.resolve(fontsDir, 'Inter-SemiBold.ttf'),  fontWeight: 600 },
      { src: path.resolve(fontsDir, 'Inter-Bold.ttf'),      fontWeight: 700 },
    ],
  });

  Font.register({
    family: 'Playfair',
    fonts: [
      { src: path.resolve(fontsDir, 'PlayfairDisplay-Regular.ttf'), fontWeight: 400 },
      { src: path.resolve(fontsDir, 'PlayfairDisplay-Bold.ttf'),    fontWeight: 700 },
    ],
  });
}
