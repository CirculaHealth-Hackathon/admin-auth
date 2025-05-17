# Circula Admin Web App

This is the admin web application for Circula, designed to manage and oversee operations related to blood order requests and other administrative tasks.

## Overview

The Circula Admin Web App provides a centralized platform for administrators to:
- Create and manage their admin accounts.
- Sign in securely.
- View and manage incoming blood order requests from various hospitals and organizations.
- (Future functionality) Track the status of orders, manage inventory, and communicate with stakeholders.

## Tech Stack

This application is built using a modern web technology stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **AI Functionality**: [Genkit](https://firebase.google.com/docs/genkit) (for potential future AI-powered features)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Firebase Setup

1.  Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2.  Add a Web app to your Firebase project.
3.  Copy the Firebase configuration object provided.
4.  Update the Firebase configuration in `src/lib/firebase/config.ts` with your project's credentials.
5.  Enable Email/Password sign-in method in Firebase Authentication (and any other social providers you intend to use).

### Installation & Running Locally

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:3000` or `http://localhost:9002` (as per your current `package.json`).

## Project Structure

-   `src/app/`: Contains the Next.js App Router pages and layouts.
-   `src/components/`: Reusable UI components, including ShadCN UI components and custom auth/dashboard components.
-   `src/lib/`: Utility functions, schemas, Firebase configuration, and type definitions.
-   `src/ai/`: (If using Genkit) Contains AI-related flows and configurations.
-   `public/`: Static assets like images.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `next.config.ts`: Next.js configuration.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a Next.js production server.
-   `npm run lint`: Lints the project files.
-   `npm run typecheck`: Checks TypeScript types.
-   `npm run genkit:dev`: Starts the Genkit development server (if AI features are implemented).

## Contributing

(Details on how to contribute to the project, if applicable)

## License

(Specify the license for your project, e.g., MIT)
