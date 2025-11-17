# labrArte Website

This project is an unofficial recreation of the [labrarte.com](https://www.labrarte.com/) website, developed with their consent. The goal is to provide a modern and updated version of the platform, implementing current web standards and best practices.

## About the Project

This web application offers a modern and user-friendly interface for browsing and purchasing art-related products and courses. The platform features user authentication, a dynamic product catalog, shopping cart functionality, and user profile management.

## Technology Stack

- **Angular 17.3** - Frontend framework with modular component architecture
- **Firebase** - Backend infrastructure
  - Firebase Authentication - User login and signup
  - Firestore Database - Data storage for products, categories, and user information
  - Firebase Storage - Media file hosting for images and resources
- **TailwindCSS** - Utility-first CSS framework for styling
- **RxJS** - Reactive programming library
- **ngx-toastr** - Toast notifications

## Project Structure

The application follows Angular's modular architecture with the following organization:

### `/src/app/components/`
Reusable UI components that form the building blocks of the application:
- Button components for interactive elements
- Cart item display components
- Category selection components
- Product display cards
- Image sliders
- Social network links
- Logo component
- Error pages (404 not found)

### `/src/app/forms/`
Form modules for user interactions:
- **login** - User authentication form
- **signup** - New user registration form

### `/src/app/services/`
Core business logic services:
- **cart** - Shopping cart management
- **load** - Data loading from Firebase
- **scroll** - Smooth scrolling functionality
- **user** - User authentication and profile management

### `/src/app/templates/`
Main page templates:
- Home page
- Product catalog
- Individual product pages
- Category pages
- Courses section
- Shopping cart
- User profile
- Blog section
- Header and footer layouts

### `/src/app/interfaces/`
TypeScript interfaces for type safety:
- User data structures
- Product data structures
- Category data structures

## Key Features

- **User Authentication**: Secure login and signup using Firebase Authentication
- **Product Catalog**: Browse products and courses with filtering by categories
- **Shopping Cart**: Add products to cart and manage purchases
- **User Profiles**: Customizable user profiles with profile pictures and contact information
- **Responsive Design**: Modern, mobile-friendly interface built with TailwindCSS
- **Real-time Data**: Dynamic content loaded from Firebase Firestore

## Firebase Integration

The application uses Firebase as its backend platform:

1. **Firebase Authentication** - Manages user accounts and authentication sessions
2. **Firestore Database** - Stores structured data including products, categories, user profiles, and shopping cart information
3. **Firebase Storage** - Hosts product images and user-uploaded content

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm package manager
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```

3. Configure Firebase:
   - Set up your Firebase project
   - Update the environment configuration in `src/enviroments/enviroment.ts`

### Development Server

Run the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

## Building the Project

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:

```bash
ng test
```

Tests are executed using Karma and Jasmine.

## Deployment

The project is configured for Firebase Hosting. Deploy using:

```bash
ng deploy
```

## Development Workflow

This project uses Trello for task management and team coordination. You can track the project progress at: [Trello Board](https://trello.com/invite/b/6vTlzSo5/ATTIb693f849f2a2ac37cd46c8243d185afaD62C1B46/pwm)

## License

This is an educational project created with the consent of labrarte.com.

---

Built with Angular CLI version 17.3.2
