#!/usr/bin/env node

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from 'node:child_process';

try {
  // Run the start script
  execSync('npm run start', { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
