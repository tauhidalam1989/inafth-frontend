import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Check if the application has expired
function checkExpiration(): boolean {
  if (!environment.expirationDate) {
    console.warn('Expiration date not set. Application may not have been built properly.');
    return true; // Allow app to run if expiration date is not set (development)
  }

  const expirationDate = new Date(environment.expirationDate);
  const now = new Date();

  if (now > expirationDate) {
    // Application has expired
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background: #f5f5f5;">
        <div style="text-align: center; padding: 40px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 500px;">
          <h1 style="color: #d32f2f; margin-bottom: 20px;">Application Expired</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
            This application build has expired.
          </p>
          <p style="color: #999; font-size: 14px;">
            Build Date: ${environment.buildDate ? new Date(environment.buildDate).toLocaleDateString() : 'Unknown'}<br>
            Expiration Date: ${expirationDate.toLocaleDateString()}<br>
            Current Date: ${now.toLocaleDateString()}
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Please contact the administrator for a new build.
          </p>
        </div>
      </div>
    `;
    return false;
  }

  return true;
}

// Check expiration before bootstrapping
if (checkExpiration()) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
