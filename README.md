# Initial Next.js Project

A basic Next.js 15 app router project with pre-built template components.

While currently presented as a professionally prepared template, I plan to commit additional features such as authentication, database integration, i18n, etc.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/initial-next-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd initial-next-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run the following command:
```bash
npm run dev
```
or
```bash
yarn dev
```
Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

### Building for Production

To build the project for production, use the following command:
```bash
npm run build
```
or
```bash
yarn build
```
This will create an optimized production build in the `.next` directory.

### Deployment

You can deploy the project to any hosting service that supports Node.js. For example, you can use Vercel, which is the recommended platform for Next.js applications.

## Project Structure

The project structure is as follows after set up:

```
.
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── template.tsx
│   ├── constants/
│   ├── global-styles/
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Implemented Features

- Automatic dark/light theme (adjusted based on the OS) and globally available dark and light color themes
- Responsive navigation bar that collapses into a hamburger menu on mobile sizes and equally responsive footer
- Scalable and flexible social media bar, utilizing the `react-icons` library
- HTML element selectors restructured according to design principles
- Pre-designed login and signup pages: Auth and DB is not ready, going to be implemented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
