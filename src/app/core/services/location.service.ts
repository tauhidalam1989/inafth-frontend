import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface Subsite {
  id: number;
  name: string;
  address: string;
  type: 'main-center' | 'branch' | 'office';
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface Section {
  id: number;
  name: string;
  code: string;
  type: 'residential' | 'commercial' | 'industrial' | 'mixed';
  status: 'active' | 'inactive' | 'under-construction';
  description?: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SpecialDivision {
  id: number;
  name: string;
  code: string;
  category: 'government' | 'educational' | 'healthcare' | 'religious' | 'recreational';
  priority: 'high' | 'medium' | 'low';
  description?: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ========== SUBSITES ==========
  getSubsites(): Observable<Subsite[]> {
    return this.http.get<Subsite[]>(`${this.apiUrl}/subsites`).pipe(
      map(subsites => subsites.map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      }))),
      catchError(error => {
        console.error('Error fetching subsites:', error);
        return throwError(() => error);
      })
    );
  }

  getSubsiteById(id: number): Observable<Subsite> {
    return this.http.get<Subsite>(`${this.apiUrl}/subsites/${id}`).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error fetching subsite:', error);
        return throwError(() => error);
      })
    );
  }

  createSubsite(subsite: Omit<Subsite, 'id' | 'createdAt' | 'updatedAt'>): Observable<Subsite> {
    return this.http.post<Subsite>(`${this.apiUrl}/subsites`, subsite).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error creating subsite:', error);
        return throwError(() => error);
      })
    );
  }

  updateSubsite(id: number, subsite: Omit<Subsite, 'id' | 'createdAt' | 'updatedAt'>): Observable<Subsite> {
    return this.http.put<Subsite>(`${this.apiUrl}/subsites/${id}`, subsite).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error updating subsite:', error);
        return throwError(() => error);
      })
    );
  }

  deleteSubsite(id: number): Observable<void> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/subsites/${id}`).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Error deleting subsite:', error);
        return throwError(() => error);
      })
    );
  }

  // ========== SECTIONS ==========
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.apiUrl}/sections`).pipe(
      map(sections => sections.map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      }))),
      catchError(error => {
        console.error('Error fetching sections:', error);
        return throwError(() => error);
      })
    );
  }

  getSectionById(id: number): Observable<Section> {
    return this.http.get<Section>(`${this.apiUrl}/sections/${id}`).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error fetching section:', error);
        return throwError(() => error);
      })
    );
  }

  createSection(section: Omit<Section, 'id' | 'createdAt' | 'updatedAt'>): Observable<Section> {
    return this.http.post<Section>(`${this.apiUrl}/sections`, section).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error creating section:', error);
        return throwError(() => error);
      })
    );
  }

  updateSection(id: number, section: Omit<Section, 'id' | 'createdAt' | 'updatedAt'>): Observable<Section> {
    return this.http.put<Section>(`${this.apiUrl}/sections/${id}`, section).pipe(
      map(s => ({
        ...s,
        createdAt: new Date(s.createdAt),
        updatedAt: new Date(s.updatedAt)
      })),
      catchError(error => {
        console.error('Error updating section:', error);
        return throwError(() => error);
      })
    );
  }

  deleteSection(id: number): Observable<void> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/sections/${id}`).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Error deleting section:', error);
        return throwError(() => error);
      })
    );
  }

  // ========== SPECIAL DIVISIONS ==========
  getSpecialDivisions(): Observable<SpecialDivision[]> {
    return this.http.get<SpecialDivision[]>(`${this.apiUrl}/special-divisions`).pipe(
      map(divisions => divisions.map(d => ({
        ...d,
        createdAt: new Date(d.createdAt),
        updatedAt: new Date(d.updatedAt)
      }))),
      catchError(error => {
        console.error('Error fetching special divisions:', error);
        return throwError(() => error);
      })
    );
  }

  getSpecialDivisionById(id: number): Observable<SpecialDivision> {
    return this.http.get<SpecialDivision>(`${this.apiUrl}/special-divisions/${id}`).pipe(
      map(d => ({
        ...d,
        createdAt: new Date(d.createdAt),
        updatedAt: new Date(d.updatedAt)
      })),
      catchError(error => {
        console.error('Error fetching special division:', error);
        return throwError(() => error);
      })
    );
  }

  createSpecialDivision(division: Omit<SpecialDivision, 'id' | 'createdAt' | 'updatedAt'>): Observable<SpecialDivision> {
    return this.http.post<SpecialDivision>(`${this.apiUrl}/special-divisions`, division).pipe(
      map(d => ({
        ...d,
        createdAt: new Date(d.createdAt),
        updatedAt: new Date(d.updatedAt)
      })),
      catchError(error => {
        console.error('Error creating special division:', error);
        return throwError(() => error);
      })
    );
  }

  updateSpecialDivision(id: number, division: Omit<SpecialDivision, 'id' | 'createdAt' | 'updatedAt'>): Observable<SpecialDivision> {
    return this.http.put<SpecialDivision>(`${this.apiUrl}/special-divisions/${id}`, division).pipe(
      map(d => ({
        ...d,
        createdAt: new Date(d.createdAt),
        updatedAt: new Date(d.updatedAt)
      })),
      catchError(error => {
        console.error('Error updating special division:', error);
        return throwError(() => error);
      })
    );
  }

  deleteSpecialDivision(id: number): Observable<void> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/special-divisions/${id}`).pipe(
      map(() => undefined),
      catchError(error => {
        console.error('Error deleting special division:', error);
        return throwError(() => error);
      })
    );
  }
}

