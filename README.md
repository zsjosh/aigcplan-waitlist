# AIGC Plan Waitlist

A modern waitlist website built with Next.js, Prisma, and PostgreSQL. Features a beautiful UI with animations and email notifications.

## Features

- Modern, responsive design with animations
- Email collection with optional nickname
- Welcome email notifications using Resend
- PostgreSQL database with Prisma ORM
- Real-time form validation and feedback
- Beautiful UI with gradient effects and animations

## Tech Stack

- **Framework**: Next.js 14
- **Database**: PostgreSQL (via Neon)
- **ORM**: Prisma
- **Email Service**: Resend
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Resend account for email service

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL='your_postgresql_connection_string'

# Email configuration
RESEND_API_KEY='your_resend_api_key'
REPLY_TO_EMAIL='your_reply_email'
NEXT_PUBLIC_APP_URL='your_app_url'
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zsjosh/aigcplan-waitlist.git
cd aigcplan-waitlist
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the following environment variables in Vercel:
   - `DATABASE_URL`
   - `RESEND_API_KEY`
   - `REPLY_TO_EMAIL`
   - `NEXT_PUBLIC_APP_URL`

## Features in Detail

### Email Collection
- Users can submit their email address
- Optional nickname field for personalization
- Real-time validation and feedback
- Duplicate email prevention

### Welcome Email
- Automated welcome email using Resend
- Personalized greeting with nickname
- Professional email template
- Reply-to functionality for user communication

### Database
- PostgreSQL database for reliable data storage
- Prisma ORM for type-safe database operations
- Efficient schema design for waitlist entries

### UI/UX
- Modern gradient background with animations
- Responsive design for all devices
- Loading states and error handling
- Beautiful form design with focus states
- Animated feedback messages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
