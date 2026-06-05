export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.62:3000/api', // Dev/local – production uses environment.prod.ts (domain)
  /** Auto-logout after this many minutes with no user activity (mouse, keyboard, scroll, touch). */
  idleLogoutMinutes: 60,
  buildDate: '2026-03-18T06:15:43.180Z',
  expirationDate: '2027-03-18T06:15:43.182Z',
  // Microsoft Entra (Azure AD) configuration for local development
  azure: {
    clientId: '6f498a92-cc4e-4260-98be-e989adfd363d',
    tenantId: '70ca47a3-3991-4823-8769-6da1f74d05c3',
    redirectUri: 'http://localhost:4200/',
    postLogoutRedirectUri: 'http://localhost:4200/'
  }
};

