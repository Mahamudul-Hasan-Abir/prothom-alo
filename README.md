# Prothom Alo Front Page Clone

A modern, responsive web application that replicates the front page of Prothom Alo, one of Bangladesh's leading Bengali newspapers. Built with Next.js 14 and TypeScript, this project showcases a professional news website layout with responsive design and optimized performance.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional newspaper layout with proper typography
- **Image Optimization**: Next.js Image component for optimized image loading
- **Grid Layout**: CSS Grid system for flexible content arrangement
- **Component-Based Architecture**: Modular components for maintainable code
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📱 Responsive Sections

### Desktop Layout
- **Hero Section**: Main headline with featured image
- **Grid Layout**: 7:5 column ratio for main content and sidebar
- **Navigation**: Desktop-optimized navigation menu
- **Footer**: Complete footer with social links and app store badges

### Mobile Layout
- **Phone Sections**: Specialized mobile-optimized components
- **Touch-Friendly**: Optimized for touch interactions
- **Stacked Layout**: Content stacks vertically for better mobile experience

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Images**: Optimized PNG/AVIF formats
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── single-page/       # Article detail page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── Container/         # Layout container
│   ├── Footer/           # Footer components
│   ├── Navbar/           # Navigation components
│   └── ui/               # Base UI components
├── Sections/             # Page sections
├── Phone/                # Mobile-specific components
├── widgets/              # Reusable widgets
└── hooks/                # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prothom-alo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📄 Pages

### Home Page (`/`)
- Main newspaper front page layout
- Responsive grid system
- Featured articles and headlines
- Sidebar with additional news

### Single Page (`/single-page`)
- Article detail page
- 7:5 grid layout on desktop
- Full-width layout on mobile
- Optimized image display

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0673e6` (Prothom Alo brand color)
- **Text Colors**: Various grays for hierarchy
- **Accent Colors**: Red for highlights and borders

### Typography
- **Headlines**: Bold, large fonts for impact
- **Body Text**: Readable font sizes and line heights
- **Bengali Text**: Proper font support for Bengali content

### Layout
- **Grid System**: 12-column grid for flexible layouts
- **Spacing**: Consistent padding and margins
- **Breakpoints**: Mobile-first responsive design

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/Sections/`
2. Import and use in the main page
3. Follow the existing component patterns

### Modifying Styles
- Use Tailwind CSS classes for styling
- Follow the established design system
- Test on multiple screen sizes

### Adding Images
1. Place images in `public/assets/frontpageimages/`
2. Import and use with Next.js Image component
3. Optimize images for web use

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment option
- **Self-hosted**: Build and serve static files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes and is a clone of Prothom Alo's front page design. All rights belong to their respective owners.

## 🙏 Acknowledgments

- **Prothom Alo**: Original newspaper design inspiration
- **Next.js Team**: Amazing React framework
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel**: Deployment platform

## 📞 Contact

For questions or support, please open an issue in the repository.

---

**Note**: This is a demonstration project showcasing modern web development techniques. The design and content are inspired by Prothom Alo newspaper but are not affiliated with the original publication.
