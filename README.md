# AIGC Plan Waitlist

A modern waitlist application built with Next.js, Prisma, and PostgreSQL. Features a beautiful UI with dark/light mode support, email notifications, and real-time form validation.

## Features

- **Modern Design**
  - Clean and elegant UI with smooth animations
  - Dark and light mode support
  - Responsive layout for all devices
  - Beautiful gradient effects and dynamic backgrounds

- **Interactive Elements**
  - Real-time form validation
  - Smooth transitions and hover effects
  - Dynamic background animations
  - Theme toggle button

- **Email Collection**
  - Secure email storage
  - Optional nickname collection
  - Duplicate email prevention
  - Real-time status feedback

- **Welcome Emails**
  - Automated welcome emails
  - Customizable email templates
  - Email status tracking
  - Error handling and logging

## Tech Stack

- **Frontend**
  - Next.js 14
  - Tailwind CSS
  - Framer Motion
  - React Context API

- **Backend**
  - PostgreSQL
  - Prisma ORM
  - Resend (Email Service)

- **Deployment**
  - Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Resend API key

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/waitlist"
RESEND_API_KEY="your_resend_api_key"
REPLY_TO_EMAIL="your_reply_to_email"
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
3. Add environment variables in Vercel project settings
4. Deploy!

## Features in Detail

### UI Components

- **Form Design**
  - Clean and modern input fields
  - Smooth hover and focus states
  - Real-time validation feedback
  - Accessible form controls

- **Animations**
  - Smooth page transitions
  - Dynamic background effects
  - Hover animations
  - Loading states

- **Theme Support**
  - Dark and light mode
  - Theme persistence using localStorage
  - Smooth theme transitions
  - Adaptive color schemes

- **Responsive Design**
  - Mobile-first approach
  - Flexible layouts
  - Adaptive typography
  - Touch-friendly interactions

### Email System

- **Welcome Emails**
  - Personalized greeting
  - Waitlist status information
  - Reply-to functionality
  - Error handling

- **Database Integration**
  - Secure data storage
  - Email validation
  - Status tracking
  - Error logging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
