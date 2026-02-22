#!/usr/bin/env node

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageJsonPath = '/vercel/share/v0-project/package.json';

try {
  const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  
  // Add dev script if it doesn't exist
  if (!pkg.scripts.dev) {
    pkg.scripts.dev = 'node scripts/dev.js';
    writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✓ Added "dev" script to package.json');
  } else {
    console.log('✓ "dev" script already exists');
  }
} catch (error) {
  console.error('Error updating package.json:', error.message);
  process.exit(1);
}
