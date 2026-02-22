#!/usr/bin/env node

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const gitDir = join('/vercel/share/v0-project', '.git');

// Check if .git already exists
if (existsSync(gitDir)) {
  console.log('✓ Git repository already initialized');
  process.exit(0);
}

try {
  console.log('Initializing git repository...');
  execSync('git init', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit',
  });
  
  // Create a minimal git config
  execSync('git config user.email "dev@example.com"', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit',
  });
  
  execSync('git config user.name "Dev User"', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit',
  });
  
  console.log('✓ Git repository initialized successfully');
} catch (error) {
  console.error('Error initializing git:', error.message);
  process.exit(1);
}
