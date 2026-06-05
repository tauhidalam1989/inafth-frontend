import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MsalModule, MsalGuard, MsalInterceptor, MsalService, MsalBroadcastService, MsalRedirectComponent } from '@azure/msal-angular';
import { BrowserCacheLocation, PublicClientApplication, InteractionType } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: environment.azure.clientId,
          authority: `https://login.microsoftonline.com/${environment.azure.tenantId}`,
          redirectUri: environment.azure.redirectUri,
          postLogoutRedirectUri: environment.azure.postLogoutRedirectUri
        },
        cache: {
          cacheLocation: BrowserCacheLocation.LocalStorage
        }
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['openid', 'profile', 'email']
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map<string, string[]>([
          // Add backend API URLs here if you later secure them with Azure AD
        ])
      }
    ),
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard,
    MsalService,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
