/**
 * Generates public/amalfi-route.pdf from src/content/route/amalfi.md.
 * Run: pnpm generate-pdf
 * Also called automatically by `pnpm build` before `astro build`.
 */
import path from 'path';
import fs from 'fs';
import React from 'react';
import matter from 'gray-matter';
import { renderToFile } from '@react-pdf/renderer';
import { registerFonts } from '../src/pdf/fonts';
import { AmalfiRoutePDF } from '../src/pdf/AmalfiRoutePDF';
import { RouteSchema } from '../src/schemas/route';

const ROOT = path.resolve(import.meta.dirname ?? __dirname, '..');
const SOURCE = path.resolve(ROOT, 'src/content/route/amalfi.md');
const OUTPUT = path.resolve(ROOT, 'public/amalfi-route.pdf');

async function main(): Promise<void> {
  // 1. Parse frontmatter
  const raw = fs.readFileSync(SOURCE, 'utf-8');
  const { data } = matter(raw);

  // 2. Validate with shared Zod schema
  const route = RouteSchema.parse(data);

  // 3. Register fonts (absolute paths — required for CI)
  registerFonts();

  // 4. Ensure public/ exists
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

  // 5. Render PDF
  await renderToFile(<AmalfiRoutePDF route={route} />, OUTPUT);

  console.log(`✓ PDF generated → ${OUTPUT}`);
}

main().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
