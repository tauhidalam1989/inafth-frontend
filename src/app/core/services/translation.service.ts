import { Injectable } from '@angular/core';

export interface TranslationKeys {
  // Common
  search: { ar: string; en: string };
  add: { ar: string; en: string };
  edit: { ar: string; en: string };
  delete: { ar: string; en: string };
  save: { ar: string; en: string };
  saveChanges: { ar: string; en: string };
  cancel: { ar: string; en: string };
  close: { ar: string; en: string };
  back: { ar: string; en: string };
  next: { ar: string; en: string };
  previous: { ar: string; en: string };
  submit: { ar: string; en: string };
  reset: { ar: string; en: string };
  confirm: { ar: string; en: string };
  yes: { ar: string; en: string };
  no: { ar: string; en: string };
  ok: { ar: string; en: string };
  loading: { ar: string; en: string };
  error: { ar: string; en: string };
  success: { ar: string; en: string };
  warning: { ar: string; en: string };
  info: { ar: string; en: string };
  noDataFound: { ar: string; en: string };
  tryAdjustingFilters: { ar: string; en: string };
  confirmDelete: { ar: string; en: string };
  confirmDeleteMessage: { ar: string; en: string };
  confirmLogoutMessage: { ar: string; en: string };
  actions: { ar: string; en: string };
  status: { ar: string; en: string };
  type: { ar: string; en: string };
  description: { ar: string; en: string };
  code: { ar: string; en: string };
  name: { ar: string; en: string };
  date: { ar: string; en: string };
  location: { ar: string; en: string };
  priority: { ar: string; en: string };
  category: { ar: string; en: string };
  allLocations: { ar: string; en: string };
  active: { ar: string; en: string };
  inactive: { ar: string; en: string };
  pending: { ar: string; en: string };
  completed: { ar: string; en: string };
  high: { ar: string; en: string };
  medium: { ar: string; en: string };
  low: { ar: string; en: string };
  all: { ar: string; en: string };
  allTypes: { ar: string; en: string };
  allStatuses: { ar: string; en: string };
  allCategories: { ar: string; en: string };
  allPriorities: { ar: string; en: string };
  preview: { ar: string; en: string };
  
  // Notifications specific
  notifications: { ar: string; en: string };
  addNewNotification: { ar: string; en: string };
  notificationTitle: { ar: string; en: string };
  notificationType: { ar: string; en: string };
  notificationMessage: { ar: string; en: string };
  enterNotificationTitle: { ar: string; en: string };
  enterNotificationMessage: { ar: string; en: string };
  addNotification: { ar: string; en: string };
  searchNotifications: { ar: string; en: string };
  totalNotifications: { ar: string; en: string };
  notificationDashboard: { ar: string; en: string };
  notificationManagement: { ar: string; en: string };
  sentNotifications: { ar: string; en: string };
  scheduledNotifications: { ar: string; en: string };
  draftNotifications: { ar: string; en: string };
  fromLastMonth: { ar: string; en: string };
  notificationTypes: { ar: string; en: string };
  recipients: { ar: string; en: string };
  systemUpdate: { ar: string; en: string };
  securityAlert: { ar: string; en: string };
  reminderNotification: { ar: string; en: string };
  markAllAsRead: { ar: string; en: string };
  markAsRead: { ar: string; en: string };
  read: { ar: string; en: string };
  unread: { ar: string; en: string };
  noNotificationsFound: { ar: string; en: string };
  general: { ar: string; en: string };
  system: { ar: string; en: string };
  messages: { ar: string; en: string };
  security: { ar: string; en: string };
  
  // Notification Settings specific
  notificationSettings: { ar: string; en: string };
  resetToDefaults: { ar: string; en: string };
  saveSettings: { ar: string; en: string };
  saving: { ar: string; en: string };
  systemUpdates: { ar: string; en: string };
  systemUpdatesDescription: { ar: string; en: string };
  securityAlerts: { ar: string; en: string };
  securityAlertsDescription: { ar: string; en: string };
  newMessages: { ar: string; en: string };
  newMessagesDescription: { ar: string; en: string };
  reminders: { ar: string; en: string };
  remindersDescription: { ar: string; en: string };
  marketing: { ar: string; en: string };
  marketingDescription: { ar: string; en: string };
  email: { ar: string; en: string };
  sms: { ar: string; en: string };
  push: { ar: string; en: string };
  whatsapp: { ar: string; en: string };
  settingsSavedSuccessfully: { ar: string; en: string };
  settingsResetToDefaults: { ar: string; en: string };
  
  // Sub-Locations specific
  subLocations: { ar: string; en: string };
  addNewLocation: { ar: string; en: string };
  locationName: { ar: string; en: string };
  address: { ar: string; en: string };
  locationType: { ar: string; en: string };
  enterLocationName: { ar: string; en: string };
  enterAddress: { ar: string; en: string };
  selectLocationType: { ar: string; en: string };
  addLocation: { ar: string; en: string };
  searchLocations: { ar: string; en: string };
  totalLocations: { ar: string; en: string };
  mainCenter: { ar: string; en: string };
  branch: { ar: string; en: string };
  office: { ar: string; en: string };
  noLocationsFound: { ar: string; en: string };
  
  // Advertisements specific
  advertisements: { ar: string; en: string };
  addAdvertisement: { ar: string; en: string };
  addNewAdvertisement: { ar: string; en: string };
  title: { ar: string; en: string };
  imageUrl: { ar: string; en: string };
  targetAudience: { ar: string; en: string };
  startDate: { ar: string; en: string };
  endDate: { ar: string; en: string };
  enterTitle: { ar: string; en: string };
  enterDescription: { ar: string; en: string };
  enterImageUrl: { ar: string; en: string };
  enterTargetAudience: { ar: string; en: string };
  titleRequired: { ar: string; en: string };
  descriptionRequired: { ar: string; en: string };
  imageUrlRequired: { ar: string; en: string };
  targetAudienceRequired: { ar: string; en: string };
  startDateRequired: { ar: string; en: string };
  endDateRequired: { ar: string; en: string };
  saveAdvertisement: { ar: string; en: string };
  searchAdvertisements: { ar: string; en: string };
  banner: { ar: string; en: string };
  popup: { ar: string; en: string };
  uploadFile: { ar: string; en: string };
  fileRequired: { ar: string; en: string };
  supportedFormats: { ar: string; en: string };
  supportedFormatsMultiple: { ar: string; en: string };
  filesSelected: { ar: string; en: string };
  multipleFilesSelected: { ar: string; en: string };
  urlRequired: { ar: string; en: string };
  fileOrUrlRequired: { ar: string; en: string };
  inputMethod: { ar: string; en: string };
  enterUrl: { ar: string; en: string };
  fileUrl: { ar: string; en: string };
  enterFileUrl: { ar: string; en: string };
  urlHint: { ar: string; en: string };
  assignToUser: { ar: string; en: string };
  selectUser: { ar: string; en: string };
  confirmDeleteAdvertisementMessage: { ar: string; en: string };
  assignedTo: { ar: string; en: string };
  file: { ar: string; en: string };
  dates: { ar: string; en: string };
  editAdvertisement: { ar: string; en: string };
  errorLoadingAdvertisements: { ar: string; en: string };
  errorSavingAdvertisement: { ar: string; en: string };
  image: { ar: string; en: string };
  video: { ar: string; en: string };
  presentation: { ar: string; en: string };
  document: { ar: string; en: string };
  expired: { ar: string; en: string };
  sidebar: { ar: string; en: string };
  deactivate: { ar: string; en: string };
  activate: { ar: string; en: string };
  clicks: { ar: string; en: string };
  impressions: { ar: string; en: string };
  noAdvertisementsFound: { ar: string; en: string };
  
  // View Advertisements specific
  viewAdvertisements: { ar: string; en: string };
  manageAdvertisements: { ar: string; en: string };
  filters: { ar: string; en: string };
  dateRange: { ar: string; en: string };
  allDates: { ar: string; en: string };
  today: { ar: string; en: string };
  thisWeek: { ar: string; en: string };
  thisMonth: { ar: string; en: string };
  totalImpressions: { ar: string; en: string };
  totalClicks: { ar: string; en: string };
  averageCTR: { ar: string; en: string };
  totalAdvertisements: { ar: string; en: string };
  advertisementsList: { ar: string; en: string };
  export: { ar: string; en: string };
  print: { ar: string; en: string };
  ctr: { ar: string; en: string };
  viewDetails: { ar: string; en: string };
  
  // Advertising Banner specific
  advertisingBanner: { ar: string; en: string };
  addNewBanner: { ar: string; en: string };
  bannerTitle: { ar: string; en: string };
  bannerDescription: { ar: string; en: string };
  enterBannerTitle: { ar: string; en: string };
  enterBannerDescription: { ar: string; en: string };
  enterPriority: { ar: string; en: string };
  addBanner: { ar: string; en: string };
  searchBanners: { ar: string; en: string };
  totalBanners: { ar: string; en: string };
  from: { ar: string; en: string };
  to: { ar: string; en: string };
  noBannersFound: { ar: string; en: string };
  
  // Sections specific
  sections: { ar: string; en: string };
  addSection: { ar: string; en: string };
  editSection: { ar: string; en: string };
  addNewSection: { ar: string; en: string };
  sectionName: { ar: string; en: string };
  sectionCode: { ar: string; en: string };
  sectionType: { ar: string; en: string };
  sectionStatus: { ar: string; en: string };
  enterSectionName: { ar: string; en: string };
  enterSectionCode: { ar: string; en: string };
  enterSectionDescription: { ar: string; en: string };
  selectSectionType: { ar: string; en: string };
  sectionNameRequired: { ar: string; en: string };
  sectionCodeRequired: { ar: string; en: string };
  sectionTypeRequired: { ar: string; en: string };
  saveSection: { ar: string; en: string };
  sectionsList: { ar: string; en: string };
  noSectionsFound: { ar: string; en: string };
  //tryAdjustingFilters: { ar: string; en: string };
  showSectionsList: { ar: string; en: string };
  sectionUpdatedSuccessfully: { ar: string; en: string };
  sectionAddedSuccessfully: { ar: string; en: string };
  createdDate: { ar: string; en: string };
  residential: { ar: string; en: string };
  commercial: { ar: string; en: string };
  industrial: { ar: string; en: string };
  mixed: { ar: string; en: string };
  underConstruction: { ar: string; en: string };
  
  // Special Divisions specific
  specialDivisions: { ar: string; en: string };
  addSpecialDivision: { ar: string; en: string };
  editSpecialDivision: { ar: string; en: string };
  addNewSpecialDivision: { ar: string; en: string };
  divisionName: { ar: string; en: string };
  divisionCode: { ar: string; en: string };
  enterDivisionName: { ar: string; en: string };
  enterDivisionCode: { ar: string; en: string };
  enterDivisionDescription: { ar: string; en: string };
  selectCategory: { ar: string; en: string };
  divisionNameRequired: { ar: string; en: string };
  divisionCodeRequired: { ar: string; en: string };
  categoryRequired: { ar: string; en: string };
  government: { ar: string; en: string };
  educational: { ar: string; en: string };
  healthcare: { ar: string; en: string };
  religious: { ar: string; en: string };
  recreational: { ar: string; en: string };
  saveDivision: { ar: string; en: string };
  searchDivisions: { ar: string; en: string };
  specialDivisionsList: { ar: string; en: string };
  noDivisionsFound: { ar: string; en: string };
  showDivisionsList: { ar: string; en: string };
  divisionUpdatedSuccessfully: { ar: string; en: string };
  divisionAddedSuccessfully: { ar: string; en: string };
  
  // Users and Permissions specific
  usersAndPermissions: { ar: string; en: string };
  addNewUser: { ar: string; en: string };
  userName: { ar: string; en: string };
  enterUserName: { ar: string; en: string };
  enterEmail: { ar: string; en: string };
  password: { ar: string; en: string };
  enterPassword: { ar: string; en: string };
  enterPasswordToChange: { ar: string; en: string };
  passwordRequired: { ar: string; en: string };
  passwordMinLength: { ar: string; en: string };
  leavePasswordEmptyToKeepCurrent: { ar: string; en: string };
  role: { ar: string; en: string };
  permissions: { ar: string; en: string };
  addUser: { ar: string; en: string };
  searchUsers: { ar: string; en: string };
  allRoles: { ar: string; en: string };
  totalUsers: { ar: string; en: string };
  lastLogin: { ar: string; en: string };
  noUsersFound: { ar: string; en: string };
  user: { ar: string; en: string };
  manager: { ar: string; en: string };
  admin: { ar: string; en: string };
  dashboard: { ar: string; en: string };
  dashboardOverview: { ar: string; en: string };
  statistics: { ar: string; en: string };
  recentScreens: { ar: string; en: string };
  recentAdvertisements: { ar: string; en: string };
  systemStatus: { ar: string; en: string };
  viewAll: { ar: string; en: string };
  noScreens: { ar: string; en: string };
  noAdvertisements: { ar: string; en: string };
  addScreen: { ar: string; en: string };
  scanDevices: { ar: string; en: string };
  playbackControl: { ar: string; en: string };
  sendNotification: { ar: string; en: string };
  manageLocations: { ar: string; en: string };
  dashboardTotalScreens: { ar: string; en: string };
  dashboardOnlineScreens: { ar: string; en: string };
  dashboardPlayingScreens: { ar: string; en: string };
  dashboardAdvertisements: { ar: string; en: string };
  dashboardActiveAdvertisements: { ar: string; en: string };
  dashboardLocations: { ar: string; en: string };
  dashboardSections: { ar: string; en: string };
  dashboardNotifications: { ar: string; en: string };
  dashboardUsersPermissions: { ar: string; en: string };
  locations: { ar: string; en: string };
  users: { ar: string; en: string };
  
  // WhatsApp Messages specific
  whatsappMessages: { ar: string; en: string };
  sendNewMessage: { ar: string; en: string };
  individual: { ar: string; en: string };
  bulk: { ar: string; en: string };
  sendMode: { ar: string; en: string };
  selectTemplate: { ar: string; en: string };
  enterVariableValue: { ar: string; en: string };
  selectUsers: { ar: string; en: string };
  sendToAllUsers: { ar: string; en: string };
  selectedUsers: { ar: string; en: string };
  errorLoadingMessages: { ar: string; en: string };
  errorSendingMessages: { ar: string; en: string };
  messagesSent: { ar: string; en: string };
  messagesFailed: { ar: string; en: string };
  recipient: { ar: string; en: string };
  messageContent: { ar: string; en: string };
  noMessagesFound: { ar: string; en: string };
  resend: { ar: string; en: string };
  totalMessages: { ar: string; en: string };
  phoneNumber: { ar: string; en: string };
  recipientName: { ar: string; en: string };
  recipientNameOptional: { ar: string; en: string };
  messageType: { ar: string; en: string };
  templateName: { ar: string; en: string };
  messageText: { ar: string; en: string };
  enterMessageText: { ar: string; en: string };
  sendMessage: { ar: string; en: string };
  searchMessages: { ar: string; en: string };
  welcomeMessage: { ar: string; en: string };
  reminder: { ar: string; en: string };
  send: { ar: string; en: string };
  
  // WhatsApp Templates specific
  whatsappTemplates: { ar: string; en: string };
  addTemplate: { ar: string; en: string };
  addNewTemplate: { ar: string; en: string };
  enterTemplateName: { ar: string; en: string };
  templateNameRequired: { ar: string; en: string };
  templateContent: { ar: string; en: string };
  enterTemplateContent: { ar: string; en: string };
  templateContentRequired: { ar: string; en: string };
  templateVariablesInfo: { ar: string; en: string };
  saveTemplate: { ar: string; en: string };
  editTemplate: { ar: string; en: string };
  searchTemplates: { ar: string; en: string };
  templates: { ar: string; en: string };
  variables: { ar: string; en: string };
  usage: { ar: string; en: string };
  lastUsed: { ar: string; en: string };
  never: { ar: string; en: string };
  noTemplatesFound: { ar: string; en: string };
  errorLoadingTemplates: { ar: string; en: string };
  errorCreatingTemplate: { ar: string; en: string };
  errorUpdatingTemplate: { ar: string; en: string };
  errorDeletingTemplate: { ar: string; en: string };
  
  // Sidebar specific
  screeningSystem: { ar: string; en: string };
  expandSidebar: { ar: string; en: string };
  collapseSidebar: { ar: string; en: string };
  adminUser: { ar: string; en: string };
  systemAdministrator: { ar: string; en: string };
  systemSettings: { ar: string; en: string };
  systemLogs: { ar: string; en: string };
  searchLogs: { ar: string; en: string };
  allLevels: { ar: string; en: string };
  allModules: { ar: string; en: string };
  allActions: { ar: string; en: string };
  totalLogs: { ar: string; en: string };
  noLogsFound: { ar: string; en: string };
  errorLoadingLogs: { ar: string; en: string };
  confirmDeleteLogMessage: { ar: string; en: string };
  level: { ar: string; en: string };
  module: { ar: string; en: string };
  action: { ar: string; en: string };
  debug: { ar: string; en: string };
  
  // Notification Channel Configuration
  emailConfiguration: { ar: string; en: string };
  emailConfigurationDescription: { ar: string; en: string };
  smsConfiguration: { ar: string; en: string };
  smsConfigurationDescription: { ar: string; en: string };
  pushConfiguration: { ar: string; en: string };
  pushConfigurationDescription: { ar: string; en: string };
  whatsappConfiguration: { ar: string; en: string };
  whatsappConfigurationDescription: { ar: string; en: string };
  enableEmailNotifications: { ar: string; en: string };
  enableSMSNotifications: { ar: string; en: string };
  enablePushNotifications: { ar: string; en: string };
  enableWhatsAppNotifications: { ar: string; en: string };
  smtpHost: { ar: string; en: string };
  smtpPort: { ar: string; en: string };
  smtpUsername: { ar: string; en: string };
  smtpPassword: { ar: string; en: string };
  fromEmail: { ar: string; en: string };
  fromName: { ar: string; en: string };
  useSecureConnection: { ar: string; en: string };
  smtpHostRequired: { ar: string; en: string };
  smtpPortRequired: { ar: string; en: string };
  smtpUsernameRequired: { ar: string; en: string };
  smtpPasswordRequired: { ar: string; en: string };
  fromEmailRequired: { ar: string; en: string };
  fromNameRequired: { ar: string; en: string };
  smsProvider: { ar: string; en: string };
  pushProvider: { ar: string; en: string };
  whatsappProvider: { ar: string; en: string };
  selectProvider: { ar: string; en: string };
  apiKey: { ar: string; en: string };
  apiSecret: { ar: string; en: string };
  senderId: { ar: string; en: string };
  serverKey: { ar: string; en: string };
  projectId: { ar: string; en: string };
  serviceAccount: { ar: string; en: string };
  phoneNumberId: { ar: string; en: string };
  businessAccountId: { ar: string; en: string };
  smsProviderRequired: { ar: string; en: string };
  pushProviderRequired: { ar: string; en: string };
  whatsappProviderRequired: { ar: string; en: string };
  apiKeyRequired: { ar: string; en: string };
  apiSecretRequired: { ar: string; en: string };
  senderIdRequired: { ar: string; en: string };
  serverKeyRequired: { ar: string; en: string };
  projectIdRequired: { ar: string; en: string };
  phoneNumberIdRequired: { ar: string; en: string };
  businessAccountIdRequired: { ar: string; en: string };
  serviceAccountPlaceholder: { ar: string; en: string };
  testConfiguration: { ar: string; en: string };
  saveConfiguration: { ar: string; en: string };
  configurationSaved: { ar: string; en: string };
  errorSavingConfiguration: { ar: string; en: string };
  errorTestingConfiguration: { ar: string; en: string };
  other: { ar: string; en: string };
  cloudStorage: { ar: string; en: string };
  cloudStorageConfiguration: { ar: string; en: string };
  cloudStorageConfigurationDescription: { ar: string; en: string };
  enableCloudStorage: { ar: string; en: string };
  cloudStorageProvider: { ar: string; en: string };
  cloudStorageProviderRequired: { ar: string; en: string };
  localStorage: { ar: string; en: string };
  awsS3Configuration: { ar: string; en: string };
  awsAccessKeyId: { ar: string; en: string };
  awsSecretAccessKey: { ar: string; en: string };
  awsRegion: { ar: string; en: string };
  awsBucket: { ar: string; en: string };
  googleCloudStorageConfiguration: { ar: string; en: string };
  gcsProjectId: { ar: string; en: string };
  gcsBucket: { ar: string; en: string };
  gcsKeyFile: { ar: string; en: string };
  gcsKeyFilePlaceholder: { ar: string; en: string };
  azureBlobStorageConfiguration: { ar: string; en: string };
  azureAccountName: { ar: string; en: string };
  azureAccountKey: { ar: string; en: string };
  azureContainer: { ar: string; en: string };
  azureAuthMethod: { ar: string; en: string };
  azureAccountKeyAuth: { ar: string; en: string };
  azureADAuth: { ar: string; en: string };
  azureClientId: { ar: string; en: string };
  azureTenantId: { ar: string; en: string };
  azureClientSecret: { ar: string; en: string };
  azureClientSecretHint: { ar: string; en: string };
  localStorageConfiguration: { ar: string; en: string };
  localUploadPath: { ar: string; en: string };
  baseUrl: { ar: string; en: string };
  
  // Header specific
  toggleMenu: { ar: string; en: string };
  switchLanguage: { ar: string; en: string };
  recentNotifications: { ar: string; en: string };
  viewAllNotifications: { ar: string; en: string };
  userProfile: { ar: string; en: string };
  profile: { ar: string; en: string };
  settings: { ar: string; en: string };
  logout: { ar: string; en: string };
  
  // e Notices and Evaluation
  eNoticesAndEvaluation: { ar: string; en: string };
  
  // Display Ads
  displayAds: { ar: string; en: string };
  
  // Subsites
  subsites: { ar: string; en: string };
  
  // Notification Form
  nothingSelected: { ar: string; en: string };
  schedulingDate: { ar: string; en: string };
  schedulingTime: { ar: string; en: string };
  sendToAll: { ar: string; en: string };
  notificationContent: { ar: string; en: string };
  enterNotificationContent: { ar: string; en: string };
  normal: { ar: string; en: string };
  urgent: { ar: string; en: string };
  important: { ar: string; en: string };
  
  // Notification Statuses
  draft: { ar: string; en: string };
  scheduled: { ar: string; en: string };
  sent: { ar: string; en: string };
  section: { ar: string; en: string };
  assessmentManagement: { ar: string; en: string };
  enterData: { ar: string; en: string };
  noRatings: { ar: string; en: string };
  clickToViewRatings: { ar: string; en: string };
  viewRatings: { ar: string; en: string };
  duplicate: { ar: string; en: string };

  first: { ar: string; en: string };
  last: { ar: string; en: string };
  
  // User Management
  configureUserAccountsAndPermissions: { ar: string; en: string };
  modifiedSuccessfully: { ar: string; en: string };
  username: { ar: string; en: string };
  phone1: { ar: string; en: string };
  phone2: { ar: string; en: string };
  enterUsername: { ar: string; en: string };
  enterPhone1: { ar: string; en: string };
  enterSubMobileNo: { ar: string; en: string };
  selectSubsite: { ar: string; en: string };
  selectSection: { ar: string; en: string };
  selectSpecialDivision: { ar: string; en: string };
  selectType: { ar: string; en: string };
  selectValidity: { ar: string; en: string };
  enterNotes: { ar: string; en: string };
  mainBranch: { ar: string; en: string };
  northBranch: { ar: string; en: string };
  eastBranch: { ar: string; en: string };
  corporateServices: { ar: string; en: string };
  itDepartment: { ar: string; en: string };
  hrDepartment: { ar: string; en: string };
  staff: { ar: string; en: string };
  management: { ar: string; en: string };
  technical: { ar: string; en: string };
  regularUser: { ar: string; en: string };
  superUser: { ar: string; en: string };
  supervisor: { ar: string; en: string };
  coordinator: { ar: string; en: string };
  accountsAndAuthorizations: { ar: string; en: string };
  authorityToAddModifyAccounts: { ar: string; en: string };
  authorityToViewAccounts: { ar: string; en: string };
  authorityToDeleteAccounts: { ar: string; en: string };
  authorityToAddModifyAds: { ar: string; en: string };
  authorityToDisplayAds: { ar: string; en: string };
  authorityToDeleteAds: { ar: string; en: string };
  permissionToAddModifySites: { ar: string; en: string };
  permissionToViewSites: { ar: string; en: string };
  permissionToDeleteSites: { ar: string; en: string };
  otherPowers: { ar: string; en: string };
  notificationSendingPermission: { ar: string; en: string };
  notificationViewingPermission: { ar: string; en: string };
  notificationDeletionPermission: { ar: string; en: string };
  editUser: { ar: string; en: string };
  showUserList: { ar: string; en: string };
  cancelAndShowList: { ar: string; en: string };
  showing: { ar: string; en: string };
  of: { ar: string; en: string };
  itemsPerPage: { ar: string; en: string };
  // Common form fields
  enterLocation: { ar: string; en: string };
  locationRequired: { ar: string; en: string };
  searchSections: { ar: string; en: string };
  // tryAdjustingFilters: { ar: string; en: string };
  // descriptionRequired: { ar: string; en: string };
  
  // Screens specific
  screens: { ar: string; en: string };
  networkScanning: { ar: string; en: string };
  screenManagement: { ar: string; en: string };
  startScan: { ar: string; en: string };
  scanning: { ar: string; en: string };
  scanningNetwork: { ar: string; en: string };
  scanningDescription: { ar: string; en: string };
  discoveredDevices: { ar: string; en: string };
  noDevicesFound: { ar: string; en: string };
  searchDevices: { ar: string; en: string };
  register: { ar: string; en: string };
  registered: { ar: string; en: string };
  registerScreen: { ar: string; en: string };
  screenName: { ar: string; en: string };
  enterScreenName: { ar: string; en: string };
  screenNameRequired: { ar: string; en: string };
  ipAddress: { ar: string; en: string };
  macAddress: { ar: string; en: string };
  lastSeen: { ar: string; en: string };
  online: { ar: string; en: string };
  offline: { ar: string; en: string };
  deviceInfo: { ar: string; en: string };
  screenRegisteredSuccessfully: { ar: string; en: string };
  comingSoon: { ar: string; en: string };
  screenDashboard: { ar: string; en: string };
  screenList: { ar: string; en: string };
  screenGrouping: { ar: string; en: string };
  createScreen: { ar: string; en: string };
  addManualScreen: { ar: string; en: string };
  editScreen: { ar: string; en: string };
  screenCreatedSuccessfully: { ar: string; en: string };
  screenUpdatedSuccessfully: { ar: string; en: string };
  screenDeletedSuccessfully: { ar: string; en: string };
  confirmDeleteScreen: { ar: string; en: string };
  resetScreen: { ar: string; en: string };
  confirmResetScreen: { ar: string; en: string };
  screenResetSuccessfully: { ar: string; en: string };
  resetScreenHelp: { ar: string; en: string };
  totalScreens: { ar: string; en: string };
  onlineScreens: { ar: string; en: string };
  offlineScreens: { ar: string; en: string };
  playingScreens: { ar: string; en: string };
  quickActions: { ar: string; en: string };
  scanNetwork: { ar: string; en: string };
  viewAllScreens: { ar: string; en: string };
  manageGroups: { ar: string; en: string };
  backToList: { ar: string; en: string };
  registeredScreens: { ar: string; en: string };
  noScreensFound: { ar: string; en: string };
  screenGroup: { ar: string; en: string };
  group: { ar: string; en: string };
  createGroup: { ar: string; en: string };
  groupName: { ar: string; en: string };
  enterGroupName: { ar: string; en: string };
  confirmDeleteGroup: { ar: string; en: string };
  locationAssignment: { ar: string; en: string };
  userAssignment: { ar: string; en: string };
  assignedUser: { ar: string; en: string };
  selectAdvertisements: { ar: string; en: string };
  schedule: { ar: string; en: string };
  startTime: { ar: string; en: string };
  endTime: { ar: string; en: string };
  basicInformation: { ar: string; en: string };
  noGroupsAvailable: { ar: string; en: string };
  noScreensAvailable: { ar: string; en: string };
  noSubsitesAvailable: { ar: string; en: string };
  noSectionsAvailable: { ar: string; en: string };
  noSpecialDivisionsAvailable: { ar: string; en: string };
  noUsersAvailable: { ar: string; en: string };
  noAdvertisementsAvailable: { ar: string; en: string };
  selected: { ar: string; en: string };
  availableScreens: { ar: string; en: string };
  dragScreensHere: { ar: string; en: string };
  noGroupsCreated: { ar: string; en: string };
  update: { ar: string; en: string };
  create: { ar: string; en: string };
  
  // Screen Monitor & Playback
  screenMonitor: { ar: string; en: string };
  monitorAndControlScreens: { ar: string; en: string };
  selectScreenToMonitor: { ar: string; en: string };
  selectScreenFromLeft: { ar: string; en: string };
  currentlyPlaying: { ar: string; en: string };
  noVideoPlaying: { ar: string; en: string };
  unknownVideo: { ar: string; en: string };
  playbackControls: { ar: string; en: string };
  play: { ar: string; en: string };
  playFullScreen: { ar: string; en: string };
  stop: { ar: string; en: string };
  pause: { ar: string; en: string };
  resume: { ar: string; en: string };
  fullscreen: { ar: string; en: string };
  exitFullscreen: { ar: string; en: string };
  screenDetails: { ar: string; en: string };
  lastConnected: { ar: string; en: string };
  videoUrl: { ar: string; en: string };
  startedAt: { ar: string; en: string };
  pausedAt: { ar: string; en: string };
  playing: { ar: string; en: string };
  paused: { ar: string; en: string };
  videoPlaybackControl: { ar: string; en: string };
  controlVideoPlayback: { ar: string; en: string };
  selectScreen: { ar: string; en: string };
  deviceId: { ar: string; en: string };
  groupInformation: { ar: string; en: string };
  noGroupAssigned: { ar: string; en: string };
  locationInformation: { ar: string; en: string };
  noLocationAssigned: { ar: string; en: string };
  assignedUsers: { ar: string; en: string };
  noUserAssigned: { ar: string; en: string };
  noScheduleSet: { ar: string; en: string };
  displaySettings: { ar: string; en: string };
  orientation: { ar: string; en: string };
  screenSize: { ar: string; en: string };
  landscape: { ar: string; en: string };
  portrait: { ar: string; en: string };
  auto: { ar: string; en: string };
  small: { ar: string; en: string };
  large: { ar: string; en: string };
  custom: { ar: string; en: string };
  screenWidth: { ar: string; en: string };
  screenHeight: { ar: string; en: string };
  enterCustomDimensions: { ar: string; en: string };
  assignedAdvertisements: { ar: string; en: string };
  assignedPlaylistHint: { ar: string; en: string };
  saveOrderAndTiming: { ar: string; en: string };
  slideDurationSec: { ar: string; en: string };
  playlistSaved: { ar: string; en: string };
  assigned: { ar: string; en: string };
  View: { ar: string; en: string };
  screenSettings: { ar: string; en: string };
  advertisementDetails: { ar: string; en: string };
  fileName: { ar: string; en: string };
  fileSize: { ar: string; en: string };
  mimeType: { ar: string; en: string };
  thumbnail: { ar: string; en: string };
  playOnScreen: { ar: string; en: string };
  selectAdvertisement: { ar: string; en: string };
  videoPlaying: { ar: string; en: string };
  playVideoFailed: { ar: string; en: string };
  videoPaused: { ar: string; en: string };
  pauseVideoFailed: { ar: string; en: string };
  videoResumed: { ar: string; en: string };
  resumeVideoFailed: { ar: string; en: string };
  confirmStopVideo: { ar: string; en: string };
  confirmStopVideoMessage: { ar: string; en: string };
  videoStopped: { ar: string; en: string };
  stopVideoFailed: { ar: string; en: string };
  settingsUpdated: { ar: string; en: string };
  ipUpdated: { ar: string; en: string };
  setIpForLocalTest: { ar: string; en: string };
  updateIp: { ar: string; en: string };
  errorLoadingScreens: { ar: string; en: string };
  noVideoAvailable: { ar: string; en: string };
  fullscreenNotImplemented: { ar: string; en: string };
  more: { ar: string; en: string };
  
  // Login/Auth specific
  appTitle: { ar: string; en: string };
  appSubtitle: { ar: string; en: string };
  loginTitle: { ar: string; en: string };
  loginSubtitle: { ar: string; en: string };
  rememberMe: { ar: string; en: string };
  forgotPassword: { ar: string; en: string };
  loginButton: { ar: string; en: string };
  loginError: { ar: string; en: string };
  fieldRequired: { ar: string; en: string };
  verificationCode: { ar: string; en: string };
  verifyButton: { ar: string; en: string };
  scanQrWithAuthenticator: { ar: string; en: string };
  twoFactorSetupCodeLabel: { ar: string; en: string };
  verifyAndEnable2fa: { ar: string; en: string };
  demoCredentials: { ar: string; en: string };
  managerLabel: { ar: string; en: string };
  userLabel: { ar: string; en: string };
  copyright: { ar: string; en: string };
  
  // Screen Regions & Schedules
  screenRegions: { ar: string; en: string };
  setupScreenRegions: { ar: string; en: string };
  regionType: { ar: string; en: string };
  leftRight: { ar: string; en: string };
  topBottom: { ar: string; en: string };
  createRegions: { ar: string; en: string };
  assignToRegion: { ar: string; en: string };
  noRegion: { ar: string; en: string };
  position: { ar: string; en: string };
  regionsCreated: { ar: string; en: string };
  errorCreatingRegions: { ar: string; en: string };
  advertisementSchedule: { ar: string; en: string };
  editSchedule: { ar: string; en: string };
  scheduleSaved: { ar: string; en: string };
  errorSavingSchedule: { ar: string; en: string };
  scheduleDeleted: { ar: string; en: string };
  errorDeletingSchedule: { ar: string; en: string };
  confirmDeleteSchedule: { ar: string; en: string };
  priorityHint: { ar: string; en: string };
  left: { ar: string; en: string };
  right: { ar: string; en: string };
  top: { ar: string; en: string };
  bottom: { ar: string; en: string };
  clickAndDragToSelect: { ar: string; en: string };
  saveRegion: { ar: string; en: string };
  createdRegions: { ar: string; en: string };
  regionCreated: { ar: string; en: string };
  regionTooSmall: { ar: string; en: string };
  confirmDeleteRegion: { ar: string; en: string };
  regionDeleted: { ar: string; en: string };
  errorDeletingRegion: { ar: string; en: string };
  confirmResetRegions: { ar: string; en: string };
  regionsReset: { ar: string; en: string };
  resetRegions: { ar: string; en: string };
    editRegions: { ar: string; en: string };
    hideEditor: { ar: string; en: string };
    howToUse: { ar: string; en: string };
    instruction1: { ar: string; en: string };
    instruction2: { ar: string; en: string };
    instruction3: { ar: string; en: string };
    orUseQuickSplit: { ar: string; en: string };
    regionSelected: { ar: string; en: string };
    clickSaveToCreate: { ar: string; en: string };
    resizeLeft: { ar: string; en: string };
    resizeRight: { ar: string; en: string };
    resizeTop: { ar: string; en: string };
    resizeBottom: { ar: string; en: string };
    resizeTopLeft: { ar: string; en: string };
    resizeTopRight: { ar: string; en: string };
    resizeBottomLeft: { ar: string; en: string };
    resizeBottomRight: { ar: string; en: string };
    regionUpdated: { ar: string; en: string };
    errorUpdatingRegion: { ar: string; en: string };
    saveAllRegions: { ar: string; en: string };
    clearSelections: { ar: string; en: string };
    noSelectionsToSave: { ar: string; en: string };
    regionsSelected: { ar: string; en: string };
  selectGridLayout: { ar: string; en: string };
  gridLayoutHint: { ar: string; en: string };
  creatingRegions: { ar: string; en: string };
  upcoming: { ar: string; en: string };
  ended: { ar: string; en: string };
  noAdvertisementAssigned: { ar: string; en: string };
  screenPreview: { ar: string; en: string };
  // Group layout / By Group
  groupLayout: { ar: string; en: string };
  selectGroup: { ar: string; en: string };
  screensInGroup: { ar: string; en: string };
  noScreensInGroup: { ar: string; en: string };
  noAdvertisementsAssigned: { ar: string; en: string };
  selectRegion: { ar: string; en: string };
  applyToGroupHelp: { ar: string; en: string };
  applyToGroup: { ar: string; en: string };
  remove: { ar: string; en: string };
  advertisementRemoved: { ar: string; en: string };
  adsSaved: { ar: string; en: string };
  settingsSaved: { ar: string; en: string };
  byScreen: { ar: string; en: string };
  byGroup: { ar: string; en: string };
  groupDeleted: { ar: string; en: string };
  errorDeletingGroup: { ar: string; en: string };
  editGroup: { ar: string; en: string };
  groupUpdated: { ar: string; en: string };
  errorUpdatingGroup: { ar: string; en: string };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: TranslationKeys = {
    search: { ar: 'بحث', en: 'Search' },
    add: { ar: 'إضافة', en: 'Add' },
    edit: { ar: 'تعديل', en: 'Edit' },
    delete: { ar: 'حذف', en: 'Delete' },
    save: { ar: 'حفظ', en: 'Save' },
    saveChanges: { ar: 'حفظ التغييرات', en: 'Save Changes' },
    cancel: { ar: 'إلغاء', en: 'Cancel' },
    close: { ar: 'إغلاق', en: 'Close' },
    back: { ar: 'رجوع', en: 'Back' },
    next: { ar: 'التالي', en: 'Next' },
    previous: { ar: 'السابق', en: 'Previous' },
    submit: { ar: 'إرسال', en: 'Submit' },
    reset: { ar: 'إعادة تعيين', en: 'Reset' },
    confirm: { ar: 'تأكيد', en: 'Confirm' },
    yes: { ar: 'نعم', en: 'Yes' },
    no: { ar: 'لا', en: 'No' },
    ok: { ar: 'موافق', en: 'OK' },
    loading: { ar: 'جاري التحميل...', en: 'Loading...' },
    error: { ar: 'خطأ', en: 'Error' },
    success: { ar: 'نجح', en: 'Success' },
    warning: { ar: 'تحذير', en: 'Warning' },
    info: { ar: 'معلومات', en: 'Info' },
    noDataFound: { ar: 'لم يتم العثور على بيانات', en: 'No data found' },
    tryAdjustingFilters: { ar: 'جرب تعديل الفلاتر', en: 'Try adjusting filters' },
    confirmDelete: { ar: 'تأكيد الحذف', en: 'Confirm Delete' },
    confirmDeleteMessage: { ar: 'هل أنت متأكد من الحذف؟ لا يمكن التراجع عن هذا الإجراء.', en: 'Are you sure you want to delete? This action cannot be undone.' },
    confirmLogoutMessage: { ar: 'هل أنت متأكد من تسجيل الخروج؟', en: 'Are you sure you want to logout?' },
    actions: { ar: 'الإجراءات', en: 'Actions' },
    status: { ar: 'الحالة', en: 'Status' },
    type: { ar: 'النوع', en: 'Type' },
    description: { ar: 'الوصف', en: 'Description' },
    code: { ar: 'الرمز', en: 'Code' },
    name: { ar: 'الاسم', en: 'Name' },
    date: { ar: 'التاريخ', en: 'Date' },
    location: { ar: 'الموقع', en: 'Location' },
    priority: { ar: 'الأولوية', en: 'Priority' },
    category: { ar: 'الفئة', en: 'Category' },
    allLocations: { ar: 'جميع المواقع', en: 'All Locations' },
    active: { ar: 'نشط', en: 'Active' },
    inactive: { ar: 'غير نشط', en: 'Inactive' },
    pending: { ar: 'قيد الانتظار', en: 'Pending' },
    completed: { ar: 'مكتمل', en: 'Completed' },
    high: { ar: 'عالية', en: 'High' },
    medium: { ar: 'متوسطة', en: 'Medium' },
    low: { ar: 'منخفضة', en: 'Low' },
    all: { ar: 'الكل', en: 'All' },
    allTypes: { ar: 'جميع الأنواع', en: 'All Types' },
    allStatuses: { ar: 'جميع الحالات', en: 'All Statuses' },
    allCategories: { ar: 'جميع الفئات', en: 'All Categories' },
    allPriorities: { ar: 'جميع الأولويات', en: 'All Priorities' },
    preview: { ar: 'معاينة', en: 'Preview' },
    
    // Notifications
    notifications: { ar: 'إدارة الإشعارات', en: 'Notifications Management' },
    addNewNotification: { ar: 'إضافة إشعار جديد', en: 'Add New Notification' },
    notificationTitle: { ar: 'عنوان الإشعار', en: 'Notification Title' },
    notificationType: { ar: 'نوع الإشعار', en: 'Notification Type' },
    notificationMessage: { ar: 'رسالة الإشعار', en: 'Notification Message' },
    enterNotificationTitle: { ar: 'أدخل عنوان الإشعار', en: 'Enter notification title' },
    enterNotificationMessage: { ar: 'أدخل رسالة الإشعار', en: 'Enter notification message' },
    addNotification: { ar: 'إضافة الإشعار', en: 'Add Notification' },
    searchNotifications: { ar: 'البحث في الإشعارات...', en: 'Search notifications...' },
    totalNotifications: { ar: 'إجمالي الإشعارات', en: 'Total Notifications' },
    notificationDashboard: { ar: 'لوحة تحكم الإشعارات', en: 'Notification Dashboard' },
    notificationManagement: { ar: 'إدارة الإشعارات', en: 'Notification Management' },
    sentNotifications: { ar: 'الإشعارات المرسلة', en: 'Sent Notifications' },
    scheduledNotifications: { ar: 'الإشعارات المجدولة', en: 'Scheduled Notifications' },
    draftNotifications: { ar: 'الإشعارات المسودة', en: 'Draft Notifications' },
    fromLastMonth: { ar: 'من الشهر الماضي', en: 'from last month' },
    notificationTypes: { ar: 'أنواع الإشعارات', en: 'Notification Types' },
    recipients: { ar: 'مستلم', en: 'recipients' },
    systemUpdate: { ar: 'تحديث النظام', en: 'System Update' },
    securityAlert: { ar: 'تنبيه أمني', en: 'Security Alert' },
    reminderNotification: { ar: 'إشعار تذكير', en: 'Reminder Notification' },
    normal: { ar: 'عادي', en: 'Normal' },
    urgent: { ar: 'عاجل', en: 'Urgent' },
    sent: { ar: 'مرسل', en: 'Sent' },
    scheduled: { ar: 'مجدول', en: 'Scheduled' },
    draft: { ar: 'مسودة', en: 'Draft' },
    markAllAsRead: { ar: 'تحديد الكل كمقروء', en: 'Mark All as Read' },
    markAsRead: { ar: 'تحديد كمقروء', en: 'Mark as Read' },
    read: { ar: 'مقروء', en: 'Read' },
    unread: { ar: 'غير مقروء', en: 'Unread' },
    noNotificationsFound: { ar: 'لا توجد إشعارات مطابقة للبحث', en: 'No notifications found matching search' },
    general: { ar: 'عام', en: 'General' },
    system: { ar: 'النظام', en: 'System' },
    messages: { ar: 'الرسائل', en: 'Messages' },
    security: { ar: 'الأمان', en: 'Security' },
    
    // Notification Settings
    notificationSettings: { ar: 'إعدادات الإشعارات', en: 'Notification Settings' },
    resetToDefaults: { ar: 'إعادة تعيين للافتراضي', en: 'Reset to Defaults' },
    saveSettings: { ar: 'حفظ الإعدادات', en: 'Save Settings' },
    saving: { ar: 'جاري الحفظ...', en: 'Saving...' },
    systemUpdates: { ar: 'تحديثات النظام', en: 'System Updates' },
    systemUpdatesDescription: { ar: 'إشعارات حول تحديثات النظام والصيانة', en: 'Notifications about system updates and maintenance' },
    securityAlerts: { ar: 'تنبيهات الأمان', en: 'Security Alerts' },
    securityAlertsDescription: { ar: 'إشعارات حول محاولات تسجيل الدخول والأنشطة المشبوهة', en: 'Notifications about login attempts and suspicious activities' },
    newMessages: { ar: 'رسائل جديدة', en: 'New Messages' },
    newMessagesDescription: { ar: 'إشعارات عند استلام رسائل جديدة', en: 'Notifications when receiving new messages' },
    reminders: { ar: 'تذكيرات', en: 'Reminders' },
    remindersDescription: { ar: 'تذكيرات بالمواعيد والمهام المهمة', en: 'Reminders about important appointments and tasks' },
    marketing: { ar: 'إعلانات تسويقية', en: 'Marketing' },
    marketingDescription: { ar: 'إشعارات حول العروض والخدمات الجديدة', en: 'Notifications about new offers and services' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    sms: { ar: 'رسالة نصية', en: 'SMS' },
    push: { ar: 'إشعار', en: 'Push' },
    whatsapp: { ar: 'واتساب', en: 'WhatsApp' },
    settingsSavedSuccessfully: { ar: 'تم حفظ الإعدادات بنجاح', en: 'Settings saved successfully' },
    settingsResetToDefaults: { ar: 'تم إعادة تعيين الإعدادات للقيم الافتراضية', en: 'Settings reset to defaults' },
    
    // Sub-Locations
    subLocations: { ar: 'المواقع الفرعية', en: 'Sub-Locations' },
    addNewLocation: { ar: 'إضافة موقع جديد', en: 'Add New Location' },
    locationName: { ar: 'اسم الموقع', en: 'Location Name' },
    address: { ar: 'العنوان', en: 'Address' },
    locationType: { ar: 'نوع الموقع', en: 'Location Type' },
    enterLocationName: { ar: 'أدخل اسم الموقع', en: 'Enter location name' },
    enterAddress: { ar: 'أدخل عنوان الموقع', en: 'Enter address' },
    selectLocationType: { ar: 'اختر نوع الموقع', en: 'Select location type' },
    addLocation: { ar: 'إضافة الموقع', en: 'Add Location' },
    searchLocations: { ar: 'البحث في المواقع...', en: 'Search locations...' },
    totalLocations: { ar: 'إجمالي المواقع', en: 'Total Locations' },
    mainCenter: { ar: 'مركز رئيسي', en: 'Main Center' },
    branch: { ar: 'فرع', en: 'Branch' },
    office: { ar: 'مكتب', en: 'Office' },
    noLocationsFound: { ar: 'لا توجد مواقع مطابقة للبحث', en: 'No locations found matching search' },
    
    // Advertisements
    advertisements: { ar: 'الإعلانات', en: 'Advertisements' },
    addAdvertisement: { ar: 'إضافة إعلان', en: 'Add Advertisement' },
    addNewAdvertisement: { ar: 'إضافة إعلان جديد', en: 'Add New Advertisement' },
    title: { ar: 'العنوان', en: 'Title' },
    imageUrl: { ar: 'رابط الصورة', en: 'Image URL' },
    targetAudience: { ar: 'الجمهور المستهدف', en: 'Target Audience' },
    startDate: { ar: 'تاريخ البداية', en: 'Start Date' },
    endDate: { ar: 'تاريخ النهاية', en: 'End Date' },
    enterTitle: { ar: 'أدخل العنوان', en: 'Enter title' },
    enterDescription: { ar: 'أدخل الوصف', en: 'Enter description' },
    enterImageUrl: { ar: 'أدخل رابط الصورة', en: 'Enter image URL' },
    enterTargetAudience: { ar: 'أدخل الجمهور المستهدف', en: 'Enter target audience' },
    titleRequired: { ar: 'العنوان مطلوب', en: 'Title is required' },
    descriptionRequired: { ar: 'الوصف مطلوب', en: 'Description is required' },
    imageUrlRequired: { ar: 'رابط الصورة مطلوب', en: 'Image URL is required' },
    targetAudienceRequired: { ar: 'الجمهور المستهدف مطلوب', en: 'Target audience is required' },
    startDateRequired: { ar: 'تاريخ البداية مطلوب', en: 'Start date is required' },
    endDateRequired: { ar: 'تاريخ النهاية مطلوب', en: 'End date is required' },
    saveAdvertisement: { ar: 'حفظ الإعلان', en: 'Save Advertisement' },
    searchAdvertisements: { ar: 'البحث في الإعلانات', en: 'Search advertisements' },
    banner: { ar: 'شريط إعلاني', en: 'Banner' },
    popup: { ar: 'نافذة منبثقة', en: 'Popup' },
    uploadFile: { ar: 'رفع الملف', en: 'Upload File' },
    fileRequired: { ar: 'الملف مطلوب', en: 'File is required' },
    supportedFormats: { ar: 'الصيغ المدعومة: الصور، الفيديو', en: 'Supported: Images, Videos' },
    supportedFormatsMultiple: { ar: 'الصيغ المدعومة: صور، فيديو. اختر عدة ملفات لإنشاء عدة إعلانات مرة واحدة.', en: 'Supported: Images, Videos. Select multiple files to create multiple ads at once.' },
    filesSelected: { ar: 'ملف/ملفات محددة', en: 'file(s) selected' },
    multipleFilesSelected: { ar: 'تم تحديد عدة ملفات', en: 'Multiple files selected' },
    urlRequired: { ar: 'رابط الملف مطلوب', en: 'File URL is required' },
    fileOrUrlRequired: { ar: 'الملف أو الرابط مطلوب', en: 'File or URL is required' },
    inputMethod: { ar: 'طريقة الإدخال', en: 'Input Method' },
    enterUrl: { ar: 'أدخل الرابط', en: 'Enter URL' },
    fileUrl: { ar: 'رابط الملف', en: 'File URL' },
    enterFileUrl: { ar: 'أدخل رابط الملف (مثال: https://example.com/video.mp4)', en: 'Enter file URL (e.g., https://example.com/video.mp4)' },
    urlHint: { ar: 'أدخل رابطاً مباشراً لصورة أو فيديو أو مستند', en: 'Enter a direct link to an image, video, or document file' },
    assignToUser: { ar: 'تعيين للمستخدم', en: 'Assign to User' },
    selectUser: { ar: 'اختر المستخدم', en: 'Select User' },
    confirmDeleteAdvertisementMessage: { ar: 'هل أنت متأكد من حذف هذا الإعلان؟', en: 'Are you sure you want to delete this advertisement?' },
    assignedTo: { ar: 'معين إلى', en: 'Assigned To' },
    file: { ar: 'الملف', en: 'File' },
    dates: { ar: 'التواريخ', en: 'Dates' },
    editAdvertisement: { ar: 'تعديل الإعلان', en: 'Edit Advertisement' },
    errorLoadingAdvertisements: { ar: 'خطأ في تحميل الإعلانات', en: 'Error loading advertisements' },
    errorSavingAdvertisement: { ar: 'خطأ في حفظ الإعلان', en: 'Error saving advertisement' },
    image: { ar: 'صورة', en: 'Image' },
    video: { ar: 'فيديو', en: 'Video' },
    presentation: { ar: 'عرض تقديمي', en: 'Presentation' },
    document: { ar: 'مستند', en: 'Document' },
    expired: { ar: 'منتهي الصلاحية', en: 'Expired' },
    sidebar: { ar: 'شريط جانبي', en: 'Sidebar' },
    deactivate: { ar: 'إلغاء التفعيل', en: 'Deactivate' },
    activate: { ar: 'تفعيل', en: 'Activate' },
    clicks: { ar: 'النقرات', en: 'Clicks' },
    impressions: { ar: 'المشاهدات', en: 'Impressions' },
    noAdvertisementsFound: { ar: 'لم يتم العثور على إعلانات', en: 'No advertisements found' },
    
    // View Advertisements
    viewAdvertisements: { ar: 'عرض الإعلانات', en: 'View Advertisements' },
    manageAdvertisements: { ar: 'إدارة الإعلانات', en: 'Manage Advertisements' },
    filters: { ar: 'الفلاتر', en: 'Filters' },
    dateRange: { ar: 'نطاق التاريخ', en: 'Date Range' },
    allDates: { ar: 'جميع التواريخ', en: 'All Dates' },
    today: { ar: 'اليوم', en: 'Today' },
    thisWeek: { ar: 'هذا الأسبوع', en: 'This Week' },
    thisMonth: { ar: 'هذا الشهر', en: 'This Month' },
    totalImpressions: { ar: 'إجمالي المشاهدات', en: 'Total Impressions' },
    totalClicks: { ar: 'إجمالي النقرات', en: 'Total Clicks' },
    averageCTR: { ar: 'متوسط معدل النقر', en: 'Average CTR' },
    totalAdvertisements: { ar: 'إجمالي الإعلانات', en: 'Total Advertisements' },
    advertisementsList: { ar: 'قائمة الإعلانات', en: 'Advertisements List' },
    export: { ar: 'تصدير', en: 'Export' },
    print: { ar: 'طباعة', en: 'Print' },
    ctr: { ar: 'معدل النقر', en: 'CTR' },
    viewDetails: { ar: 'عرض التفاصيل', en: 'View Details' },
    
    // Advertising Banner
    advertisingBanner: { ar: 'إدارة الشريط الإعلاني', en: 'Advertising Banner Management' },
    addNewBanner: { ar: 'إضافة إعلان جديد', en: 'Add New Banner' },
    bannerTitle: { ar: 'عنوان الإعلان', en: 'Banner Title' },
    bannerDescription: { ar: 'وصف الإعلان', en: 'Banner Description' },
    enterBannerTitle: { ar: 'أدخل عنوان الإعلان', en: 'Enter banner title' },
    enterBannerDescription: { ar: 'أدخل وصف الإعلان', en: 'Enter banner description' },
    enterPriority: { ar: '1-10', en: '1-10' },
    addBanner: { ar: 'إضافة الإعلان', en: 'Add Banner' },
    searchBanners: { ar: 'البحث في الإعلانات...', en: 'Search banners...' },
    totalBanners: { ar: 'إجمالي الإعلانات', en: 'Total Banners' },
    from: { ar: 'من', en: 'From' },
    to: { ar: 'إلى', en: 'To' },
    noBannersFound: { ar: 'لا توجد إعلانات مطابقة للبحث', en: 'No banners found matching search' },
    
    // Sections
    sections: { ar: 'الأقسام', en: 'Sections' },
    addSection: { ar: 'إضافة قسم', en: 'Add Section' },
    editSection: { ar: 'تعديل قسم', en: 'Edit Section' },
    addNewSection: { ar: 'إضافة قسم جديد', en: 'Add New Section' },
    sectionName: { ar: 'اسم القسم', en: 'Section Name' },
    sectionCode: { ar: 'رمز القسم', en: 'Section Code' },
    sectionType: { ar: 'نوع القسم', en: 'Section Type' },
    sectionStatus: { ar: 'حالة القسم', en: 'Section Status' },
    enterSectionName: { ar: 'أدخل اسم القسم', en: 'Enter section name' },
    enterSectionCode: { ar: 'أدخل رمز القسم', en: 'Enter section code' },
    enterSectionDescription: { ar: 'أدخل وصف القسم', en: 'Enter section description' },
    selectSectionType: { ar: 'أدخل نوع القسم', en: 'Enter section type' },
    sectionNameRequired: { ar: 'اسم القسم مطلوب', en: 'Section name is required' },
    sectionCodeRequired: { ar: 'رمز القسم مطلوب', en: 'Section code is required' },
    sectionTypeRequired: { ar: 'نوع القسم مطلوب', en: 'Section type is required' },
    saveSection: { ar: 'حفظ القسم', en: 'Save Section' },
    sectionsList: { ar: 'قائمة الأقسام', en: 'Sections List' },
    noSectionsFound: { ar: 'لم يتم العثور على أقسام', en: 'No sections found' },
    showSectionsList: { ar: 'عرض قائمة الأقسام', en: 'Show Sections List' },
    sectionUpdatedSuccessfully: { ar: 'تم تحديث القسم بنجاح!', en: 'Section updated successfully!' },
    sectionAddedSuccessfully: { ar: 'تم إضافة القسم بنجاح!', en: 'Section added successfully!' },
    createdDate: { ar: 'تاريخ الإنشاء', en: 'Created Date' },
    residential: { ar: 'سكني', en: 'Residential' },
    commercial: { ar: 'تجاري', en: 'Commercial' },
    industrial: { ar: 'صناعي', en: 'Industrial' },
    mixed: { ar: 'مختلط', en: 'Mixed' },
    underConstruction: { ar: 'قيد الإنشاء', en: 'Under Construction' },
    
    // Special Divisions
    specialDivisions: { ar: 'الأقسام الخاصة', en: 'Special Divisions' },
    addSpecialDivision: { ar: 'إضافة قسم خاص', en: 'Add Special Division' },
    editSpecialDivision: { ar: 'تعديل قسم خاص', en: 'Edit Special Division' },
    addNewSpecialDivision: { ar: 'إضافة قسم خاص جديد', en: 'Add New Special Division' },
    divisionName: { ar: 'اسم القسم الخاص', en: 'Special Division Name' },
    divisionCode: { ar: 'رمز القسم الخاص', en: 'Special Division Code' },
    enterDivisionName: { ar: 'أدخل اسم القسم الخاص', en: 'Enter special division name' },
    enterDivisionCode: { ar: 'أدخل رمز القسم الخاص', en: 'Enter special division code' },
    enterDivisionDescription: { ar: 'أدخل وصف القسم الخاص', en: 'Enter special division description' },
    selectCategory: { ar: 'أدخل الفئة', en: 'Enter category' },
    divisionNameRequired: { ar: 'اسم القسم الخاص مطلوب', en: 'Special division name is required' },
    divisionCodeRequired: { ar: 'رمز القسم الخاص مطلوب', en: 'Special division code is required' },
    categoryRequired: { ar: 'الفئة مطلوبة', en: 'Category is required' },
    government: { ar: 'حكومي', en: 'Government' },
    educational: { ar: 'تعليمي', en: 'Educational' },
    healthcare: { ar: 'صحي', en: 'Healthcare' },
    religious: { ar: 'ديني', en: 'Religious' },
    recreational: { ar: 'ترفيهي', en: 'Recreational' },
    saveDivision: { ar: 'حفظ القسم الخاص', en: 'Save Special Division' },
    searchDivisions: { ar: 'البحث في الأقسام الخاصة', en: 'Search special divisions' },
    specialDivisionsList: { ar: 'قائمة الأقسام الخاصة', en: 'Special Divisions List' },
    noDivisionsFound: { ar: 'لم يتم العثور على أقسام خاصة', en: 'No special divisions found' },
    showDivisionsList: { ar: 'عرض قائمة الأقسام', en: 'Show Divisions List' },
    divisionUpdatedSuccessfully: { ar: 'تم تحديث القسم بنجاح!', en: 'Division updated successfully!' },
    divisionAddedSuccessfully: { ar: 'تم إضافة القسم بنجاح!', en: 'Division added successfully!' },
    
    // Users and Permissions
    usersAndPermissions: { ar: 'إدارة المستخدمين والصلاحيات', en: 'Users and Permissions Management' },
    addNewUser: { ar: 'إضافة مستخدم جديد', en: 'Add New User' },
    userName: { ar: 'اسم المستخدم', en: 'User Name' },
    enterUserName: { ar: 'أدخل اسم المستخدم', en: 'Enter user name' },
    enterEmail: { ar: 'أدخل البريد الإلكتروني', en: 'Enter email' },
    password: { ar: 'كلمة المرور', en: 'Password' },
    enterPassword: { ar: 'أدخل كلمة المرور', en: 'Enter password' },
    enterPasswordToChange: { ar: 'أدخل كلمة المرور الجديدة لتغييرها', en: 'Enter new password to change' },
    passwordRequired: { ar: 'كلمة المرور مطلوبة', en: 'Password is required' },
    passwordMinLength: { ar: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل', en: 'Password must be at least 6 characters' },
    leavePasswordEmptyToKeepCurrent: { ar: 'اتركه فارغاً للاحتفاظ بالكلمة الحالية', en: 'Leave empty to keep current password' },
    role: { ar: 'الصلاحية', en: 'Role' },
    permissions: { ar: 'الصلاحيات', en: 'Permissions' },
    addUser: { ar: 'إضافة المستخدم', en: 'Add User' },
    searchUsers: { ar: 'البحث في المستخدمين...', en: 'Search users...' },
    allRoles: { ar: 'جميع الصلاحيات', en: 'All Roles' },
    totalUsers: { ar: 'إجمالي المستخدمين', en: 'Total Users' },
    lastLogin: { ar: 'آخر تسجيل دخول', en: 'Last Login' },
    noUsersFound: { ar: 'لا توجد مستخدمين مطابقين للبحث', en: 'No users found matching search' },
    user: { ar: 'المستخدم', en: 'User' },
    manager: { ar: 'مدير', en: 'Manager' },
    // For demo credentials display (with colon)
    managerLabel: { ar: 'مدير:', en: 'Manager:' },
    userLabel: { ar: 'مستخدم:', en: 'User:' },
    admin: { ar: 'مدير النظام', en: 'System Admin' },
    
    // Screen Regions & Schedules
    screenRegions: { ar: 'مناطق الشاشة', en: 'Screen Regions' },
    setupScreenRegions: { ar: 'قسّم شاشتك إلى مناطق متعددة لتشغيل إعلانات مختلفة في نفس الوقت', en: 'Divide your screen into multiple areas to play different advertisements simultaneously' },
    regionType: { ar: 'نوع المنطقة', en: 'Region Type' },
    leftRight: { ar: 'يسار / يمين', en: 'Left / Right' },
    topBottom: { ar: 'أعلى / أسفل', en: 'Top / Bottom' },
    createRegions: { ar: 'إنشاء المناطق', en: 'Create Regions' },
    assignToRegion: { ar: 'تعيين إلى المنطقة', en: 'Assign to Region' },
    noRegion: { ar: 'لا توجد منطقة', en: 'No Region' },
    position: { ar: 'الموضع', en: 'Position' },
    regionsCreated: { ar: 'تم إنشاء مناطق الشاشة بنجاح', en: 'Screen regions created successfully' },
    errorCreatingRegions: { ar: 'خطأ في إنشاء المناطق', en: 'Error creating regions' },
    advertisementSchedule: { ar: 'جدولة الإعلان', en: 'Advertisement Schedule' },
    editSchedule: { ar: 'تعديل الجدول', en: 'Edit Schedule' },
    scheduleSaved: { ar: 'تم حفظ الجدول بنجاح', en: 'Schedule saved successfully' },
    errorSavingSchedule: { ar: 'خطأ في حفظ الجدول', en: 'Error saving schedule' },
    scheduleDeleted: { ar: 'تم حذف الجدول بنجاح', en: 'Schedule deleted successfully' },
    errorDeletingSchedule: { ar: 'خطأ في حذف الجدول', en: 'Error deleting schedule' },
    confirmDeleteSchedule: { ar: 'هل أنت متأكد من حذف هذا الجدول؟', en: 'Are you sure you want to delete this schedule?' },
    priorityHint: { ar: 'الإعلانات ذات الأولوية الأعلى ستُشغل أولاً', en: 'Higher priority advertisements will play first' },
    left: { ar: 'يسار', en: 'Left' },
    right: { ar: 'يمين', en: 'Right' },
    top: { ar: 'أعلى', en: 'Top' },
    bottom: { ar: 'أسفل', en: 'Bottom' },
    upcoming: { ar: 'قادم', en: 'Upcoming' },
    ended: { ar: 'انتهى', en: 'Ended' },
    noAdvertisementAssigned: { ar: 'لا يوجد إعلان مخصص لهذا القسم', en: 'No advertisement assigned to this division' },
    screenPreview: { ar: 'معاينة الشاشة', en: 'Screen Preview' },
    dashboard: { ar: 'لوحة التحكم', en: 'Dashboard' },
    dashboardOverview: { ar: 'نظرة عامة كاملة على نظامك', en: 'Complete overview of your system' },
    statistics: { ar: 'الإحصائيات', en: 'Statistics' },
    recentScreens: { ar: 'الشاشات الأخيرة', en: 'Recent Screens' },
    recentAdvertisements: { ar: 'الإعلانات الأخيرة', en: 'Recent Advertisements' },
    systemStatus: { ar: 'حالة النظام', en: 'System Status' },
    viewAll: { ar: 'عرض الكل', en: 'View All' },
    noScreens: { ar: 'لم يتم العثور على شاشات', en: 'No screens found' },
    noAdvertisements: { ar: 'لم يتم العثور على إعلانات', en: 'No advertisements found' },
    addScreen: { ar: 'إضافة شاشة', en: 'Add Screen' },
    scanDevices: { ar: 'فحص الأجهزة', en: 'Scan Devices' },
    playbackControl: { ar: 'التحكم في التشغيل', en: 'Playback Control' },
    sendNotification: { ar: 'إرسال إشعار', en: 'Send Notification' },
    manageLocations: { ar: 'إدارة المواقع', en: 'Manage Locations' },
    dashboardTotalScreens: { ar: 'إجمالي الشاشات', en: 'Total Screens' },
    dashboardOnlineScreens: { ar: 'الشاشات المتصلة', en: 'Online Screens' },
    dashboardPlayingScreens: { ar: 'الشاشات قيد التشغيل', en: 'Playing Screens' },
    dashboardAdvertisements: { ar: 'الإعلانات', en: 'Advertisements' },
    dashboardActiveAdvertisements: { ar: 'الإعلانات النشطة', en: 'Active Advertisements' },
    dashboardLocations: { ar: 'المواقع', en: 'Locations' },
    dashboardSections: { ar: 'الأقسام', en: 'Sections' },
    dashboardNotifications: { ar: 'الإشعارات', en: 'Notifications' },
    dashboardUsersPermissions: { ar: 'المستخدمون والصلاحيات', en: 'Users & Permissions' },
    locations: { ar: 'المواقع', en: 'Locations' },
    users: { ar: 'المستخدمون', en: 'Users' },
    
    // WhatsApp Messages
    whatsappMessages: { ar: 'رسائل واتساب', en: 'WhatsApp Messages' },
    sendNewMessage: { ar: 'إرسال رسالة جديدة', en: 'Send New Message' },
    individual: { ar: 'فردي', en: 'Individual' },
    bulk: { ar: 'جماعي', en: 'Bulk' },
    sendMode: { ar: 'وضع الإرسال', en: 'Send Mode' },
    selectTemplate: { ar: 'اختر القالب', en: 'Select Template' },
    enterVariableValue: { ar: 'أدخل قيمة المتغير', en: 'Enter variable value' },
    selectUsers: { ar: 'اختر المستخدمين', en: 'Select Users' },
    sendToAllUsers: { ar: 'إرسال لجميع المستخدمين', en: 'Send to All Users' },
    selectedUsers: { ar: 'المستخدمون المحددون', en: 'Selected Users' },
    errorLoadingMessages: { ar: 'خطأ في تحميل الرسائل', en: 'Error loading messages' },
    errorSendingMessages: { ar: 'خطأ في إرسال الرسائل', en: 'Error sending messages' },
    messagesSent: { ar: 'الرسائل المرسلة', en: 'Messages Sent' },
    messagesFailed: { ar: 'الرسائل الفاشلة', en: 'Messages Failed' },
    recipient: { ar: 'المستقبل', en: 'Recipient' },
    messageContent: { ar: 'محتوى الرسالة', en: 'Message Content' },
    noMessagesFound: { ar: 'لا توجد رسائل', en: 'No messages found' },
    resend: { ar: 'إعادة إرسال', en: 'Resend' },
    totalMessages: { ar: 'إجمالي الرسائل', en: 'Total Messages' },
    phoneNumber: { ar: 'رقم الهاتف', en: 'Phone Number' },
    recipientName: { ar: 'اسم المستلم', en: 'Recipient Name' },
    recipientNameOptional: { ar: 'اسم المستلم (اختياري)', en: 'Recipient Name (Optional)' },
    messageType: { ar: 'نوع الرسالة', en: 'Message Type' },
    templateName: { ar: 'اسم القالب', en: 'Template Name' },
    messageText: { ar: 'نص الرسالة', en: 'Message Text' },
    enterMessageText: { ar: 'أدخل نص الرسالة', en: 'Enter message text' },
    sendMessage: { ar: 'إرسال الرسالة', en: 'Send Message' },
    searchMessages: { ar: 'البحث في الرسائل...', en: 'Search messages...' },
    welcomeMessage: { ar: 'رسالة أهلاً بك', en: 'Welcome Message' },
    reminder: { ar: 'تذكير', en: 'Reminder' },
    send: { ar: 'إرسال', en: 'Send' },
    
    // WhatsApp Templates
    whatsappTemplates: { ar: 'قوالب واتساب', en: 'WhatsApp Templates' },
    addTemplate: { ar: 'إضافة قالب', en: 'Add Template' },
    addNewTemplate: { ar: 'إضافة قالب جديد', en: 'Add New Template' },
    enterTemplateName: { ar: 'أدخل اسم القالب', en: 'Enter template name' },
    templateNameRequired: { ar: 'اسم القالب مطلوب', en: 'Template name is required' },
    templateContent: { ar: 'محتوى القالب', en: 'Template Content' },
    enterTemplateContent: { ar: 'أدخل محتوى القالب', en: 'Enter template content' },
    templateContentRequired: { ar: 'محتوى القالب مطلوب', en: 'Template content is required' },
    templateVariablesInfo: { ar: 'استخدم {{variableName}} لإضافة متغيرات ديناميكية. مثال: {{name}} أو {{date}}', en: 'Use {{variableName}} to add dynamic variables. Example: {{name}} or {{date}}' },
    saveTemplate: { ar: 'حفظ القالب', en: 'Save Template' },
    editTemplate: { ar: 'تعديل القالب', en: 'Edit Template' },
    searchTemplates: { ar: 'البحث في القوالب...', en: 'Search templates...' },
    templates: { ar: 'القوالب', en: 'Templates' },
    variables: { ar: 'المتغيرات', en: 'Variables' },
    usage: { ar: 'استخدام القالب', en: 'Template Usage' },
    lastUsed: { ar: 'آخر استخدام', en: 'Last Used' },
    never: { ar: 'أبداً', en: 'Never' },
    noTemplatesFound: { ar: 'لا توجد قوالب مطابقة للبحث', en: 'No templates found matching search' },
    errorLoadingTemplates: { ar: 'خطأ في تحميل القوالب', en: 'Error loading templates' },
    errorCreatingTemplate: { ar: 'خطأ في إنشاء القالب', en: 'Error creating template' },
    errorUpdatingTemplate: { ar: 'خطأ في تحديث القالب', en: 'Error updating template' },
    errorDeletingTemplate: { ar: 'خطأ في حذف القالب', en: 'Error deleting template' },
    
    // Sidebar specific
    screeningSystem: { ar: 'نظام التصفية', en: 'Screening System' },
    expandSidebar: { ar: 'توسيع الشريط الجانبي', en: 'Expand Sidebar' },
    collapseSidebar: { ar: 'طي الشريط الجانبي', en: 'Collapse Sidebar' },
    adminUser: { ar: 'المستخدم المسؤول', en: 'Admin User' },
    systemAdministrator: { ar: 'مدير النظام', en: 'System Administrator' },
    systemSettings: { ar: 'إعدادات النظام', en: 'System Settings' },
    systemLogs: { ar: 'سجلات النظام', en: 'System Logs' },
    searchLogs: { ar: 'البحث في السجلات...', en: 'Search logs...' },
    allLevels: { ar: 'جميع المستويات', en: 'All Levels' },
    allModules: { ar: 'جميع الوحدات', en: 'All Modules' },
    allActions: { ar: 'جميع الإجراءات', en: 'All Actions' },
    totalLogs: { ar: 'إجمالي السجلات', en: 'Total Logs' },
    noLogsFound: { ar: 'لا توجد سجلات', en: 'No logs found' },
    errorLoadingLogs: { ar: 'خطأ في تحميل السجلات', en: 'Error loading logs' },
    confirmDeleteLogMessage: { ar: 'هل أنت متأكد من حذف هذا السجل؟', en: 'Are you sure you want to delete this log entry?' },
    level: { ar: 'المستوى', en: 'Level' },
    module: { ar: 'الوحدة', en: 'Module' },
    action: { ar: 'الإجراء', en: 'Action' },
    debug: { ar: 'تصحيح', en: 'Debug' },
    
    // Notification Channel Configuration
    emailConfiguration: { ar: 'إعدادات البريد الإلكتروني', en: 'Email Configuration' },
    emailConfigurationDescription: { ar: 'قم بتكوين إعدادات SMTP لإرسال الإشعارات عبر البريد الإلكتروني', en: 'Configure SMTP settings to send notifications via email' },
    smsConfiguration: { ar: 'إعدادات الرسائل النصية', en: 'SMS Configuration' },
    smsConfigurationDescription: { ar: 'قم بتكوين مزود SMS لإرسال الإشعارات عبر الرسائل النصية', en: 'Configure SMS provider to send notifications via SMS' },
    pushConfiguration: { ar: 'إعدادات الإشعارات الفورية', en: 'Push Notification Configuration' },
    pushConfigurationDescription: { ar: 'قم بتكوين خدمة الإشعارات الفورية لإرسال الإشعارات إلى الأجهزة المحمولة', en: 'Configure push notification service to send notifications to mobile devices' },
    whatsappConfiguration: { ar: 'إعدادات واتساب', en: 'WhatsApp Configuration' },
    whatsappConfigurationDescription: { ar: 'قم بتكوين واتساب لإرسال الإشعارات عبر واتساب', en: 'Configure WhatsApp to send notifications via WhatsApp' },
    enableEmailNotifications: { ar: 'تفعيل إشعارات البريد الإلكتروني', en: 'Enable Email Notifications' },
    enableSMSNotifications: { ar: 'تفعيل إشعارات الرسائل النصية', en: 'Enable SMS Notifications' },
    enablePushNotifications: { ar: 'تفعيل الإشعارات الفورية', en: 'Enable Push Notifications' },
    enableWhatsAppNotifications: { ar: 'تفعيل إشعارات واتساب', en: 'Enable WhatsApp Notifications' },
    smtpHost: { ar: 'خادم SMTP', en: 'SMTP Host' },
    smtpPort: { ar: 'منفذ SMTP', en: 'SMTP Port' },
    smtpUsername: { ar: 'اسم مستخدم SMTP', en: 'SMTP Username' },
    smtpPassword: { ar: 'كلمة مرور SMTP', en: 'SMTP Password' },
    fromEmail: { ar: 'البريد الإلكتروني المرسل', en: 'From Email' },
    fromName: { ar: 'اسم المرسل', en: 'From Name' },
    useSecureConnection: { ar: 'استخدام اتصال آمن', en: 'Use Secure Connection' },
    smtpHostRequired: { ar: 'خادم SMTP مطلوب', en: 'SMTP host is required' },
    smtpPortRequired: { ar: 'منفذ SMTP مطلوب', en: 'SMTP port is required' },
    smtpUsernameRequired: { ar: 'اسم مستخدم SMTP مطلوب', en: 'SMTP username is required' },
    smtpPasswordRequired: { ar: 'كلمة مرور SMTP مطلوبة', en: 'SMTP password is required' },
    fromEmailRequired: { ar: 'البريد الإلكتروني المرسل مطلوب', en: 'From email is required' },
    fromNameRequired: { ar: 'اسم المرسل مطلوب', en: 'From name is required' },
    smsProvider: { ar: 'مزود SMS', en: 'SMS Provider' },
    pushProvider: { ar: 'مزود الإشعارات الفورية', en: 'Push Provider' },
    whatsappProvider: { ar: 'مزود واتساب', en: 'WhatsApp Provider' },
    selectProvider: { ar: 'اختر المزود', en: 'Select Provider' },
    apiKey: { ar: 'مفتاح API', en: 'API Key' },
    apiSecret: { ar: 'سر API', en: 'API Secret' },
    senderId: { ar: 'معرف المرسل', en: 'Sender ID' },
    serverKey: { ar: 'مفتاح الخادم', en: 'Server Key' },
    projectId: { ar: 'معرف المشروع', en: 'Project ID' },
    serviceAccount: { ar: 'حساب الخدمة', en: 'Service Account' },
    phoneNumberId: { ar: 'معرف رقم الهاتف', en: 'Phone Number ID' },
    businessAccountId: { ar: 'معرف حساب الأعمال', en: 'Business Account ID' },
    smsProviderRequired: { ar: 'مزود SMS مطلوب', en: 'SMS provider is required' },
    pushProviderRequired: { ar: 'مزود الإشعارات الفورية مطلوب', en: 'Push provider is required' },
    whatsappProviderRequired: { ar: 'مزود واتساب مطلوب', en: 'WhatsApp provider is required' },
    apiKeyRequired: { ar: 'مفتاح API مطلوب', en: 'API key is required' },
    apiSecretRequired: { ar: 'سر API مطلوب', en: 'API secret is required' },
    senderIdRequired: { ar: 'معرف المرسل مطلوب', en: 'Sender ID is required' },
    serverKeyRequired: { ar: 'مفتاح الخادم مطلوب', en: 'Server key is required' },
    projectIdRequired: { ar: 'معرف المشروع مطلوب', en: 'Project ID is required' },
    phoneNumberIdRequired: { ar: 'معرف رقم الهاتف مطلوب', en: 'Phone number ID is required' },
    businessAccountIdRequired: { ar: 'معرف حساب الأعمال مطلوب', en: 'Business account ID is required' },
    serviceAccountPlaceholder: { ar: 'أدخل JSON لحساب الخدمة (اختياري)', en: 'Enter service account JSON (optional)' },
    testConfiguration: { ar: 'اختبار الإعدادات', en: 'Test Configuration' },
    saveConfiguration: { ar: 'حفظ الإعدادات', en: 'Save Configuration' },
    configurationSaved: { ar: 'تم حفظ الإعدادات بنجاح', en: 'Configuration saved successfully' },
    errorSavingConfiguration: { ar: 'خطأ في حفظ الإعدادات', en: 'Error saving configuration' },
    errorTestingConfiguration: { ar: 'خطأ في اختبار الإعدادات', en: 'Error testing configuration' },
    other: { ar: 'أخرى', en: 'Other' },
    cloudStorage: { ar: 'التخزين السحابي', en: 'Cloud Storage' },
    cloudStorageConfiguration: { ar: 'إعدادات التخزين السحابي', en: 'Cloud Storage Configuration' },
    cloudStorageConfigurationDescription: { ar: 'قم بتكوين مزود التخزين السحابي لرفع الملفات (الصور، الفيديو، العروض التقديمية، المستندات)', en: 'Configure cloud storage provider for file uploads (images, videos, presentations, documents)' },
    enableCloudStorage: { ar: 'تفعيل التخزين السحابي', en: 'Enable Cloud Storage' },
    cloudStorageProvider: { ar: 'مزود التخزين السحابي', en: 'Cloud Storage Provider' },
    cloudStorageProviderRequired: { ar: 'مزود التخزين السحابي مطلوب', en: 'Cloud storage provider is required' },
    localStorage: { ar: 'التخزين المحلي', en: 'Local Storage' },
    awsS3Configuration: { ar: 'إعدادات AWS S3', en: 'AWS S3 Configuration' },
    awsAccessKeyId: { ar: 'معرف مفتاح الوصول AWS', en: 'AWS Access Key ID' },
    awsSecretAccessKey: { ar: 'مفتاح الوصول السري AWS', en: 'AWS Secret Access Key' },
    awsRegion: { ar: 'منطقة AWS', en: 'AWS Region' },
    awsBucket: { ar: 'دلو AWS', en: 'AWS Bucket' },
    googleCloudStorageConfiguration: { ar: 'إعدادات Google Cloud Storage', en: 'Google Cloud Storage Configuration' },
    gcsProjectId: { ar: 'معرف المشروع GCS', en: 'GCS Project ID' },
    gcsBucket: { ar: 'دلو GCS', en: 'GCS Bucket' },
    gcsKeyFile: { ar: 'ملف المفتاح GCS', en: 'GCS Key File' },
    gcsKeyFilePlaceholder: { ar: 'الصق محتوى ملف المفتاح JSON هنا', en: 'Paste JSON key file content here' },
    azureBlobStorageConfiguration: { ar: 'إعدادات Azure Blob Storage', en: 'Azure Blob Storage Configuration' },
    azureAccountName: { ar: 'اسم حساب Azure', en: 'Azure Account Name' },
    azureAccountKey: { ar: 'مفتاح حساب Azure', en: 'Azure Account Key' },
    azureContainer: { ar: 'حاوية Azure', en: 'Azure Container' },
    azureAuthMethod: { ar: 'طريقة المصادقة', en: 'Authentication Method' },
    azureAccountKeyAuth: { ar: 'مفتاح الحساب', en: 'Account Key' },
    azureADAuth: { ar: 'Azure AD', en: 'Azure AD' },
    azureClientId: { ar: 'معرف العميل (Client ID)', en: 'Client ID' },
    azureTenantId: { ar: 'معرف المستأجر (Tenant ID)', en: 'Tenant ID' },
    azureClientSecret: { ar: 'سر العميل', en: 'Client Secret' },
    azureClientSecretHint: { ar: 'قم بإنشاء سر العميل من Azure Portal > App Registrations > Certificates & secrets', en: 'Create client secret from Azure Portal > App Registrations > Certificates & secrets' },
    localStorageConfiguration: { ar: 'إعدادات التخزين المحلي', en: 'Local Storage Configuration' },
    localUploadPath: { ar: 'مسار التحميل المحلي', en: 'Local Upload Path' },
    baseUrl: { ar: 'عنوان URL الأساسي', en: 'Base URL' },
    
    // Header specific
    toggleMenu: { ar: 'تبديل القائمة', en: 'Toggle Menu' },
    switchLanguage: { ar: 'تبديل اللغة', en: 'Switch Language' },
    recentNotifications: { ar: 'إشعارات حديثة', en: 'Recent Notifications' },
    viewAllNotifications: { ar: 'عرض جميع الإشعارات', en: 'View All Notifications' },
    userProfile: { ar: 'الملف الشخصي', en: 'User Profile' },
    profile: { ar: 'الملف الشخصي', en: 'Profile' },
    settings: { ar: 'الإعدادات', en: 'Settings' },
    logout: { ar: 'تسجيل الخروج', en: 'Logout' },
    
    // e Notices and Evaluation
    eNoticesAndEvaluation: { ar: 'الإشعارات الإلكترونية والتقييم', en: 'e Notices and Evaluation' },
    
    // Display Ads
    displayAds: { ar: 'الإعلانات المعروضة', en: 'Display Ads' },
    
    // Subsites
    subsites: { ar: 'المواقع الفرعية', en: 'Subsites' },
    
    // Notification Form
    nothingSelected: { ar: 'لا يوجد اختيار', en: 'Nothing Selected' },
    schedulingDate: { ar: 'تاريخ الجدولة', en: 'Scheduling Date' },
    schedulingTime: { ar: 'وقت الجدولة', en: 'Scheduling Time' },
    sendToAll: { ar: 'إرسال للجميع', en: 'Send to all' },
    notificationContent: { ar: 'محتوى الإشعار', en: 'Notification Content' },
    enterNotificationContent: { ar: 'أدخل محتوى الإشعار هنا...', en: 'Enter notification content here...' },
    important: { ar: 'مهم', en: 'Important' },
    section: { ar: 'القسم', en: 'Section' },
    assessmentManagement: { ar: 'إدارة التقييم', en: 'Assessment Management' },
    enterData: { ar: 'أدخل البيانات', en: 'Enter Data' },
    noRatings: { ar: 'لا توجد تقييمات', en: 'No Ratings' },
    clickToViewRatings: { ar: 'انقر لعرض التقييمات', en: 'Click to view ratings' },
    viewRatings: { ar: 'عرض التقييمات', en: 'View Ratings' },
    duplicate: { ar: 'تكرار', en: 'Duplicate' },
    first: { ar: 'الأول', en: 'First' },
    last: { ar: 'الأخير', en: 'Last' },
    
    // User Management
    configureUserAccountsAndPermissions: { ar: 'تكوين حسابات المستخدمين والصلاحيات', en: 'Configure User Accounts and Permissions' },
    modifiedSuccessfully: { ar: 'تم التعديل بنجاح', en: 'Modified successfully' },
    username: { ar: 'اسم المستخدم', en: 'Username' },
    phone1: { ar: 'رقم الهاتف 1', en: 'Phone 1' },
    phone2: { ar: 'رقم الهاتف 2', en: 'Phone 2' },
    enterUsername: { ar: 'أدخل اسم المستخدم', en: 'Enter username' },
    enterPhone1: { ar: 'أدخل رقم الهاتف 1', en: 'Enter phone 1' },
    enterSubMobileNo: { ar: 'أدخل رقم الهاتف الفرعي', en: 'Enter sub-mobile no' },
    selectSubsite: { ar: 'اختر الموقع الفرعي', en: 'Select subsite' },
    selectSection: { ar: 'اختر القسم', en: 'Select section' },
    selectSpecialDivision: { ar: 'اختر القسم الخاص', en: 'Select special division' },
    selectType: { ar: 'اختر النوع', en: 'Select type' },
    selectValidity: { ar: 'اختر الصلاحية', en: 'Select validity' },
    enterNotes: { ar: 'أدخل الملاحظات', en: 'Enter notes' },
    mainBranch: { ar: 'الفرع الرئيسي', en: 'Main Branch' },
    northBranch: { ar: 'الفرع الشمالي', en: 'North Branch' },
    eastBranch: { ar: 'الفرع الشرقي', en: 'East Branch' },
    corporateServices: { ar: 'الخدمات المالية', en: 'Corporate Services' },
    itDepartment: { ar: 'القسم التقني', en: 'IT Department' },
    hrDepartment: { ar: 'القسم الموارد البشرية', en: 'HR Department' },
    staff: { ar: 'الموظفون', en: 'Staff' },
    management: { ar: 'الإدارة', en: 'Management' },
    technical: { ar: 'التقني', en: 'Technical' },
    regularUser: { ar: 'المستخدم العادي', en: 'Regular User' },
    superUser: { ar: 'المستخدم المطور', en: 'Super User' },
    supervisor: { ar: 'المشرف', en: 'Supervisor' },
    coordinator: { ar: 'المنظم', en: 'Coordinator' },
    accountsAndAuthorizations: { ar: 'حسابات والصلاحيات', en: 'Accounts and Authorizations' },
    authorityToAddModifyAccounts: { ar: 'السلطة لإضافة وتعديل الحسابات', en: 'Authority to add and modify accounts' },
    authorityToViewAccounts: { ar: 'السلطة لعرض الحسابات', en: 'Authority to view accounts' },
    authorityToDeleteAccounts: { ar: 'السلطة لحذف الحسابات', en: 'Authority to delete accounts' },
    authorityToAddModifyAds: { ar: 'السلطة لإضافة وتعديل الإعلانات', en: 'Authority to add and modify ads' },
    authorityToDisplayAds: { ar: 'السلطة لعرض الإعلانات', en: 'Authority to display ads' },
    authorityToDeleteAds: { ar: 'السلطة لحذف الإعلانات', en: 'Authority to delete ads' },
    permissionToAddModifySites: { ar: 'الصلاحية لإضافة وتعديل المواقع', en: 'Permission to add and modify sites' },
    permissionToViewSites: { ar: 'الصلاحية لعرض المواقع', en: 'Permission to view sites' },
    permissionToDeleteSites: { ar: 'الصلاحية لحذف المواقع', en: 'Permission to delete sites' },
    otherPowers: { ar: 'الصلاحيات الأخرى', en: 'Other Powers' },
    notificationSendingPermission: { ar: 'الصلاحية لإرسال الإشعارات', en: 'Permission to send notifications' },
    notificationViewingPermission: { ar: 'الصلاحية لعرض الإشعارات', en: 'Permission to view notifications' },
    notificationDeletionPermission: { ar: 'الصلاحية لحذف الإشعارات', en: 'Permission to delete notifications' },
    editUser: { ar: 'تعديل المستخدم', en: 'Edit User' },
    showUserList: { ar: 'عرض قائمة المستخدمين', en: 'Show User List' },
    cancelAndShowList: { ar: 'إلغاء التعديل وعرض القائمة', en: 'Cancel and show list' },
    showing: { ar: 'عرض', en: 'Showing' },
    of: { ar: 'من', en: 'of' },
    itemsPerPage: { ar: 'عناصر في الصفحة', en: 'Items per page' },
    // Common form fields
    enterLocation: { ar: 'أدخل الموقع', en: 'Enter Location' },
    locationRequired: { ar: 'الموقع مطلوب', en: 'Location is required' },
    searchSections: { ar: 'البحث في الأقسام...', en: 'Search sections...' },
   // tryAdjustingFilters: { ar: 'جرب تعديل الفلاتر', en: 'Try adjusting filters' },
    //descriptionRequired: { ar: 'الوصف مطلوب', en: 'Description is required' },
    
    // Screens specific
    screens: { ar: 'الشاشات', en: 'Screens' },
    networkScanning: { ar: 'فحص الشبكة', en: 'Network Scanning' },
    screenManagement: { ar: 'إدارة الشاشات', en: 'Screen Management' },
    startScan: { ar: 'بدء الفحص', en: 'Start Scan' },
    scanning: { ar: 'جاري الفحص...', en: 'Scanning...' },
    scanningNetwork: { ar: 'جارٍ فحص الشبكة', en: 'Scanning Network' },
    scanningDescription: { ar: 'جارٍ البحث عن أجهزة Android TV على الشبكة', en: 'Searching for Android TV devices on the network' },
    discoveredDevices: { ar: 'الأجهزة المكتشفة', en: 'Discovered Devices' },
    noDevicesFound: { ar: 'لم يتم العثور على أجهزة', en: 'No devices found' },
    searchDevices: { ar: 'البحث في الأجهزة...', en: 'Search devices...' },
    register: { ar: 'تسجيل', en: 'Register' },
    registered: { ar: 'مسجل', en: 'Registered' },
    registerScreen: { ar: 'تسجيل الشاشة', en: 'Register Screen' },
    screenName: { ar: 'اسم الشاشة', en: 'Screen Name' },
    enterScreenName: { ar: 'أدخل اسم الشاشة', en: 'Enter screen name' },
    screenNameRequired: { ar: 'اسم الشاشة مطلوب', en: 'Screen name is required' },
    ipAddress: { ar: 'عنوان IP', en: 'IP Address' },
    macAddress: { ar: 'عنوان MAC', en: 'MAC Address' },
    lastSeen: { ar: 'آخر ظهور', en: 'Last Seen' },
    online: { ar: 'متصل', en: 'Online' },
    offline: { ar: 'غير متصل', en: 'Offline' },
    deviceInfo: { ar: 'معلومات الجهاز', en: 'Device Information' },
    screenRegisteredSuccessfully: { ar: 'تم تسجيل الشاشة بنجاح!', en: 'Screen registered successfully!' },
    comingSoon: { ar: 'قريباً', en: 'Coming Soon' },
    screenDashboard: { ar: 'لوحة تحكم الشاشات', en: 'Screen Dashboard' },
    screenList: { ar: 'قائمة الشاشات', en: 'Screen List' },
    screenGrouping: { ar: 'تجميع الشاشات', en: 'Screen Grouping' },
    createScreen: { ar: 'إنشاء شاشة', en: 'Create Screen' },
    addManualScreen: { ar: 'إضافة شاشة يدوياً', en: 'Add Manual Screen' },
    editScreen: { ar: 'تعديل الشاشة', en: 'Edit Screen' },
    screenCreatedSuccessfully: { ar: 'تم إنشاء الشاشة بنجاح', en: 'Screen created successfully' },
    screenUpdatedSuccessfully: { ar: 'تم تحديث الشاشة بنجاح', en: 'Screen updated successfully' },
    screenDeletedSuccessfully: { ar: 'تم حذف الشاشة بنجاح', en: 'Screen deleted successfully' },
    confirmDeleteScreen: { ar: 'هل أنت متأكد من حذف هذه الشاشة؟', en: 'Are you sure you want to delete this screen?' },
    resetScreen: { ar: 'إعادة تعيين الشاشة', en: 'Reset screen' },
    confirmResetScreen: { ar: 'إعادة تعيين هذه الشاشة؟ سيتم مسح جميع الجداول والإعلانات والمناطق المعينة. سيتم إنشاء منطقة واحدة ملء الشاشة. يساعد ذلك في منع تشغيل الفيديو الوهمي.', en: 'Reset this screen? All schedules, ad assignments, and regions will be cleared. A single full-screen region will be recreated. This helps prevent ghost video playback.' },
    screenResetSuccessfully: { ar: 'تم إعادة تعيين الشاشة بنجاح.', en: 'Screen reset successfully.' },
    resetScreenHelp: { ar: 'مسح جميع الجداول والإعلانات والمناطق لهذه الشاشة لمنع التشغيل الوهمي', en: 'Clear all schedules, ad assignments, and regions for this screen to prevent ghost playback' },
    totalScreens: { ar: 'إجمالي الشاشات', en: 'Total Screens' },
    onlineScreens: { ar: 'الشاشات المتصلة', en: 'Online Screens' },
    offlineScreens: { ar: 'الشاشات غير المتصلة', en: 'Offline Screens' },
    playingScreens: { ar: 'الشاشات قيد التشغيل', en: 'Playing Screens' },
    quickActions: { ar: 'إجراءات سريعة', en: 'Quick Actions' },
    scanNetwork: { ar: 'فحص الشبكة', en: 'Scan Network' },
    viewAllScreens: { ar: 'عرض جميع الشاشات', en: 'View All Screens' },
    manageGroups: { ar: 'إدارة المجموعات', en: 'Manage Groups' },
    backToList: { ar: 'العودة إلى القائمة', en: 'Back to List' },
    registeredScreens: { ar: 'الشاشات المسجلة', en: 'Registered Screens' },
    noScreensFound: { ar: 'لم يتم العثور على شاشات', en: 'No screens found' },
    screenGroup: { ar: 'مجموعة الشاشات', en: 'Screen Group' },
    group: { ar: 'المجموعة', en: 'Group' },
    createGroup: { ar: 'إنشاء مجموعة', en: 'Create Group' },
    groupName: { ar: 'اسم المجموعة', en: 'Group Name' },
    enterGroupName: { ar: 'أدخل اسم المجموعة', en: 'Enter group name' },
    confirmDeleteGroup: { ar: 'هل أنت متأكد من حذف هذه المجموعة؟', en: 'Are you sure you want to delete this group?' },
    locationAssignment: { ar: 'تعيين الموقع', en: 'Location Assignment' },
    userAssignment: { ar: 'تعيين المستخدم', en: 'User Assignment' },
    assignedUser: { ar: 'المستخدم المعين', en: 'Assigned User' },
    selectAdvertisements: { ar: 'اختر الإعلانات', en: 'Select Advertisements' },
    schedule: { ar: 'الجدولة', en: 'Schedule' },
    startTime: { ar: 'وقت البدء', en: 'Start Time' },
    endTime: { ar: 'وقت الانتهاء', en: 'End Time' },
    basicInformation: { ar: 'المعلومات الأساسية', en: 'Basic Information' },
    noGroupsAvailable: { ar: 'لا توجد مجموعات متاحة', en: 'No groups available' },
    noScreensAvailable: { ar: 'لا توجد شاشات متاحة', en: 'No screens available' },
    noSubsitesAvailable: { ar: 'لا توجد مواقع فرعية متاحة', en: 'No subsites available' },
    noSectionsAvailable: { ar: 'لا توجد أقسام متاحة', en: 'No sections available' },
    noSpecialDivisionsAvailable: { ar: 'لا توجد أقسام خاصة متاحة', en: 'No special divisions available' },
    noUsersAvailable: { ar: 'لا يوجد مستخدمون متاحون', en: 'No users available' },
    noAdvertisementsAvailable: { ar: 'لا توجد إعلانات متاحة', en: 'No advertisements available' },
    selected: { ar: 'محدد', en: 'selected' },
    availableScreens: { ar: 'الشاشات المتاحة', en: 'Available Screens' },
    dragScreensHere: { ar: 'اسحب الشاشات هنا', en: 'Drag screens here' },
    noGroupsCreated: { ar: 'لم يتم إنشاء مجموعات بعد', en: 'No groups created yet' },
    update: { ar: 'تحديث', en: 'Update' },
    create: { ar: 'إنشاء', en: 'Create' },
    
    // Screen Monitor & Playback
    screenMonitor: { ar: 'مراقب الشاشات', en: 'Screen Monitor' },
    monitorAndControlScreens: { ar: 'راقب و تحكم في جميع شاشاتك في الوقت الفعلي', en: 'Monitor and control all your screens in real-time' },
    selectScreenToMonitor: { ar: 'اختر شاشة', en: 'Select a Screen' },
    selectScreenFromLeft: { ar: 'اختر شاشة من اللوحة اليسرى لعرض حالتها والتحكم في التشغيل', en: 'Select a screen from the left panel to view its status and control playback' },
    currentlyPlaying: { ar: 'قيد التشغيل حالياً', en: 'Currently Playing' },
    noVideoPlaying: { ar: 'لا يوجد فيديو قيد التشغيل حالياً', en: 'No video is currently playing' },
    unknownVideo: { ar: 'فيديو غير معروف', en: 'Unknown Video' },
    playbackControls: { ar: 'أدوات التحكم في التشغيل', en: 'Playback Controls' },
    play: { ar: 'تشغيل', en: 'Play' },
    playFullScreen: { ar: 'تشغيل ملء الشاشة', en: 'Play Full Screen' },
    stop: { ar: 'إيقاف', en: 'Stop' },
    pause: { ar: 'إيقاف مؤقت', en: 'Pause' },
    resume: { ar: 'استئناف', en: 'Resume' },
    fullscreen: { ar: 'ملء الشاشة', en: 'Full Screen' },
    exitFullscreen: { ar: 'الخروج من ملء الشاشة', en: 'Exit Full Screen' },
    screenDetails: { ar: 'تفاصيل الشاشة', en: 'Screen Details' },
    lastConnected: { ar: 'آخر اتصال', en: 'Last Connected' },
    videoUrl: { ar: 'رابط الفيديو', en: 'Video URL' },
    startedAt: { ar: 'بدأ في', en: 'Started At' },
    pausedAt: { ar: 'تم الإيقاف المؤقت في', en: 'Paused At' },
    playing: { ar: 'قيد التشغيل', en: 'Playing' },
    paused: { ar: 'متوقف مؤقتاً', en: 'Paused' },
    videoPlaybackControl: { ar: 'التحكم في تشغيل الفيديو', en: 'Video Playback Control' },
    controlVideoPlayback: { ar: 'التحكم في تشغيل الفيديو على شاشاتك', en: 'Control video playback on your screens' },
    selectScreen: { ar: 'اختر الشاشة', en: 'Select Screen' },
    deviceId: { ar: 'معرف الجهاز', en: 'Device ID' },
    groupInformation: { ar: 'معلومات المجموعة', en: 'Group Information' },
    noGroupAssigned: { ar: 'لم يتم تعيين مجموعة', en: 'No group assigned' },
    locationInformation: { ar: 'معلومات الموقع', en: 'Location Information' },
    noLocationAssigned: { ar: 'لم يتم تعيين موقع', en: 'No location assigned' },
    assignedUsers: { ar: 'المستخدمون المعينون', en: 'Assigned Users' },
    noUserAssigned: { ar: 'لم يتم تعيين مستخدم', en: 'No user assigned' },
    noScheduleSet: { ar: 'لم يتم تعيين جدول', en: 'No schedule set' },
    displaySettings: { ar: 'إعدادات العرض', en: 'Display Settings' },
    orientation: { ar: 'الاتجاه', en: 'Orientation' },
    screenSize: { ar: 'حجم الشاشة', en: 'Screen Size' },
    landscape: { ar: 'أفقي', en: 'Landscape' },
    portrait: { ar: 'عمودي', en: 'Portrait' },
    auto: { ar: 'تلقائي', en: 'Auto' },
    small: { ar: 'صغير', en: 'Small' },
    large: { ar: 'كبير', en: 'Large' },
    custom: { ar: 'مخصص', en: 'Custom' },
    screenWidth: { ar: 'عرض الشاشة (بكسل)', en: 'Screen Width (px)' },
    screenHeight: { ar: 'ارتفاع الشاشة (بكسل)', en: 'Screen Height (px)' },
    enterCustomDimensions: { ar: 'أدخل أبعاد الشاشة المخصصة بالبكسل (مثال: 1024 × 245)', en: 'Enter custom screen dimensions in pixels (e.g., 1024 x 245)' },
    assignedAdvertisements: { ar: 'الإعلانات المعينة', en: 'Assigned Advertisements' },
    assignedPlaylistHint: {
      ar: 'اسحب البطاقات لترتيب التشغيل. حدد مدة كل شريحة بالثواني ثم احفظ.',
      en: 'Drag cards to set playback order. Set seconds per slide, then save.'
    },
    saveOrderAndTiming: { ar: 'حفظ الترتيب والتوقيت', en: 'Save order & slide timing' },
    slideDurationSec: { ar: 'مدة الشريحة (ثانية)', en: 'Slide duration (sec)' },
    playlistSaved: { ar: 'تم حفظ الترتيب وتوقيت الشرائح', en: 'Order and slide timing saved' },
    assigned: { ar: 'معين', en: 'Assigned' },
    View: { ar: 'عرض', en: 'View' },
    screenSettings: { ar: 'إعدادات الشاشة', en: 'Screen Settings' },
    advertisementDetails: { ar: 'تفاصيل الإعلان', en: 'Advertisement Details' },
    fileName: { ar: 'اسم الملف', en: 'File Name' },
    fileSize: { ar: 'حجم الملف', en: 'File Size' },
    mimeType: { ar: 'نوع MIME', en: 'MIME Type' },
    thumbnail: { ar: 'الصورة المصغرة', en: 'Thumbnail' },
    playOnScreen: { ar: 'تشغيل على الشاشة', en: 'Play on Screen' },
    selectAdvertisement: { ar: 'يرجى اختيار إعلان', en: 'Please select an advertisement' },
    videoPlaying: { ar: 'الفيديو قيد التشغيل', en: 'Video is playing' },
    playVideoFailed: { ar: 'فشل تشغيل الفيديو', en: 'Failed to play video' },
    videoPaused: { ar: 'تم إيقاف الفيديو مؤقتاً', en: 'Video is paused' },
    pauseVideoFailed: { ar: 'فشل إيقاف الفيديو مؤقتاً', en: 'Failed to pause video' },
    videoResumed: { ar: 'تم استئناف الفيديو', en: 'Video is resumed' },
    resumeVideoFailed: { ar: 'فشل استئناف الفيديو', en: 'Failed to resume video' },
    confirmStopVideo: { ar: 'إيقاف الفيديو', en: 'Stop Video' },
    confirmStopVideoMessage: { ar: 'هل أنت متأكد من إيقاف الفيديو؟', en: 'Are you sure you want to stop the video?' },
    videoStopped: { ar: 'تم إيقاف الفيديو', en: 'Video is stopped' },
    stopVideoFailed: { ar: 'فشل إيقاف الفيديو', en: 'Failed to stop video' },
    settingsUpdated: { ar: 'تم تحديث إعدادات الشاشة بنجاح', en: 'Screen settings updated successfully' },
    ipUpdated: { ar: 'تم تحديث عنوان IP. افتح المشغل على نفس العنوان للاتصال.', en: 'IP address updated. Open the player at the same IP to connect.' },
    setIpForLocalTest: { ar: 'تعيين IP للاختبار المحلي', en: 'Set IP for local test' },
    updateIp: { ar: 'تحديث IP', en: 'Update IP' },
    errorLoadingScreens: { ar: 'خطأ في تحميل الشاشات', en: 'Error loading screens' },
    noVideoAvailable: { ar: 'لا يوجد فيديو متاح للتشغيل', en: 'No video available to play' },
    fullscreenNotImplemented: { ar: 'ميزة ملء الشاشة غير متاحة بعد', en: 'Fullscreen feature not yet implemented' },
    more: { ar: 'المزيد', en: 'more' },
    
    // Login/Auth specific
    appTitle: { ar: 'منصة الأوقاف', en: 'Waqf Platform' },
    appSubtitle: { ar: 'نظام إدارة الأوقاف الشامل', en: 'Comprehensive Waqf Management System' },
    loginTitle: { ar: 'تسجيل الدخول', en: 'Login' },
    loginSubtitle: { ar: 'أدخل بياناتك للوصول إلى النظام', en: 'Enter your credentials to access the system' },
    rememberMe: { ar: 'تذكرني', en: 'Remember me' },
    forgotPassword: { ar: 'نسيت كلمة المرور؟', en: 'Forgot password?' },
    loginButton: { ar: 'تسجيل الدخول', en: 'Login' },
    loginError: { ar: 'خطأ في تسجيل الدخول. يرجى التحقق من اسم المستخدم وكلمة المرور.', en: 'Login error. Please check your username and password.' },
    fieldRequired: { ar: 'هذا الحقل مطلوب', en: 'This field is required' },
    verificationCode: { ar: 'رمز التحقق', en: 'Verification Code' },
    verifyButton: { ar: 'تحقق', en: 'Verify' },
    scanQrWithAuthenticator: { ar: 'امسح رمز QR باستخدام تطبيق المصادقة', en: 'Scan this QR with your Authenticator app' },
    twoFactorSetupCodeLabel: { ar: 'رمز مكون من 6 أرقام (لتفعيل التحقق بخطوتين)', en: '6-digit code (to enable 2FA)' },
    verifyAndEnable2fa: { ar: 'تحقق وتفعيل التحقق بخطوتين', en: 'Verify & Enable 2FA' },
    demoCredentials: { ar: 'بيانات تجريبية:', en: 'Demo Credentials:' },
    copyright: { ar: '© 2024 منصة الأوقاف. جميع الحقوق محفوظة.', en: '© All rights reserved.' },
    
    // Screen Regions & Schedules - Additional keys
    clickAndDragToSelect: { ar: 'انقر واسحب لتحديد منطقة', en: 'Click and drag to select an area' },
    saveRegion: { ar: 'حفظ المنطقة المحددة', en: 'Save Selected Region' },
    createdRegions: { ar: 'المناطق المُنشأة', en: 'Created Regions' },
    regionCreated: { ar: 'تم إنشاء المنطقة بنجاح', en: 'Region created successfully' },
    regionTooSmall: { ar: 'المنطقة صغيرة جداً. يرجى تحديد منطقة أكبر.', en: 'Region is too small. Please select a larger area.' },
    confirmDeleteRegion: { ar: 'هل أنت متأكد من حذف هذه المنطقة؟', en: 'Are you sure you want to delete this region?' },
    regionDeleted: { ar: 'تم حذف المنطقة بنجاح', en: 'Region deleted successfully' },
    errorDeletingRegion: { ar: 'خطأ في حذف المنطقة', en: 'Error deleting region' },
    confirmResetRegions: { ar: 'هل أنت متأكد من حذف جميع المناطق؟ لا يمكن التراجع عن هذا الإجراء.', en: 'Are you sure you want to delete all regions? This action cannot be undone.' },
    regionsReset: { ar: 'تم إعادة تعيين جميع المناطق', en: 'All regions have been reset' },
    resetRegions: { ar: 'إعادة تعيين المناطق', en: 'Reset All Regions' },
    editRegions: { ar: 'تعديل المناطق', en: 'Edit Regions' },
    hideEditor: { ar: 'إخفاء المحرر', en: 'Hide Editor' },
    howToUse: { ar: 'كيفية الاستخدام:', en: 'How to use:' },
    instruction1: { ar: 'انقر واسحب على معاينة الشاشة أدناه لتحديد منطقة مخصصة', en: 'Click and drag on the screen preview below to select a custom area' },
    instruction2: { ar: 'أو استخدم أزرار التقسيم السريع (يسار/يمين أو أعلى/أسفل) لتقسيم الشاشة تلقائياً', en: 'OR use the quick split buttons (Left/Right or Top/Bottom) to divide the screen automatically' },
    instruction3: { ar: 'انقر على "حفظ المنطقة المحددة" بعد تحديد منطقة', en: 'Click "Save Selected Region" after selecting an area' },
    orUseQuickSplit: { ar: 'أو استخدم أزرار التقسيم السريع أدناه', en: 'or use quick split buttons below' },
    regionSelected: { ar: 'تم تحديد المنطقة!', en: 'Region selected!' },
    clickSaveToCreate: { ar: 'انقر على زر "حفظ المنطقة المحددة" أدناه', en: 'Click "Save Selected Region" button below' },
    resizeLeft: { ar: 'تغيير حجم اليسار', en: 'Resize Left' },
    resizeRight: { ar: 'تغيير حجم اليمين', en: 'Resize Right' },
    resizeTop: { ar: 'تغيير حجم الأعلى', en: 'Resize Top' },
    resizeBottom: { ar: 'تغيير حجم الأسفل', en: 'Resize Bottom' },
    resizeTopLeft: { ar: 'تغيير حجم الأعلى-اليسار', en: 'Resize Top-Left' },
    resizeTopRight: { ar: 'تغيير حجم الأعلى-اليمين', en: 'Resize Top-Right' },
    resizeBottomLeft: { ar: 'تغيير حجم الأسفل-اليسار', en: 'Resize Bottom-Left' },
    resizeBottomRight: { ar: 'تغيير حجم الأسفل-اليمين', en: 'Resize Bottom-Right' },
    regionUpdated: { ar: 'تم تحديث المنطقة بنجاح', en: 'Region updated successfully' },
    errorUpdatingRegion: { ar: 'خطأ في تحديث المنطقة', en: 'Error updating region' },
    saveAllRegions: { ar: 'إنشاء جميع المناطق', en: 'Create All Regions' },
    clearSelections: { ar: 'مسح الكل', en: 'Clear All' },
    noSelectionsToSave: { ar: 'لا توجد مناطق محددة للحفظ', en: 'No regions selected. Please select at least one region.' },
    regionsSelected: { ar: 'منطقة محددة', en: 'region(s) selected' },
    selectGridLayout: { ar: 'اختر تخطيط الشبكة:', en: 'Select Grid Layout:' },
    gridLayoutHint: { ar: 'اختر كيفية تقسيم الشاشة إلى مناطق', en: 'Choose how to divide your screen into regions' },
    creatingRegions: { ar: 'جارٍ إنشاء المناطق...', en: 'Creating regions...' },
    // Group layout / By Group
    groupLayout: { ar: 'تخطيط المجموعة', en: 'Group Layout' },
    selectGroup: { ar: 'اختر المجموعة', en: 'Select Group' },
    screensInGroup: { ar: 'الشاشات في هذه المجموعة', en: 'Screens in this group' },
    noScreensInGroup: { ar: 'لا توجد شاشات في هذه المجموعة.', en: 'No screens in this group.' },
    noAdvertisementsAssigned: { ar: 'لا توجد إعلانات معينة لهذه الشاشة. عيّن وضبط الإعلانات في "حسب الشاشة" ثم طبّق على هذه المجموعة.', en: 'No advertisements assigned to this screen. Assign and configure ads in By Screen, then apply to this group.' },
    selectRegion: { ar: 'اختر المنطقة', en: 'Select region' },
    applyToGroupHelp: { ar: 'عندما يكون التخطيط والإعلانات والإعدادات جاهزة، طبّق على جميع الشاشات في هذه المجموعة.', en: 'When layout, ads and settings are ready, apply to all screens in this group.' },
    applyToGroup: { ar: 'تطبيق على هذه المجموعة', en: 'Apply to this group' },
    remove: { ar: 'إزالة', en: 'Remove' },
    advertisementRemoved: { ar: 'تمت إزالة الإعلان', en: 'Advertisement removed' },
    adsSaved: { ar: 'تم حفظ الإعلانات', en: 'Advertisements saved' },
    settingsSaved: { ar: 'تم حفظ الإعدادات', en: 'Settings saved' },
    byScreen: { ar: 'حسب الشاشة', en: 'By Screen' },
    byGroup: { ar: 'حسب المجموعة', en: 'By Group' },
    groupDeleted: { ar: 'تم حذف المجموعة بنجاح', en: 'Group deleted successfully.' },
    errorDeletingGroup: { ar: 'فشل حذف المجموعة', en: 'Failed to delete group.' },
    editGroup: { ar: 'تعديل المجموعة', en: 'Edit Group' },
    groupUpdated: { ar: 'تم تحديث المجموعة بنجاح', en: 'Group updated successfully.' },
    errorUpdatingGroup: { ar: 'فشل تحديث المجموعة', en: 'Failed to update group.' }
  };

  getTranslation(key: keyof TranslationKeys, language: 'ar' | 'en'): string {
    const translation = this.translations[key];
    if (translation) {
      return translation[language];
    }
    return key; // Return key if translation not found
  }

  getAllTranslations(): TranslationKeys {
    return this.translations;
  }
}
