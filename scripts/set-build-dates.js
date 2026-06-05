const fs = require('fs');
const path = require('path');

// Calculate dates
const buildDate = new Date().toISOString();
const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(); // 1 year from now

// Paths to environment files
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');
const envPath = path.join(__dirname, '../src/environments/environment.ts');

// Function to update environment file
function updateEnvironmentFile(filePath, isProduction) {
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Environment file not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if buildDate and expirationDate already exist
  const hasBuildDate = content.includes('buildDate:');
  const hasExpirationDate = content.includes('expirationDate:');

  if (hasBuildDate && hasExpirationDate) {
    // Update existing dates (handle both empty strings and existing values)
    content = content.replace(
      /buildDate:\s*['"`]?[^,}'"`]*['"`]?/,
      `buildDate: '${buildDate}'`
    );
    content = content.replace(
      /expirationDate:\s*['"`]?[^,}'"`]*['"`]?/,
      `expirationDate: '${expirationDate}'`
    );
  } else {
    // Add dates if they don't exist
    // Find the last property before closing brace
    const lastPropertyMatch = content.match(/([^,}]+)(\s*)([},])/);
    if (lastPropertyMatch) {
      const apiUrlLine = content.match(/apiUrl:\s*[^,}]+/);
      if (apiUrlLine) {
        // Add dates after apiUrl
        content = content.replace(
          /(apiUrl:\s*[^,}]+)(,?)/,
          `$1,\n  buildDate: '${buildDate}',\n  expirationDate: '${expirationDate}'`
        );
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${path.basename(filePath)} with build date: ${buildDate} and expiration date: ${expirationDate}`);
}

// Update both environment files
console.log('Setting build dates...');
updateEnvironmentFile(envProdPath, true);
updateEnvironmentFile(envPath, false);
console.log('Build dates set successfully!');

