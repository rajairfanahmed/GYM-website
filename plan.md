# Gym Website - Implementation Plan

## Project Overview

A premium, award-winning frontend website for a fitness center/gym featuring multiple pages, sophisticated branding, and comprehensive content. The project showcases gym services, classes, trainers, membership plans, and facilities with a high-end, modern user experience inspired by award-winning designs (build.com, Awwwards, Dribbble). The design emphasizes dark mode aesthetics, premium typography, smooth animations, and meticulous attention to detail.

## Project Details

**Project Name:** FitZone Pro

**Tagline:** "Elevate Your Potential"

**Brand Identity:**
- Primary Color: #0A0A0A (Deep Black - Premium, Sophisticated)
- Secondary Color: #FFFFFF (Pure White - Clean, Minimal)
- Accent Color: #FF6B35 (Vibrant Orange - Energy, Premium Contrast)
- Surface Color: #141414 (Dark Surface - Depth, Luxury)
- Text Primary: #FFFFFF (White - High Contrast)
- Text Secondary: #A0A0A0 (Light Gray - Subtle Hierarchy)
- Border Color: #2A2A2A (Subtle Borders)
- Background: #000000 (Pure Black - Premium Dark Mode)

**Design Aesthetic:**
- Premium, award-winning design inspired by build.com, Awwwards, and Dribbble
- Dark mode-first approach with sophisticated color palette
- Minimalist, clean layouts with generous whitespace
- Bold typography with strong hierarchy
- Smooth, micro-interactions and animations
- High-end UI patterns and components
- Modern glassmorphism and subtle gradients
- Premium feel with attention to detail

**Unique Logo Concept:** Minimalist geometric icon combining a stylized dumbbell with modern typography - clean lines, premium finish, works beautifully on dark backgrounds.

## Tech Stack

**Core Framework:**
- React 18+ (with TypeScript)
- React Router DOM v6+ for client-side routing
- Vite as build tool (for fast development and optimized production builds)

**Styling:**
- SCSS/CSS Modules for component-scoped styles
- CSS Custom Properties (CSS Variables) for theming
- Dark mode-first premium design system
- Responsive design with mobile-first approach
- CSS Grid & Flexbox for sophisticated layouts
- Glassmorphism effects for premium UI elements
- Smooth gradients and subtle animations

**State Management:**
- React Context API for global state (user preferences, theme)
- React Hooks (useState, useEffect, useReducer) for local state

**Additional Libraries:**
- React Icons (icon library - Font Awesome, Material Design icons)
- Framer Motion (for premium animations and page transitions)
- GSAP (optional, for advanced scroll animations and effects)
- React Helmet Async (for SEO meta tags)
- Lenis (for smooth scrolling - premium feel)
- React Intersection Observer (for scroll-triggered animations)

## Architecture Overview

**Folder Structure:**
```
fitzone-pro/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── hero/
│   │   │   ├── trainers/
│   │   │   ├── facilities/
│   │   │   └── gallery/
│   │   ├── icons/
│   │   └── fonts/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── Loading/
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   └── PageWrapper.tsx
│   │   └── sections/
│   │       ├── Hero/
│   │       ├── Features/
│   │       ├── Testimonials/
│   │       ├── CTA/
│   │       └── Stats/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── ServiceDetail.tsx
│   │   ├── Trainers/
│   │   │   ├── Trainers.tsx
│   │   │   └── TrainerDetail.tsx
│   │   ├── Classes/
│   │   │   ├── Classes.tsx
│   │   │   └── ClassDetail.tsx
│   │   ├── Membership/
│   │   │   └── Membership.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollPosition.ts
│   │   └── useIntersectionObserver.ts
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── AppContext.tsx
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── animations.ts
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── reset.css
│   │   └── typography.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Page Structure & Routes

### 1. Home Page (/)
**Sections:**
- Hero section with headline, CTA button, background image/video
- Features section (3-4 key features with icons)
- About preview section (brief intro with "Learn More" link)
- Popular classes carousel/section
- Trainer showcase (featured trainers)
- Statistics section (members, classes, years experience)
- Testimonials section
- Call-to-action section
- Footer

### 2. About Page (/about)
**Sections:**
- Page hero/header
- Mission & Vision section
- Our Story section (timeline or narrative)
- Why Choose Us section
- Values section (4-5 core values)
- Facility highlights
- Team introduction

### 3. Services Page (/services)
**Layout:** Grid/list view of all services
**Services Include:**
- Personal Training
- Group Classes
- Nutrition Counseling
- Cardio Training
- Strength Training
- Yoga & Pilates
- Functional Training
- Sports Performance

Each service card links to service detail page with:
- Description
- Benefits
- Duration/Pricing
- CTA button

### 4. Trainers Page (/trainers)
**Layout:** Grid of trainer cards
**Features:**
- Filter by specialty (Strength, Cardio, Yoga, etc.)
- Search functionality
- Trainer cards with:
  - Photo
  - Name
  - Specialty
  - Experience
  - Social links
  - "View Profile" button
- Clicking trainer card opens trainer detail page

### 5. Classes Page (/classes)
**Layout:** Schedule view and class grid
**Features:**
- Weekly class schedule (table/grid view)
- Filter by day, time, instructor, class type
- Class cards showing:
  - Class name
  - Instructor
  - Time & Duration
  - Difficulty level
  - Class capacity
  - "Book Class" CTA (modal or link)
- Class categories:
  - HIIT
  - Yoga
  - Zumba
  - Pilates
  - CrossFit
  - Cycling
  - Boxing
  - Dance Fitness

### 6. Membership Page (/membership)
**Layout:** Membership tier cards
**Features:**
- 3-4 membership tiers:
  - Basic ($49/month)
  - Premium ($79/month)
  - Elite ($119/month)
  - Family Plan ($149/month)
- Each tier includes:
  - Features/benefits list
  - Pricing
  - "Choose Plan" button
- Comparison table
- FAQ section about memberships
- Testimonials from members

### 7. Gallery Page (/gallery)
**Layout:** Image grid/masonry layout
**Features:**
- Filter by category (Facilities, Classes, Events, Equipment)
- Lightbox/modal for image viewing
- Lazy loading for images
- Smooth scrolling
- Categories:
  - Gym Facilities
  - Classes in Action
  - Equipment
  - Events & Workshops
  - Transformation Stories

### 8. Contact Page (/contact)
**Sections:**
- Contact information (address, phone, email, hours)
- Contact form (name, email, phone, subject, message)
- Google Maps embed (optional - placeholder)
- Social media links
- Operating hours section
- FAQ section

### 9. 404 Page (/404)
- Custom error page with gym theme
- Navigation back to home
- Search functionality

## Component Architecture

### Common Components

**Header Component (`Header/Header.tsx`):**
- Sticky/fixed header (80-100px height, premium spacing)
- Background: 
  - Transparent initially (glass effect)
  - On scroll: Dark background (#0A0A0A) with backdrop blur
  - Border-bottom: Subtle #2A2A2A border
- Logo: 
  - Premium SVG/text logo (minimalist, modern)
  - White/light color
  - Smooth hover effect
- Desktop navigation: 
  - Horizontal menu with generous spacing
  - Active route: Orange accent underline or highlight
  - Hover: Subtle fade to orange
  - Font: Medium weight, 16px
- Mobile navigation: 
  - Hamburger menu (animated icon)
  - Full-screen or slide-in drawer (dark background #0A0A0A)
  - Smooth animations
- CTA button: 
  - Gradient orange button ("Join Now")
  - Visible on desktop
  - Premium styling
- Scroll behavior: 
  - Hide on scroll down (smooth)
  - Show on scroll up (after 100px)
  - Blur effect on background
- Z-index: 1000 (above all content)
- Props: None (uses React Router for navigation state)

**Footer Component (`Footer/Footer.tsx`):**
- 4-column layout (desktop), stacked (mobile)
- Background: #0A0A0A (deep black, premium)
- Border-top: Subtle #2A2A2A border
- Padding: 80px vertical (desktop), 60px (mobile)
- Column 1: 
  - Logo (white/minimalist)
  - Tagline (light gray, 16px)
  - Social media icons (Instagram, Facebook, Twitter, LinkedIn)
  - Icon hover: Orange accent color + scale
- Column 2: 
  - Quick links (Home, About, Services, Classes, Trainers, Membership, Gallery, Contact)
  - Link hover: Orange accent + underline
  - Spacing: 12px between links
- Column 3: 
  - Contact information (Address, Phone, Email, Hours)
  - Light gray text (#A0A0A0)
  - Icon + text layout
- Column 4: 
  - Newsletter signup
  - Email input (dark background, premium styling)
  - Subscribe button (orange gradient)
- Bottom bar: 
  - Copyright © 2024 FitZone Pro. All rights reserved.
  - Light gray text, centered
  - Border-top: Subtle divider
  - Padding: 32px top
- Props: None

**Navigation Component (`Navigation/Navigation.tsx`):**
- Desktop: Horizontal flex layout with links
- Mobile: Vertical drawer (width: 280px, slide from right)
- Active route: Underline/bold with primary color
- Smooth scroll for anchor links
- Close button on mobile drawer
- Props: `isOpen` (boolean), `onClose` (function)

**Button Component (`Button/Button.tsx`):**
- Variants: 
  - `primary`: Gradient orange background (#FF6B35 to #FF4500)
  - `secondary`: Dark background (#141414) with white text
  - `outline`: Transparent with white/orange border (2px)
  - `ghost`: Transparent, text only
- Sizes: 
  - `sm`: 40px height, 12px 24px padding
  - `md`: 48px height, 16px 32px padding
  - `lg`: 56px height, 20px 48px padding (premium, generous)
- Border-radius: 12px (premium rounded)
- Typography: 
  - Semibold to bold weight
  - 16-18px font size
  - Tight letter-spacing
- States: 
  - Default: Solid/gradient background
  - Hover: Brighten + scale (1.02-1.05) + subtle glow
  - Active: Scale down (0.98)
  - Disabled: Reduced opacity (0.5) + no pointer
  - Loading: Spinner icon replaces text
- Transitions: Smooth (300ms ease)
- Icon support: Optional left/right icon props (18-20px icons)
- Props: `variant`, `size`, `children`, `onClick`, `disabled`, `loading`, `iconLeft`, `iconRight`, `type`, `fullWidth`

**Card Components:**
- **TrainerCard**: Image, name, role, specialties (tags), experience, "View Profile" button
- **ServiceCard**: Icon, title, description (truncated), "Learn More" link
- **ClassCard**: Image, name, instructor, time/duration, difficulty badge, "Book Class" button
- **MembershipCard**: Plan name, price, features list (bullet points), "Choose Plan" button, popular badge
- Common: Hover effect (lift + shadow), border-radius, padding
- Props: Specific to each card type

**Modal Component (`Modal/Modal.tsx`):**
- Backdrop: 
  - Dark overlay (rgba(0, 0, 0, 0.8))
  - Backdrop blur effect (glassmorphism)
  - Z-index: 900
  - Smooth fade-in animation
- Modal: 
  - Centered (absolute positioning)
  - Max-width: 600px (md), 800px (lg), 400px (sm)
  - Background: #141414 (dark surface)
  - Border: Subtle #2A2A2A border
  - Border-radius: 24px (premium rounded)
  - Shadow: Subtle glow effect
  - Padding: 48px
  - Smooth scale + fade entrance animation
- Close button: 
  - X icon in top-right corner
  - 40px circle button
  - Hover: Orange accent
  - Smooth transitions
- ESC key to close
- Click outside to close (with animation)
- Props: `isOpen`, `onClose`, `title`, `children`, `size` (sm/md/lg), `variant`

### Section Components

**Hero Component (`Hero/Hero.tsx`):**
- Full-width section (100vw), min-height: 100vh (full viewport, premium feel)
- Background: 
  - High-quality image/video with dark overlay (rgba(0,0,0,0.6-0.7))
  - Optional: Animated gradient background
  - Parallax or subtle motion effect
- Content: 
  - Centered vertically and horizontally (flexbox)
  - Large, impactful typography with tight letter-spacing
  - Generous spacing between elements
- Headline: 
  - Extra large text (72-96px desktop, 48-64px mobile)
  - Extra bold weight (700-800)
  - White text with subtle text shadow or glow
  - Animated entrance (fade + slide up)
- Subheadline: 
  - Large text (24-28px desktop, 20px mobile), 
  - Light gray (#A0A0A0), medium weight
  - Max-width: 600-700px for readability
- CTA buttons: 
  - Primary: Gradient orange button (large, prominent)
  - Secondary: Outlined button (white border, transparent bg)
  - Generous padding, premium styling
- Scroll indicator: 
  - Animated arrow or "scroll" text
  - Smooth bounce animation
  - Positioned at bottom center
- Props: `title`, `subtitle`, `ctaPrimary`, `ctaSecondary`, `backgroundImage`, `videoBackground`

**Features Component (`Features/Features.tsx`):**
- Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 48px (generous spacing for premium feel)
- Item styling:
  - Background: #141414 (dark surface)
  - Border: Subtle #2A2A2A border
  - Border-radius: 24px (premium rounded)
  - Padding: 48px (generous)
  - Icon: 64px (larger, more prominent), gradient or solid color
  - Title: 24-28px, bold, white
  - Description: 16-18px, light gray (#A0A0A0), line-height 1.7
- Hover: 
  - Slight scale (1.02-1.03)
  - Border color change to orange accent
  - Subtle glow effect
  - Smooth transition (300ms ease)
- Entrance animation: Staggered fade-in from bottom
- Props: `features` array with `icon`, `title`, `description`

**Testimonials Component (`Testimonials/Testimonials.tsx`):**
- Premium carousel/slider with smooth transitions
- Background: Dark section (#0A0A0A)
- Card styling:
  - Background: #141414 (dark surface)
  - Border: Subtle #2A2A2A border
  - Border-radius: 24px (premium rounded)
  - Padding: 48px
  - Max-width: 800px per card
- Card content:
  - Avatar: Circular (80-100px), subtle border, premium styling
  - Rating: 5 stars (orange accent color)
  - Testimonial text: 18-20px, light gray (#A0A0A0), italic or normal
  - Name: 18px, bold, white
  - Role: 14px, light gray, uppercase or small caps
- Navigation: 
  - Premium arrow buttons (circular, dark bg, orange hover)
  - Dot indicators (small, orange active state)
  - Smooth transitions
- Autoplay: 5 seconds interval, pause on hover
- Entrance animation: Fade + slide
- Props: `testimonials` array

**Stats Component (`Stats/Stats.tsx`):**
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Background: Dark section (#0A0A0A) or gradient
- Item styling:
  - Background: #141414 (dark surface) or transparent
  - Padding: 32-48px
  - Border-radius: 16px (if card style)
- Animated counters: 
  - Count from 0 to target number on scroll into view
  - Smooth easing animation
  - Large number: 56-64px (desktop), 40px (mobile)
  - Extra bold weight (700-800)
  - Gradient orange text or white with orange accent
  - Suffix: Same styling (e.g., "K", "+", "%")
- Label: 
  - 16-18px, light gray (#A0A0A0)
  - Uppercase or small caps
  - Letter-spacing: 0.05em
- Icon (optional): 
  - 40-48px, gradient orange or white
  - Positioned above or beside number
- Animation: Use Intersection Observer + Framer Motion or GSAP
- Entrance: Staggered fade-in from bottom
- Props: `stats` array with `icon`, `value`, `label`, `suffix`

**CTA Component (`CTA/CTA.tsx`):**
- Full-width section with premium background:
  - Dark gradient (#0A0A0A to #141414)
  - Optional: Subtle pattern or texture
  - Optional: High-quality background image with overlay
- Padding: 120px vertical (desktop), 80px (tablet), 60px (mobile)
- Content: 
  - Centered text with max-width constraint (800px)
  - Generous spacing between elements
- Headline: 
  - Extra large (56-64px desktop, 40px mobile)
  - Extra bold (700-800), white
  - Tight letter-spacing
- Description: 
  - Large text (20-24px), 
  - Light gray (#A0A0A0)
  - Line-height: 1.7
  - Margin-bottom: 48px
- CTA button: 
  - Large size (padding: 20px 48px)
  - Gradient orange background
  - Extra bold text
  - Hover: Brighten + scale (1.05)
- Optional: Decorative elements (geometric shapes, subtle animations)
- Props: `title`, `description`, `ctaText`, `ctaLink`, `background`, `variant`

## Data Structure & Types

```typescript
// Trainer
interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  experience: number; // years
  certifications: string[];
  image: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// Class
interface GymClass {
  id: string;
  name: string;
  category: string;
  instructor: string;
  instructorId: string;
  duration: number; // minutes
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  schedule: {
    day: string;
    time: string;
  }[];
  capacity: number;
  description: string;
  image: string;
}

// Service
interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration?: string;
  price?: string;
  image: string;
  icon: string;
}

// Membership
interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  features: string[];
  popular?: boolean;
  ctaText: string;
}

// Testimonial
interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}
```

## Styling Strategy

**CSS Architecture:**
- SCSS/CSS Modules for component-scoped styles (e.g., `Component.module.scss`)
- CSS Custom Properties (CSS Variables) for theme colors and spacing in `variables.scss`
- Global styles for typography, reset, and base elements
- BEM methodology for class naming convention
- Utility classes for common patterns (container, section padding, etc.)
- Premium design patterns: Glassmorphism, subtle gradients, backdrop filters

**Color System (Premium Dark Mode):**
- Primary: #0A0A0A (deep black background)
- Secondary: #141414 (surface/card background)
- Accent: #FF6B35 (vibrant orange for CTAs, highlights)
- Text Primary: #FFFFFF (main text, high contrast)
- Text Secondary: #A0A0A0 (secondary text, subtle hierarchy)
- Border: #2A2A2A (subtle borders, dividers)
- Overlay: rgba(0, 0, 0, 0.6) (dark overlays)
- Gradient Accent: Linear gradients using orange (#FF6B35) to deep orange (#FF4500)
- Glass Effect: rgba(255, 255, 255, 0.05) with backdrop-filter blur
- Semantic colors: Success (#10B981), Warning (#F59E0B), Error (#EF4444)

**Responsive Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**Typography (Premium System):**
- Heading Font: 'Inter' or 'Space Grotesk' - weights: 400, 500, 600, 700, 800
- Body Font: 'Inter' or 'Plus Jakarta Sans' - weights: 400, 500, 600
- Font sizes (premium scale):
  - Hero: 72px-96px (desktop), 48px-64px (mobile) - extra bold, tight letter-spacing
  - H1: 56px-64px (desktop), 40px (mobile) - bold
  - H2: 40px-48px (desktop), 32px (mobile) - semibold to bold
  - H3: 32px-36px (desktop), 28px (mobile) - semibold
  - H4: 24px-28px - semibold
  - Body Large: 18px-20px (lead text)
  - Body: 16px-18px (main text)
  - Small: 14px (captions, labels)
- Line heights: 1.1-1.2 (headings - tight), 1.6-1.7 (body - readable)
- Letter spacing: -0.02em to -0.03em (headings), 0em (body)
- Text shadows: Subtle glow effects on hero text (optional)

**Spacing System (8px base unit):**
- 4px (--space-1), 8px (--space-2), 12px (--space-3), 16px (--space-4)
- 24px (--space-5), 32px (--space-6), 48px (--space-8), 64px (--space-10), 96px (--space-12)

**Component Styling Patterns (Premium Design):**
- Container max-width: 1400px (wider for premium feel) with responsive padding
- Section padding: 120px (desktop), 80px (tablet), 60px (mobile) - generous spacing
- Card styling: 
  - Background: #141414 with subtle border (#2A2A2A)
  - Border-radius: 16px-24px (larger, more modern)
  - Shadow: Subtle glow or soft shadow (not heavy)
  - Hover: Slight scale (1.02-1.03) + border color change
- Button styling:
  - Primary: Gradient background (#FF6B35 to #FF4500) or solid orange
  - Border-radius: 12px (premium rounded)
  - Padding: 16px 32px (generous)
  - Hover: Brighten + subtle scale (1.02)
  - Active: Slight scale down (0.98)
- Input styling:
  - Background: #141414 with #2A2A2A border
  - Border-radius: 12px
  - Focus: Orange border glow + shadow
- Glassmorphism: Subtle blur effects for overlays, modals, cards
- Gradients: Subtle gradients in backgrounds, buttons, accents

## Features & Functionality

### Core Features:
1. **Premium Responsive Design:** Mobile-first, works flawlessly on all devices with premium feel
2. **Sophisticated Animations:** 
   - Smooth page transitions (fade + slide)
   - Scroll-triggered animations (GSAP or Framer Motion)
   - Micro-interactions on hover, click, focus
   - Parallax effects (subtle, premium)
   - Staggered animations for lists/grids
3. **Image Optimization:** 
   - Lazy loading with blur-up technique
   - Responsive images with srcset
   - WebP format with fallbacks
   - High-quality, premium imagery
4. **Performance:** 
   - Code splitting by route
   - Lazy loading routes
   - Optimized assets and bundles
   - Lighthouse score >90
5. **SEO:** 
   - Unique meta tags per page
   - Open Graph tags for social sharing
   - Structured data (JSON-LD)
   - Semantic HTML structure
6. **Accessibility:** 
   - WCAG 2.1 AA compliance
   - ARIA labels and roles
   - Keyboard navigation
   - Focus states (orange accent)
   - High contrast ratios (dark mode optimized)
7. **Search Functionality:** 
   - Premium search UI (glassmorphism)
   - Search for classes, trainers, services
   - Instant results with smooth animations
8. **Filtering:** 
   - Premium filter UI (dark, modern)
   - Filter classes by day/time/type
   - Filter trainers by specialty
   - Smooth filter transitions
9. **Form Validation:** 
   - Real-time validation
   - Premium error states
   - Smooth error animations
10. **Loading States:** 
    - Premium skeleton loaders (dark theme)
    - Smooth spinners (orange accent)
    - Progressive loading

### Premium Interactive Elements:
- Smooth scroll with momentum (Lenis or similar)
- Animated counters with easing (stats section)
- Image lightbox with smooth transitions (gallery)
- Modal dialogs with backdrop blur (forms/bookings)
- Premium hover effects (scale, glow, color transitions)
- Scroll-triggered animations (Intersection Observer)
- Parallax effects (subtle, performance-conscious)
- Cursor effects (optional, premium touch)
- Page transitions (fade + slide between routes)
- Staggered list animations
- Magnetic buttons (optional, subtle)

## Content Guidelines

**Tone & Voice:**
- Motivational and encouraging
- Professional yet approachable
- Action-oriented
- Benefits-focused

**Content Requirements:**
- All text content must be unique and original (no placeholder text)
- Use realistic gym terminology and features
- Include specific details:
  - Class durations (45, 60, 90 minutes)
  - Trainer certifications (NASM, ACE, RYT, etc.)
  - Years of experience for trainers
  - Membership pricing (realistic market rates)
  - Operating hours (e.g., Mon-Fri: 5AM-10PM, Sat-Sun: 7AM-8PM)
- Write compelling CTAs:
  - "Join FitZone Pro Today"
  - "Start Your Fitness Journey"
  - "Book Your First Class"
  - "Get Started"
  - "Learn More"
- Create authentic testimonials: 3-5 sentences, realistic names, specific benefits mentioned
- Professional service descriptions: 2-3 sentences explaining what's included
- About page: Company history, mission statement (2-3 paragraphs), vision statement (1-2 paragraphs)
- Contact page: Full address, phone number (formatted), email, hours table

**Sample Content Structure:**
- Home hero headline: "Transform Your Body, Transform Your Life"
- Home hero subtitle: "Join FitZone Pro and discover a fitness community dedicated to your success"
- About mission: Focus on helping members achieve their goals, creating a supportive environment
- Service descriptions: Each service needs unique description (50-100 words)
- Class descriptions: What to expect, difficulty level, who it's for (40-60 words)

**Image Requirements:**
- High-quality, professional images (Unsplash/Pexels or stock photos)
- Diverse representation: Various ages, ethnicities, body types, genders
- Consistent style: Modern, bright, energetic, professional gym aesthetic
- Color grading: Slight warmth, good contrast, aligns with brand colors
- Specifications:
  - Hero images: 1920x1080px (16:9), <300KB
  - Trainer photos: 600x600px (square), <150KB
  - Class images: 800x600px (4:3), <200KB
  - Gallery images: 1200x800px (3:2), <250KB
  - Logo: SVG format (scalable), <10KB
- Alt text: Descriptive, include context (e.g., "Group fitness class at FitZone Pro gym" not just "fitness class")
- Lazy loading: All images below fold use `loading="lazy"`
- Responsive images: Use `srcset` for different screen densities

## Route Definitions

```
/ → Home
/about → About
/services → Services (list)
/services/:id → Service Detail
/trainers → Trainers (list)
/trainers/:id → Trainer Detail
/classes → Classes (list + schedule)
/classes/:id → Class Detail
/membership → Membership Plans
/gallery → Gallery
/contact → Contact
/* → 404 Not Found
```

**Route Configuration:**
- Use React Router v6 with `BrowserRouter`
- Lazy load route components for code splitting
- Protected routes: None (all public)
- Route transitions: Optional page transition animations

## Implementation Guidelines

### Code Quality:
- TypeScript: Strict mode enabled, all components typed
- ESLint: React recommended rules + TypeScript rules
- Prettier: Auto-format on save, consistent code style
- Component structure: One component per file, co-locate styles (Component.module.scss)
- Naming: PascalCase for components, camelCase for functions/variables, kebab-case for files
- Comments: JSDoc for complex functions, inline comments for non-obvious logic
- File organization: Feature-based where logical, otherwise by type

### Performance Optimization (Premium Standards):
- Code splitting: 
  - Lazy load routes using `React.lazy()` and `Suspense`
  - Split heavy components (carousels, charts)
  - Dynamic imports for animations libraries
- Image optimization: 
  - Use `loading="lazy"` for below-fold images
  - Provide `srcset` for responsive images (multiple sizes)
  - Use WebP format with fallback to JPEG/PNG
  - Compress images while maintaining quality (aim for <250KB per image)
  - Blur-up technique for smooth loading
  - High-quality hero images (premium feel)
- Bundle optimization:
  - Tree-shaking enabled
  - Minify CSS and JavaScript in production
  - Use dynamic imports for heavy libraries (GSAP, Framer Motion)
  - Optimize font loading (font-display: swap)
- React optimization:
  - `React.memo()` for expensive list items (TrainerCard, ClassCard, ServiceCard)
  - `useMemo()` for expensive calculations (filtered lists, sorted data)
  - `useCallback()` for event handlers passed to children
  - Optimize re-renders with proper dependency arrays
- Animation performance:
  - Use CSS transforms for animations (GPU accelerated)
  - Reduce motion for users with prefers-reduced-motion
  - Debounce scroll handlers
- Debouncing: 
  - Search inputs (300ms delay)
  - Filter inputs (200ms delay)
  - Scroll handlers (16ms - requestAnimationFrame)
- Virtual scrolling: Not required (max 50-100 items per list)
- Lighthouse targets: Performance >90, Accessibility >95, Best Practices >90, SEO >90

### Browser Support:
- Modern browsers: Chrome (last 2), Firefox (last 2), Safari (last 2), Edge (last 2)
- Mobile browsers: iOS Safari (last 2), Chrome Mobile (last 2)
- Graceful degradation: Core functionality works, animations may be reduced
- Polyfills: Included via Vite (handled automatically)

### Accessibility Standards:
- WCAG 2.1 Level AA compliance
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible indicators
- Color contrast ratios (4.5:1 for text)

### SEO Considerations:
- Unique meta titles and descriptions for each page
- Open Graph tags for social sharing
- Structured data (JSON-LD) for business information
- Semantic HTML structure
- Proper use of heading tags
- Clean, descriptive URLs
- Sitemap generation
- robots.txt file

## Assets & Resources

**Required Assets:**
- Logo: SVG format with "FitZone Pro" text + icon (dumbbell "Z" concept)
- Favicon: Multiple sizes (16x16, 32x32, 192x192, 512x512) in PNG/SVG
- Hero images: 3-4 unique images for different sections (home, about, services)
- Trainer photos: 6+ trainer photos (diverse, professional headshots)
- Class images: 8+ class images (one per class category)
- Facility images: 5+ images (cardio area, weights, yoga room, locker room, etc.)
- Gallery images: 12+ images across all categories
- Icons: React Icons library (react-icons) - Font Awesome, Material Design, or custom SVG icons

**Font Resources:**
- Primary: Inter (Google Fonts) - Modern, premium sans-serif
- Alternative Premium: Space Grotesk (Google Fonts) - Trendy, award-winning feel
- Body: Inter or Plus Jakarta Sans (Google Fonts) - Clean, readable
- Optional Accent: Playfair Display or Cormorant (serif for special sections)
- Load via `<link>` in `index.html` with `font-display: swap`
- Fallback fonts: System font stack (-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
- Font weights: Load 400, 500, 600, 700, 800 (premium typography scale)

**Third-party Integrations:**
- Google Maps: Embed iframe for contact page (no API key needed for basic embed)
- Analytics: Optional - Google Analytics or Plausible (privacy-friendly)
- Social Media: Links only (no embeds required)
- Forms: Client-side validation only (no backend integration)

## Development Workflow

**Project Setup:**
```bash
npm create vite@latest fitzone-pro -- --template react-ts
cd fitzone-pro
npm install
npm install react-router-dom framer-motion react-icons react-helmet-async sass
npm install -D @types/node
```

**Configuration Files:**
- `vite.config.ts`: Path aliases (`@` → `src`), SCSS support
- `tsconfig.json`: Strict mode, path mapping
- `package.json`: Scripts (dev, build, preview, lint)

**Development Steps:**
1. Set up folder structure (create all directories)
2. Configure path aliases and TypeScript
3. Create global styles (`variables.scss`, `global.scss`, `reset.css`)
4. Build base components: Layout → Header → Footer → Navigation → Button
5. Create section components: Hero → Features → Stats → Testimonials → CTA
6. Build page components: Home → About → Services → Trainers → Classes → Membership → Gallery → Contact → 404
7. Implement routing with React Router
8. Add animations (Framer Motion)
9. Add data (constants file with mock data)
10. Style all components (responsive design)
11. Test and optimize
12. Build for production

**Component Development Order:**
1. Layout components (Layout, Header, Footer, Navigation)
2. Common UI components (Button, Card variants, Modal, Loading)
3. Section components (Hero, Features, Stats, Testimonials, CTA)
4. Page components (Home, About, Services, Trainers, Classes, Membership, Gallery, Contact, 404)
5. Specialized components (ClassSchedule, TrainerFilter, GalleryFilter, ContactForm)

**Testing Checklist:**
- ✅ All pages render without errors
- ✅ Navigation works (desktop + mobile)
- ✅ Forms validate correctly
- ✅ Modals open/close properly
- ✅ Images load and are optimized
- ✅ Responsive on mobile (320px+), tablet (768px+), desktop (1024px+)
- ✅ Performance: Lighthouse score >90
- ✅ Accessibility: WCAG AA compliance (keyboard navigation, screen readers, color contrast)
- ✅ Cross-browser: Chrome, Firefox, Safari, Edge (latest 2 versions)
- ✅ User flows: Home → Membership, Services → Service Detail, Classes → Book Class

## Additional Considerations

**Error Handling:**
- 404 page for unknown routes
- Error boundaries for React components
- Graceful handling of missing images/data
- User-friendly error messages

**Progressive Enhancement:**
- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled
- Fallbacks for modern features

**Future Scalability:**
- Modular component structure allows easy addition of new pages
- TypeScript interfaces make it easy to extend data structures
- CSS variable system allows easy theme changes
- Component-based architecture supports feature additions
- Data structure: Easy to swap mock data for API calls later
- Styling: CSS variables allow theme switching if needed

## Key Implementation Notes

**Important Considerations:**
- All components should be functional (no class components)
- Use React Hooks exclusively (useState, useEffect, useContext, useMemo, useCallback)
- Error boundaries for page-level error handling
- Loading states: Use skeleton loaders or spinners for async operations
- Empty states: Friendly messages when lists are empty
- Form handling: Controlled components with validation
- SEO: React Helmet Async for meta tags on each page
- Smooth scrolling: Use CSS `scroll-behavior: smooth` or library (Lenis)
- Image placeholders: Use blur-up technique or skeleton while loading

**Build Output:**
- Production build: `npm run build` → `dist/` folder
- Preview build: `npm run preview` → Test production build locally
- Deployment: Static files can be hosted on any static host (Vercel, Netlify, GitHub Pages)

---


