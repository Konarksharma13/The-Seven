# The Seven

<!-- <div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="The Seven Banner" width="800" />

  *The official corporate portal for The Seven, Earth's mightiest heroes*
</div> -->

## 🌟 Overview

**The Seven | Vought International** is a stunning, interactive web portal showcasing Vought International's premier superhero team. Built with modern web technologies, this application delivers an immersive experience featuring Earth's most powerful heroes, their cinematic universe, and Vought's entertainment empire.

Experience the power, glory, and legacy of The Seven through dynamic animations, responsive design, and cutting-edge UI/UX that brings the world of superheroes to life.

## ✨ Features

### 🦸‍♂️ Hero Showcase
- **Interactive Character Profiles**: Detailed bios, powers, and backstories for each member of The Seven
- **Dynamic Animations**: Custom animations for each hero's abilities (laser eyes, super speed, invisibility, etc.)
- **Responsive Design**: Optimized viewing experience across all devices

### 🎢 Vought Land
- **Theme Park Preview**: Immersive showcase of Vought's premier entertainment destination
- **Interactive Elements**: Floating badges and parallax effects
- **Location Details**: Orlando, Florida - voted #1 Hero Park

### 🎬 Cinematic Universe
- **Movie Gallery**: Official films featuring The Seven
- **High Ratings**: Critically acclaimed superhero cinema
- **Genre Variety**: Action, biographical, inspirational, and adventure films

### 🎨 Design & UX
- **Custom Cursor**: Interactive mouse tracking with spring animations
- **Parallax Effects**: Smooth scrolling animations and depth layers
- **Vought Branding**: Authentic color scheme and typography
- **Loading Animation**: Engaging startup sequence with Vought Network initialization

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 with custom theme
- **Animations**: Motion (Framer Motion) for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **AI Integration**: Google Generative AI (Gemini) for potential future features
- **Backend**: Express.js server setup for API capabilities

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd the-seven
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional, for AI features):
   Create a `.env.local` file in the root directory:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Additional Scripts

- `npm run clean` - Remove build artifacts
- `npm run lint` - TypeScript type checking

## 📁 Project Structure

```
the-seven-_-vought-international/
├── index.html                 # Main HTML entry point
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
├── metadata.json             # App metadata
├── src/
│   ├── main.tsx              # React application entry point
│   ├── App.tsx               # Main application component
│   ├── index.css             # Global styles and Tailwind imports
│   └── components/           # React components
│       ├── Hero.tsx          # Landing section with parallax
│       ├── CharacterScroll.tsx # The Seven character showcase
│       ├── ThemeParks.tsx    # Vought Land information
│       ├── Movies.tsx        # Cinematic universe gallery
│       ├── Navbar.tsx        # Navigation component
│       └── Footer.tsx        # Site footer
└── README.md                 # This file
```

## 🎯 Key Components

### App.tsx
The main application orchestrates the entire experience:
- Loading screen with Vought Network initialization
- Custom cursor tracking with spring physics
- Section navigation and smooth scrolling

### CharacterScroll.tsx
Features all seven heroes with:
- Horizontal scrolling interface
- Individual power demonstrations
- Detailed character information cards

### Hero.tsx
Immersive landing section featuring:
- Parallax background with Vought HQ imagery
- Mouse-responsive animations
- Call-to-action elements

## 🎨 Design System

### Colors
- **Vought Blue** (`#0a192f`): Primary brand color
- **Vought Gold** (`#d4af37`): Accent and highlight color
- **Vought Red** (`#8b0000`): Secondary accent

### Typography
- **Display Font**: Outfit (headings)
- **Body Font**: Inter (content)

### Animations
- Spring-based physics for natural movement
- Scroll-triggered animations
- Hover effects and micro-interactions

## 🔧 Customization

### Adding New Heroes
Edit `src/components/CharacterScroll.tsx`:
```typescript
const characters = [
  // Add new character object with name, power, description, image, color, animation
];
```

### Modifying Theme
Update `src/index.css` theme variables:
```css
@theme {
  --color-vought-gold: #your-color;
  --color-vought-blue: #your-color;
}
```

### AI Integration
The project includes Google Gemini AI setup. To enable AI features:
1. Obtain a Gemini API key
2. Add it to `.env.local`
3. Implement AI-powered components as needed

## 🌐 Deployment

### Vite Build
The project is configured for static site generation:
```bash
npm run build
```
Deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### Environment Variables
For production deployment, ensure `GEMINI_API_KEY` is set in your hosting platform's environment variables if using AI features.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary to Vought International. All rights reserved.

## ⚠️ Disclaimer

This is a fan-made project inspired by *The Boys* universe created by Garth Ennis and Darick Robertson. All character names, images, and references are the intellectual property of their respective owners. This project is for educational and entertainment purposes only.

---

<div align="center">
  <p><strong>Built with ❤️ for the superhero community</strong></p>
  <p><em>"The Seven: Protecting the world, one hero at a time."</em></p>
</div>
