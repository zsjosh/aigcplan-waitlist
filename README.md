# AIGC Plan Waitlist

A modern, interactive waitlist application built with Next.js, featuring beautiful UI, email notifications, and dynamic background effects.

## Features

### Modern Design
- Elegant form design with smooth transitions
- Dynamic background effects with shooting stars and floating particles
- Theme switching between light and dark modes
- Responsive layout for all devices

### Interactive Elements
- Real-time form validation
- Smooth animations and transitions
- Dynamic background effects that adapt to the current theme
- Theme toggle with persistent preference

### Email Collection
- Secure email storage with Prisma and PostgreSQL
- Optional nickname collection
- Welcome email notifications via Resend
- Email status tracking

### Tech Stack
- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion
- **Backend**: PostgreSQL, Prisma
- **Email**: Resend
- **Deployment**: Vercel

### UI Components
- **Form Design**: Elegant input fields with validation
- **Animations**: Smooth transitions and hover effects
- **Background Effects**: 
  - Dynamic shooting stars in dark mode
  - Floating particles in both themes
  - Gradient orbs with smooth animations
  - Grid patterns that adapt to the theme
- **Theme Switching**: 
  - Light mode with subtle gradients
  - Dark mode with enhanced visual effects
  - Persistent theme preference

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Resend account for email functionality

### Environment Variables
Create a `.env` file with the following variables:
```env
DATABASE_URL="postgresql://..."
RESEND_API_KEY="re_..."
REPLY_TO_EMAIL="your-email@example.com"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT
