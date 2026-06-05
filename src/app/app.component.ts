import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from './core/services/language.service';
import { AuthService } from './core/services/auth.service';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  isSidebarCollapsed = false;
  isMobileMenuOpen = false;
  private isToggling = false;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private authService: AuthService,
    private msalService: MsalService
  ) {}

  ngOnInit(): void {
    // Ensure MSAL is initialized and handle redirect result (Microsoft login)
    this.msalService.instance.initialize()
      .then(() => {
        console.log('MSAL initialized successfully');

        // Handle redirect response (runs after Microsoft login completes)
        this.msalService.instance.handleRedirectPromise()
          .then((result: AuthenticationResult | null) => {
            // IMPORTANT:
            // Only create local session when we have a fresh redirect result
            // (i.e. user just completed Microsoft login).
            // Do NOT auto-login on simple page refresh based on cached account.
            if (!result || !result.account) {
              console.log('No MSAL redirect result found – not auto-signing in.');
              return;
            }

            const account = result.account;

            if (!this.authService.isAuthenticated()) {
              this.msalService.instance.setActiveAccount(account);
              const email = account.username || '';
              const name = (account as any).name || email;
              this.authService.setExternalLoginUser({
                username: name || email,
                email
              });
              console.log('Microsoft login mapped to local session for', email);
              this.router.navigate(['/']);
            }
          })
          .catch(err => {
            console.error('MSAL handleRedirectPromise error:', err);
          });
      })
      .catch((err) => {
        console.error('MSAL initialization failed', err);
      });

    // Subscribe to language changes
    this.languageService.currentLanguage$.subscribe(lang => {
      console.log('App: Language changed to:', lang);
      console.log('App: Setting direction to:', lang === 'ar' ? 'RTL' : 'LTR');
      this.currentLanguage = lang;
      // Ensure document direction is set when language changes
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      
      // Debug: Check document direction
      setTimeout(() => {
        console.log('Document dir attribute:', document.documentElement.getAttribute('dir'));
        console.log('Document lang attribute:', document.documentElement.getAttribute('lang'));
        
        // Check if app container has the right classes
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
          console.log('App container classes:', appContainer.className);
          console.log('App container dir attribute:', appContainer.getAttribute('dir'));
        }
      }, 100);
    });

    // Initialize with saved language preference
    this.currentLanguage = this.languageService.getSavedLanguage();
    console.log('App: Initialized with language:', this.currentLanguage);

    // Load saved sidebar state
    this.loadSidebarState();

    // Listen to route changes to close mobile menu
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });

    // Check screen size on init
    this.checkScreenSize();
  }

  loadSidebarState(): void {
    const savedState = localStorage.getItem('sidebarCollapsed');
    this.isSidebarCollapsed = savedState === 'true';
  }

  onSidebarToggle(collapsed: boolean): void {
    // On mobile, don't apply collapsed state (always show expanded)
    if (window.innerWidth >= 768) {
      this.isSidebarCollapsed = collapsed;
    } else {
      // On mobile, keep it expanded
      this.isSidebarCollapsed = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Ctrl+B (Windows/Linux) or Cmd+B (Mac) to toggle sidebar
    if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
      event.preventDefault();
      this.toggleSidebar();
    }
  }

  checkScreenSize(): void {
    if (window.innerWidth >= 768) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    // Prevent rapid toggling
    if (this.isToggling) {
      return;
    }
    
    this.isToggling = true;
    console.log('Toggle mobile menu called. Current state:', this.isMobileMenuOpen);
    
    const wasOpen = this.isMobileMenuOpen;
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // When opening mobile menu, ensure sidebar is expanded (not collapsed)
    if (!wasOpen && this.isMobileMenuOpen && window.innerWidth < 768) {
      this.isSidebarCollapsed = false;
    }
    
    console.log('New state:', this.isMobileMenuOpen, 'Sidebar collapsed:', this.isSidebarCollapsed);
    
    // Reset toggle flag after animation completes
    setTimeout(() => {
      this.isToggling = false;
    }, 300);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  isAuthPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('/login') || 
           currentRoute.includes('/register') || 
           currentRoute.includes('/forgot-password') ||
           currentRoute.includes('/auth');
  }
}
