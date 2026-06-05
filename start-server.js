#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Get the directory where this script is located
const scriptDir = __dirname;

// Change to the script directory
process.chdir(scriptDir);

// Spawn ng serve process
const ngServe = spawn('npx', ['ng', 'serve', '--host', '0.0.0.0', '--port', '4200'], {
  stdio: 'inherit',
  shell: true,
  cwd: scriptDir
});

// Handle process exit
ngServe.on('exit', (code) => {
  process.exit(code);
});

// Handle errors
ngServe.on('error', (err) => {
  console.error('Failed to start Angular dev server:', err);
  process.exit(1);
});







