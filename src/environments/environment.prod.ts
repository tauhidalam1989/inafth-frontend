export const environment = {
  production: true,
  apiUrl: 'http://192.168.1.12:3000/api', // TODO: update to production API domain when available
  buildDate: '2026-03-18T06:15:43.180Z',
  expirationDate: '2027-03-18T06:15:43.182Z',
  // Microsoft Entra (Azure AD) configuration for production
  azure: {
    clientId: '6f498a92-cc4e-4260-98be-e989adfd363d',
    tenantId: '70ca47a3-3991-4823-8769-6da1f74d05c3',
    // TODO: replace with real production URL of Angular app
    redirectUri: 'https://YOUR-PROD-DOMAIN-HERE/',
    postLogoutRedirectUri: 'https://YOUR-PROD-DOMAIN-HERE/'
  }
};

