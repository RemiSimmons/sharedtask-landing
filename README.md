# SharedTask.ai Landing Page

A modern, engaging landing page for SharedTask.ai - a group activity organization tool designed to eliminate the chaos of group texts and spreadsheets.

## 🎯 Overview

This landing page is designed for ages 30-80 with a focus on simplicity, trustworthiness, and accessibility. It features a warm, friendly design with large readable fonts, high contrast, and generous whitespace.

## ✨ Features

### Design Highlights
- **Warm & Approachable**: Soft color palette with primary blue (#4A90E2) and warm accent (#F5A623)
- **Accessibility First**: 
  - Minimum 18px body text
  - High contrast ratios (4.5:1 minimum)
  - Semantic HTML with proper ARIA labels
  - Keyboard navigation support
  - Focus states visible on all interactive elements
- **Mobile-First Responsive**: Works beautifully on all screen sizes
- **Smooth Animations**: Subtle, non-distracting animations that enhance UX

### Page Sections

#### Landing Page (/)
1. **Hero Section** - Eye-catching split-screen showing chaos vs. calm
2. **Pain Points** - Relatable problems with engaging card layouts
3. **How It Works** - Simple 3-step timeline with visual icons
4. **Interactive Quiz** - 5-question quiz to recommend the right plan
5. **Trust Section** - Founder story, social proof, and use cases
6. **Pricing** - 3 clear tiers (Free, Basic, Pro)
7. **Final CTA** - Compelling call-to-action with reassurance
8. **Footer** - Simple navigation and branding

#### Additional Pages
- **/about** - Company story and mission
- **/contact** - Contact form (forwards to support@sharedtask.ai)
- **/privacy** - Privacy policy
- **/terms** - Terms of service

### Interactive Quiz
- 5 questions about event organization habits
- Smart scoring system (0-15 points)
- Personalized tier recommendations:
  - **Free Tier**: 0-7 points (casual organizers)
  - **Basic Tier**: 8-11 points (regular hosts)
  - **Pro Tier**: 12+ points (power organizers)
- Confetti animation on results
- Progress tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
SharedTask Landing Page/
├── app/
│   ├── layout.jsx             # Root layout with metadata
│   ├── page.jsx               # Main landing page
│   ├── globals.css            # Global styles and animations
│   ├── about/
│   │   └── page.jsx           # About page
│   ├── contact/
│   │   └── page.jsx           # Contact form page
│   ├── privacy/
│   │   └── page.jsx           # Privacy policy
│   ├── terms/
│   │   └── page.jsx           # Terms of service
│   └── api/
│       └── contact/
│           └── route.js       # Contact form API endpoint
├── components/
│   ├── LandingPage.jsx        # Main landing page with all sections
│   ├── QuizSection.jsx        # Interactive quiz component
│   └── PricingCard.jsx        # Reusable pricing card component
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#4A90E2` - Main brand color
- **Warm Accent**: `#F5A623` - Secondary highlights
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Body Text**: 18px minimum
- **Headings**: 
  - H1: text-5xl to text-7xl
  - H2: text-4xl to text-5xl
  - H3: text-2xl to text-3xl

### Spacing
- Generous whitespace throughout
- Section padding: py-20 (5rem)
- Consistent gap patterns

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of header, main, section, footer tags
- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard support
- **Focus Indicators**: Visible focus states on all interactive elements
- **High Contrast**: Meets WCAG AA standards (4.5:1 minimum)
- **Tap Targets**: Minimum 44px height for all buttons and links
- **Alt Text**: All images have descriptive alt text (ready for implementation)
- **Screen Reader Friendly**: Properly structured content hierarchy

## 🎬 Animations

All animations are subtle and purposeful:
- **Fade In**: Sections animate into view on scroll
- **Hover Effects**: Cards lift slightly on hover
- **Button Interactions**: Subtle scale and shadow effects
- **Quiz Transitions**: Smooth sliding between questions
- **Results Celebration**: Confetti animation on quiz completion

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',  // Change primary color
      accent: '#F5A623',   // Change accent color
    },
  },
}
```

### Updating Content
All content is in `components/LandingPage.jsx` and `components/QuizSection.jsx` for easy editing.

### Adding Video
Replace the video placeholder in the "How It Works" section with your YouTube/Vimeo embed:
```jsx
<iframe 
  src="YOUR_VIDEO_URL" 
  className="w-full h-full rounded-3xl"
  allowFullScreen
/>
```

## 📊 Quiz Scoring Logic

The quiz calculates a score based on user answers:
- **Question 1 (Events per year)**: 1-3 points
- **Question 2 (Multiple events)**: 1-3 points
- **Question 3 (Group size)**: 1-3 points
- **Question 4 (Planning time)**: 1-3 points
- **Question 5 (Event types)**: 1-3 points

**Total Score: 5-15 points**
- 0-7: Free Tier recommended
- 8-11: Basic Tier recommended
- 12+: Pro Tier recommended

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary and confidential.

## 📧 Contact Form

The contact form at `/contact` is set up to forward messages to **support@sharedtask.ai**.

### Setting Up Email Integration

The contact form API endpoint is located at `app/api/contact/route.js`. Currently, it logs submissions to the console. To enable actual email forwarding, you'll need to integrate an email service:

**Recommended Options:**
1. **Resend** (Recommended) - Simple, developer-friendly
   ```bash
   npm install resend
   ```
   Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

2. **SendGrid** - Reliable, established service
3. **AWS SES** - Cost-effective for high volume
4. **Postmark** - Great for transactional emails

Uncomment and configure the email sending code in the API route once you choose a provider.

## 🤝 Support

For questions or support:
- **Email:** support@sharedtask.ai
- **Legal:** legal@sharedtask.ai
- **Contact Form:** https://sharedtask.ai/contact

---

Built with ❤️ by the SharedTask team

