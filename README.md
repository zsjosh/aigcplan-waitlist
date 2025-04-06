# AIGC Plan Waitlist

A modern, interactive waitlist website built with Next.js, Prisma, and PostgreSQL. Features a beautiful UI with dynamic animations and email notifications.

## Features

- 🎨 **Modern Design**
  - Beautiful gradient text effects with hover animations
  - Dynamic background with shooting stars and floating particles
  - Smooth transitions and interactive elements
  - Responsive layout for all devices

- ✉️ **Email Collection**
  - Secure email storage in PostgreSQL database
  - Real-time form validation
  - Optional nickname collection
  - Duplicate email prevention

- 📧 **Welcome Email**
  - Automatic welcome email upon signup
  - Professional email template design
  - Reply-to functionality for user communication
  - Error handling and logging

- 🎭 **Interactive UI**
  - Gradient text with hover effects
  - Animated background elements
  - Smooth form transitions
  - Responsive feedback messages

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Email for email templates

- **Backend**
  - PostgreSQL database
  - Prisma ORM
  - Resend for email delivery
  - Vercel for deployment

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

## Features in Detail

### Modern Design
- Gradient text with hover effects that create a glowing animation
- Dynamic background with shooting stars and floating particles
- Smooth transitions and interactive elements
- Responsive layout that works on all devices

### Email Collection
- Secure storage of email addresses in PostgreSQL
- Real-time form validation with visual feedback
- Optional nickname collection for personalization
- Duplicate email prevention with user feedback

### Welcome Email
- Automatic welcome email sent upon successful signup
- Professional email template with gradient design
- Reply-to functionality for user communication
- Comprehensive error handling and logging

### Interactive UI
- Gradient text components with hover animations
- Animated background elements (shooting stars, particles)
- Smooth form transitions and feedback
- Responsive design for all screen sizes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
