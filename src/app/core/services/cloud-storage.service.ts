import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type CloudProvider = 'aws-s3' | 'google-cloud' | 'azure' | 'local';

export interface CloudStorageConfig {
  provider: CloudProvider;
  enabled: boolean;
  awsAccessKeyId?: string;
  awsSecretAccessKey?: string;
  awsRegion?: string;
  awsBucket?: string;
  gcsProjectId?: string;
  gcsBucket?: string;
  gcsKeyFile?: string;
  azureAccountName?: string;
  azureAccountKey?: string;
  azureContainer?: string;
  azureAuthMethod?: 'account-key' | 'azure-ad';
  azureClientId?: string;
  azureTenantId?: string;
  azureClientSecret?: string;
  localUploadPath?: string;
  baseUrl?: string;
}

export interface CloudStorageConfigResponse {
  success: boolean;
  config: CloudStorageConfig | null;
}

@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Get cloud storage configuration
   */
  getConfig(): Observable<CloudStorageConfig | null> {
    return this.http.get<CloudStorageConfigResponse>(`${this.apiUrl}/cloud-storage/config`).pipe(
      map(response => response.config)
    );
  }

  /**
   * Save cloud storage configuration
   */
  saveConfig(config: CloudStorageConfig): Observable<CloudStorageConfig> {
    return this.http.post<CloudStorageConfigResponse>(`${this.apiUrl}/cloud-storage/config`, config).pipe(
      map(response => response.config!)
    );
  }

  /**
   * Test cloud storage configuration
   */
  testConfig(config?: CloudStorageConfig): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/cloud-storage/test-config`, config || {});
  }

  /**
   * Generate SAS token for direct client upload
   */
  generateSasToken(fileName: string, folder?: string, expiryMinutes?: number): Observable<{ success: boolean; sasUrl?: string; blobUrl?: string; error?: string }> {
    return this.http.post<{ success: boolean; sasUrl?: string; blobUrl?: string; error?: string }>(
      `${this.apiUrl}/cloud-storage/generate-sas-token`,
      { fileName, folder, expiryMinutes }
    );
  }
}

