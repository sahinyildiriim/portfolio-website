# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and Tailwind CSS. Features stunning 3D animations, smooth transitions, and a fully responsive design.

## 🚀 Features

- **3D Graphics & Animations**: Interactive 3D models powered by Three.js and React Three Fiber
- **Modern UI/UX**: Clean and professional design with Framer Motion animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Contact Form**: Integrated email functionality using EmailJS
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Social Media Integration**: LinkedIn and GitHub profile links in navbar

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Additional Libraries**:
  - React Vertical Timeline Component
  - React Parallax Tilt
  - Maath (for math utilities)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Update your personal information:
   - Edit `src/constants/index.js` to add your projects, experience, and education
   - Update social media links in `src/components/Navbar.jsx`

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
│   ├── desktop_pc/      # 3D model assets
│   └── planet/          # 3D model assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── canvas/      # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/       # Static data and configurations
│   ├── hoc/             # Higher-order components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html
├── package.json
├── tailwind.config.cjs
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.js` to customize:

- Navigation links
- Services and skills
- Technologies
- Work experience
- Education
- Projects/Portfolio items

### Update Social Links

Edit `src/components/Navbar.jsx` to update your LinkedIn and GitHub URLs.

### Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.cjs`
- Component-specific styles: `src/styles.js`

## 📧 Contact Form Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials and add them to `.env` file

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 📝 License

This project is open source and available under the MIT License.

## 💎 3D Assets & Credits

This project makes use of the following 3D assets licensed under Creative Commons Attribution 4.0 International (CC BY 4.0):

**Gaming Desktop PC** by Yolala1232

- Source: [Sketchfab - Gaming Desktop PC](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)
- License: CC-BY-4.0

## 👤 Author

**Şahin Yıldırım**

- LinkedIn: [muhammetsahinyildirim](https://www.linkedin.com/in/muhammetsahinyildirim)
- GitHub: [@sahinyildiriim](https://github.com/sahinyildiriim)

## 🙏 Acknowledgments

- 3D models and assets from the community
- Inspired by modern portfolio designs
- Built with guidance from JavaScript Mastery

---

⭐ If you found this project helpful, please give it a star!
