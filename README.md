# Andrea Fazio - CV Portfolio

A modern, responsive CV portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design System

### Colors
- **Background**: `#0E0E0E` (Dark background for high contrast)
- **Primary**: `#00FF85` (Bright green accent)
- **Primary Dark**: `#00CC68` (Dark green for hover/focus)
- **Text Primary**: `#FFFFFF` (White text)
- **Text Secondary**: `#B3B3B3` (Gray text)
- **Divider/Borders**: `#1C1C1C` (Dark gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 700 (Bold)
- **Spacing**: Generous spacing for readability

### Layout
- **Desktop**: Max-width 1200px, 12-column grid, 24px gutters
- **Mobile**: Stack vertical, 20px padding, 48px section spacing

## 🚀 Features

- ✅ Responsive design (Desktop 1440px, Mobile 390px)
- ✅ Dark theme with green accent colors
- ✅ Modern hero section with CTA buttons
- ✅ Skills grid with hover effects
- ✅ Experience timeline
- ✅ Featured projects with tech stack
- ✅ Contact section with social links
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ Tailwind CSS styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio_v2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Sections

1. **Hero Section**: Name, title, description, and CTA buttons
2. **Skills**: Grid of technical skills with icons
3. **Experience**: Timeline of professional experience
4. **Projects**: Featured projects with tech stack
5. **Contact**: Social links and contact information

## 🎯 Customization

### Colors
Update the color palette in `tailwind.config.js` and `src/app/globals.css`.

### Content
Modify the content in `src/app/page.tsx`:
- Update personal information in the hero section
- Add/remove skills in the `skills` array
- Update experience in the `experiences` array
- Modify projects in the `projects` array
- Update contact information

### Styling
All styling is done with Tailwind CSS classes. The design system is defined in:
- `src/app/globals.css` - CSS variables and custom styles
- `tailwind.config.js` - Tailwind configuration and custom colors

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 390px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## 🚀 Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
