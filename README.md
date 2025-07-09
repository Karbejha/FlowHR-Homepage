# FlowHR - Revolutionary HR Management System

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

FlowHR is a comprehensive HR management system designed for modern businesses. Our platform streamlines HR operations including employee management, leave tracking, attendance monitoring, payroll processing, and performance analytics.

🌐 **Live Demo**: [https://flowhr-homepage.vercel.app](https://flowhr-homepage.vercel.app)

## 🚀 Features

- **Employee Management**: Complete employee profiles, role management, and organizational structure
- **Leave Management**: Streamlined leave application and approval workflow
- **Attendance Tracking**: Real-time attendance monitoring and reporting
- **Performance Analytics**: Comprehensive HR metrics and insights
- **Role-Based Access**: Secure permissions system
- **Dark Mode Support**: Beautiful UI that works in light and dark themes
- **Mobile Responsive**: Optimized for all devices
- **SEO Optimized**: Built with search engine optimization best practices

## 🛠️ Tech Stack

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

## 🔧 Configuration

### Environment Variables

1. Copy the example environment file:
```bash
cp .env.local.example .env.local
```

2. Update the values in `.env.local` with your actual credentials:
```env
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-YOUR_GA4_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

⚠️ **Security Note**: Never commit `.env.local` or Google verification HTML files to version control. These files are already protected in `.gitignore`.

### Google Search Console Setup

The website is already configured for Google Search Console verification:

1. **Meta Tag Verification** (Already implemented):
   - Meta tag is included in the site's `<head>` section
   - Verification code: `fF5CjwQYDtD0WNpW9hCM-vaJGraaIk4GbtUXqxfHZwQ`

2. **HTML File Verification** (Already implemented):
   - Verification file: `/public/googled96d8fe7bd564ca7.html`

3. **DNS Verification** (For domain owner):
   ```
   TXT Record: google-site-verification=Ha1T_z2Zp6SPuNcmSfSr0lzJf4LezEylV4PB_tk8ilE
   Domain: flowhr-homepage.vercel.app
   ```

4. **Google Analytics Verification**:
   - Add your GA4 tracking ID to `.env.local`
   - The gtag.js snippet is already implemented in the analytics component

### Search Console Verification Steps

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://flowhr-homepage.vercel.app`
3. Choose verification method:
   - **HTML tag**: Already implemented in layout.tsx
   - **HTML file**: Already available at `/googled96d8fe7bd564ca7.html`
   - **Google Analytics**: Set up GA4 tracking ID
   - **DNS record**: Add TXT record to your domain provider

## 📄 License

This project is created for demonstration purposes. Replace with your actual license.

---

Built with ❤️ using Next.js and Tailwind CSS
