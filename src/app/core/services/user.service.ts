import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

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
  phone1: string;
  phone2?: string;
  subsiteId?: number;
  sectionId?: number;
  specialDivisionId?: number;
  userType: 'regular-user' | 'admin-user' | 'super-user';
  validity: 'manager' | 'supervisor' | 'coordinator';
  notes?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  subsiteName?: string;
  sectionName?: string;
  specialDivisionName?: string;
  permissions?: UserPermissions;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(users => users.map(u => ({
        ...u,
        createdAt: new Date(u.createdAt),
        updatedAt: new Date(u.updatedAt),
        permissions: u.permissions ? {
          ...u.permissions,
          createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
          updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
        } : undefined
      }))),
      catchError(error => {
        console.error('Error fetching users:', error);
        return throwError(() => error);
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
      map(u => ({
        ...u,
        createdAt: new Date(u.createdAt),
        updatedAt: new Date(u.updatedAt),
        permissions: u.permissions ? {
          ...u.permissions,
          createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
          updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
        } : undefined
      })),
      catchError(error => {
        console.error('Error fetching user:', error);
        return throwError(() => error);
      })
    );
  }

  createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'subsiteName' | 'sectionName' | 'specialDivisionName'> & { permissions: UserPermissions }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user).pipe(
      map(u => ({
        ...u,
        createdAt: new Date(u.createdAt),
        updatedAt: new Date(u.updatedAt),
        permissions: u.permissions ? {
          ...u.permissions,
          createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
          updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
        } : undefined
      })),
      catchError(error => {
        console.error('Error creating user:', error);
        return throwError(() => error);
      })
    );
  }

  updateUser(id: number, user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'subsiteName' | 'sectionName' | 'specialDivisionName'> & { permissions: UserPermissions }): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user).pipe(
      map(u => ({
        ...u,
        createdAt: new Date(u.createdAt),
        updatedAt: new Date(u.updatedAt),
        permissions: u.permissions ? {
          ...u.permissions,
          createdAt: u.permissions.createdAt ? new Date(u.permissions.createdAt) : undefined,
          updatedAt: u.permissions.updatedAt ? new Date(u.permissions.updatedAt) : undefined
        } : undefined
      })),
      catchError(error => {
        console.error('Error updating user:', error);
        return throwError(() => error);
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/users/${id}`).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Error deleting user:', error);
        return throwError(() => error);
      })
    );
  }
}

