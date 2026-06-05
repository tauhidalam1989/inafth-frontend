# Screening Frontend

A modern Angular dashboard application with Arabic/English language support, featuring a responsive header, sidebar navigation, and dashboard components.

## Features

- 🌐 **Bilingual Support**: Arabic (RTL) and English (LTR) language toggle
- 📱 **Responsive Design**: Mobile-first approach with Bootstrap integration
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🔧 **Component Architecture**: Modular Angular components
- 📊 **Dashboard Metrics**: Interactive metric cards with hover effects
- 🎯 **Navigation**: Collapsible sidebar with FontAwesome icons
- 🌍 **RTL Support**: Full right-to-left language support for Arabic

## Screenshots

The application features:
- Header with user info, date/time, weather, and language toggle
- Sidebar with navigation menu items
- Dashboard with metric cards and modal functionality
- Responsive design for all screen sizes

## Prerequisites

- Node.js (v18.20.8 or higher)
- npm (v10.8.2 or higher)

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd screening-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for development
- `npm run build:prod` - Builds the project for production
- `npm run watch` - Builds the project and watches for changes
- `npm test` - Runs unit tests
- `npm run lint` - Runs linting

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Header component with language toggle
│   │   ├── sidebar/         # Navigation sidebar
│   │   └── dashboard/       # Dashboard with metrics
│   ├── services/
│   │   └── language.service.ts  # Language management service
│   ├── app.component.ts     # Main app component
│   ├── app.module.ts        # Main app module
│   └── app.component.html   # Main app template
├── styles.scss              # Global styles
└── main.ts                 # Application entry point
```

## Language Support

The application supports two languages:
- **Arabic (ar)**: Right-to-left (RTL) layout
- **English (en)**: Left-to-right (LTR) layout

### Language Toggle
Click the language button in the header to switch between Arabic and English. The entire interface, including:
- Navigation menu items
- Dashboard metrics
- Modal content
- Date and time formats
- Text direction (RTL/LTR)

## Components

### Header Component
- User information display
- Current date and time (Gregorian and Hijri)
- Weather information and prayer time
- Language toggle button
- Logo and branding

### Sidebar Component
- Collapsible navigation menu
- Menu items with icons
- Responsive design
- RTL support

### Dashboard Component
- Metric cards with hover effects
- News section
- Modal functionality
- Responsive grid layout

## Styling

- **SCSS**: Modern CSS preprocessor
- **Bootstrap**: Responsive grid system and utilities
- **FontAwesome**: Icon library
- **Custom CSS**: Tailored styles for the application

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Adding New Components
1. Create component files in the appropriate directory
2. Add component to `app.module.ts` declarations
3. Import and use in templates

### Adding New Languages
1. Update `LanguageService` with new translations
2. Add language selection logic
3. Update RTL/LTR handling

### Styling Guidelines
- Use SCSS for component styles
- Follow BEM methodology for CSS classes
- Ensure RTL support for all components
- Maintain responsive design principles

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   npm start -- --port 4201
   ```

2. **Build errors:**
   ```bash
   npm run build
   ```

3. **Dependency issues:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Contributing

1. Follow Angular style guide
2. Ensure RTL support for new components
3. Test on multiple screen sizes
4. Update translations for new text

## License

ISC License

## Support

For support and questions, please refer to the project documentation or create an issue in the repository.
