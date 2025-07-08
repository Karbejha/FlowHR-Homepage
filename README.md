# FlowHR Homepage

A modern, fully responsive SaaS homepage for FlowHR - an HR Management System built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Collapsible FAQ, mobile navigation, and smooth animations
- **Semantic HTML**: Proper HTML structure for accessibility and SEO
- **Performance Optimized**: Built with Next.js 14+ for optimal loading speeds

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS 3+
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Theme Management**: next-themes
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FlowHR-Homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── header.tsx
    ├── hero.tsx
    ├── features.tsx
    ├── testimonials.tsx
    ├── pricing.tsx
    ├── faq.tsx
    ├── cta.tsx
    ├── footer.tsx
    └── theme-provider.tsx
```

## 🎨 Sections

### 1. Header
- Responsive navigation with mobile hamburger menu
- Dark/light mode toggle
- Call-to-action buttons

### 2. Hero Section
- Compelling headline and subheading
- Primary call-to-action button
- Visual dashboard preview

### 3. Features
- Grid layout showcasing HR management capabilities
- Interactive hover effects
- Icon-based feature cards

### 4. Testimonials
- Customer testimonials with avatars
- Responsive grid layout
- Hover animations

### 5. Pricing
- Three-tier pricing structure
- Highlighted popular plan
- Feature comparison lists

### 6. FAQ
- Collapsible accordions using Headless UI
- Smooth animations
- Comprehensive HR-related questions

### 7. Final CTA
- Gradient background
- Trust indicators
- Multiple action buttons

### 8. Footer
- Comprehensive link organization
- Social media icons
- Company information

## 🎯 HR Management Features Highlighted

- **Employee Management**: CRUD operations with role-based access
- **Leave Management**: Real-time tracking and approval workflows
- **Attendance Analytics**: Clock-in/out with comprehensive statistics
- **Role-Based Access Control**: Secure permissions for different user types

## 🌙 Dark Mode Support

The homepage includes full dark/light mode support with:
- System preference detection
- Manual toggle capability
- Consistent theming across all components

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📱 Responsive Design

The homepage is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Customization

### Colors
The design uses a professional color palette with Indigo as the primary brand color. You can customize colors in `tailwind.config.js`.

### Content
All content is easily editable within the component files. Update text, features, pricing, and testimonials as needed.

### Images
Placeholder images are used from Unsplash. Replace with actual company assets in production.

## 📄 License

This project is created for demonstration purposes. Replace with your actual license.

---

Built with ❤️ using Next.js and Tailwind CSS
