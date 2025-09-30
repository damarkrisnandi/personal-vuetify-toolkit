# Vuetify Component Toolkit

A comprehensive toolkit for building Vuetify components from simple to complex layouts with copy-paste functionality.

## Features

- 📱 **Responsive Components**: All components are mobile-friendly and responsive
- 🎨 **Modern Design**: Beautiful Material Design components using Vuetify 3
- 📋 **Copy-Paste Ready**: All code examples can be copied directly to your project
- 🏗️ **Comprehensive**: From basic buttons to complex dashboard layouts
- 🌙 **Dark Mode**: Built-in theme switching support
- 📚 **Well Documented**: Each component includes description and usage examples

## Categories

### 🔧 Basic Components
- Buttons (various styles and sizes)
- Chips and labels
- Icons and avatars
- Badges and progress indicators
- Alerts and notifications

### 📝 Form Components
- Text fields and inputs
- Selects and autocomplete
- Checkboxes, radio buttons, switches
- Sliders and range inputs
- File inputs and textareas
- Form validation examples

### 📐 Layout Components
- Grid system and containers
- Flexbox utilities
- Spacers and dividers
- Common layout patterns

### 🎴 Cards & Surfaces
- Basic and image cards
- Feature showcase cards
- Pricing plan cards
- Statistics cards
- Profile cards

### 📊 Data Display
- Data tables with sorting
- Lists and virtual scrolling
- Timeline components
- Expansion panels
- Tree view
- Data iterators

### 🧭 Navigation
- App bars and toolbars
- Bottom navigation
- Tabs and tab panels
- Breadcrumbs
- Navigation drawers
- Menus and dropdowns
- Pagination

### 🚀 Complex Examples
- **Login Card**: Complete authentication form with validation
- **Weather Forecast**: Interactive weather component with current conditions and forecast
- **Dashboard Stats**: Multi-metric dashboard with charts and activity feed
- **Social Media Post**: Instagram-style post card with engagement features
- **E-commerce Product**: Product showcase with ratings, pricing, and cart functionality

## Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Usage

1. Browse through the categories in the sidebar
2. Find the component you want to use
3. Click "View Code" to see the implementation
4. Copy the code and paste it into your project
5. Customize colors, sizes, and content as needed

## Dependencies

- Vue 3
- Vuetify 3
- Material Design Icons
- TypeScript (optional)

## Project Structure

```
src/
├── components/
│   ├── ComponentToolkit.vue      # Main toolkit component
│   ├── CodeShowcase.vue          # Reusable code display component
│   └── categories/
│       ├── BasicComponents.vue
│       ├── FormComponents.vue
│       ├── LayoutComponents.vue
│       ├── CardComponents.vue
│       ├── DataComponents.vue
│       ├── NavigationComponents.vue
│       └── ComplexExamples.vue
├── plugins/
│   └── vuetify.ts               # Vuetify configuration
└── App.vue                      # Main application
```

## Contributing

Feel free to add more components or improve existing ones! Each new component should:

1. Include a live preview
2. Provide clean, copy-paste ready code
3. Include proper documentation
4. Follow Vuetify best practices
5. Be responsive and accessible

## License

MIT License - feel free to use this toolkit in your projects!