# AIGC Plan Waitlist

A modern, interactive waitlist website built with Next.js, Prisma, and PostgreSQL. Features a beautiful UI with dynamic animations and email notifications.

## Features

- 🎨 **Modern Design**
  - Elegant form design with balanced proportions
  - Dynamic background with shooting stars effect
  - Smooth hover animations and transitions
  - Responsive layout for all devices

- ✨ **Interactive Elements**
  - Subtle gradient text effects
  - Animated background particles
  - Smooth form transitions
  - Responsive feedback messages

- ✉️ **Email Collection**
  - Secure email storage in PostgreSQL database
  - Optional nickname collection
  - Real-time form validation
  - Duplicate email prevention

- 📧 **Welcome Email**
  - Automatic welcome email upon signup
  - Professional email template design
  - Reply-to functionality
  - Error handling and logging

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Email for templates

- **Backend**
  - PostgreSQL database
  - Prisma ORM
  - Resend for email delivery
  - Vercel for deployment

## UI Components

### Form Design
- Carefully balanced input field proportions
- Consistent padding and rounded corners
- Smooth hover and focus states
- Elegant button design with gradient effects

### Animations
- Shooting stars across the viewport
- Floating particles in the background
- Smooth hover transitions
- Loading and success states

### Responsive Design
- Mobile-first approach
- Flexible layout system
- Optimized for all screen sizes
- Consistent spacing and typography

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- Resend account for email functionality

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/waitlist"
RESEND_API_KEY="your_resend_api_key"
REPLY_TO_EMAIL="your_reply_email@example.com"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aigcplan-waitlist.git
   cd aigcplan-waitlist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
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
3. Add the environment variables in Vercel's project settings
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
