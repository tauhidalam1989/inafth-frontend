# Backend API Requirements for Screen Management

## Base URL
- Development: `http://localhost:3000/api`
- Production: Update in `src/environments/environment.prod.ts`

## Required API Endpoints

### 1. Start Network Scan
**POST** `/api/screens/scan`

**Request Body:**
```json
{}
```

**Response:**
```json
{
  "scanId": "scan-12345",
  "status": "started"
}
```

---

### 2. Get Scan Progress
**GET** `/api/screens/scan/:scanId/status`

**Response:**
```json
{
  "progress": 75,
  "status": "scanning" // or "completed"
}
```

**Note:** Frontend will poll this endpoint every 500ms until status is "completed"

---

### 3. Get Discovered Devices
**GET** `/api/screens/discover`

**Response:**
```json
[
  {
    "id": "dev-001",
    "name": "Android TV - Reception",
    "ipAddress": "192.168.1.101",
    "macAddress": "AA:BB:CC:DD:EE:01",
    "deviceType": "android-tv",
    "status": "online",
    "lastSeen": "2024-01-15T10:30:00Z",
    "isRegistered": false
  }
]
```

---

### 4. Register Screen
**POST** `/api/screens/register`

**Request Body:**
```json
{
  "deviceId": "dev-001",
  "name": "Android TV - Reception",
  "location": "Main Reception Area"
}
```

**Response:**
```json
{
  "id": 1,
  "deviceId": "dev-001",
  "name": "Android TV - Reception",
  "ipAddress": "192.168.1.101",
  "macAddress": "AA:BB:CC:DD:EE:01",
  "location": "Main Reception Area",
  "status": "online",
  "lastConnected": "2024-01-15T10:30:00Z",
  "assignedAds": []
}
```

---

### 5. Get All Screens
**GET** `/api/screens`

**Response:**
```json
[
  {
    "id": 1,
    "deviceId": "dev-001",
    "name": "Android TV - Reception",
    "ipAddress": "192.168.1.101",
    "macAddress": "AA:BB:CC:DD:EE:01",
    "location": "Main Reception Area",
    "status": "online",
    "lastConnected": "2024-01-15T10:30:00Z",
    "assignedAds": [1, 2]
  }
]
```

---

### 6. Get Screen Status
**GET** `/api/screens/:id/status`

**Response:**
```json
{
  "status": "online",
  "isOnline": true
}
```

---

### 7. Delete Screen
**DELETE** `/api/screens/:id`

**Response:**
```json
{
  "success": true
}
```

---

## Network Scanning Implementation

### Backend Requirements:
1. **Network Discovery:**
   - Scan local network (e.g., 192.168.1.0/24)
   - Detect Android TV devices using:
     - Port scanning (common Android TV ports: 5555, 6466, 6467)
     - mDNS/Bonjour discovery
     - SSDP (Simple Service Discovery Protocol)
     - Custom device identification

2. **Device Identification:**
   - Check for Android TV specific services
   - Verify device capabilities
   - Get device information (name, model, etc.)

3. **Progress Tracking:**
   - Track scan progress (0-100%)
   - Store scan results temporarily
   - Provide real-time progress updates

### Recommended Backend Technologies:
- **Node.js:** Use `nmap`, `node-ssdp`, or `bonjour` packages
- **Python:** Use `python-nmap`, `zeroconf`, or `upnpclient`
- **Go:** Use network scanning libraries

### Example Node.js Implementation:
```javascript
// Using nmap or network scanning library
const scanNetwork = async () => {
  // Scan network for Android TV devices
  // Return discovered devices
};

// Store scan progress
const scanProgress = new Map();
```

---

## Error Handling

All endpoints should return appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

Error response format:
```json
{
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

---

## CORS Configuration

Backend must allow CORS from frontend origin:
- Development: `http://localhost:4200`
- Production: Your frontend domain

---

## Notes

1. Frontend will automatically fallback to mock data if backend is unavailable
2. All date fields should be in ISO 8601 format
3. Device discovery should be non-blocking (async)
4. Consider rate limiting for scan endpoints

