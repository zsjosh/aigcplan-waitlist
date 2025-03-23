# AIGC Plan Waitlist

A modern, responsive waitlist website built with Next.js and PostgreSQL. This project allows users to join a waitlist by submitting their email address, with a clean and intuitive user interface.

## Features

- 🎨 Modern and responsive design with Tailwind CSS
- ✨ Real-time form validation and feedback
- 🔄 Duplicate email detection
- 💾 PostgreSQL database integration for reliable data storage
- 🚀 Fast and efficient API endpoints
- 📱 Mobile-friendly interface
- 🌙 Dark mode support
- 🔒 Secure email validation

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your PostgreSQL database and update the `.env` file with your database URL
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your_postgresql_database_url"
```

## API Endpoints

### POST /api/waitlist

Submit an email to join the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
- Success (201):
  ```json
  {
    "message": "Successfully joined waitlist",
    "entry": {
      "id": 1,
      "email": "user@example.com",
      "createdAt": "2024-03-23T12:00:00.000Z"
    }
  }
  ```
- Error (400/500):
  ```json
  {
    "message": "Error message"
  }
  ```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
