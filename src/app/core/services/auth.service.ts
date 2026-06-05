import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MsalService } from '@azure/msal-angular';

export interface UserPermissions {
  id?: number;
  userId?: number;
  addModifyAccounts: boolean;
  viewAccounts: boolean;
  deleteAccounts: boolean;
  addModifyAds: boolean;
  displayAds: boolean;
  deleteAds: boolean;
  addModifySites: boolean;
  viewSites: boolean;
  deleteSites: boolean;
  notificationSending: boolean;
  notificationViewing: boolean;
  notificationDeletion: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id: number;
  username: string;
  email: string;
  phone1?: string;
  phone2?: string;
  subsiteId?: number;
  sectionId?: number;
  specialDivisionId?: number;
  subsiteName?: string;
  sectionName?: string;
  specialDivisionName?: string;
  userType: 'regular-user' | 'admin-user' | 'super-user';
  validity: 'manager' | 'supervisor' | 'coordinator';
  notes?: string;
  isActive: boolean;
  twoFactorEnabled?: boolean;
  permissions?: UserPermissions;
  // Legacy fields for compatibility
  name?: string;
  role?: 'admin' | 'manager' | 'user';
  avatar?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  requiresTwoFactor?: boolean;
  tempToken?: string;
}

export interface ExternalLoginUserPayload {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private msalService: MsalService
  ) {
    this.checkStoredAuth();
  }

  private checkStoredAuth(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  /**
   * Mark user as authenticated using an external identity provider (e.g. Microsoft).
   * This does not verify password on our backend, it just maps the external user
   * into the existing User model so that AuthGuard and permission checks work.
   */
  setExternalLoginUser(payload: ExternalLoginUserPayload): void {
    const externalUser: User = {
      id: 0,
      username: payload.username,
      email: payload.email,
      userType: 'super-user',
      validity: 'manager',
      isActive: true,
      // Provide full permissions so UI continues to work; adjust if needed
      permissions: {
        addModifyAccounts: true,
        viewAccounts: true,
        deleteAccounts: true,
        addModifyAds: true,
        displayAds: true,
        deleteAds: true,
        addModifySites: true,
        viewSites: true,
        deleteSites: true,
        notificationSending: true,
        notificationViewing: true,
        notificationDeletion: true
      }
    };

    // Map to legacy fields for compatibility
    externalUser.role = 'admin';
    externalUser.name = externalUser.username;

    this.currentUserSubject.next(externalUser);
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('currentUser', JSON.stringify(externalUser));
  }

  /** Login result: either full user or requires 2FA step */
  login(credentials: LoginCredentials): Observable<{ user: User } | { requiresTwoFactor: true; tempToken: string }> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, {
      username: credentials.username,
      password: credentials.password
    }).pipe(
      map((response) => {
        if (response.success && response.requiresTwoFactor && response.tempToken) {
          return { requiresTwoFactor: true as const, tempToken: response.tempToken };
        }
        if (response.success && response.user) {
          const user = this.normalizeUser(response.user);
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return { user };
        }
        throw new Error('Invalid login response');
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Normal password login WITHOUT 2FA step.
   * Used so OTP is required only for "Sign in with Google" flow.
   */
  loginNo2FA(credentials: LoginCredentials): Observable<User> {
    return this.http.post<{ success: boolean; user: User }>(`${this.apiUrl}/auth/login-no2fa`, {
      username: credentials.username,
      password: credentials.password
    }).pipe(
      map((response) => {
        if (response.success && response.user) {
          const user = this.normalizeUser(response.user);
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        throw new Error('Invalid login-no2fa response');
      }),
      catchError((error) => {
        console.error('Login-no2fa error:', error);
        return throwError(() => error);
      })
    );
  }

  /** Verify 2FA code and complete login */
  verify2FA(tempToken: string, code: string): Observable<User> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/2fa/verify`, { tempToken, code }).pipe(
      map((response) => {
        if (response.success && response.user) {
          const user = this.normalizeUser(response.user);
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        throw new Error('Invalid 2FA response');
      }),
      catchError((error) => {
        console.error('2FA verify error:', error);
        return throwError(() => error);
      })
    );
  }

  /** Start 2FA setup – returns QR code data URL */
  setup2FA(username: string, password: string): Observable<{ qrDataUrl: string }> {
    return this.http.post<{ success: boolean; qrDataUrl: string }>(`${this.apiUrl}/auth/2fa/setup`, { username, password });
  }

  /** Complete 2FA setup after scanning QR */
  verifySetup2FA(username: string, password: string, code: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/auth/2fa/verify-setup`, { username, password, code });
  }

  /** Disable 2FA */
  disable2FA(username: string, password: string, code: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/auth/2fa/disable`, { username, password, code });
  }

  /** Get 2FA status */
  get2FAStatus(username: string, password: string): Observable<{ enabled: boolean }> {
    return this.http.post<{ success: boolean; enabled: boolean }>(`${this.apiUrl}/auth/2fa/status`, { username, password });
  }

  /**
   * OTP-only 2FA login start (no password).
   * If 2FA is enabled => requiresOtp
   * If 2FA is disabled => server returns QR to start setup and then OTP to enable+login
   */
  otpLoginStart(usernameOrEmail: string): Observable<{ requiresSetup: boolean; qrDataUrl?: string }> {
    return this.http.post<any>(`${this.apiUrl}/auth/2fa/otp-login/start`, { usernameOrEmail }).pipe(
      map((response) => {
        if (response?.success) {
          return { requiresSetup: !!response.requiresSetup, qrDataUrl: response.qrDataUrl };
        }
        throw new Error('Invalid otp login start response');
      })
    );
  }

  /**
   * OTP-only 2FA login verify (no password).
   * Returns full user on success (and enables 2FA if it was not enabled yet).
   */
  otpLoginVerify(usernameOrEmail: string, code: string): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/auth/2fa/otp-login/verify`, { usernameOrEmail, code }).pipe(
      map((response) => {
        if (response?.success && response.user) {
          const user = this.normalizeUser(response.user);
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        throw new Error('Invalid otp login verify response');
      }),
      catchError((error) => {
        console.error('OTP login verify error:', error);
        return throwError(() => error);
      })
    );
  }

  private normalizeUser(user: User): User {
    const roleMap: { [key: string]: 'admin' | 'manager' | 'user' } = {
      'super-user': 'admin',
      'admin-user': 'manager',
      'regular-user': 'user'
    };
    user.role = roleMap[user.userType] || 'user';
    user.name = user.username;
    return user;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('currentUser');

    // Intentionally do NOT sign out from Microsoft SSO here.
    // Signing out from MS triggers an external redirect (Microsoft logout page),
    // but for this app we only want an in-app logout.
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.permissions) {
      return false;
    }
    // Check permission based on the permission string
    // Map permission strings to UserPermissions properties
    const permissionMap: { [key: string]: keyof UserPermissions } = {
      'addModifyAccounts': 'addModifyAccounts',
      'viewAccounts': 'viewAccounts',
      'deleteAccounts': 'deleteAccounts',
      'addModifyAds': 'addModifyAds',
      'displayAds': 'displayAds',
      'deleteAds': 'deleteAds',
      'addModifySites': 'addModifySites',
      'viewSites': 'viewSites',
      'deleteSites': 'deleteSites',
      'notificationSending': 'notificationSending',
      'notificationViewing': 'notificationViewing',
      'notificationDeletion': 'notificationDeletion'
    };
    
    const permissionKey = permissionMap[permission];
    return permissionKey ? (user.permissions[permissionKey] === true) : false;
  }

  hasAnyRole(roles: string[]): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.role) {
      return false;
    }
    return roles.includes(user.role);
  }

  refreshToken(): Observable<string> {
    // Mock token refresh - replace with actual API call
    return new Observable(observer => {
      setTimeout(() => {
        const newToken = 'new-mock-token-' + Date.now();
        observer.next(newToken);
        observer.complete();
      }, 500);
    });
  }
}
